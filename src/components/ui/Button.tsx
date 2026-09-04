import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "text" | "green";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-(--color-accent) text-white hover:bg-[#e2570f] focus-visible:outline-(--color-accent)",
  secondary:
    "bg-(--color-navy) text-white hover:bg-[#2a3136] focus-visible:outline-(--color-navy)",
  outline:
    "bg-transparent text-(--color-navy) border border-(--color-border) hover:border-(--color-navy)",
  text: "bg-transparent text-(--color-accent) hover:underline px-0",
  green:
    "bg-(--color-green) text-white hover:bg-(--color-green-dark) focus-visible:outline-(--color-green)",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-md) px-6 py-3 text-sm font-bold tracking-wide transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...rest
}: {
  variant?: Variant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
