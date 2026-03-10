"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-xl border-b border-black/[0.07] dark:border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[980px] items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-[17px] font-bold tracking-tight text-foreground hover:text-foreground/70 transition-colors duration-200"
        >
          Rovex
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-normal text-foreground/50 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link
            href="#services"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "rounded-full text-[13px] text-foreground/50 hover:text-foreground"
            )}
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            className="rounded-full px-5 text-[13px] font-semibold bg-[#09090b] text-white hover:bg-[#09090b]/80 dark:bg-white dark:text-[#09090b] dark:hover:bg-white/90 transition-colors inline-flex h-8 items-center"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "lg:hidden text-foreground/80"
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-black/[0.07] dark:border-white/[0.07] bg-background backdrop-blur-xl"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left text-[17px] font-bold text-foreground">
                Rovex
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-3 py-3 text-[15px] font-normal text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-2 px-3">
                <ThemeToggle />
                <span className="text-[13px] text-foreground/40">
                  Toggle theme
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2 px-3">
                <Link
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="w-full justify-center text-[15px] inline-flex h-10 items-center rounded-full border border-foreground/15 text-foreground hover:bg-foreground/5 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full justify-center text-[15px] font-semibold inline-flex h-10 items-center rounded-full bg-[#09090b] text-white hover:bg-[#09090b]/80 dark:bg-white dark:text-[#09090b] dark:hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
