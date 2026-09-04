"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { getMockVehicle, isPlausibleReg, type MockVehicle } from "./mockVehicles";

type Status = "idle" | "loading" | "result" | "error";

const productOptions = [
  { label: "Instant HPI Check", icon: "tick" as const },
  { label: "Free Car Valuation", icon: "pound" as const },
  { label: "Quick MOT Check", icon: "mot" as const },
  { label: "Simple TCO Check", icon: "chart" as const },
];

export default function RegistrationChecker({ compact = false }: { compact?: boolean }) {
  const [reg, setReg] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [vehicle, setVehicle] = useState<MockVehicle | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reg.trim()) {
      setStatus("error");
      return;
    }
    if (!isPlausibleReg(reg)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setVehicle(getMockVehicle(reg));
      setStatus("result");
    }, 900);
  }

  function reset() {
    setStatus("idle");
    setVehicle(null);
    setReg("");
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
          placeholder="ENTER REG"
          maxLength={8}
          disabled={status === "loading"}
          className={`w-full max-w-[280px] rounded-(--radius-md) bg-(--color-yellow) px-5 font-black uppercase tracking-wide text-(--color-navy) placeholder-(--color-navy)/70 outline-none ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-navy) ${
            compact ? "h-12 text-lg" : "h-[60px] text-2xl"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Check vehicle"
          className={`flex shrink-0 items-center justify-center rounded-full bg-(--color-green) text-white transition-colors hover:bg-(--color-green-dark) disabled:opacity-70 ${
            compact ? "h-12 w-12" : "h-[60px] w-[60px]"
          }`}
        >
          {status === "loading" ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <Icon name="arrow-right" className={compact ? "h-5 w-5" : "h-6 w-6"} />
          )}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-600" role="alert">
          Please enter a valid vehicle registration to continue.
        </p>
      )}

      {status === "result" && vehicle && (
        <div className="mt-6 max-w-xl rounded-(--radius-lg) border border-(--color-border) bg-white p-6 shadow-(--shadow-md)">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">
                Registration
              </p>
              <p className="text-lg font-bold text-(--color-heading)">{reg}</p>
            </div>
            <button
              onClick={reset}
              className="text-sm font-semibold text-(--color-accent) hover:underline"
            >
              Not the right vehicle? Check again
            </button>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">Make / Model</dt>
              <dd className="mt-1 font-semibold text-(--color-heading)">
                {vehicle.make} {vehicle.model}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">Colour</dt>
              <dd className="mt-1 font-semibold text-(--color-heading)">{vehicle.colour}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">Fuel</dt>
              <dd className="mt-1 font-semibold text-(--color-heading)">{vehicle.fuel}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">First Registered</dt>
              <dd className="mt-1 font-semibold text-(--color-heading)">{vehicle.firstRegistered}</dd>
            </div>
          </dl>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {productOptions.map((p) => (
              <button
                key={p.label}
                type="button"
                className="flex flex-col items-center gap-2 rounded-(--radius-md) border border-(--color-border) p-3 text-center text-xs font-semibold text-(--color-heading) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Icon name={p.icon} className="h-6 w-6 text-(--color-accent)" />
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
