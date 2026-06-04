import Link from "next/link";

export default function HowToCalculateAgeManuallyArticle() {
  return (
    <>
      <p>
        You have probably answered “how old are you?” hundreds of times with a round number—thirty-two, forty-five,
        whatever fits the moment. But when a form asks for age in years, months, and days, or when you need to know how
        old someone was on a specific past date, the mental shortcut stops working. Doing it by hand is slower than using
        an <Link href="/">age calculator</Link>, yet understanding the steps helps you catch errors on paperwork and
        makes sense of why two people born on the same calendar day can disagree about “age” in different countries.
      </p>

      <h2>The basic formula: years, then months, then days</h2>
      <p>
        Exact age is not “today’s year minus birth year” unless the birthday has already happened this year. The
        reliable approach is subtraction in three passes, always in order:
      </p>
      <ol>
        <li>
          <strong>Years:</strong> Start with the difference between the as-of year and the birth year. If the as-of month
          is before the birth month—or the months match but the as-of day is before the birth day—subtract one from that
          year count.
        </li>
        <li>
          <strong>Months:</strong> From the birth month/day anchor, count how many full months remain until the as-of
          date. If the as-of day is earlier in the month than the birth day, borrow one month (twelve months minus the
          partial gap).
        </li>
        <li>
          <strong>Days:</strong> Whatever is left after full months are accounted for, expressed as days within the final
          partial month.
        </li>
      </ol>
      <p>
        Think of it like making change: you cannot skip straight to days without settling months, and you cannot settle
        months until years are correct.
      </p>

      <h3>Worked example</h3>
      <p>
        Birth date: March 14, 1990. As-of date: June 4, 2026. Years: 2026 − 1990 = 36, and the birthday (March 14) has
        already passed in 2026, so we keep 36 years. Months: from March 14 to June 14 would
        be three months; we are at June 4, which is ten days short of June 14, so months = 2 and we borrow. Days: from
        May 14 to June 4 is 21 days (May has 31 days, so 31 − 14 + 4 = 21). Result: <strong>36 years, 2 months, 21 days</strong>.
        Plug the same pair into the <Link href="/">Age Calculator</Link> to verify.
      </p>

      <h2>Why your age in days sounds unbelievable</h2>
      <p>
        Years feel intuitive; days feel abstract until you total them. A person who has lived 55 years has also lived
        roughly 20,000 days—about 20,075 on a normal mix of leap and common years, give or take a few depending on where
        February 29 falls in their lifetime. That is not a party trick: insurance tables, epidemiology, and retirement
        planning sometimes reason in person-days rather than “55.”
      </p>
      <p>
        The surprise is scale. You experience life year by year, so “twenty thousand anything” sounds huge even though
        you are the same person who said they were fifty-five yesterday. When someone asks for age in days for a
        milestone (10,000 days alive, for instance), manual multiplication by 365 fails because leap years add extras.
        Counting from birth date to target date—one day at a time—or using a tool avoids that drift.
      </p>

      <h2>How different cultures count age</h2>
      <p>
        Not everyone uses the same birthday rule. In much of the West, you are “zero” at birth and gain a year each time
        you pass your birth anniversary. In South Korea’s traditional reckoning (still familiar in family conversation even
        as official documents modernize), a baby is often considered one year old at birth, and everyone gains a year on
        New Year’s Day—not on their personal birthday. That can make someone “two years older” on paper in Korean age
        than in international age during parts of the year.
      </p>
      <p>
        East Asian lunar new year traditions and some East African counting systems also treat age as a social milestone
        rather than a solar-calendar anniversary. For immigration forms, school enrollment, or medical dosing, always
        follow the definition on the form, not the dinner-table custom.
      </p>

      <h2>Step-by-step manual method (calendar and paper)</h2>
      <h3>What you need</h3>
      <ul>
        <li>Birth date (day, month, year)</li>
        <li>As-of date (defaults to today if you are measuring current age)</li>
        <li>A calendar or month-length chart (30/31 days; February 28 or 29)</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>Write both dates in ISO order (YYYY-MM-DD) to avoid US/EU day-month confusion.</li>
        <li>Compute full years with the birthday-not-yet-reached adjustment.</li>
        <li>Anchor on the birthday in the as-of year; count whole months forward to the as-of month.</li>
        <li>Count remaining days from the last birthday-month anchor to the as-of day.</li>
        <li>Optional: add total days alive by summing each year’s length from birth to as-of (tedious) or use the calculator’s total-days field.</li>
      </ol>

      <h2>Common mistakes</h2>
      <ul>
        <li>
          <strong>Subtracting years only:</strong> “Born 1990, it is 2026, so 36” fails for someone born December 1990
          measured in June 2026—they are still 35 until December.
        </li>
        <li>
          <strong>Treating every month as 30 days:</strong> Breaks month and day remainders; July minus June is not the
          same span as February minus January.
        </li>
        <li>
          <strong>Ignoring time zones:</strong> Near midnight, two hospitals might record different calendar days for the
          same birth instant.
        </li>
        <li>
          <strong>Leap day births:</strong> On non-leap years, February 28 is usually the practical anniversary; legal
          definitions vary—check the <Link href="/leap-year-calculator">leap year guide</Link> and calculator when
          contracts mention February 29.
        </li>
        <li>
          <strong>Mixing Korean age with passport age:</strong> Always use the definition the authority expects.
        </li>
      </ul>

      <h2>When to use a calculator instead</h2>
      <p>
        Hand calculation is excellent for learning and for spot-checking one date pair. For recurring work—HR files,
        genealogy, “how old was I when…” retrospectives—use the{" "}
        <Link href="/">Age Calculator</Link> so hours, minutes, and next-birthday countdown stay consistent. Pair it with
        the <Link href="/birthday-calculator">Birthday Calculator</Link> if you also want weekday-of-birth or zodiac
        trivia alongside exact age.
      </p>
      <p>
        The goal is not to avoid tools; it is to know enough to trust them. Once you see how years-months-days borrow
        across uneven months, forms that looked intimidating start to read like plain language.
      </p>
    </>
  );
}
