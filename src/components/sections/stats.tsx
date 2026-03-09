const stats = [
  { value: "120+", label: "Projects Delivered", sub: "across 15+ industries" },
  { value: "8+", label: "Years of Experience", sub: "in software development" },
  { value: "40+", label: "Happy Clients", sub: "in Europe and worldwide" },
  { value: "98%", label: "Client Retention", sub: "long-term partnerships" },
];

export function Stats() {
  return (
    <section id="about" className="bg-[#09090b] py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[980px] px-5">
        <div className="mb-16 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            Track Record
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[56px]">
            Results built on trust.
          </h2>
        </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 bg-[#09090b] px-8 py-12 text-center"
            >
              <p className="text-[48px] font-extrabold leading-none tracking-[-0.03em] text-white sm:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[17px] font-semibold text-white">
                {stat.label}
              </p>
              <p className="text-[13px] text-[#71717a]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
