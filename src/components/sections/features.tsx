import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  {
    step: "01",
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
      <div className="relative flex h-full w-full flex-col justify-between p-7">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="h-2 w-2 rounded-full bg-[#34c759]" />
          <span className="text-[12px] font-semibold text-foreground/60 tracking-wide">
            Project Lifecycle
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { phase: "Discovery & Scoping", weeks: "Wk 1–2",  done: true,  active: false },
            { phase: "UI / UX Design",      weeks: "Wk 3–4",  done: true,  active: false },
            { phase: "Development",         weeks: "Wk 5–10", done: false, active: true  },
            { phase: "QA & Testing",        weeks: "Wk 11–12",done: false, active: false },
            { phase: "Production Launch",   weeks: "Wk 13",   done: false, active: false },
          ].map((item) => (
            <div
              key={item.phase}
              className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 border ${
                item.active
                  ? "bg-[#0071e3]/10 border-[#0071e3]/30"
                  : "bg-muted/30 border-border"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                    item.done
                      ? "bg-[#34c759]"
                      : item.active
                      ? "bg-[#0071e3]"
                      : "bg-foreground/20"
                  }`}
                />
                <span
                  className={`text-[12px] font-medium ${
                    item.active ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {item.phase}
                </span>
              </div>
              <span
                className={`text-[11px] font-semibold ${
                  item.active ? "text-[#0071e3]" : "text-foreground/30"
                }`}
              >
                {item.weeks}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          {[
            { label: "On Schedule", color: "#34c759" },
            { label: "In Progress", color: "#0071e3" },
            { label: "Upcoming",    color: "#a1a1aa" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 text-center rounded-lg bg-muted/30 border border-border py-2"
            >
              <div
                className="h-1.5 w-1.5 rounded-full mx-auto mb-1"
                style={{ background: s.color }}
              />
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    reverse: false,
  },
  {
    step: "02",
    label: "How We Work",
    headline: "You always know\nwhat's happening.",
    description:
      "Clear communication is not a nice-to-have — it's how we work. Weekly sprint reviews, async updates, and honest status reports keep you fully in control at every step.",
    bullets: [
      "Dedicated project manager and tech lead",
      "Weekly video demos of completed work",
      "Shared board with full task visibility",
      "Proactive escalation of risks and blockers",
    ],
    visual: (
      <div className="flex h-full w-full flex-col justify-between p-7">
        <span className="text-[12px] font-semibold text-foreground/60">
          Weekly Rhythm
        </span>
        <div className="flex flex-col gap-2">
          {[
            { day: "Mon", label: "Sprint Kickoff",      note: "Goals set, team aligned" },
            { day: "Wed", label: "Mid-Sprint Check-in", note: "Blockers cleared fast"   },
            { day: "Fri", label: "Demo & Review",       note: "You see real progress"   },
          ].map((item) => (
            <div
              key={item.day}
              className="flex items-start gap-3 rounded-lg bg-muted/30 border border-border px-3.5 py-3"
            >
              <span className="text-[11px] font-extrabold text-[#0071e3] w-8 shrink-0 mt-0.5">
                {item.day}
              </span>
              <div>
                <p className="text-[12px] font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-[#0071e3]/10 border border-[#0071e3]/20 px-4 py-3 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-[#0071e3]">
            Full transparency, every week
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-[#0071e3]" />
        </div>
      </div>
    ),
    reverse: true,
  },
  {
    step: "03",
    label: "Architecture",
    headline: "Code you can build\non for years.",
    description:
      "We write clean, documented, and tested code from day one — not technical debt you'll regret later. Every architecture decision is made with your long-term growth in mind.",
    bullets: [
      "Test coverage targets enforced in CI/CD",
      "Code reviews on every pull request",
      "Detailed technical documentation",
      "Designed for scale from the first line",
    ],
    visual: (
      <div className="flex h-full w-full flex-col justify-between p-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0071e3]/10 border border-[#0071e3]/20">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0071e3"
              strokeWidth="2.5"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="text-[12px] font-semibold text-foreground/60">
            Tech Stack
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "Docker",
            "AWS",
            "GitHub CI",
            "Terraform",
          ].map((b) => (
            <span
              key={b}
              className="rounded-full bg-muted/50 border border-border px-2.5 py-1 text-[11px] font-medium text-foreground/70"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {[
            { label: "Code Review",    val: "Every PR"      },
            { label: "CI/CD Pipeline", val: "Automated"     },
            { label: "Documentation",  val: "Inline + Docs" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg bg-muted/30 border border-border px-3.5 py-2.5"
            >
              <span className="text-[12px] text-muted-foreground">
                {row.label}
              </span>
              <span className="text-[12px] font-semibold text-foreground">
                {row.val}
              </span>
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
    <section
      id="process"
      className="bg-card py-28 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0071e3]">
            How We Deliver
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[60px]">
            A process built for
            <br />
            <span className="text-foreground/40">great outcomes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            Three pillars that turn complex projects into predictable,
            high-quality deliveries — every time.
          </p>

          {/* Step indicators */}
          <div className="mt-10 flex items-center justify-center flex-wrap gap-y-2">
            {features.map((f, i) => (
              <div key={f.step} className="flex items-center">
                <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
                  <span className="text-[11px] font-bold text-[#0071e3]">
                    {f.step}
                  </span>
                  <span className="text-[12px] font-medium text-foreground/60">
                    {f.label}
                  </span>
                </div>
                {i < features.length - 1 && (
                  <div className="w-8 h-px bg-border mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-28">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start gap-12 lg:flex-row lg:items-center ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-extrabold text-[#0071e3] bg-[#0071e3]/10 border border-[#0071e3]/20 rounded-full px-3 py-1">
                    {feature.step}
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/30">
                    {feature.label}
                  </span>
                </div>
                <h3 className="whitespace-pre-line text-[34px] font-extrabold leading-[1.07] tracking-[-0.03em] text-foreground sm:text-[42px]">
                  {feature.headline}
                </h3>
                <p className="text-[16px] leading-[1.65] text-muted-foreground max-w-md">
                  {feature.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0071e3]" />
                      <span className="text-[14px] text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div className="w-full flex-1 lg:max-w-[440px]">
                <div className="h-[340px] overflow-hidden rounded-2xl border border-border bg-background shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_32px_rgba(0,0,0,0.5)]">
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
