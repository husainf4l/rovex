import { Separator } from "@/components/ui/separator";

// Placeholder company names as text logos — clean & modern
const companies = [
  "ShopLoop",
  "FinServ GmbH",
  "MobiPay",
  "Europay",
  "TechHub Cluj",
  "Clerox",
  "DataCore EU",
  "RetailOps",
];

export function TrustedBy() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-6 w-full max-w-xl">
            <Separator className="bg-white/10 flex-1" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30 text-center whitespace-nowrap">
              Trusted by teams across Europe
            </span>
            <Separator className="bg-white/10 flex-1" />
          </div>

          {/* Logo strip */}
          <div className="grid grid-cols-4 gap-x-12 gap-y-6 lg:grid-cols-8">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center"
              >
                <span className="text-sm font-semibold tracking-wide text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
