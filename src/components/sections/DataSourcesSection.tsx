import Icon, { type IconName } from "@/components/ui/Icon";

const sources: { label: string; icon: IconName; color: string }[] = [
  { label: "Police Records (PNC)", icon: "shield", color: "#4f8bd6" },
  { label: "DVLA", icon: "card", color: "#e0464a" },
  { label: "Finance Companies", icon: "briefcase", color: "#a05fc9" },
  { label: "MIAFTR", icon: "edit", color: "#2ecfa3" },
  { label: "SMMT", icon: "globe", color: "#e0787f" },
  { label: "DVSA", icon: "recall", color: "#374047" },
  { label: "Manufacturers", icon: "wrench", color: "#e0464a" },
  { label: "Leasing companies", icon: "clipboard", color: "#a05fc9" },
  { label: "Rental companies", icon: "key", color: "#2ecfa3" },
  { label: "Wholesalers", icon: "truck", color: "#2ecfa3" },
  { label: "Auctions", icon: "auction", color: "#e0787f" },
  { label: "Traders", icon: "refresh", color: "#e0464a" },
  { label: "Dealerships", icon: "dealership", color: "#a05fc9" },
  { label: "Remarketing companies", icon: "building", color: "#4f8bd6" },
];

export default function DataSourcesSection() {
  return (
    <section className="bg-(--color-surface)">
      <div className="container section">
        <h2 className="text-center text-2xl font-bold text-(--color-heading) sm:text-3xl">
          Where we get our vehicle information
        </h2>
        <span className="heading-underline" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-semibold text-(--color-navy-light)">
          We obtain our information for every car check from only the most reputable and reliable of data sources;
          including but not limited to:
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <Icon name={s.icon} className="h-6 w-6 shrink-0" style={{ color: s.color }} />
              <span className="text-sm font-semibold text-(--color-heading)">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
