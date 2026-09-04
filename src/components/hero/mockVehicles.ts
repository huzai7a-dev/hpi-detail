export type MockVehicle = {
  make: string;
  model: string;
  colour: string;
  fuel: string;
  firstRegistered: string;
};

const vehicles: MockVehicle[] = [
  { make: "BMW", model: "3 Series", colour: "Black", fuel: "Diesel", firstRegistered: "March 2020" },
  { make: "Ford", model: "Fiesta", colour: "Blue", fuel: "Petrol", firstRegistered: "July 2018" },
  { make: "Volkswagen", model: "Golf", colour: "Grey", fuel: "Petrol", firstRegistered: "January 2021" },
  { make: "Audi", model: "A4", colour: "White", fuel: "Diesel", firstRegistered: "October 2019" },
  { make: "Vauxhall", model: "Corsa", colour: "Red", fuel: "Petrol", firstRegistered: "May 2017" },
  { make: "Toyota", model: "Yaris", colour: "Silver", fuel: "Hybrid", firstRegistered: "September 2022" },
];

export function getMockVehicle(reg: string): MockVehicle {
  const clean = reg.replace(/\s+/g, "").toUpperCase();
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) >>> 0;
  }
  return vehicles[hash % vehicles.length];
}

export function isPlausibleReg(reg: string): boolean {
  const clean = reg.replace(/\s+/g, "").toUpperCase();
  return /^[A-Z]{2}[0-9]{2}[A-Z]{3}$/.test(clean) || (clean.length >= 4 && clean.length <= 8 && /[A-Z]/.test(clean) && /[0-9]/.test(clean));
}
