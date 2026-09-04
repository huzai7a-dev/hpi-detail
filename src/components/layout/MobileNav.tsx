"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { navItems } from "./navData";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center text-(--color-navy)"
      >
        <Icon name="menu" className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between border-b border-(--color-border) px-4 py-4">
            <span className="text-lg font-bold text-(--color-navy)">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-(--color-navy)"
            >
              <Icon name="close" className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-2" aria-label="Mobile primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-(--color-border)">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                        aria-expanded={openSection === item.label}
                        className="flex w-full items-center justify-between px-3 py-4 text-left text-base font-bold text-(--color-heading)"
                      >
                        {item.label}
                        <Icon
                          name="chevron-down"
                          className={`h-4 w-4 transition-transform ${openSection === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-200 ${
                          openSection === item.label ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="min-h-0 space-y-1 pl-3">
                          {item.children.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-(--radius-sm) px-3 py-2 text-sm font-semibold text-(--color-text)"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-4 text-base font-bold text-(--color-heading)"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 border-t border-(--color-border) px-4 py-4">
            <Link href="/trade" onClick={() => setIsOpen(false)} className="text-center text-sm font-bold text-(--color-navy)">
              Trade Login
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-(--radius-md) border border-(--color-border) py-3 text-center text-sm font-bold text-(--color-navy)"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-(--radius-md) bg-(--color-green) py-3 text-center text-sm font-bold text-white"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
