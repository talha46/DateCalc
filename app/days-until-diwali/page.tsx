import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug.diwali;

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Diwali – Date Calculator",
    description: "Live countdown and exact date for Diwali.",
    alternates: { canonical: "https://datecalc.xyz/days-until-diwali" },
  };
}

export default function Page() {
  return (
    <HolidayCountdown
      slug={config.slug}
      holidayName={config.name}
      targetDate={getUpcomingHolidayDate(config.slug)}
      isApproximate={config.isApproximate}
    />
  );
}
