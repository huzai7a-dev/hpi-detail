import type { Metadata } from "next";
import Link from "next/link";
import AffiliatesHero from "@/components/affiliates/AffiliatesHero";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Affiliate Scheme | Vehicle Data Experts since 1938 - HPI",
};

const stats: { value: string; label: string; icon: IconName }[] = [
  { value: "20%", label: "The minimum commission you can earn on every completed transaction.", icon: "percent" },
  { value: "21 Days", label: "The amount of time the affiliate cookie lasts on the user's browser.", icon: "calendar" },
  { value: "CR%", label: "Typical conversion rate from clickthrough to purchase.", icon: "chart" },
];

export default function AffiliatesPage() {
  return (
    <>
      <AffiliatesHero />

      <section className="py-16">
        <div className="container grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Icon name={stat.icon} className="mx-auto h-10 w-10 text-(--color-accent)" strokeWidth={1.4} />
              <h3 className="mt-4 text-2xl font-normal text-(--color-navy-light)">{stat.value}</h3>
              <p className="mt-2 text-sm text-(--color-navy-light)">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-(--color-surface) py-16 text-center">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Our Affiliate Scheme</h2>
          <span className="heading-underline" />
          <p className="mx-auto mt-8 text-(--color-navy-light)">
            HPI Check offers an affiliate programme so you can earn money by promoting the HPI Check service online.
            We&rsquo;re the market leaders in vehicle history checks in the UK, and have the most competitive
            commission rates within our affiliate programme.
          </p>
          <p className="mx-auto mt-4 text-(--color-navy-light)">
            The programme is managed through the Webgains network and commission starts from 20%. You can sign up to
            Webgains here or contact us to find out more.
          </p>

          <Link
            href="#"
            className="mt-8 inline-block rounded-[4px] bg-(--color-accent) px-6 py-3 font-semibold text-white transition-colors hover:bg-(--color-accent)/90"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </>
  );
}
