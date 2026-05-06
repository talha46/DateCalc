import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug.thanksgiving;

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Thanksgiving – Date Calculator",
    description: "Live countdown and exact date for Thanksgiving.",
    alternates: { canonical: "https://datecalc.xyz/days-until-thanksgiving" },
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
