import type { MetadataRoute } from "next";
import { daysFromTodayRoutes, holidayRoutes } from "@/lib/programmaticPages";

const baseUrl = 'https://datecalc.xyz';
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
  const programmaticRoutes = [...daysFromTodayRoutes, ...holidayRoutes];
  const routes = [...baseRoutes, ...programmaticRoutes];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
