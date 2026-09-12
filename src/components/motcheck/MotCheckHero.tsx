import Image from "next/image";
import VinCheckForm from "@/components/hero/VinCheckForm";

export default function MotCheckHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-[#e74d4d] bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-recall-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative max-w-4xl">
        <Image
          src="/images/hpi-mot-history-check-white.svg"
          alt="HPI MOT History Check - Get Yours Now"
          width={794}
          height={86}
          className="mx-auto h-8 w-auto sm:h-10"
        />

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white">
          The information supplied in an MOT Check report is vital if you&rsquo;re considering buying a vehicle. The
          more you know about a used car&rsquo;s past, including its MOT history, the more informed you will be
          before buying it.
        </p>

        <VinCheckForm idPrefix="mot-check" />
      </div>
    </div>
  );
}
