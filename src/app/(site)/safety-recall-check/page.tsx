import type { Metadata } from "next";
import RecallHero from "@/components/recall/RecallHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "HPI Recall, Check For Safety Recalls On Any Car | HPI",
};

const checklist = [
  "The quickest, simplest way to find out if a manufacturer has recalled a vehicle due to a critical safety defect - You won't do this check quicker or easier anywhere else",
  "We're the only company that will check the actual number plate rather than just the general make and model",
  "If the car has been recalled but the manufacturer has since repaired it then it’ll no longer be flagged as an outstanding safety issue",
];

export default function SafetyRecallCheckPage() {
  return (
    <>
      <RecallHero />

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h1 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Are there any outstanding safety recalls from the vehicle manufacturer?
          </h1>

          <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
            {checklist.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Icon name="tick" className="mt-0.5 h-6 w-6 shrink-0 text-(--color-green)" strokeWidth={2} />
                <span className="text-(--color-navy-light)">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
