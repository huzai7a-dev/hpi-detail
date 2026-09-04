import Icon, { type IconName } from "@/components/ui/Icon";

export type ProductFeature = {
  icon: IconName;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  href: string;
};

export default function ProductCard({ feature }: { feature: ProductFeature }) {
  return (
    <a href={feature.href} className="group block px-2 py-2 text-left">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--color-accent) text-(--color-accent)">
        <Icon name={feature.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-(--color-heading)">
        <span className="block text-(--color-navy-light)">{feature.eyebrow}</span>
        {feature.title}
      </h3>
      <p className="mt-3 text-sm text-(--color-text)">{feature.description}</p>
      <ul className="mt-4 space-y-2.5">
        {feature.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm font-medium text-(--color-heading)">
            <Icon name="check-circle" className="mt-0.5 h-4 w-4 shrink-0 text-(--color-accent)" />
            {point}
          </li>
        ))}
      </ul>
    </a>
  );
}
