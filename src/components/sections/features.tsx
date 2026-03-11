"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

/* ─── Scroll-triggered fade/slide wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  from = "left",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "bottom";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hidden =
    from === "right" ? "opacity-0 translate-x-10"
    : from === "bottom" ? "opacity-0 translate-y-8"
    : "opacity-0 -translate-x-10";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : hidden}`}
    >
      {children}
    </div>
  );
}

/* ─── Visual 1: cycling process steps ─── */
function ProcessVisual() {
  const steps = [
    { num: "01", phase: "Discovery & Scoping" },
    { num: "02", phase: "UI/UX Design" },
    { num: "03", phase: "Development & QA" },
    { num: "04", phase: "Launch & Support" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 1500);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 p-6">
      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`flex items-center gap-4 rounded-xl border px-4 py-3.5 transition-all duration-500 ${
            i === active
              ? "bg-[#0071e3]/10 border-[#0071e3]/40 scale-[1.02] shadow-sm"
              : "bg-muted/40 border-border"
          }`}
        >
          <span className={`text-[12px] font-bold transition-colors duration-500 ${i === active ? "text-[#0071e3]" : "text-foreground/30"}`}>
            {step.num}
          </span>
          <span className={`text-[14px] font-semibold transition-colors duration-500 ${i === active ? "text-foreground" : "text-muted-foreground"}`}>
            {step.phase}
          </span>
          {i === active && (
            <span className="ml-auto flex h-2 w-2 rounded-full bg-[#0071e3] animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Visual 2: messages appearing one by one ─── */
function CommunicationVisual() {
  const messages = [
    { day: "Mon", msg: "Sprint kickoff — goals aligned for the week" },
    { day: "Wed", msg: "Mid-sprint check-in — blockers resolved fast" },
    { day: "Fri", msg: "Demo & review — your feedback shapes what's next" },
  ];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= messages.length) return;
    const t = setTimeout(() => setShown((p) => p + 1), 1000);
    return () => clearTimeout(t);
  }, [shown, messages.length]);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 p-6">
      {messages.map((item, i) => (
        <div
          key={item.day}
          className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 transition-all duration-500 ${
            i < shown
              ? "opacity-100 translate-y-0 bg-muted/40 border-border"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <span className="text-[11px] font-bold text-[#0071e3] min-w-[28px] mt-0.5">{item.day}</span>
          <span className="text-[13px] text-muted-foreground leading-snug">{item.msg}</span>
        </div>
      ))}
      <div
        className={`rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/20 px-4 py-3 text-center transition-all duration-700 ${
          shown >= messages.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-[13px] font-semibold text-[#0071e3]">Full transparency, every single week.</span>
      </div>
    </div>
  );
}

/* ─── Visual 3: tech badges with hover pop ─── */
function ArchitectureVisual() {
  const badges = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "GitHub CI"];
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20 animate-pulse">
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {badges.map((b) => (
          <span
            key={b}
            onMouseEnter={() => setHovered(b)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-full border px-3 py-1 text-[12px] font-medium cursor-default select-none transition-all duration-200 ${
              hovered === b
                ? "bg-[#0071e3] border-[#0071e3] text-white scale-110 shadow-md"
                : "bg-muted/50 border-border text-foreground"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
      <p className="text-center text-[13px] leading-relaxed text-muted-foreground max-w-[220px]">
        Clean, documented, and tested code — built to scale from day one.
      </p>
    </div>
  );
}

/* ─── Feature data ─── */
const features = [
  {
    label: "Our Process",
    headline: "Discovery to launch,\nwe've got you covered.",
    description:
      "We take full ownership from the first discovery call to the final deployment — and beyond. Our cross-functional teams handle design, development, QA, and DevOps so nothing falls through the cracks.",
    bullets: [
      "Requirements discovery & technical scoping",
      "Agile sprints with weekly demos and reviews",
      "QA, testing & smooth production deployments",
      "Post-launch support and iterative improvements",
    ],
    Visual: ProcessVisual,
    reverse: false,
  },
  {
    label: "How We Work",
    headline: "You always know\nwhat's happening.",
    description:
      "Clear communication is not a nice-to-have — it's how we work. Weekly sprint reviews, async updates, shared project boards, and honest status reports keep you fully in control.",
    bullets: [
      "Dedicated project manager and tech lead",
      "Weekly video demos of completed work",
      "Shared board with full task visibility",
      "Proactive escalation of risks and blockers",
    ],
    Visual: CommunicationVisual,
    reverse: true,
  },
  {
    label: "Architecture",
    headline: "Code you can build\non for years.",
    description:
      "We write clean, documented, and tested code from day one — not technical debt you’ll regret later. Every architecture decision is made with your long-term growth in mind.",
    bullets: [
      "Test coverage targets enforced in CI/CD",
      "Code reviews on every pull request",
      "Detailed technical documentation",
      "Designed for scale from the first line",
    ],
    Visual: ArchitectureVisual,
    reverse: false,
  },
];

export function Features() {
  return (
    <section id="process" className="bg-card py-28 border-t border-border">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <FadeIn from="bottom">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
              How We Deliver
            </p>
            <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[56px]">
              A process built for
              <br />
              great outcomes.
            </h2>
          </div>
        </FadeIn>

        {/* Feature rows */}
        <div className="flex flex-col gap-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side */}
              <FadeIn from={feature.reverse ? "right" : "left"} delay={0}>
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
                    {feature.label}
                  </p>
                  <h3 className="whitespace-pre-line text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[40px]">
                    {feature.headline}
                  </h3>
                  <p className="text-[17px] leading-[1.6] text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-1 flex flex-col gap-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0071e3]" />
                        <span className="text-[15px] text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Visual card */}
              <FadeIn from={feature.reverse ? "left" : "right"} delay={150}>
                <div className="flex-1 w-full max-w-md lg:max-w-none">
                  <div className="h-80 overflow-hidden rounded-2xl border border-border bg-secondary shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(0,113,227,0.15)] dark:hover:shadow-[0_8px_40px_rgba(0,113,227,0.2)] hover:border-[#0071e3]/20 transition-all duration-500">
                    <feature.Visual />
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
