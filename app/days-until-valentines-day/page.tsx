import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug["valentines-day"];

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Valentine's Day – Date Calculator",
    description: "Days until Valentine's Day — live countdown to February 14. See the exact date and weekday to help plan gifts, restaurant bookings, and deliveries.",
    alternates: { canonical: "https://datecalc.xyz/days-until-valentines-day" },
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
