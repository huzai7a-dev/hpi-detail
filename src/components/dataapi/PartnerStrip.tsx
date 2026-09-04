import Image from "next/image";

const partners = [
  { name: "AA", src: "/images/aa.png" },
  { name: "Confused.com", src: "/images/confused.png" },
  { name: "eBay", src: "/images/ebay.png" },
  { name: "Gumtree", src: "/images/gumtree.png" },
  { name: "What Car?", src: "/images/whatcar.png" },
  { name: "Shpock", src: "/images/shpock.png" },
  { name: "carwow", src: "/images/carwow.png" },
];

export default function PartnerStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
      {partners.map((partner) => (
        <Image
          key={partner.name}
          src={partner.src}
          alt={partner.name}
          width={160}
          height={107}
          className="h-auto w-32 opacity-60 grayscale transition-opacity hover:opacity-100 sm:w-36"
        />
      ))}
    </div>
  );
}
