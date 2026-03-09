import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "AI & Machine Learning", href: "#solutions" },
    { label: "Intelligent Automation", href: "#solutions" },
    { label: "Data Analytics", href: "#solutions" },
    { label: "Cloud Infrastructure", href: "#solutions" },
    { label: "Security & Compliance", href: "#solutions" },
  ],
  Company: [
    { label: "About Rovex", href: "#about" },
    { label: "How We Work", href: "#technology" },
    { label: "Case Studies", href: "#insights" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status Page", href: "#" },
    { label: "Security", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Contact: [
    { label: "hello@rovex.ro", href: "mailto:hello@rovex.ro" },
    { label: "Support", href: "#contact" },
    { label: "Sales", href: "#contact" },
    { label: "Partnerships", href: "#contact" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@rovex.ro", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#09090b]">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Main */}
        <div className="grid grid-cols-2 gap-10 py-16 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-[21px] font-bold tracking-tight text-white"
            >
              Rovex
            </Link>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#71717a]">
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
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#71717a] transition-colors hover:text-white hover:border-white/20"
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
              <h3 className="text-[12px] font-semibold text-white">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-[#71717a] transition-colors hover:text-white"
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
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-6 sm:flex-row">
            <p className="text-[12px] text-[#71717a]">
            Copyright &copy; {new Date().getFullYear()} Rovex SRL. All rights reserved.
          </p>
            <div className="flex items-center gap-5 text-[12px] text-[#71717a]">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
