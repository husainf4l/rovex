"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="group inline-block overflow-hidden h-[1.2em] text-[13px] leading-[1.2em]"
  >
    <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
      <span className="block h-[1.2em] text-foreground/50">{children}</span>
      <span className="block h-[1.2em] text-foreground">{children}</span>
    </span>
  </a>
);

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);

    if (isOpen) {
      setHeaderShapeClass("rounded-2xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`
          pointer-events-auto
          flex flex-col items-center
          px-7 py-3
          backdrop-blur-md
          border
          bg-white/80 border-black/[0.08] shadow-sm shadow-black/[0.06]
          dark:bg-[#111112]/80 dark:border-white/[0.10] dark:shadow-black/30
          w-full sm:w-auto sm:min-w-[760px]
          transition-[border-radius] duration-300 ease-in-out
          ${headerShapeClass}
        `}
      >
      {/* Main row */}
      <div className="flex w-full items-center justify-between gap-8 sm:gap-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-[16px] font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
        >
          Rovex
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="
              rounded-full px-4 py-1.5 text-[13px] font-semibold
              bg-[#09090b] text-white hover:bg-[#09090b]/80
              dark:bg-white dark:text-[#09090b] dark:hover:bg-white/90
              transition-colors duration-200
            "
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-8 w-8 items-center justify-center text-foreground/60 hover:text-foreground sm:hidden focus:outline-none transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`
          sm:hidden flex flex-col items-center w-full
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[400px] opacity-100 pt-4 pb-1" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col items-center gap-1 w-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl px-4 py-2.5 text-center text-[15px] text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-3 flex w-full flex-col gap-2">
          <div className="flex items-center justify-center gap-2 py-1">
            <ThemeToggle />
            <span className="text-[12px] text-foreground/40">Toggle theme</span>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
              w-full rounded-full py-2.5 text-center text-[14px] font-semibold
              bg-[#09090b] text-white hover:bg-[#09090b]/80
              dark:bg-white dark:text-[#09090b] dark:hover:bg-white/90
              transition-colors duration-200
            "
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
    </div>
  );
}
