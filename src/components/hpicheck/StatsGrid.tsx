import Icon, { type IconName } from "@/components/ui/Icon";

type Stat = {
  title: string;
  body: string;
  icon: IconName;
  color: string;
};

const stats: Stat[] = [
  {
    title: "1 in 3 has a hidden issue",
    body: "The car you’re looking to buy could be hiding a multitude of issues that aren't always obvious just by looking at it.",
    icon: "exclamation",
    color: "#576f87",
  },
  {
    title: "1 in 11 has a mileage discrepancy",
    body: "If a car has a mileage discrepancy it means it could have been clocked and you could end up paying over the odds for a car that has more wear and tear than you'd have known otherwise.",
    icon: "gauge",
    color: "#5cb960",
  },
  {
    title: "1 in 4 has had a plate change",
    body: "Plate changes can be legitimate but could also be an attempt to hide issues on a previous plate. An HPI Car Check will provide information on these previous plates.",
    icon: "plate",
    color: "#b16bc8",
  },
  {
    title: "1 in 3 has an outstanding debt or finance agreement",
    body: "Car finance and logbook loans stay with the car so you could be buying someone else’s debt. If a debt isn't settled the finance company may repossess the car meaning you could lose your car and the money you paid. The HPI Car Check is the original check to find out if a car is on finance.",
    icon: "briefcase",
    color: "#3fafd8",
  },
  {
    title: "109 per day are identified as stolen",
    body: "The HPI Car Check scans the Police National Computer to ensure the car isn't recorded as stolen.",
    icon: "shield",
    color: "#f086a7",
  },
  {
    title: "2205 are discovered to be write-offs on a daily basis",
    body: "It’s important you know if the car you’re buying was previously involved in an accident. The HPI Car Check will tell you if it’s been written off by an insurance company even if the seller won’t.",
    icon: "tick",
    color: "#57bbb3",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.title}>
          <div className="flex items-start gap-3">
            <Icon name={stat.icon} className="h-8 w-8 shrink-0" style={{ color: stat.color }} strokeWidth={1.4} />
            <h3 className="text-lg font-normal text-(--color-navy-light)">{stat.title}</h3>
          </div>
          <p className="mt-2 text-(--color-navy-light)">{stat.body}</p>
        </div>
      ))}
    </div>
  );
}
