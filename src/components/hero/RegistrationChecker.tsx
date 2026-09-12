"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import VehicleOrderModal from "@/components/vehicle/VehicleOrderModal";
import { isPlausibleReg } from "./mockVehicles";

type Status = "idle" | "error";

export default function RegistrationChecker({ compact = false }: { compact?: boolean }) {
  const [reg, setReg] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reg.trim() || !isPlausibleReg(reg)) {
      setStatus("error");
      return;
    }
    setStatus("idle");
    setIsModalOpen(true);
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex items-stretch gap-3" aria-label="Vehicle registration check">
        <label htmlFor="vrm-input" className="sr-only">
          Vehicle registration number
        </label>
        <input
          id="vrm-input"
          type="text"
          value={reg}
          onChange={(e) => {
            setReg(e.target.value.toUpperCase());
            if (status === "error") setStatus("idle");
          }}
          placeholder="ENTER VIN"
          maxLength={8}
          className={`w-full max-w-[280px] rounded-(--radius-md) bg-(--color-yellow) px-5 font-black uppercase tracking-wide text-(--color-navy) placeholder-(--color-navy)/70 outline-none ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-navy) ${
            compact ? "h-12 text-lg" : "h-[60px] text-2xl"
          }`}
        />
        <button
          type="submit"
          aria-label="Check vehicle"
          className={`flex shrink-0 items-center justify-center rounded-full bg-(--color-green) text-white transition-colors hover:bg-(--color-green-dark) ${
            compact ? "h-12 w-12" : "h-[60px] w-[60px]"
          }`}
        >
          <Icon name="arrow-right" className={compact ? "h-5 w-5" : "h-6 w-6"} />
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-600" role="alert">
          Please enter a valid vehicle registration to continue.
        </p>
      )}

      <VehicleOrderModal isOpen={isModalOpen} vin={reg} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
