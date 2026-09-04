import Image from "next/image";
import Icon from "@/components/ui/Icon";

type Testimonial = { title: string; quote: string; author: string; rating: number };

const testimonials: Testimonial[] = [
  {
    title: "Great Service",
    quote:
      "The actual check was great as always, more data points than anyone else, clearly the best option and they have the best guarantee of all the providers I looked at. Also, their service was great on the phone. They called me back when they said they would, they did what they said they would, they just generally exceeded my expectations of a call centre operation. Good work guys.",
    author: "Rad",
    rating: 5,
  },
  {
    title: "HPI Check",
    quote:
      "I found this extremely useful as I found the car I was buying had a mileage discrepancy when checked with HPI... This was resolved by the seller however without the benefit of the HPI check I would not have been any the wiser.",
    author: "Ben Hattersley",
    rating: 5,
  },
  {
    title: "Great, quick and informative service",
    quote:
      "Really easy to use, gave me all the information I needed to make a decision on the car I was looking to buy with total confidence.",
    author: "Stuart W",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" fill={i < count ? "currentColor" : "none"} className="h-5 w-5 text-(--color-accent)" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container max-w-2xl space-y-14">
        {testimonials.map((t) => (
          <div key={t.author} className="text-center">
            <Stars count={t.rating} />
            <h3 className="mt-4 text-lg font-bold text-(--color-heading)">{t.title}</h3>
            <p className="mt-3 text-(--color-text)">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-bold text-(--color-navy-light)">~ {t.author}</p>
          </div>
        ))}

        <div className="flex justify-center pt-2">
          <Image src="/images/trust-pilot-logo.png" alt="Trustpilot" width={156} height={24} className="h-auto w-36" />
        </div>
      </div>
    </section>
  );
}
