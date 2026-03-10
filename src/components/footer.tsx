import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Development", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "IT Consulting", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  Company: [
    { label: "About Rovex", href: "#about" },
    { label: "How We Work", href: "#process" },
    { label: "Our Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  Contact: [
    { label: "hello@rovex.ro", href: "mailto:hello@rovex.ro" },
    { label: "Get a Quote", href: "#contact" },
    { label: "Support", href: "mailto:hello@rovex.ro" },
  ],
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/rovex", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@rovex.ro", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[980px] px-5">

        {/* Top CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border py-12 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3] mb-2">
              Let&apos;s build something great
            </p>
            <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-foreground">
              Ready to start your project?
            </h3>
          </div>
          <Link
            href="#contact"
            className="shrink-0 rounded-full bg-[#0071e3] px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#0055b3] transition-colors duration-200"
          >
            Talk to Our Team
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 py-14 lg:grid-cols-5">
          {/* Brand — spans 2 cols on lg */}
          <div className="col-span-2 flex flex-col gap-5">
            <div>
              <Link
                href="/"
                className="text-[22px] font-bold tracking-tight text-foreground"
              >
                Rovex
              </Link>
              <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-muted-foreground">
                A Romanian software company engineering web, mobile, and
                enterprise products for clients across Europe.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>Romania · Serving Europe & beyond</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-foreground/30 hover:bg-muted/40"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/50">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <p className="text-[12px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Rovex SRL. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-foreground/50">
            Built with care in Romania 🇷🇴
          </p>
        </div>

      </div>
    </footer>
  );
}

