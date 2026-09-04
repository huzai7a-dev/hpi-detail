import type { Metadata } from "next";
import Link from "next/link";
import FaqsHero from "@/components/faqs/FaqsHero";
import FaqAccordion from "@/components/faqs/FaqAccordion";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | HPI",
};

const cards: { label: string; href: string; icon: IconName }[] = [
  { label: "Glossary of Terms", href: "/glossary", icon: "book" },
  { label: "Your HPI Check Report Guarantee", href: "/hpi-check", icon: "clipboard" },
  { label: "Contact Us", href: "/contact", icon: "mail" },
];

export default function FaqsPage() {
  return (
    <>
      <FaqsHero />

      <section className="py-16">
        <div className="container grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label}>
              <Icon name={card.icon} className="mx-auto h-10 w-10 text-(--color-accent)" strokeWidth={1.4} />
              <h3 className="mt-4 text-xl font-normal text-(--color-navy-light)">{card.label}</h3>
              <Link href={card.href} className="mt-1 inline-block text-sm font-semibold text-(--color-accent) hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-3xl">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
