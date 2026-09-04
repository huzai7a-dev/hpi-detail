import Image from "next/image";
import Link from "next/link";

export default function TcoHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-[#3fafd8] bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-valuations-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative">
        <Image src="/images/hpi-tco-logo-white.svg" alt="TCO Check" width={484} height={101} className="mx-auto h-10 w-auto sm:h-12" />

        <p className="mx-auto mt-8 max-w-xl text-lg text-white">
          Use our car running costs calculator to find the cheapest car to run
        </p>

        <form className="mx-auto mt-6 flex max-w-[280px] items-stretch gap-3">
          <label htmlFor="tco-reg" className="sr-only">
            Vehicle registration number
          </label>
          <input
            id="tco-reg"
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

        <p className="mt-3 text-sm text-white">
          or{" "}
          <Link href="#" className="text-(--color-accent) hover:underline">
            find by make/model
          </Link>
        </p>
      </div>
    </div>
  );
}
