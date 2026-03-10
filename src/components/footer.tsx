import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

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
        {/* Main */}
        <div className="grid grid-cols-2 gap-10 py-16 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-[21px] font-bold tracking-tight text-foreground"
            >
              Rovex
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              Rovex is a Romanian software company building web, mobile, and
              enterprise applications for clients across Europe and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/30 text-muted-foreground transition-colors hover:text-foreground hover:border-border/80"
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
              <h3 className="text-[12px] font-semibold text-foreground">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
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
            Copyright &copy; {new Date().getFullYear()} Rovex SRL. All rights reserved.
          </p>
            <div className="flex items-center gap-5 text-[12px] text-muted-foreground">
              <Link href="mailto:hello@rovex.ro" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
