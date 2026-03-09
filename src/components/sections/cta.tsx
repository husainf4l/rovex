import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="bg-[#09090b] py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[980px] px-5">
        <div className="overflow-hidden rounded-3xl bg-black border border-white/[0.07] px-8 py-20 text-center sm:px-16 lg:px-24">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            Get Started
          </p>
          <h2 className="text-[40px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
            Ready to build your
            <br />
            next digital product?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.6] text-white/60">
            Let’s talk about your project — no commitment required. Our team
            will get back to you within one business day.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="mailto:hello@rovex.ro"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-white px-8 text-[#1d1d1f] hover:bg-white/90"
              )}
            >
              Talk to Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#solutions"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "rounded-full px-8 text-white hover:bg-white/10"
              )}
            >
              View Case Studies
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/40">
            <span>Free initial consultation</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Response within 24 hours</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
