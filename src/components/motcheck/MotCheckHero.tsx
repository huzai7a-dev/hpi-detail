import Image from "next/image";

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

        <form className="mx-auto mt-6 flex max-w-[280px] items-stretch gap-3">
          <label htmlFor="mot-check-reg" className="sr-only">
            Vehicle registration number
          </label>
          <input
            id="mot-check-reg"
            type="text"
            maxLength={10}
            placeholder="Enter Reg"
            className="h-[50px] w-[180px] rounded-[3px] border-2 border-white bg-white px-4 text-(--color-navy-light) outline-none placeholder:text-(--color-navy-light)/70"
          />
          <button
            type="submit"
            className="flex h-[50px] items-center gap-1.5 rounded-[4px] border-2 border-white px-5 font-semibold text-white transition-colors hover:bg-white hover:text-(--color-navy)"
          >
            Go
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
