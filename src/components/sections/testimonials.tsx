import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Rovex built our entire e-commerce platform from scratch in just 4 months. The quality of their code and their communication throughout made the whole process remarkably smooth.",
    name: "Andrei Popescu",
    title: "CEO, ShopLoop Romania",
  },
  {
    quote:
      "We brought Rovex in to modernize our legacy reporting system. They delivered ahead of schedule and the new platform has transformed how our finance team works every day.",
    name: "Klaus Müller",
    title: "CTO, FinServ GmbH",
  },
  {
    quote:
      "Outstanding team. They understood our mobile app vision immediately and translated it into an iOS & Android product that our users absolutely love.",
    name: "Sophie Laurent",
    title: "Product Lead, MobiPay France",
  },
  {
    quote:
      "Rovex provided senior engineers that integrated seamlessly with our own team. Their technical depth and professionalism are exactly what you'd expect from a top-tier European partner.",
    name: "Mihai Ionescu",
    title: "VP Engineering, TechHub Cluj",
  },
  {
    quote:
      "We had a tight deadline and a complex integration challenge. Rovex not only met the deadline — they caught several issues in our existing architecture that we hadn't noticed.",
    name: "Jana Novotná",
    title: "Head of IT, Europay s.r.o.",
  },
  {
    quote:
      "Their UI/UX design work completely changed how we thought about our product. The redesign drove a 40% increase in user engagement within the first two months.",
    name: "Rafael Martínez",
    title: "Founder, Clerox Spain",
  },
];

export function Testimonials() {
  return (
    <section id="clients" className="bg-[#111114] py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[980px] px-5">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0071e3]">
            Client Stories
          </p>
          <h2 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[56px]">
            Trusted by teams
            <br />
            across Europe.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="rounded-2xl border border-white/[0.07] bg-[#1a1a1f] shadow-none"
            >
              <CardContent className="flex flex-col gap-5 p-7">
                {/* Opening quote mark */}
                <svg
                  width="24" height="18" viewBox="0 0 24 18" fill="none"
                  className="text-[#0071e3]"
                >
                  <path
                    d="M0 18V11.25C0 8.9 0.617 6.783 1.85 5.1 3.083 3.383 4.85 2.033 7.15 1.05L8.85 3.9C7.35 4.6 6.183 5.5 5.35 6.6 4.55 7.667 4.15 8.833 4.15 10.1H7.5V18H0ZM13.5 18V11.25C13.5 8.9 14.117 6.783 15.35 5.1 16.583 3.383 18.35 2.033 20.65 1.05L22.35 3.9C20.85 4.6 19.683 5.5 18.85 6.6 18.05 7.667 17.65 8.833 17.65 10.1H21V18H13.5Z"
                    fill="currentColor" opacity="0.4"
                  />
                </svg>

                <p className="flex-1 text-[15px] leading-[1.6] text-[#71717a]">
                  {t.quote}
                </p>

                <div className="border-t border-white/[0.07] pt-4">
                  <p className="text-[15px] font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[#71717a]">{t.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
