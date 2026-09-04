"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";

type Sample = {
  label: string;
  icon: IconName;
  json: string;
};

const samples: Sample[] = [
  {
    label: "Valuation data",
    icon: "moneybag",
    json: `{
  "valuation": {
    "tradeIn": 8250,
    "privateSale": 9450,
    "forecourt": 10650,
    "priceAtNew": 18995
  }
}`,
  },
  {
    label: "Factory fitted options",
    icon: "card",
    json: `{
  "options": [
    { "code": "PDC", "name": "Parking Distance Control", "listPrice": 395 },
    { "code": "PAN", "name": "Panoramic Roof", "listPrice": 995 }
  ]
}`,
  },
  {
    label: "Vehicle data",
    icon: "card",
    json: `{
  "vehicle": {
    "make": "Ford",
    "model": "Focus",
    "colour": "Blue",
    "fuelType": "Petrol"
  }
}`,
  },
  {
    label: "Vehicle technical data",
    icon: "clipboard",
    json: `{
  "technical": {
    "engineCapacity": 1499,
    "torqueNm": 240,
    "weightKg": 1345
  }
}`,
  },
  {
    label: "Manufacturer recall",
    icon: "exclamation",
    json: `{
  "recalls": [
    { "date": "2023-04-11", "description": "Fuel pump replacement", "outstanding": false }
  ]
}`,
  },
  {
    label: "DVLA data",
    icon: "building",
    json: `{
  "dvla": {
    "taxStatus": "Taxed",
    "taxDueDate": "2026-11-01",
    "motStatus": "Valid"
  }
}`,
  },
  {
    label: "MOT history data",
    icon: "mot",
    json: `{
  "motHistory": [
    { "testDate": "2025-08-02", "result": "Pass", "mileage": 42150 }
  ]
}`,
  },
  {
    label: "SMR data",
    icon: "wrench",
    json: `{
  "smr": {
    "annualServiceCost": 210,
    "annualMaintenanceCost": 340
  }
}`,
  },
  {
    label: "Total cost of ownership",
    icon: "chart",
    json: `{
  "tco": {
    "threeYearTotal": 9840,
    "fuel": 3200,
    "insurance": 2100,
    "depreciation": 4540
  }
}`,
  },
];

export default function DataSamplePanel() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,320px)_1fr]">
      <div className="divide-y divide-(--color-border) rounded-(--radius-md) border border-(--color-border) bg-white">
        {samples.map((sample, i) => (
          <button
            key={sample.label}
            type="button"
            onClick={() => setActive(i)}
            className={`flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left font-bold transition-colors ${
              active === i ? "bg-(--color-surface) text-(--color-navy-light)" : "text-(--color-navy-light) hover:bg-(--color-surface)"
            }`}
          >
            <span className="flex items-center gap-3">
              <Icon name={sample.icon} className="h-5 w-5 shrink-0" strokeWidth={1.6} />
              {sample.label}
            </span>
            <Icon name="arrow-right" className="h-4 w-4 shrink-0" />
          </button>
        ))}
      </div>

      <pre className="overflow-auto rounded-(--radius-md) border border-(--color-border) bg-white p-6 text-sm text-(--color-navy-light)">
        <code>{samples[active].json}</code>
      </pre>
    </div>
  );
}
