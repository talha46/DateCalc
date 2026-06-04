import Link from "next/link";

export default function WhatIsALeapYearArticle() {
  return (
    <>
      <p>
        Every four years, February gains a twenty-ninth day and calendars worldwide absorb an extra day most people barely
        notice—until a birthday, a payroll cutoff, or a contract anniversary lands on February 28 in a non-leap year and
        someone argues the wrong day counts. Leap years exist because Earth does not cooperate with round numbers. The
        planet takes about 365.2422 days to orbit the Sun; a plain 365-day year drifts until seasons and printed calendars
        disagree.
      </p>

      <h2>Why we have leap years</h2>
      <p>
        Without correction, summer would eventually slide into winter in the Northern Hemisphere over centuries. Adding one
        day roughly every four years keeps the civil calendar aligned with the astronomical year. That “roughly” matters:
        adding a day every four years overshoots slightly, which is why smarter rules exist beyond the playground rhyme.
      </p>
      <p>
        Check any year instantly with the <Link href="/leap-year-calculator">Leap Year Calculator</Link>—it applies the
        full Gregorian test and shows neighboring leap years plus total days in the year.
      </p>

      <h2>The four-year rule—and the 400-year exception</h2>
      <p>
        Under the Gregorian calendar most of the world uses today:
      </p>
      <ul>
        <li>If the year is divisible by 4, it is usually a leap year.</li>
        <li>If the year is divisible by 100, it is not a leap year—unless…</li>
        <li>If the year is divisible by 400, it is a leap year after all.</li>
      </ul>
      <p>
        So 2000 leaped (divisible by 400). 1900 did not (divisible by 100 but not 400). 2024 leaped; 2025 and 2026 do
        not; 2028 will. That century exception trimmed three leap days every four hundred years, pulling the calendar
        closer to the true tropical year than the older Julian scheme allowed.
      </p>

      <h3>Why the exception exists</h3>
      <p>
        Leap-every-four-years alone inserts too many leap days over long horizons. Skipping most century years prevents
        seasonal drift from creeping the other direction. The math is a compromise between astronomy and bureaucratic
        stability—not a conspiracy, just orbital mechanics with paperwork.
      </p>

      <h2>Famous February 29 birthdays</h2>
      <p>
        People born on leap day are sometimes called leaplings. They still celebrate every year; many pick February 28 or
        March 1 on off-years depending on local law and personal habit. A few well-known leap-day births:
      </p>
      <ul>
        <li>
          <strong>Ja Rule</strong> (rapper) — born February 29, 1976
        </li>
        <li>
          <strong>Tony Robbins</strong> (author and speaker) — born February 29, 1960
        </li>
        <li>
          <strong>Dinah Shore</strong> (singer and TV host) — born February 29, 1916
        </li>
        <li>
          <strong>Henri Richard</strong> (Hockey Hall of Famer) — born February 29, 1936
        </li>
      </ul>
      <p>
        Leaplings joke about being “four” when they are sixteen in calendar years—a reminder that “age” can mean different
        things socially and legally. For exact age in years-months-days, use the <Link href="/">Age Calculator</Link> and
        set the as-of date explicitly when testing February edge cases.
      </p>

      <h2>How leap years affect age calculations</h2>
      <p>
        Leap years change two things: the length of the year containing February 29 (366 days instead of 365), and the
        existence of February 29 itself. If you multiply age by 365 to estimate days lived, leap years inject error—sometimes
        only one day, sometimes more across a lifetime. Tools that walk the calendar day by day avoid that shortcut.
      </p>
      <p>
        Anniversary logic also shifts. Someone born February 29, 2000, might observe February 28, 2025, as their birthday
        in civil records even though the astronomical anniversary is fuzzy. HR systems and social networks pick different
        defaults; do not assume your bank matches your family group chat.
      </p>
      <p>
        When projecting forward—warranty expirations, visa windows—crossing February in a leap year adds a day compared
        with the prior year. Use <Link href="/add-days-to-date">Add Days to Date</Link> for anchored offsets instead of
        mental 365×N math.
      </p>

      <h2>Julian vs Gregorian reforms</h2>
      <p>
        Julius Caesar’s calendar introduced the leap-every-four-years idea to stabilize Roman civic life. Centuries later,
        drift accumulated again. Pope Gregory XIII’s 1582 reform deleted ten days from October that year (in adopting
        territories) and refined leap rules with the 100/400 exceptions. Protestant and Orthodox regions adopted the
        Gregorian calendar later—Russia held out until 1918, Greece until 1923—so historical documents before local
        adoption can be off by days or weeks if you convert naively.
      </p>
      <p>
        Genealogists chasing nineteenth-century ships’ manifests still trip over this. Historians translate “Old Style” vs
        “New Style” dates carefully. Software usually assumes Gregorian proleptically (the modern rules extended backward),
        which is fine for calculators but wrong for quoting primary sources without context.
      </p>

      <h2>Leap years in contracts and planning</h2>
      <p>
        Interest accrual sometimes specifies “actual/actual” day counts that count February 29. Employment contracts that
        promise annual raises on the hire-date anniversary must decide what happens in non-leap Februaries. If you draft
        language, name the rule; if you read language, test February with the{" "}
        <Link href="/leap-year-calculator">Leap Year Calculator</Link> and date tools together.
      </p>
      <p>
        Leap day is one of those rare topics where astronomy, history, and birthday cake intersect. You do not need to
        memorize century tables—just know the four/100/400 pattern and let software handle the edge cases while you sleep.
      </p>
    </>
  );
}
