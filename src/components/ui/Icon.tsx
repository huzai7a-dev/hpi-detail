import type { SVGProps } from "react";

export type IconName =
  | "check-circle"
  | "pound"
  | "tick"
  | "mot"
  | "chart"
  | "arrow-right"
  | "menu"
  | "close"
  | "chevron-down"
  | "star"
  | "shield"
  | "card"
  | "briefcase"
  | "edit"
  | "globe"
  | "recall"
  | "wrench"
  | "clipboard"
  | "key"
  | "truck"
  | "auction"
  | "refresh"
  | "dealership"
  | "building"
  | "api"
  | "gauge"
  | "moneybag"
  | "people"
  | "plane"
  | "fuel"
  | "scrap"
  | "exclamation"
  | "plate"
  | "clock"
  | "percent"
  | "calendar"
  | "mail"
  | "phone"
  | "book";

const paths: Record<IconName, React.ReactNode> = {
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L15.5 10" />
    </>
  ),
  pound: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 16h5M9.5 16c1.6 0 2-1 2-2.2V9.8c0-1.8 1.2-2.8 2.7-2.8.9 0 1.6.3 2 .7M8.5 12.5H13" />
    </>
  ),
  tick: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
  mot: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l4.5 8H7.5L12 7z" />
      <path d="M12 12.5v1.5M12 15.5v.1" />
    </>
  ),
  chart: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 15.5v-3M12 15.5v-5M16 15.5v-2" />
    </>
  ),
  "arrow-right": <path d="M5 12h13M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.9L12 3.5z" />,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9.5 12l1.8 1.8L15 10" />,
  card: <><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M3 10h18M6.5 14h3" /></>,
  briefcase: <><rect x="3" y="8" width="18" height="11" rx="1.5" /><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" /></>,
  edit: <><path d="M4 20l1-4 11-11 3 3-11 11-4 1z" /><path d="M14 6l3 3" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></>,
  recall: <><path d="M4 19l8-14 8 14H4z" /><path d="M12 10v4M12 16.5v.1" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 00-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 004.6-5.4l-2.6 2.6-2-2 2.6-2.6z" />,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="1.5" /><rect x="8" y="2.5" width="8" height="3.5" rx="1" /><path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" /></>,
  key: <><circle cx="8" cy="15" r="3.5" /><path d="M10.5 12.5L18 5M15.5 7.5l2 2M18 5l2 2" /></>,
  truck: <><rect x="2.5" y="8" width="11" height="8" rx="1" /><path d="M13.5 11h3.5l3 3v2h-6.5z" /><circle cx="6.5" cy="18" r="1.6" /><circle cx="16" cy="18" r="1.6" /></>,
  auction: <><path d="M4 21h9M8.5 3l3.5 3.5L5 13.5 1.5 10 8.5 3z" /><path d="M13 8.5L20 15.5" /><path d="M14.5 15.5h6" /></>,
  refresh: <path d="M20 11a8 8 0 10-2.6 5.9M20 6v5h-5M4 13a8 8 0 002.6 5.9M4 18v-5h5" />,
  dealership: <><path d="M3 20h18" /><path d="M4 20V9l8-5 8 5v11" /><path d="M9 20v-6h6v6" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></>,
  api: <><rect x="4" y="5" width="16" height="14" rx="1.5" /><path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" /></>,
  gauge: <><circle cx="12" cy="13" r="8" /><path d="M12 13l3.5-3.5M12 5v1.5M4.5 13H3M21 13h-1.5M6.5 7.5l1 1M17.5 7.5l-1 1" /></>,
  moneybag: <><path d="M9.5 4h5l1.8 3H7.7L9.5 4z" /><path d="M7.5 7c-2.2 3-3.5 6-3.5 8.5A7.5 7.5 0 0012 20a7.5 7.5 0 007.5-4.5c0-2.5-1.3-5.5-3.5-8.5" /><path d="M12 11.5v5M10 14h4" /></>,
  people: <><circle cx="8.5" cy="8.5" r="2.5" /><path d="M4 19c0-2.5 2-4.5 4.5-4.5S13 16.5 13 19" /><circle cx="16.5" cy="9.5" r="2" /><path d="M14.8 19c.3-2 1.8-3.5 3.5-3.5 1.9 0 3.4 1.4 3.9 3.5" /></>,
  plane: <path d="M3 12.5l18-8.5-8.5 18-2-8-7.5-1.5z" />,
  fuel: <><rect x="4" y="4" width="9" height="16" rx="1.2" /><path d="M7 4v6h3V4" /><path d="M15 9h1.8a2 2 0 012 2v6.2a1.4 1.4 0 01-2.8 0V14h-1" /></>,
  scrap: <><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></>,
  exclamation: <><circle cx="12" cy="12" r="9" /><path d="M12 7.5v6M12 16.5v.1" /></>,
  plate: <><rect x="3" y="7" width="18" height="10" rx="1.5" /><path d="M6.5 11h4M6.5 14h6.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  percent: <><circle cx="12" cy="12" r="9" /><path d="M8.5 15.5l7-7M9 10a1.2 1.2 0 100-2.4A1.2 1.2 0 009 10zM15 16.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="1.5" /><path d="M4 9.5h16M8 3v3.5M16 3v3.5M8 13h2M8 16.5h2M14 13h2M14 16.5h2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="M3.5 6l8.5 7 8.5-7" /></>,
  phone: <path d="M6.5 3.5l3 5-2 1.8a11 11 0 005.2 5.2l1.8-2 5 3v2.5a2 2 0 01-2.2 2C10.5 20.4 3.6 13.5 4 6.2a2 2 0 012.5-2.7z" />,
  book: <><path d="M4 5.5c2-1 5-1 8 .5 3-1.5 6-1.5 8-.5v13c-2-1-5-1-8 .5-3-1.5-6-1.5-8-.5v-13z" /><path d="M12 6v13" /></>,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.6,
  ...rest
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
