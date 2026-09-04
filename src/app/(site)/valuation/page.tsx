import type { Metadata } from "next";
import ValuationHero from "@/components/valuation/ValuationHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "HPI | Free Car Valuations, How Much Is My Car Worth? Used Car Values",
};

const checklist = [
  "Get 4 different market values for a car including: price at new, trade-in value, private sale and forecourt values",
  "Know the true value of the car you're buying or selling and negotiate like a pro",
  "How much will the car value depreciate? Find out its past, present and future values",
  "What running costs for fuel, tax, service & maintenance can you expect?",
];

export default function ValuationPage() {
  return (
    <>
      <ValuationHero />

      <section className="relative pb-[100px] pt-14">
        <div className="container max-w-3xl text-center">
          <h1 className="text-3xl font-normal text-(--color-navy-light) sm:text-[38.8px]">An HPI Car Valuation</h1>
          <span className="heading-underline" />

          <p className="mx-auto mt-8 max-w-2xl text-lg text-(--color-navy-light)">
            An HPI car valuation provides the most accurate and reliable car valuation available. Not only is our
            service free, but we also give you more information than any other car valuation provider. If
            you&rsquo;re looking for a used car value, then look no further than HPI valuations.
          </p>
        </div>

        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" width="106" height="26" viewBox="0 0 106 26" aria-hidden="true">
          <path d="M0 0 A53 26 0 0 0 106 0 Z" fill="var(--color-surface)" />
        </svg>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Why Get an HPI Car Valuation for a Used Car Value?
          </h2>
          <span className="heading-underline" />

          <p className="mx-auto mt-8 max-w-2xl text-(--color-navy-light)">
            In 2015, HPI joined forces with market leaders CAP Automotive and now benefit from more than 30 years of
            experience in supplying dealers and motoring experts with the industry&rsquo;s benchmark for used car
            prices.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-(--color-navy-light)">
            All of our used car values are accurate and fair, providing you with an honest car valuation that you
            can trust. Since 1979, we&rsquo;ve collated millions of pieces of data on used car values, and
            we&rsquo;ve been voted as having the best car valuation in the industry. Plus, we don&rsquo;t buy or
            sell cars, meaning the car value we provide is always unbiased, objective and fair.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-(--color-navy-light)">
            Our car value calculator is simple to use, too. Simply enter your registration plate, followed by your
            full name, email address, postcode and phone number to receive your car valuation. You&rsquo;ll get the
            value of your car instantly.
          </p>

          <h2 className="mt-12 text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Free car valuation. What&rsquo;s the value of my car?
          </h2>
          <span className="heading-underline" />

          <ul className="mx-auto mt-6 max-w-xl space-y-4 text-left">
            {checklist.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Icon name="tick" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-green)" strokeWidth={2} />
                <span className="text-(--color-navy-light)">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-(--color-navy-light)">
            Getting an accurate vehicle value for a car you&rsquo;re trying to buy or sell can save you time and
            money. Whether you&rsquo;re buying or selling (or even if you&rsquo;re just curious), you can be certain
            our car valuation will be accurate, reliable and totally independent. Get a car valuation with us today.
          </p>
        </div>
      </section>
    </>
  );
}
