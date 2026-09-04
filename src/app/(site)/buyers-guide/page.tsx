import type { Metadata } from "next";
import Link from "next/link";
import BuyersGuideHero from "@/components/buyersguide/BuyersGuideHero";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "HPI Check Car Buyers Guide | How To Buy a Car",
};

export default function BuyersGuidePage() {
  return (
    <>
      <BuyersGuideHero />

      <section className="bg-(--color-surface) py-16">
        <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <Link
            href="#"
            className="flex w-[180px] flex-col items-center gap-4 rounded-(--radius-md) bg-(--color-navy) px-6 py-8 text-center text-white transition-colors hover:bg-(--color-navy-light)"
          >
            <Icon name="clipboard" className="h-10 w-10 text-(--color-accent)" strokeWidth={1.4} />
            <span className="text-sm font-bold uppercase tracking-wide">Read the Guides</span>
          </Link>
          <Link
            href="/assess-a-vehicle"
            className="flex w-[180px] flex-col items-center gap-4 rounded-(--radius-md) bg-(--color-navy) px-6 py-8 text-center text-white transition-colors hover:bg-(--color-navy-light)"
          >
            <Icon name="tick" className="h-10 w-10 text-(--color-accent)" strokeWidth={1.4} />
            <span className="text-sm font-bold uppercase tracking-wide">Assess a Vehicle</span>
          </Link>
        </div>

        <p className="container mx-auto mt-10 max-w-xl text-center text-(--color-navy-light)">
          Make sure you&rsquo;re an informed car buyer, take this guide with you on your mobile or tablet. You could
          even get a better deal.
        </p>
      </section>
    </>
  );
}
