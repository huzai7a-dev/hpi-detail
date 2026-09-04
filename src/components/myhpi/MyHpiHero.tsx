import Image from "next/image";
import AuthInput from "@/components/auth/AuthInput";
import Link from "next/link";

export default function MyHpiHero() {
  return (
    <section className="mx-auto flex max-w-[1300px] flex-col lg:flex-row lg:items-stretch">
      <div className="flex-1 px-4 py-12 text-center sm:px-8 lg:py-16">
        <h1 className="text-3xl font-normal text-(--color-navy-light) sm:text-[38.8px]">Claim your virtual garage</h1>
        <p className="mt-4 text-lg text-(--color-navy-light)">
          The only app you need to buy, sell and take care of your car
        </p>

        <form className="mx-auto mt-6 max-w-[360px] space-y-3 text-left">
          <AuthInput type="email" name="email" placeholder="Enter e-mail" autoComplete="email" />
          <AuthInput type="password" name="password" placeholder="Password" autoComplete="new-password" />

          <label className="flex cursor-pointer items-center gap-3">
            <span className="relative inline-block h-5 w-9 shrink-0 rounded-full bg-[#dcdcdc] transition-colors has-[:checked]:bg-(--color-green)">
              <input type="checkbox" name="terms" className="peer sr-only" />
              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
            </span>
            <span className="text-sm text-(--color-muted)">
              I agree to the{" "}
              <Link href="/terms" className="text-(--color-green-dark) hover:underline">
                Terms &amp; Conditions
              </Link>{" "}
              &amp;{" "}
              <Link href="/privacy-policy" className="text-(--color-green-dark) hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="rounded-[4px] bg-(--color-green) px-8 py-2.5 text-base font-medium text-white transition-colors hover:bg-(--color-green-dark)"
          >
            Sign me up
          </button>

          <p className="pt-1 text-sm text-(--color-muted)">*Available on iOS or use in your web browser</p>
        </form>
      </div>

      <div className="relative min-h-[320px] flex-1 overflow-hidden bg-[#374047] lg:min-h-0">
        <Image
          src="/images/myhpi-video-thumbnail.png"
          alt=""
          fill
          priority
          className="object-cover object-right-top"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 px-4 text-center text-white">
          <h2 className="m-0 text-[38.8px] font-normal">
            my<strong className="font-bold">hpi</strong>
          </h2>
          <button
            type="button"
            aria-label="Play demo video"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-(--color-green) transition-colors hover:bg-(--color-green-dark)"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className="m-0 mt-1">See it in action</p>
        </div>
      </div>
    </section>
  );
}
