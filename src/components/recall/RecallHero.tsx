import Image from "next/image";
import VinCheckForm from "@/components/hero/VinCheckForm";

export default function RecallHero() {
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

      <div className="container relative">
        <Image
          src="/images/hpi-recall-logo-white.svg"
          alt="HPI Recall"
          width={233}
          height={63}
          className="mx-auto h-12 w-auto sm:h-14"
        />

        <p className="mx-auto mt-8 max-w-xl text-lg text-white">
          Find out if there&rsquo;s an outstanding safety recall now
        </p>

        <VinCheckForm idPrefix="recall" />
      </div>
    </div>
  );
}
