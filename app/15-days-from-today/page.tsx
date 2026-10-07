import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "15 Days From Today – Date Calculator",
    description: "15 days from today — find the exact date near the midpoint of a 30-day month. Useful for payroll corrections, subscription renewal reminders, and mid-cycle planning.",
    alternates: { canonical: "https://datecalc.xyz/15-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={15} />;
}
