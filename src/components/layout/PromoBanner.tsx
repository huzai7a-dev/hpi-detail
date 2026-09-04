"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center gap-4 bg-(--color-purple) px-10 py-2.5 text-center text-sm font-semibold text-white">
      <span>Leave us a review!</span>
      <a
        href="https://uk.trustpilot.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-(--radius-sm) border border-white/40 px-3 py-1 text-xs font-bold transition-colors hover:bg-white hover:text-(--color-purple)"
      >
        Click here
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-white/80 hover:text-white"
      >
        <Icon name="close" className="h-4 w-4" />
      </button>
    </div>
  );
}
