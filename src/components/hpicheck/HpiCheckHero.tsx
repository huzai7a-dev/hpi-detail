import Image from "next/image";

export default function HpiCheckHero() {
  return (
    <div className="relative overflow-hidden border-b-[14px] border-(--color-accent) bg-(--color-navy) py-[100px] text-center">
      <Image
        src="/images/hpi-check-header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        aria-hidden="true"
      />

      <div className="container relative">
        <Image
          src="/images/hpi-check-logo-white.svg"
          alt="HPI Check"
          width={803}
          height={202}
          className="mx-auto h-14 w-auto sm:h-16"
        />

        <h2 className="mt-8 text-2xl font-normal text-white sm:text-[27px]">
          Get an instant HPI Car Check<sup>&reg;</sup> now
        </h2>

        <form className="mx-auto mt-6 flex max-w-[280px] items-stretch gap-3">
          <label htmlFor="hpi-check-reg" className="sr-only">
            Vehicle registration number
          </label>
          <input
            id="hpi-check-reg"
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
