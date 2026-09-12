"use client";

import { useState } from "react";
import VehicleOrderModal from "@/components/vehicle/VehicleOrderModal";
import { isPlausibleReg } from "@/components/hero/mockVehicles";

export default function VinCheckForm({ idPrefix }: { idPrefix: string }) {
  const [vin, setVin] = useState("");
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!vin.trim() || !isPlausibleReg(vin)) {
      setError(true);
      return;
    }
    setError(false);
    setIsModalOpen(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-[280px] items-stretch gap-3">
        <label htmlFor={`${idPrefix}-reg`} className="sr-only">
          Vehicle registration number
        </label>
        <input
          id={`${idPrefix}-reg`}
          type="text"
          maxLength={10}
          placeholder="Enter VIN"
          value={vin}
          onChange={(e) => {
            setVin(e.target.value.toUpperCase());
            if (error) setError(false);
          }}
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

      {error && (
        <p className="mt-3 text-sm font-semibold text-red-300" role="alert">
          Please enter a valid vehicle registration to continue.
        </p>
      )}

      <VehicleOrderModal isOpen={isModalOpen} vin={vin} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
