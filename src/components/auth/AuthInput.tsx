import type { InputHTMLAttributes } from "react";

export default function AuthInput({ className = "", ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-[38px] w-full rounded-[4px] border border-[#cecece] bg-white px-3 py-1.5 text-base text-[#495057] placeholder-[#9a9a9a] outline-none transition-colors focus:border-(--color-navy-light) ${className}`}
      {...rest}
    />
  );
}
