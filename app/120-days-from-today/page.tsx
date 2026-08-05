import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "120 Days From Today – Date Calculator",
    description: "120 days from today — find the exact date roughly four months out. Covers visa processing estimates, mortgage timelines, insurance waiting periods, and project phase gates.",
    alternates: { canonical: "https://datecalc.xyz/120-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={120} />;
}
