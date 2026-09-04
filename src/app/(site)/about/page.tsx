import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/components/about/AboutHero";
import Icon, { type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About HPI | Vehicle Data Experts since 1938 - HPI",
};

const cards: { label: string; href: string; icon: IconName }[] = [
  { label: "Affiliates", href: "/affiliates", icon: "globe" },
  { label: "History", href: "#", icon: "clock" },
  { label: "Careers", href: "#", icon: "building" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

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

      <section className="bg-(--color-navy) py-10 text-center">
        <p className="container max-w-3xl text-lg text-white">
          Our many years of experience and expertise in the industry means the hpi check, in our opinion, is the
          best history check available on the market today.
        </p>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">The Genuine Article</h2>
          <span className="heading-underline" />
          <p className="mx-auto mt-8 text-(--color-navy-light)">
            Not all car history checks are hpi checks. In fact hpi check is a registered trademark owned by hpi Ltd.
            Always look out for the hpi logo and stamp to ensure you are buying a genuine hpi check and not a cheap
            imitation.
          </p>
        </div>
      </section>

      <section className="bg-(--color-surface) py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Our Values</h2>
          <span className="heading-underline" />
          <p className="mx-auto mt-8 text-(--color-navy-light)">
            As pioneers of the vehicle history check service, we are relentless in our mission to gather the most
            accurate information about the history of UK vehicles and to continue providing consumers with the most
            comprehensive check on the market. You will always know where you are with hpi.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">Our Future</h2>
          <span className="heading-underline" />
          <p className="mx-auto mt-8 text-(--color-navy-light)">
            We&rsquo;re committed to staying at the forefront of the industry, continually investing in cutting-edge
            technology and trusted processes to ensure our data remains as accurate and reliable as possible. Stay
            informed with the latest news and updates on our blog.
          </p>
        </div>
      </section>

      <section className="bg-(--color-surface) py-16 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-normal text-(--color-navy-light) sm:text-3xl">
            Always Happy to Help &ndash; We&rsquo;ve Got Your Back
          </h2>
          <span className="heading-underline" />
          <p className="mx-auto mt-8 text-(--color-navy-light)">
            We have a dedicated team of UK-based customer care agents available 7 days a week. With over 400 years
            of combined experience, our experts are here to support second-hand car buyers with trusted advice and
            guidance in navigating the often risky used car market.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block rounded-[4px] bg-(--color-accent) px-6 py-3 font-semibold text-white transition-colors hover:bg-(--color-accent)/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
