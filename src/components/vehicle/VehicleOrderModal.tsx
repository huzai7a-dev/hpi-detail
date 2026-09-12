"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { TextField, SelectField } from "@/components/ui/FormField";
import Icon from "@/components/ui/Icon";
import {
  PACKAGE_OPTIONS,
  VEHICLE_CATEGORY_OPTIONS,
  validateVehicleOrderForm,
  type VehicleOrderFormErrors,
  type VehicleOrderFormValues,
} from "@/lib/vehicleOrder";

const emptyValues: VehicleOrderFormValues = {
  category: "",
  packageType: "",
  model: "",
  year: "",
  email: "",
};

export default function VehicleOrderModal({
  isOpen,
  vin,
  onClose,
}: {
  isOpen: boolean;
  vin: string;
  onClose: () => void;
}) {
  const [values, setValues] = useState<VehicleOrderFormValues>(emptyValues);
  const [errors, setErrors] = useState<VehicleOrderFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  function updateField<K extends keyof VehicleOrderFormValues>(field: K, value: VehicleOrderFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleClose() {
    onClose();
    setValues(emptyValues);
    setErrors({});
    setIsSubmitted(false);
    setHasAgreed(false);
  }

  const selectedPackage = PACKAGE_OPTIONS.find((option) => option.value === values.packageType);
  const isFormValid = Object.keys(validateVehicleOrderForm(values)).length === 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateVehicleOrderForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Vehicle report order submitted", { vin, ...values });
    setIsSubmitted(true);
    window.setTimeout(handleClose, 1500);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Get Your Vehicle Report">
      {isSubmitted ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <Icon name="check-circle" className="h-12 w-12 text-(--color-green)" />
          <p className="text-lg font-bold text-(--color-heading)">Request submitted</p>
          <p className="text-sm text-(--color-muted)">We&rsquo;ll send your report to {values.email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-(--color-muted)">Vehicle</p>
            <p className="text-lg font-bold text-(--color-heading)">{vin}</p>
          </div>

          <SelectField
            id="vehicle-category"
            label="Vehicle category"
            options={VEHICLE_CATEGORY_OPTIONS}
            value={values.category}
            error={errors.category}
            onChange={(e) => updateField("category", e.target.value)}
          />

          <div>
            <p className="mb-1.5 block text-sm font-semibold text-(--color-heading)">Package type</p>
            <div className="grid grid-cols-2 gap-3">
              {PACKAGE_OPTIONS.map((option) => {
                const isSelected = values.packageType === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("packageType", option.value)}
                    aria-pressed={isSelected}
                    className={`relative rounded-(--radius-md) border p-4 text-left transition-colors ${
                      isSelected
                        ? "border-(--color-accent) bg-(--color-accent)/5"
                        : "border-(--color-border) hover:border-(--color-navy-light)"
                    }`}
                  >
                    {isSelected && (
                      <Icon name="tick" className="absolute right-3 top-3 h-5 w-5 text-(--color-accent)" />
                    )}
                    <p className="font-bold text-(--color-heading)">{option.label}</p>
                    <p className="mt-1 text-sm text-(--color-muted)">£{option.price}</p>
                  </button>
                );
              })}
            </div>
            {errors.packageType && (
              <p role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                {errors.packageType}
              </p>
            )}
          </div>

          <TextField
            id="vehicle-model"
            label="Vehicle model"
            placeholder="e.g. 3 Series"
            value={values.model}
            error={errors.model}
            onChange={(e) => updateField("model", e.target.value)}
          />

          <TextField
            id="vehicle-year"
            label="Model year"
            placeholder="e.g. 2020"
            inputMode="numeric"
            maxLength={4}
            value={values.year}
            error={errors.year}
            onChange={(e) => updateField("year", e.target.value.replace(/\D/g, ""))}
          />

          <TextField
            id="vehicle-email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            error={errors.email}
            onChange={(e) => updateField("email", e.target.value)}
          />

          <div className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface) p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-(--color-heading)">Terms</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-left text-xs font-semibold leading-relaxed text-(--color-heading)">
              <li>
                I confirm that I am voluntarily purchasing a vehicle inspection report from EpicVinRecord. The
                report will be delivered within the stated timeframe, and once delivered, it is non-refundable.
              </li>
              <li>
                We don&rsquo;t pressure any visitor to buy the product; you choose to buy it on your own volition.
              </li>
              <li>
                I am selling a Vehicle Inspection Report from Check Vehicle. The selected package will be
                delivered within the specified timeframe using the provided payment method. I acknowledge that
                once the product is delivered, I am not eligible for a refund.
              </li>
            </ul>
          </div>

          <label htmlFor="purchase-agreement" className="flex items-start gap-2.5 text-sm text-(--color-heading)">
            <input
              id="purchase-agreement"
              type="checkbox"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border-(--color-border) text-(--color-accent) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
            />
            I have read and agree to the purchase confirmation above.
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="w-full rounded-(--radius-md) border border-(--color-border) bg-transparent px-6 py-3 text-sm font-bold tracking-wide text-(--color-navy) transition-colors hover:border-(--color-navy)"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!hasAgreed || !isFormValid}
              className="w-full rounded-(--radius-md) bg-(--color-accent) px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#e2570f] disabled:pointer-events-none disabled:opacity-50"
            >
              Pay via card{selectedPackage ? ` — £${selectedPackage.price}` : ""}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
