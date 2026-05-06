import type { MetadataRoute } from "next";
import { daysFromTodayStaticValues, holidaySlugs } from "@/lib/programmaticPages";

const base = "https://datecalc.xyz";
const baseRoutes = [
  "",
  "/date-difference-calculator",
  "/days-until",
  "/birthday-calculator",
  "/weeks-between-dates",
  "/business-days-calculator",
  "/add-days-to-date",
  "/leap-year-calculator",
  "/about",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programmaticRoutes = [
    ...daysFromTodayStaticValues.map((days) => `/${days}-days-from-today`),
    ...holidaySlugs.map((holiday) => `/days-until-${holiday}`),
  ];
  const routes = [...baseRoutes, ...programmaticRoutes];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
