import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Lightbulb,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications — from fast marketing sites to complex SaaS platforms — built with modern frameworks and best practices.",
    accent: "#0071e3",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform iOS & Android apps that deliver polished user experiences and scale with your business.",
    accent: "#5856d6",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailor-made ERP, CRM, and internal tools — purpose-built for your workflows, not adapted from off-the-shelf solutions.",
    accent: "#34aadc",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP infrastructure, CI/CD pipelines, containerization, and monitoring — set up for speed and reliability.",
    accent: "#34c759",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Technology strategy, architecture reviews, digital transformation roadmaps, and hands-on tech leadership for your team.",
    accent: "#ff9500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User research, wireframing, prototyping, and design systems — turning complex problems into intuitive digital experiences.",
    accent: "#ff2d55",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#09090b] py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            Services
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[56px]">
            Everything you need
            <br />
            to build great software.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.6] text-[#71717a]">
            From first sketch to production deployment — we cover the full
            spectrum of software development so you can focus on growing your
            business.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group cursor-pointer rounded-2xl border border-white/[0.07] bg-[#111114] shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              >
                <CardContent className="flex flex-col gap-4 p-7">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${service.accent}18` }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: service.accent }}
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[17px] font-semibold leading-snug text-white">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-white/30 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-[15px] leading-[1.55] text-[#71717a]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
