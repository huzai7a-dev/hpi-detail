import ProductCard, { type ProductFeature } from "./ProductCard";

const features: ProductFeature[] = [
  {
    icon: "pound",
    eyebrow: "Free",
    title: "car valuation",
    description: "We provide 4 market values depending on who is buying or selling the car.",
    points: ["Retail", "Private Sale", "Trade-in", "Forecourt"],
    href: "/valuation",
  },
  {
    icon: "tick",
    eyebrow: "Instant",
    title: "HPI Check",
    description: "Why you need a Vehicle History Check",
    points: ["A hidden past?", "Rightful owner?", "False identity?", "Clocked?"],
    href: "/hpi-check",
  },
  {
    icon: "mot",
    eyebrow: "Quick",
    title: "MOT Check",
    description: "In our free report we provide important MOT information including:",
    points: ["MOT test date", "Recorded mileage", "Previous MOT status", "Road tax renewal date"],
    href: "/mot-check",
  },
  {
    icon: "chart",
    eyebrow: "Simple",
    title: "TCO Check",
    description: "Invaluable free tool for researching total car running costs:",
    points: ["Annual depreciation", "Monthly/yearly car running costs", "Service and maintenance", "Road tax"],
    href: "/tco-check",
  },
];

export default function ProductGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-(--color-heading) sm:text-3xl">
          HPI<sup className="text-sm">&reg;</sup> the UK&apos;s Longest Running Vehicle Check Service: Car History
          Checks, Car Valuations and More
        </h2>
        <span className="heading-underline" />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-(--color-border)">
          {features.map((f) => (
            <div key={f.title} className="lg:px-6 lg:first:pl-0">
              <ProductCard feature={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
