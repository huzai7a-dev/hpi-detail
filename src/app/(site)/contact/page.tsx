import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact Us | HPI",
};

const cards: { title: string; icon: IconName; body: React.ReactNode }[] = [
  {
    title: "For Consumer enquiries:",
    icon: "mail",
    body: (
      <a href="mailto:hpi@hpi.co.uk" className="text-(--color-accent) hover:underline">
        hpi@hpi.co.uk
      </a>
    ),
  },
  {
    title: "Contact centre business hours:",
    icon: "clock",
    body: <span>Weekdays: 8:00am &ndash; 6:00pm</span>,
  },
  {
    title: "For Trade enquiries:",
    icon: "phone",
    body: (
      <a href="tel:01132222000" className="text-(--color-accent) hover:underline">
        0113 222 2000
      </a>
    ),
  },
  {
    title: "To join hpi or for further information visit:",
    icon: "globe",
    body: <span>www.cap-hpi.com/contact</span>,
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-16">
        <div className="container grid max-w-3xl grid-cols-1 gap-x-10 gap-y-12 text-center sm:mx-auto sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title}>
              <h3 className="text-lg font-normal text-(--color-navy-light)">{card.title}</h3>
              <Icon name={card.icon} className="mx-auto mt-4 h-9 w-9 text-(--color-accent)" strokeWidth={1.4} />
              <p className="mt-3 text-(--color-navy-light)">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
