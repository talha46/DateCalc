import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "25 Days From Today – Date Calculator",
    description: "25 days from today — find the exact date for a window that sits between three and four weeks. Covers credit dispute timelines, warranty grace periods, and policies that avoid calendar-month anchoring.",
    alternates: { canonical: "https://datecalc.xyz/25-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={25} />;
}
