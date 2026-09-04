import Image from "next/image";

type FeatureItem = {
  title: string;
  points: string[];
};

export default function FeatureRow({
  image,
  imageAlt,
  items,
  imageSide = "left",
  pullUp = false,
}: {
  image: string;
  imageAlt: string;
  items: FeatureItem[];
  imageSide?: "left" | "right";
  pullUp?: boolean;
}) {
  const reverse = imageSide === "right";

  return (
    <div
      className={`container flex flex-col overflow-hidden py-10 lg:flex-row lg:overflow-visible lg:py-14 ${reverse ? "lg:flex-row-reverse" : ""} ${pullUp ? "lg:-mt-[50px]" : ""}`}
    >
      <div className="relative w-full lg:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          width={554}
          height={418}
          className={`mx-auto h-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:w-[125%] ${reverse ? "lg:float-left lg:-ml-8" : "lg:float-right"}`}
        />
      </div>
      <div className="mt-8 w-full space-y-6 text-center lg:mt-0 lg:w-1/2 lg:self-center lg:text-left">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:text-left">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-green)">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M8 12.5l2.5 2.5L16 9.5" />
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-normal text-(--color-navy-light)">{item.title}</h3>
              {item.points.map((point) => (
                <p key={point} className="mt-1 text-(--color-navy-light)">
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
