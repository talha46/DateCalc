export const daysFromTodayStaticValues = [7, 10, 14, 15, 20, 21, 25, 30, 45, 60, 90, 100, 120, 180, 365] as const;
export const daysFromTodayRoutes = daysFromTodayStaticValues.map((days) => `/${days}-days-from-today`);

export const holidaySlugs = [
  "new-year",
  "halloween",
  "eid-al-fitr",
  "eid-al-adha",
  "diwali",
  "thanksgiving",
  "valentines-day",
] as const;
export const holidayRoutes = holidaySlugs.map((holiday) => `/days-until-${holiday}`);

export type HolidaySlug = (typeof holidaySlugs)[number];

export type HolidayConfig = {
  slug: HolidaySlug;
  name: string;
  getDate: (year: number) => Date;
  isApproximate?: boolean;
};

function getNthWeekdayOfMonth(year: number, monthIndex: number, weekday: number, occurrence: number) {
  const firstDay = new Date(year, monthIndex, 1);
  const firstWeekdayOffset = (weekday - firstDay.getDay() + 7) % 7;
  const dayOfMonth = 1 + firstWeekdayOffset + (occurrence - 1) * 7;
  return new Date(year, monthIndex, dayOfMonth);
}

export const holidayConfigBySlug: Record<HolidaySlug, HolidayConfig> = {
  "new-year": {
    slug: "new-year",
    name: "New Year",
    getDate: (year) => new Date(year, 0, 1),
  },
  halloween: {
    slug: "halloween",
    name: "Halloween",
    getDate: (year) => new Date(year, 9, 31),
  },
  "eid-al-fitr": {
    slug: "eid-al-fitr",
    name: "Eid al-Fitr",
    getDate: (year) => (year === 2026 ? new Date(2026, 2, 20) : new Date(year, 2, 20)),
    isApproximate: true,
  },
  "eid-al-adha": {
    slug: "eid-al-adha",
    name: "Eid al-Adha",
    getDate: (year) => (year === 2026 ? new Date(2026, 4, 27) : new Date(year, 4, 27)),
    isApproximate: true,
  },
  diwali: {
    slug: "diwali",
    name: "Diwali",
    getDate: (year) => new Date(year, 10, 8),
  },
  thanksgiving: {
    slug: "thanksgiving",
    name: "Thanksgiving",
    getDate: (year) => getNthWeekdayOfMonth(year, 10, 4, 4),
  },
  "valentines-day": {
    slug: "valentines-day",
    name: "Valentine's Day",
    getDate: (year) => new Date(year, 1, 14),
  },
};

export function getUpcomingHolidayDate(slug: HolidaySlug, now = new Date()) {
  const config = holidayConfigBySlug[slug];
  const thisYear = config.getDate(now.getFullYear());
  if (thisYear.getTime() >= now.getTime()) return thisYear;
  return config.getDate(now.getFullYear() + 1);
}
