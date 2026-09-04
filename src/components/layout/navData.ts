import type { IconName } from "@/components/ui/Icon";

export type NavLink = { label: string; href: string; description?: string; icon?: IconName };

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const productLinks: NavLink[] = [
  { label: "HPI Check", href: "/hpi-check", description: "Get peace of mind with a car history check you can trust", icon: "tick" },
  { label: "Valuation", href: "/valuation", description: "Get your free instant car valuation now!", icon: "pound" },
  { label: "MOT Check", href: "/mot-check", description: "Get a quick and easy MOT Check on any car", icon: "mot" },
  { label: "Safety Recall Checks", href: "/safety-recall-check", description: "The quickest and simplest way to check for a vehicle recall", icon: "tick" },
  { label: "TCO Checks", href: "/tco-check", description: "Find the cheapest car to run", icon: "chart" },
  { label: "Data API", href: "/data-api", description: "Integrate with our award winning data", icon: "api" },
];

export const aboutLinks: NavLink[] = [
  { label: "About HPI", href: "/about" },
  { label: "What is an HPI Check", href: "/what-is-an-hpi-check" },
  { label: "Buyers Guide", href: "/buyers-guide" },
  { label: "Assess a Vehicle", href: "/assess-a-vehicle" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "Blog", href: "/blog" },
];

export const helpLinks: NavLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Glossary", href: "/glossary" },
  { label: "Contact", href: "/contact" },
];

export const navItems: NavItem[] = [
  { label: "myhpi", href: "/myhpi" },
  { label: "Products & Services", href: "/products", children: productLinks },
  { label: "About", href: "/about", children: aboutLinks },
  { label: "Help", href: "/help", children: helpLinks },
  { label: "Blog", href: "/blog" },
];
