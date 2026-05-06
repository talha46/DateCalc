import type { Metadata } from "next";
import Link from "next/link";
import { addDays, differenceInCalendarDays, differenceInMonths, endOfYear, format } from "date-fns";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { daysFromTodayStaticValues } from "@/lib/programmaticPages";

type PageProps = {
  params: { days: string };
  searchParams: { start?: string };
};

export const dynamic = "force-dynamic";

function parseDaysValue(raw: string) {
  const match = raw.match(/^(\d+)$/);
  if (!match) return null;
  return Number.parseInt(match[1], 10);
}

function parseStartDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function toISODateInputValue(date: Date) {
  return format(date, "yyyy-MM-dd");
}

function getCanonical(days: number) {
  return `https://datecalc.xyz/${days}-days-from-today`;
}

export function generateStaticParams() {
  return daysFromTodayStaticValues.map((days) => ({ days: String(days) }));
}

export async function generateMetadata({ params }: { params: { days: string } }): Promise<Metadata> {
  const days = parseDaysValue(params.days);
  if (!days) {
    return {
      title: "Days From Today – Date Calculator",
      description: "Find the exact date and weekday for any number of days from today.",
    };
  }

  return {
    title: `${days} Days From Today – Date Calculator`,
    description: `See the exact date ${days} days from today, plus weekday, weeks, months, and days remaining in the year.`,
    alternates: { canonical: getCanonical(days) },
  };
}

export default function DaysFromTodayPage({ params, searchParams }: PageProps) {
  const days = parseDaysValue(params.days);

  if (!days) {
    return (
      <CalculatorLayout>
        <h1 className="text-3xl font-bold text-teal-700">Days From Today</h1>
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">
          Invalid URL format. Try a valid path like <code>/30-days-from-today</code>.
        </p>
      </CalculatorLayout>
    );
  }

  const now = new Date();
  const startDate = parseStartDate(searchParams.start) ?? now;
  const resultDate = addDays(startDate, days);
  const daysRemainingInYear = differenceInCalendarDays(endOfYear(resultDate), resultDate);
  const weeksFromStart = days / 7;
  const monthsFromStart = differenceInMonths(resultDate, startDate);

  const faq = [
    {
      question: `What date is ${days} days from today?`,
      answer: `${days} days from today lands on ${format(resultDate, "EEEE, MMMM d, yyyy")}.`,
    },
    {
      question: `How many weeks are in ${days} days?`,
      answer: `${days} days is ${weeksFromStart.toFixed(2)} weeks.`,
    },
    {
      question: `Can I calculate ${days} days from a custom date?`,
      answer: "Yes. Use the start date calculator on this page to choose any date and get the updated result instantly.",
    },
  ];

  return (
    <CalculatorLayout>
      <FaqJsonLd items={faq} />
      <Breadcrumbs items={[{ label: `${days} Days From Today`, href: `/${days}-days-from-today` }]} />

      <h1 className="mb-4 text-3xl font-bold text-teal-700">{days} Days From Today</h1>
      <p className="mb-6 text-sm text-gray-600">
        Calculate the exact future date for a {days}-day offset and compare with other date tools.
      </p>

      <section className="rounded-xl border border-teal-200 bg-teal-50/40 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Resulting Date</p>
        <p className="mt-2 text-4xl font-bold text-teal-800">{format(resultDate, "EEEE, MMMM d, yyyy")}</p>
      </section>

      <section className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Day of Week</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{format(resultDate, "EEEE")}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Days Remaining in Year</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{daysRemainingInYear}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Weeks From Start Date</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{weeksFromStart.toFixed(2)}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Months From Start Date</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{monthsFromStart}</p>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">Try a Different Start Date</h2>
        <form method="get" className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex w-full flex-col gap-2 text-sm font-medium text-gray-700 sm:max-w-xs">
            Start Date
            <input
              type="date"
              name="start"
              defaultValue={toISODateInputValue(startDate)}
              className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white hover:bg-teal-700"
          >
            Recalculate
          </button>
        </form>
      </section>

      <div className="mt-8">
        <AdSenseUnit id="adsense-below-result" />
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">More Date Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/add-days-to-date" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Add Days to Date Calculator
          </Link>
          <Link
            href="/date-difference-calculator"
            className="text-teal-700 underline underline-offset-2 hover:text-teal-900"
          >
            Date Difference Calculator
          </Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}
