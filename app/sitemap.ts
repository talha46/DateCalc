import type { MetadataRoute } from "next";

const base = "https://datecalc.xyz";
const routes = [
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
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
