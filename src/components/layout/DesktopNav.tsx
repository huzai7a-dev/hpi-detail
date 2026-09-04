"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import RegistrationChecker from "@/components/hero/RegistrationChecker";
import { navItems, type NavLink } from "./navData";

export default function DesktopNav() {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  function openMenu(label: string) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(label);
  }

  function scheduleClose() {
    closeTimer.current = window.setTimeout(() => setOpen(null), 150);
  }

  return (
    <nav className="hidden bg-(--color-navy) lg:block" aria-label="Primary">
      <div className="container flex items-center gap-1">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.children && openMenu(item.label)}
            onMouseLeave={() => item.children && scheduleClose()}
          >
            {item.children ? (
              <button
                onClick={() => setOpen(open === item.label ? null : item.label)}
                aria-expanded={open === item.label}
                className="flex items-center gap-1.5 px-6 py-2.5 text-[15px] font-bold text-white transition-colors hover:text-(--color-yellow) xl:px-9"
              >
                {item.label}
                <Icon name="chevron-down" className={`h-3.5 w-3.5 transition-transform ${open === item.label ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Link href={item.href} className="block px-6 py-2.5 text-[15px] font-bold text-white transition-colors hover:text-(--color-yellow) xl:px-9">
                {item.label}
              </Link>
            )}

            {item.children && open === item.label && (
              <div
                className="absolute left-0 top-full z-40 w-[760px] rounded-b-(--radius-lg) border border-t-0 border-(--color-border) bg-white shadow-(--shadow-md)"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.label === "Products & Services" ? (
                  <MegaMenu links={item.children} onNavigate={() => setOpen(null)} />
                ) : (
                  <SimpleMenu links={item.children} onNavigate={() => setOpen(null)} />
                )}
              </div>
            )}
          </div>
        ))}

        <Link
          href="/trade"
          className="ml-2 border border-white/40 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-(--color-navy)"
        >
          Trade Login
        </Link>
      </div>
    </nav>
  );
}

function SimpleMenu({ links, onNavigate }: { links: NavLink[]; onNavigate: () => void }) {
  return (
    <ul className="grid grid-cols-2 gap-1 p-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="block rounded-(--radius-sm) px-3 py-2 text-sm font-semibold text-(--color-heading) transition-colors hover:bg-(--color-surface) hover:text-(--color-accent)"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MegaMenu({ links, onNavigate }: { links: NavLink[]; onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-[2fr_1fr]">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-5 bg-(--color-surface) p-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={onNavigate} className="group flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-(--color-navy-light)/40 text-(--color-navy-light) transition-colors group-hover:border-(--color-accent) group-hover:text-(--color-accent)">
                {link.icon && <Icon name={link.icon} className="h-4 w-4" />}
              </span>
              <span>
                <span className="block font-bold text-(--color-navy-light) group-hover:text-(--color-accent)">{link.label}</span>
                <span className="block text-xs leading-snug text-(--color-muted)">{link.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center gap-3 p-6">
        <h3 className="text-lg font-bold text-(--color-heading)">Get the facts</h3>
        <p className="text-sm text-(--color-text)">If you own a car or want to buy or sell, HPI has you covered</p>
        <RegistrationChecker compact />
      </div>
    </div>
  );
}
