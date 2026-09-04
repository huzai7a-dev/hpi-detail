import Icon, { type IconName } from "@/components/ui/Icon";

type DataItem = {
  title: string;
  body: string;
  icon: IconName;
};

const items: DataItem[] = [
  { title: "Vehicle technical data", body: "Includes: make/model, engine capacity, torque vehicle spec, colour, weight, etc.", icon: "clipboard" },
  { title: "Factory fitted options", body: "Access to the UK’s only factory-fit database with manufacturers standard options and list price", icon: "card" },
  { title: "Used car valuations", body: "Condition adjustable, private sale, trade-in, forecourt, and at new values plus past and future values", icon: "moneybag" },
  { title: "Car finance data", body: "Includes: finance company, agreement type, date and contact details", icon: "briefcase" },
  { title: "Insurance write-off data", body: "Includes write-off date and damage category Cat ABCDSN", icon: "edit" },
  { title: "Service, maintenance and repair (SMR)", body: "Estimates and details for the car’s service, maintenance and repair costs", icon: "wrench" },
  { title: "MOT history", body: "Includes: MOT status, previous test results and advisory notes", icon: "mot" },
  { title: "DVLA data", body: "Vehicle data held by the DVLA", icon: "building" },
  { title: "Mileage information", body: "Any mileage discrepancies recorded on the nmr (national mileage register)", icon: "gauge" },
  { title: "Manufacturer safety recall", body: "Alerts to any recalls on a vehicle due a critical safety defect. The only place to get recall data based specifically on the number plate", icon: "exclamation" },
  { title: "Plate change info", body: "Al plate change information including date of change, plus any markers recorded against previous plates", icon: "plate" },
  { title: "Recorded stolen (Police PNC records)", body: "Alert for vehicles currently recorded as stolen with the police", icon: "shield" },
  { title: "Total cost of ownership", body: "Total annual running costs including insurance, fuel, tax, service and maintenance", icon: "chart" },
  { title: "Euro emissions standard", body: "Provides the vehicle’s Euro emissions standard (Euro 1-6)", icon: "globe" },
  { title: "Imported / exported / scrapped", body: "Flags vehicles that have been imported, exported or recorded scrapped by the DVLA", icon: "plane" },
];

export default function DataGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex gap-3">
          <Icon name={item.icon} className="mt-1 h-6 w-6 shrink-0 text-(--color-navy-light)" strokeWidth={1.4} />
          <div>
            <h3 className="text-lg font-normal text-(--color-navy-light)">{item.title}</h3>
            <p className="mt-1 text-sm text-(--color-navy-light)">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
