export type ToolLink = {
  key: ToolKey;
  name: string;
  description: string;
  href: string;
};

export type ToolKey =
  | "age-calculator"
  | "date-difference-calculator"
  | "days-until"
  | "birthday-calculator"
  | "weeks-between-dates"
  | "business-days-calculator"
  | "add-days-to-date"
  | "leap-year-calculator";

export const TOOL_LINKS: Record<ToolKey, ToolLink> = {
  "age-calculator": {
    key: "age-calculator",
    name: "Age Calculator",
    description: "Calculate exact age in years, months, days, hours, and minutes.",
    href: "/",
  },
  "date-difference-calculator": {
    key: "date-difference-calculator",
    name: "Date Difference Calculator",
    description: "Find total days, weeks, months, and years between any two dates.",
    href: "/date-difference-calculator",
  },
  "days-until": {
    key: "days-until",
    name: "Days Until Calculator",
    description: "Track a live countdown to any upcoming date or event.",
    href: "/days-until",
  },
  "birthday-calculator": {
    key: "birthday-calculator",
    name: "Birthday Calculator",
    description: "Discover weekday of birth, zodiac sign, and other birthday details.",
    href: "/birthday-calculator",
  },
  "weeks-between-dates": {
    key: "weeks-between-dates",
    name: "Weeks Between Dates",
    description: "Get full weeks and remaining days between two selected dates.",
    href: "/weeks-between-dates",
  },
  "business-days-calculator": {
    key: "business-days-calculator",
    name: "Business Days Calculator",
    description: "Count weekdays only while excluding weekends and custom holidays.",
    href: "/business-days-calculator",
  },
  "add-days-to-date": {
    key: "add-days-to-date",
    name: "Add Days to Date",
    description: "Add or subtract days, weeks, months, or years from any date.",
    href: "/add-days-to-date",
  },
  "leap-year-calculator": {
    key: "leap-year-calculator",
    name: "Leap Year Calculator",
    description: "Check leap-year status and find previous and next leap years.",
    href: "/leap-year-calculator",
  },
};

export function getToolLinks(keys: ToolKey[]) {
  return keys.map((key) => TOOL_LINKS[key]);
}
