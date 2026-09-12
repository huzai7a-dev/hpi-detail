export const VEHICLE_CATEGORY_OPTIONS = [
  "Car",
  "Bike",
  "Truck",
  "CamperVan",
  "ATV",
  "CARAVAN",
  "JEEP",
  "BOAT",
  "JETSKI",
  "Van",
  "RV (Class A)",
  "RV (Class B)",
  "RV (Class C)",
  "Trailer",
  "Fifth wheel",
  "Toy hauler",
] as const;

export type VehicleCategory = (typeof VEHICLE_CATEGORY_OPTIONS)[number];

export type PackageType = "basic" | "detailed";

export const PACKAGE_OPTIONS: { value: PackageType; label: string; price: number }[] = [
  { value: "basic", label: "Basic", price: 25 },
  { value: "detailed", label: "Detailed", price: 40 },
];

export type VehicleOrderFormValues = {
  category: string;
  packageType: string;
  model: string;
  year: string;
  email: string;
};

export type VehicleOrderFormErrors = Partial<Record<keyof VehicleOrderFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const YEAR_PATTERN = /^(19|20)\d{2}$/;

export function validateVehicleOrderForm(values: VehicleOrderFormValues): VehicleOrderFormErrors {
  const errors: VehicleOrderFormErrors = {};

  if (!values.category.trim()) {
    errors.category = "Please select a vehicle category.";
  }

  if (!values.packageType.trim()) {
    errors.packageType = "Please select a package.";
  }

  if (!values.model.trim()) {
    errors.model = "Please enter the vehicle model.";
  }

  if (!values.year.trim()) {
    errors.year = "Please enter the model year.";
  } else if (!YEAR_PATTERN.test(values.year) || Number(values.year) > new Date().getFullYear() + 1) {
    errors.year = "Please enter a valid 4-digit year.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}
