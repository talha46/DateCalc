"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultCard from "@/components/ResultCard";
import ShareButton from "@/components/ShareButton";
import { leapYearDetails } from "@/lib/dateUtils";

export default function LeapYearCalculatorClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [year, setYear] = useState(searchParams.get("year") ?? String(new Date().getFullYear()));

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", year);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams, year]);

  const result = useMemo(() => {
    const parsed = Number(year);
    if (Number.isNaN(parsed) || parsed < 1) return null;
    return leapYearDetails(parsed);
  }, [year]);

  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Leap Year Calculator", href: "/leap-year-calculator" }]} />
      <h1 className="mb-4 text-3xl font-bold text-teal-700">Leap Year Calculator</h1>
      <section className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Year
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
          />
        </label>
      </section>
      <div className="mb-5 flex justify-end">
        <ShareButton />
      </div>
      {result ? (
        <>
          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResultCard
              label="Leap Year?"
              value={result.isLeap ? "Yes" : "No"}
              copyText={`${year} is ${result.isLeap ? "" : "not "}a leap year.`}
            />
            <ResultCard
              label="Previous Leap Year"
              value={String(result.previousLeapYear)}
              copyText={`Previous leap year before ${year} is ${result.previousLeapYear}.`}
            />
            <ResultCard
              label="Next Leap Year"
              value={String(result.nextLeapYear)}
              copyText={`Next leap year after ${year} is ${result.nextLeapYear}.`}
            />
            <ResultCard
              label="Days in Year"
              value={String(result.daysInYear)}
              copyText={`${year} contains ${result.daysInYear} days.`}
            />
          </section>
          <p className="mt-4 text-sm text-gray-500">Calculated in your local timezone (detected automatically).</p>
          <div className="mt-6">
            <AdSenseUnit id="adsense-below-result" />
          </div>
        </>
      ) : (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-700">Enter a valid year.</p>
      )}
    </CalculatorLayout>
  );
}
