import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug.diwali;

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Diwali – Date Calculator",
    description: "Days until Diwali — live countdown to the Festival of Lights. See the exact date and days remaining to help plan decorations, gifting, and celebrations.",
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
