"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/ui/Icon";

function subscribeNoop() {
  return () => {};
}

function useIsMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-(--color-navy)/60"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="themed-scrollbar relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-(--radius-lg) border border-(--color-border) bg-white p-6 shadow-(--shadow-md) sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="text-xl font-bold text-(--color-heading)">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full p-1.5 text-(--color-muted) transition-colors hover:bg-(--color-surface) hover:text-(--color-heading)"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
