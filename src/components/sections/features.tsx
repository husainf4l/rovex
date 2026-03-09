import { CheckCircle2 } from "lucide-react";

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
    visual: (
      <div className="flex h-full w-full flex-col justify-between p-6">
        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
          <div className="h-2 w-2 rounded-full bg-[#34c759]" />
          Rovex — Project Lifecycle
        </div>
        <div className="flex flex-col gap-2">
          {[
            { phase: "Discovery & Scoping", status: "Done", color: "#34c759" },
            { phase: "UI/UX Design", status: "Done", color: "#34c759" },
            { phase: "Development Sprint 3", status: "Active", color: "#3b82f6" },
            { phase: "QA & Testing", status: "Up Next", color: "#71717a" },
            { phase: "Production Launch", status: "Planned", color: "#71717a" },
          ].map((item) => (
            <div
              key={item.phase}
              className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3 border border-white/[0.07]"
            >
              <p className="text-[13px] font-medium text-white">{item.phase}</p>
              <span className="text-[11px] font-semibold" style={{ color: item.color }}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            { label: "Week", val: "6/12" },
            { label: "Tasks Done", val: "84" },
            { label: "On Track", val: "✓" },
          ].map((s) => (
            <div key={s.label} className="flex-1 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3 text-center">
              <p className="text-[17px] font-bold text-white">{s.val}</p>
              <p className="text-[11px] text-[#71717a]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
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
    visual: (
      <div className="flex h-full w-full flex-col gap-4 p-6">
        <div className="text-[13px] font-medium text-white">Sprint Board — Week 6</div>
        <div className="grid grid-cols-3 gap-2 flex-1">
          {[
            { col: "In Progress", color: "#3b82f6", cards: ["Auth module", "Dashboard UI"] },
            { col: "In Review", color: "#f59e0b", cards: ["API integration"] },
            { col: "Done", color: "#34c759", cards: ["DB schema", "Login flow", "CI setup"] },
          ].map((col) => (
            <div key={col.col} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1 mb-1">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: col.color }} />
                <span className="text-[10px] font-semibold text-[#71717a]">{col.col}</span>
              </div>
              {col.cards.map((card) => (
                <div key={card} className="rounded-lg bg-white/[0.04] border border-white/[0.07] px-2.5 py-2">
                  <p className="text-[10px] text-white font-medium leading-tight">{card}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/[0.07] px-4 py-2.5">
          <span className="text-[12px] text-[#71717a]">Next demo</span>
          <span className="text-[12px] font-semibold text-[#3b82f6]">Friday, 3:00 PM</span>
        </div>
      </div>
    ),
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
    visual: (
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["TypeScript", "Jest", "ESLint", "Prettier"].map((b) => (
            <span key={b} className="rounded-full bg-white/[0.05] border border-white/[0.07] px-3 py-1 text-[12px] font-medium text-white">
              {b}
            </span>
          ))}
        </div>
        <div className="w-full max-w-xs rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 flex flex-col gap-2.5">
          {[
            { label: "Test Coverage", val: "94%", color: "#34c759" },
            { label: "Build Success Rate", val: "100%", color: "#3b82f6" },
            { label: "PRs Reviewed", val: "217", color: "#f59e0b" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-[13px] text-[#71717a]">{row.label}</span>
              <span className="text-[13px] font-semibold" style={{ color: row.color }}>{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    reverse: false,
  },
];

export function Features() {
  return (
    <section id="process" className="bg-[#111114] py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            How We Deliver
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[56px]">
            A process built for
            <br />
            great outcomes.
          </h2>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/30">
                  {feature.label}
                </p>
                <h3 className="whitespace-pre-line text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[40px]">
                  {feature.headline}
                </h3>
                <p className="text-[17px] leading-[1.6] text-[#71717a]">
                  {feature.description}
                </p>
                <ul className="mt-1 flex flex-col gap-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0071e3]" />
                      <span className="text-[15px] text-[#71717a]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="h-80 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1a1a1f] shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  {feature.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
