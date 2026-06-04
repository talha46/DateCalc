import Link from "next/link";
import { differenceInCalendarDays, format } from "date-fns";
import { BLOG_PUBLISH_DATE } from "@/lib/blog/posts";
import { holidayConfigBySlug } from "@/lib/programmaticPages";

type HolidayRow = {
  name: string;
  date: Date;
  countdownHref?: string;
  approximate?: boolean;
  note?: string;
};

function daysFromPublish(target: Date) {
  return differenceInCalendarDays(target, BLOG_PUBLISH_DATE);
}

function formatHolidayDate(date: Date) {
  return format(date, "EEEE, MMMM d, yyyy");
}

export default function DaysUntilMajorHolidays2026Article() {
  const publishLabel = format(BLOG_PUBLISH_DATE, "MMMM d, yyyy");

  const rows: HolidayRow[] = [
    {
      name: "Eid al-Fitr",
      date: holidayConfigBySlug["eid-al-fitr"].getDate(2026),
      countdownHref: "/days-until-eid-al-fitr",
      approximate: true,
      note: "Islamic dates follow lunar sighting; this is the site’s 2026 planning estimate.",
    },
    {
      name: "Eid al-Adha",
      date: holidayConfigBySlug["eid-al-adha"].getDate(2026),
      countdownHref: "/days-until-eid-al-adha",
      approximate: true,
    },
    {
      name: "Halloween",
      date: holidayConfigBySlug.halloween.getDate(2026),
      countdownHref: "/days-until-halloween",
    },
    {
      name: "Diwali",
      date: holidayConfigBySlug.diwali.getDate(2026),
      countdownHref: "/days-until-diwali",
      note: "Regional calendars vary; many communities celebrate across multiple days.",
    },
    {
      name: "Thanksgiving (U.S.)",
      date: holidayConfigBySlug.thanksgiving.getDate(2026),
      countdownHref: "/days-until-thanksgiving",
    },
    {
      name: "Christmas",
      date: new Date(2026, 11, 25),
      countdownHref: "/days-until",
      note: "Set December 25, 2026 in the Days Until calculator for a live countdown.",
    },
    {
      name: "New Year’s Day",
      date: new Date(2027, 0, 1),
      countdownHref: "/days-until-new-year",
      note: "Next January 1 celebration after mid-2026 is January 1, 2027.",
    },
  ];

  const futureRows = rows.filter((row) => daysFromPublish(row.date) >= 0).sort((a, b) => a.date.getTime() - b.date.getTime());
  const pastRows = rows.filter((row) => daysFromPublish(row.date) < 0).sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <>
      <p>
        Holiday planning in 2026 is easier when you anchor on real dates instead of vague “a few months out.” This guide
        lists major observances with exact calendar days and how many days remain from <strong>{publishLabel}</strong>—the
        date this article was published. Numbers are fixed at publish time; for a live second-by-second countdown, open the
        linked <Link href="/days-until">Days Until</Link> tool or each holiday page below.
      </p>

      <h2>How we measured “days remaining”</h2>
      <p>
        We count calendar days forward from {publishLabel} to each holiday’s date in the same local-date sense our
        calculators use. Islamic holidays marked approximate follow common 2026 estimates and may shift by a day or two
        after moon sighting—always confirm with your local mosque or authority. Thanksgiving is the fourth Thursday of
        November (November 26, 2026).
      </p>

      <h2>Upcoming holidays from {publishLabel}</h2>
      {futureRows.length === 0 ? (
        <p>All listed 2026 observances below this publish date have already passed; use the countdown tools for 2027 dates.</p>
      ) : (
        <ul>
          {futureRows.map((row) => {
            const remaining = daysFromPublish(row.date);
            return (
              <li key={`${row.name}-${row.date.toISOString()}`}>
                <strong>{row.name}</strong> — {formatHolidayDate(row.date)}
                {row.approximate ? " (approximate)" : ""}:{" "}
                <strong>
                  {remaining} day{remaining === 1 ? "" : "s"} remaining
                </strong>
                .{" "}
                {row.countdownHref ? (
                  <Link href={row.countdownHref}>Live countdown</Link>
                ) : null}
                {row.note ? <> — {row.note}</> : null}
              </li>
            );
          })}
        </ul>
      )}

      <h2>Already passed earlier in 2026</h2>
      <p>
        If you are reading from {publishLabel} onward, these 2026 dates are behind us but still useful for receipts,
        school calendars, or “how long ago was Eid?” questions:
      </p>
      <ul>
        {pastRows.map((row) => {
          const elapsed = Math.abs(daysFromPublish(row.date));
          return (
            <li key={`past-${row.name}-${row.date.toISOString()}`}>
              <strong>{row.name}</strong> — {formatHolidayDate(row.date)}
              {row.approximate ? " (approximate)" : ""}: was <strong>{elapsed}</strong> day
              {elapsed === 1 ? "" : "s"} before this article’s publish date.
            </li>
          );
        })}
      </ul>

      <h2>Holiday-by-holiday notes</h2>

      <h3>Halloween — October 31, 2026</h3>
      <p>
        Fixed on the civil calendar. Schools and cities set trick-or-treat hours separately from the date itself.{" "}
        <Link href="/days-until-halloween">Days until Halloween</Link>.
      </p>

      <h3>Diwali — November 8, 2026 (main date on DateCalc)</h3>
      <p>
        The festival of lights spans multiple days in many households; travel and leave requests often cover the whole
        window, not just Lakshmi Puja. <Link href="/days-until-diwali">Days until Diwali</Link>.
      </p>

      <h3>Thanksgiving — November 26, 2026</h3>
      <p>
        U.S. fourth-Thursday rule; Canada celebrates on a different October Monday. Black Friday logistics bleed into
        calendar-day counting for returns. <Link href="/days-until-thanksgiving">Days until Thanksgiving</Link>.
      </p>

      <h3>Christmas — December 25, 2026</h3>
      <p>
        Federal and school closures often create a multi-day effective break even when only the twenty-fifth is the
        holiday. Shipping cutoffs frequently use business days beforehand—see our{" "}
        <Link href="/blog/how-to-count-business-days">business days guide</Link>.
      </p>

      <h3>New Year’s Day — January 1, 2027</h3>
      <p>
        From mid-2026, the next widely observed New Year’s Day is 2027’s January 1. Fireworks and fiscal years disagree on
        when the “year turns”; contracts may say January 1 while your employer’s fiscal year starts in July.{" "}
        <Link href="/days-until-new-year">Days until New Year</Link>.
      </p>

      <h3>Eid al-Fitr and Eid al-Adha</h3>
      <p>
        Lunar Islamic holidays move every Gregorian year. Our 2026 estimates are March 20 for Eid al-Fitr and May 27 for
        Eid al-Adha—both before {publishLabel} in 2026, so they appear in the “already passed” list above. Communities
        finalize dates after moon sighting; treat tables as planning aids.{" "}
        <Link href="/days-until-eid-al-fitr">Eid al-Fitr countdown</Link> ·{" "}
        <Link href="/days-until-eid-al-adha">Eid al-Adha countdown</Link>.
      </p>

      <h2>Tools to keep counts honest</h2>
      <p>
        Publish-date math goes stale overnight. Bookmark <Link href="/days-until">Days Until</Link> for arbitrary targets,
        or use holiday-specific pages that refresh automatically. For contract-style “90 days from today” landing dates, see{" "}
        <Link href="/90-days-from-today">90 days from today</Link> and the{" "}
        <Link href="/blog/how-many-days-between-dates">days-between-dates guide</Link>.
      </p>
      <p>
        Holidays are social clocks layered on top of solar ones. Knowing the exact 2026 anchor day—and how far it sits from
        today—turns vague “later this year” into plans you can actually schedule.
      </p>
    </>
  );
}
