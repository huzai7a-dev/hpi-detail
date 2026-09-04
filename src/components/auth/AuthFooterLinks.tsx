import Link from "next/link";

const links = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-preferences" },
  { label: "Trademarks", href: "/trademark" },
  { label: "Terms of Service", href: "/terms" },
  { label: "HPI.co.uk", href: "/" },
];

export default function AuthFooterLinks() {
  return (
    <ul className="mt-8 space-y-1 text-center">
      {links.map((l) => (
        <li key={l.label}>
          <Link href={l.href} className="text-[13.6px] text-white hover:underline">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
