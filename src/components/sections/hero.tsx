import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Subtle depth glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 translate-y-1/4 rounded-full bg-blue-600/[0.07] blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 pt-40">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
              Software Development Studio &middot; Bucharest, Romania
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02]">
            <span className="text-foreground">Custom Software,</span>
            <br />
            <span className="gradient-text">Built to Last.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Rovex is a Romanian software company that designs and builds web
            applications, mobile apps, and enterprise systems — delivered on
            time, with clarity and craftsmanship.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]"
              )}
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "group rounded-full px-8 py-6 text-base font-medium text-muted-foreground hover:text-foreground"
              )}
            >
              See Our Work
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>50+ Projects Delivered</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>8+ Years of Experience</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span>EU-Based Team</span>
            </div>
          </div>
        </div>

        {/* Hero visual — abstract dashboard mockup */}
        <div className="relative mt-20 mx-auto max-w-5xl">
          {/* Outer glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent" />
          <div className="relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-1 shadow-2xl shadow-black/50">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <div className="mx-auto flex items-center gap-2 rounded-md bg-muted/50 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground font-mono">rovex.ro / dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-12 gap-3 p-4">
              {/* Sidebar */}
              <div className="col-span-2 flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-lg ${i === 0 ? "bg-primary/20 border border-primary/30" : "bg-muted/30"}`}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="col-span-7 flex flex-col gap-3">
                {/* Top stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Projects", value: "12", color: "text-blue-400" },
                    { label: "Team Members", value: "28", color: "text-violet-400" },
                    { label: "On-Time Rate", value: "96%", color: "text-green-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-muted/30 p-3">
                      <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 rounded-xl bg-muted/30 p-3 min-h-28">
                  <div className="text-[10px] text-muted-foreground mb-3">Sprint velocity (last 12 weeks)</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 65, 92, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/20"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="rounded-xl bg-muted/30 p-3">
                  <div className="text-[10px] text-muted-foreground mb-2">Recent Activity</div>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { event: "v2.4.0 deployed to production", time: "just now", dot: "bg-green-400" },
                      { event: "Sprint 6 review — 18 tasks completed", time: "2h ago", dot: "bg-blue-400" },
                      { event: "New project kickoff: FinTrack Mobile", time: "yesterday", dot: "bg-violet-400" },
                    ].map((item) => (
                      <div key={item.event} className="flex items-center gap-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${item.dot} shrink-0`} />
                        <span className="text-[10px] text-muted-foreground flex-1 truncate">{item.event}</span>
                        <span className="text-[9px] text-muted-foreground/50">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="col-span-3 flex flex-col gap-3">
                <div className="rounded-xl bg-muted/30 p-3">
                  <div className="text-[10px] text-muted-foreground mb-2">Project Health</div>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "E-Commerce App", pct: 98 },
                      { name: "CRM Platform", pct: 91 },
                      { name: "Logistics API", pct: 85 },
                    ].map((m) => (
                      <div key={m.name}>
                        <div className="flex justify-between text-[9px] mb-1">
                          <span className="text-muted-foreground">{m.name}</span>
                          <span className="text-primary font-mono">{m.pct}%</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-muted">
                          <div
                            className="h-1 rounded-full bg-primary"
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20 p-3 flex flex-col justify-end">
                  <div className="text-[10px] text-primary font-medium">Deployments This Month</div>
                  <div className="text-2xl font-bold text-foreground font-mono mt-1">38</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
