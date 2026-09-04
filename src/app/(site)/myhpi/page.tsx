import type { Metadata } from "next";
import MyHpiHero from "@/components/myhpi/MyHpiHero";
import FeatureRow from "@/components/myhpi/FeatureRow";

export const metadata: Metadata = {
  title: "HPI | Vehicle Check | Car Valuation | MOT History | my hpi app",
};

export default function MyHpiPage() {
  return (
    <>
      <MyHpiHero />

      <section className="bg-(--color-surface) py-8 text-center">
        <h2 className="text-[27px] font-normal text-(--color-accent)">Why claim a garage</h2>
      </section>

      <FeatureRow
        image="/images/check-and-create.svg"
        imageAlt="Check and create"
        imageSide="left"
        pullUp
        items={[
          {
            title: "Unlimited car profiles",
            points: ["Create profiles for cars you own or are thinking of buying", "Handy for comparing information when you’re car shopping"],
          },
          {
            title: "Free vehicle valuations",
            points: [
              "The industry benchmark for car values",
              "Market values for trade-in, private sale & forecourt prices",
              "Check depreciation with past, present and future values",
            ],
          },
          {
            title: "Store documents and receipts",
            points: ["Build a digital history and add value to your car", "Assure future buyers of good upkeep"],
          },
        ]}
      />

      <FeatureRow
        image="/images/quick-access.svg"
        imageAlt="Quick access"
        imageSide="right"
        items={[
          {
            title: "Access to HPI & MOT Reports",
            points: [
              "Keep all your reports and valuations close to hand",
              "Award winning vehicle data at your fingertips",
              "Use your report to help build your car’s digital history",
            ],
          },
          {
            title: "Automatic MOT and Tax reminders",
            points: [
              "Plus customisable events for other important dates",
              "Set a reminder to shop around for cheaper insurance",
              "Stay organised and avoid heavy fines",
            ],
          },
        ]}
      />

      <FeatureRow
        image="/images/your-documents.svg"
        imageAlt="Your documents"
        imageSide="left"
        items={[
          {
            title: "Free TCO calculator",
            points: [
              "See a 3 year breakdown showing the total cost of ownership",
              "Which cars hold their value? Which are the cheapest to run?",
              "When will tyres and brake pads need replacing - at what cost?",
            ],
          },
          {
            title: "Free recall checks",
            points: ["Check for manufacturers safety recalls - usually £2.95", "The only place to check a specific car using a number plate"],
          },
        ]}
      />
    </>
  );
}
