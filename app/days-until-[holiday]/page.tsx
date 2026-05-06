import type { Metadata } from "next";
import Link from "next/link";
import { differenceInCalendarDays, format } from "date-fns";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import HolidayCountdown from "@/app/days-until-[holiday]/HolidayCountdown";
import { getUpcomingHolidayDate, holidayConfigBySlug, holidaySlugs, type HolidaySlug } from "@/lib/programmaticPages";

type PageProps = {
  params: { holiday: string };
};

export const dynamic = "force-dynamic";

function isHolidaySlug(value: string): value is HolidaySlug {
  return (holidaySlugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return holidaySlugs.map((holiday) => ({ holiday }));
}

function holidayPageTitle(name: string) {
  return `Days Until ${name} – Date Calculator`;
}

function canonicalUrl(holiday: HolidaySlug) {
  return `https://datecalc.xyz/days-until-${holiday}`;
}

export async function generateMetadata({ params }: { params: { holiday: string } }): Promise<Metadata> {
  if (!isHolidaySlug(params.holiday)) {
    return {
      title: "Days Until Holiday – Date Calculator",
      description: "Track days, hours, minutes, and seconds until major holidays.",
    };
  }

  const config = holidayConfigBySlug[params.holiday];

  return {
    title: holidayPageTitle(config.name),
    description: `Live countdown with exact date for ${config.name}. See how many days, hours, minutes, and seconds are left.`,
    alternates: { canonical: canonicalUrl(params.holiday) },
  };
}

export default function DaysUntilHolidayPage({ params }: PageProps) {
  if (!isHolidaySlug(params.holiday)) {
    return (
      <CalculatorLayout>
        <h1 className="text-3xl font-bold text-teal-700">Days Until Holiday</h1>
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">
          Invalid holiday slug. Try paths like <code>/days-until-new-year</code>.
        </p>
      </CalculatorLayout>
    );
  }

  const config = holidayConfigBySlug[params.holiday];
  const targetDate = getUpcomingHolidayDate(params.holiday);
  const now = new Date();
  const daysLeft = Math.max(0, differenceInCalendarDays(targetDate, now));
  const formattedDate = format(targetDate, "EEEE, MMMM d, yyyy");

  const faq = [
    {
      question: `How many days until ${config.name}?`,
      answer: `There are ${daysLeft} days until ${config.name}.`,
    },
    {
      question: `What date is ${config.name}?`,
      answer: `${config.name} falls on ${formattedDate}.`,
    },
    {
      question: `Does the ${config.name} countdown update automatically?`,
      answer: "Yes. This page updates the timer every second for a live countdown.",
    },
  ];

  return (
    <CalculatorLayout>
      <FaqJsonLd items={faq} />
      <Breadcrumbs items={[{ label: `Days Until ${config.name}`, href: `/days-until-${params.holiday}` }]} />

      <h1 className="mb-4 text-3xl font-bold text-teal-700">Days Until {config.name}</h1>
      <p className="rounded-xl border border-teal-200 bg-teal-50/40 p-4 text-teal-900">
        {config.name} is on <span className="font-semibold">{formattedDate}</span>.
      </p>
      {config.isApproximate ? (
        <p className="mt-3 text-sm text-amber-700">
          Islamic holiday dates use hardcoded 2026 estimates and may vary by local moon sighting.
        </p>
      ) : null}

      <HolidayCountdown holidayName={config.name} targetDateIso={targetDate.toISOString()} />

      <div className="mt-8">
        <AdSenseUnit id="adsense-below-result" />
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">Related Date Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/days-until" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Days Until Calculator
          </Link>
          <Link href="/date-difference-calculator" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Date Difference Calculator
          </Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}
