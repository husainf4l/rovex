"use client";

import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";
import { GLSLHills } from "@/components/ui/glsl-hills";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#f0f6ff] dark:bg-[#05050a]">
      {/* Mountain hills — deepest layer */}
      <div className="absolute inset-0 z-0 opacity-80 dark:opacity-55">
        <GLSLHills speed={0.3} cameraZ={125} />
      </div>
      {/* Interactive particle canvas — above mountains */}
      <AntiGravityCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 pt-40">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="max-w-5xl text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02]">
            <span className="text-[#09090b] dark:text-white">Custom Software,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09090b] to-[#0071e3] dark:from-white dark:to-[#3b9eff]">Built to Last.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#09090b]/60 dark:text-white/60 sm:text-xl">
            We design and engineer <span className="font-medium text-[#09090b]/80 dark:text-white/80">web apps, mobile products, and enterprise systems</span> for companies that care about quality — delivered on time, built to scale.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-[#0071e3] px-8 py-6 text-base font-semibold text-white hover:bg-[#0055b3] shadow-lg shadow-[#0071e3]/30 transition-all duration-300 hover:shadow-[#0071e3]/50 hover:scale-[1.02]"
              )}
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "group rounded-full px-8 py-6 text-base font-medium text-[#09090b]/60 hover:text-[#09090b] dark:text-white/60 dark:hover:text-white border border-[#09090b]/15 hover:border-[#09090b]/30 dark:border-white/15 dark:hover:border-white/30 backdrop-blur-sm"
              )}
            >
              See Our Work
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
