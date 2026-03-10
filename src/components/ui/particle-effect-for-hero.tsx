"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { MousePointer2, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

// --- Types ---

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;      // target cruising speed
  size: number;
  color: string;
  angle: number;      // current heading angle (radians)
  turnSpeed: number;  // how fast this particle turns
  phase: number;      // for gentle sine-wave steering
}

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
}

interface MouseState {
  x: number;
  y: number;
  isActive: boolean;
}

// --- Configuration Constants ---

const PARTICLE_DENSITY = 0.00007;
const BG_PARTICLE_DENSITY = 0.000025;
const MOUSE_RADIUS = 160;
const REPULSION_STRENGTH = 6;
const MIN_SPEED = 0.18;
const MAX_SPEED = 0.55;
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

// --- Helper ---

const randomRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// --- Canvas Component (named export so Hero can use it standalone) ---

export const AntiGravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const particlesRef = useRef<Particle[]>([]);
  const backgroundParticlesRef = useRef<BackgroundParticle[]>([]);
  const mouseRef = useRef<MouseState>({ x: -1000, y: -1000, isActive: false });
  const frameIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  // rAF handle used to coalesce rapid mousemove events into one update per frame.
  const mouseMoveRafRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.floor(width * height * PARTICLE_DENSITY);
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = randomRange(MIN_SPEED, MAX_SPEED);
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        speed,
        size: randomRange(1, 2.8),
        color: Math.random() > 0.6 ? "#0071e3" : Math.random() > 0.5 ? "#3b9eff" : "#60b0ff",
        angle,
        turnSpeed: randomRange(0.004, 0.014),  // gentle organic turning
        phase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = newParticles;

    const bgCount = Math.floor(width * height * BG_PARTICLE_DENSITY);
    const newBgParticles: BackgroundParticle[] = [];
    for (let i = 0; i < bgCount; i++) {
      newBgParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: randomRange(0.5, 1.5),
        alpha: randomRange(0.1, 0.4),
        phase: Math.random() * Math.PI * 2,
      });
    }
    backgroundParticlesRef.current = newBgParticles;
  }, []);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const delta = time - lastTimeRef.current;
    // Cap to TARGET_FPS — skip frame if too soon
    if (delta < FRAME_INTERVAL) {
      frameIdRef.current = requestAnimationFrame(animate);
      return;
    }
    lastTimeRef.current = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pulsating radial glow
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const pulseOpacity = Math.sin(time * 0.0008) * 0.035 + 0.085;
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      Math.max(canvas.width, canvas.height) * 0.7
    );
    gradient.addColorStop(0, `rgba(0, 113, 227, ${pulseOpacity})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Background particles (drifting stars) — blue tint
    const bgParticles = backgroundParticlesRef.current;
    for (let i = 0; i < bgParticles.length; i++) {
      const p = bgParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      const twinkle = Math.sin(time * 0.002 + p.phase) * 0.5 + 0.5;
      ctx.globalAlpha = p.alpha * (0.3 + 0.7 * twinkle);
      ctx.fillStyle = "#0071e3";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const W = canvas.width / (window.devicePixelRatio || 1);
    const H = canvas.height / (window.devicePixelRatio || 1);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // 1. Gentle organic steering — sine-wave turn over time
      p.angle += Math.sin(time * 0.0006 + p.phase) * p.turnSpeed;

      // 2. Accelerate toward current heading to maintain cruising speed
      const targetVx = Math.cos(p.angle) * p.speed;
      const targetVy = Math.sin(p.angle) * p.speed;
      p.vx += (targetVx - p.vx) * 0.04;
      p.vy += (targetVy - p.vy) * 0.04;

      // 3. Mouse repulsion
      if (mouse.isActive) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const radiusSq = MOUSE_RADIUS * MOUSE_RADIUS;
        if (distSq < radiusSq && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * REPULSION_STRENGTH;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          // Redirect heading away from mouse too
          p.angle = Math.atan2(p.vy, p.vx);
        }
      }

      // 4. Clamp speed so mouse pushes don't send particles flying
      const curSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const maxCur = p.speed * 5;
      if (curSpeed > maxCur) {
        p.vx = (p.vx / curSpeed) * maxCur;
        p.vy = (p.vy / curSpeed) * maxCur;
      }

      // 5. Move
      p.x += p.vx;
      p.y += p.vy;

      // 6. Wrap around edges (toroidal)
      if (p.x < -p.size) p.x = W + p.size;
      if (p.x > W + p.size) p.x = -p.size;
      if (p.y < -p.size) p.y = H + p.size;
      if (p.y > H + p.size) p.y = -p.size;

      // 7. Draw
      const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const opacity = Math.min(0.2 + (velocity / (p.speed * 5)) * 0.6, 0.85);
      // Decode color channel for rgba
      let r = 0, g = 113, b = 227;
      if (p.color === "#3b9eff") { r = 59; g = 158; b = 255; }
      else if (p.color === "#60b0ff") { r = 96; g = 176; b = 255; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      ctx.fill();
    }

    frameIdRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      initParticles(width, height);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  useEffect(() => {
    frameIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameIdRef.current);
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Capture coordinates synchronously (SyntheticEvent is pooled).
    const clientX = e.clientX;
    const clientY = e.clientY;
    // Coalesce all mousemove events that arrive within the same frame into
    // a single ref update — prevents stacking long tasks on the main thread.
    cancelAnimationFrame(mouseMoveRafRef.current);
    mouseMoveRafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        isActive: true,
      };
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(mouseMoveRafRef.current);
    mouseRef.current.isActive = false;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

// --- Scroll indicator ---

export const ScrollIndicator: React.FC = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#09090b]/30 dark:text-white/30 animate-pulse pointer-events-none z-20">
    <span className="text-[10px] uppercase tracking-[0.2em]">Interact</span>
    <MousePointer2 size={16} />
  </div>
);

// --- Standalone demo page (default export) ---

export default function ParticleHeroDemo() {
  return (
    <div className="relative w-full h-screen bg-[#05050a] overflow-hidden">
      <AntiGravityCanvas />

      {/* Rovex branding overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="inline-block">
            <span className="py-1 px-3 border border-white/20 rounded-full text-xs font-mono text-white/60 tracking-widest uppercase bg-white/5 backdrop-blur-sm">
              Software Development Studio · Bucharest, Romania
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter">
            Custom Software,
            <br />
            <span className="text-[#0071e3]">Built to Last.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed">
            Rovex designs and builds web applications, mobile apps, and enterprise
            systems — delivered on time, with clarity and craftsmanship.
          </p>

          <div className="pt-4 pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0071e3] text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 hover:bg-[#0055b3]"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
            >
              See Our Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
