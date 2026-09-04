import type { Metadata } from "next";
import TcoHero from "@/components/tco/TcoHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "HPI | Free TCO Check | Calculate Your Car's Total Running Costs",
};

const runningCostQuestions = [
  "What cars hold their value well?",
  "Which car is cheapest to run?",
  "Which car has the most economical fuel costs?",
  "What car has the lowest cost for service and maintenance?",
];

const costBreakdown = [
  "Depreciation (loss in value)",
  "Service and maintenance costs",
  "Fuel costs",
  "Road Tax",
  "Tyre replacement",
  "Brake pad replacement",
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-6 max-w-2xl space-y-4 text-left md:ml-[16.66%]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon name="tick" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-green)" strokeWidth={2} />
          <span className="text-(--color-navy-light)">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TcoCheckPage() {
  return (
    <>
      <TcoHero />

      <section className="relative pb-[100px] pt-14">
        <div className="container max-w-4xl">
          <h1 className="text-center text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            What does <strong className="font-bold">TCO</strong> mean?
          </h1>
          <span className="heading-underline" />

          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-center md:ml-[16.66%] md:text-left">
            <p className="text-(--color-navy-light)">
              The term <strong className="font-bold">TCO</strong> stands for{" "}
              <strong className="font-bold">T</strong>otal <strong className="font-bold">C</strong>ost of{" "}
              <strong className="font-bold">O</strong>wnership - the total cost of owning a car.
            </p>
            <p className="text-(--color-navy-light)">
              There are many costs associated with owning a car, and many are often overlooked. It&rsquo;s important
              to understand and consider all costs, before you commit to buying a car.
            </p>
            <p className="text-(--color-navy-light)">
              Our TCO calculator takes all costs into account and tells you how much you can expect to shell out
              over the next 3 years of ownership. This invaluable tool also breaks down what the costs are for and
              when you need to pay.
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" width="106" height="26" viewBox="0 0 106 26" aria-hidden="true">
          <path d="M0 0 A53 26 0 0 0 106 0 Z" fill="var(--color-surface)" />
        </svg>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-4xl">
          <h2 className="text-center text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            What car running costs do we calculate?
          </h2>
          <span className="heading-underline" />

          <p className="mx-auto mt-8 max-w-2xl text-left text-(--color-navy-light) md:ml-[16.66%]">
            Use the TCO tool to calculate ownership costs and see if the car makes economic sense:
          </p>
          <Checklist items={runningCostQuestions} />

          <p className="mx-auto mt-10 max-w-2xl text-left text-(--color-navy-light) md:ml-[16.66%]">
            Get a break down of the following costs in a foolproof, easy to understand table:
          </p>
          <Checklist items={costBreakdown} />
        </div>
      </section>
    </>
  );
}
