import type { Metadata } from "next";
import Link from "next/link";
import AssessHero from "@/components/assess/AssessHero";

export const metadata: Metadata = {
  title: "HPI Check Car Buyers Guide | Assessing a Car",
};

export default function AssessAVehiclePage() {
  return (
    <>
      <AssessHero />

      <section className="bg-(--color-surface) py-16 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">How it works</h2>
          <p className="mx-auto mt-4 text-(--color-navy-light)">
            Using this vehicle assessment tool you can rate every aspect of a car before you buy it and we&rsquo;ll
            provide you with an easy to understand appraisal at the end.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-[4px] border-2 border-(--color-accent) px-6 py-3 font-semibold text-(--color-accent) transition-colors hover:bg-(--color-accent) hover:text-white"
            >
              Buying Privately
            </Link>
            <Link
              href="#"
              className="rounded-[4px] border-2 border-(--color-accent) px-6 py-3 font-semibold text-(--color-accent) transition-colors hover:bg-(--color-accent) hover:text-white"
            >
              Buying from a Dealer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
