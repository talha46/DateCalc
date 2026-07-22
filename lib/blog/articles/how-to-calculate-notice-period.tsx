import Link from "next/link";

export default function HowToCalculateNoticePeriodArticle() {
  return (
    <>
      <p>
        A notice period sounds simple: give thirty days, or sixty, or ninety,
        and you are done. In practice, the end date depends on when you start
        counting, whether the notice day itself is included, how long the
        relevant months are, and what happens when the result falls on a
        weekend or public holiday. None of those questions has a single
        universal answer—your contract, lease, employment law, or the
        institution you are dealing with defines the rule, and those rules
        differ.
      </p>
      <p>
        This article explains the calculation mechanics so you can apply them
        to your specific document. It does not give legal advice, and it does
        not claim one counting method is correct for every situation.
      </p>

      <h2>What a notice period means</h2>
      <p>
        A notice period is the gap between the date someone formally announces
        an intention—to leave a job, vacate a property, cancel a contract, or
        end a service—and the date that action takes legal effect. The person
        giving notice is bound to fulfil obligations during that period; the
        receiving party has time to prepare.
      </p>
      <p>
        Common notice periods are 30, 60, or 90 calendar days, or 4, 8, or 12
        weeks. Employment contracts in some countries use weeks; tenancy
        agreements usually use calendar days; commercial contracts may use
        business days. The document you signed is the authority—not a general
        rule.
      </p>

      <h2>Calendar days versus business days</h2>
      <p>
        Most residential tenancy and standard employment notice periods run in{" "}
        <strong>calendar days</strong>: every day on the calendar counts,
        including weekends and public holidays. A 30-day notice served on
        June 4 ends 30 calendar days later.
      </p>
      <p>
        Some commercial leases, financial contracts, and certain employment
        clauses use <strong>business days</strong> (also called working days):
        only Monday–Friday count, and sometimes public holidays are excluded
        too. Five business days is not one calendar week if a holiday falls
        inside it. If your document says &quot;business days,&quot; use the{" "}
        <Link href="/business-days-calculator">Business Days Calculator</Link>{" "}
        rather than simple day addition.
      </p>
      <p>
        If the document does not say which type, ask before you count. Assuming
        the wrong type can shift the end date by several days, which matters
        for legal and financial deadlines.
      </p>

      <h2>Does the notice day count?</h2>
      <p>
        This is the most common source of off-by-one errors in notice period
        calculations. There are two conventions:
      </p>
      <ul>
        <li>
          <strong>Notice day excluded (day-after start):</strong> The count
          begins the day after notice is delivered. You give notice on June 4;
          day 1 is June 5; a 30-day period ends July 4. This is the most
          common approach in UK employment law and many tenancy agreements.
        </li>
        <li>
          <strong>Notice day included:</strong> The notice date itself is day
          1. You give notice on June 4; a 30-day period ends July 3. Some
          contracts use this convention explicitly.
        </li>
      </ul>
      <p>
        The difference is exactly one day. Check your document for the words
        &quot;from,&quot; &quot;after,&quot; &quot;commencing on,&quot; or an example calculation—those
        words usually reveal which convention applies. When in doubt, seek
        clarification from the other party in writing before you commit to a
        departure date.
      </p>

      <h2>How month length changes the result</h2>
      <p>
        Calendar months are not equal. A 30-day notice period starting
        January 31 ends March 1 or March 2 depending on whether the year is a
        leap year—because February has 28 or 29 days. Starting the same notice
        on March 31 ends April 30, because April has only 30 days.
      </p>
      <p>
        This matters most when your contract says &quot;one calendar month&quot; rather
        than a fixed number of days. One calendar month from January 31 is
        February 28 (or 29 in a leap year), not 30 days later. Fixed-day
        counts (30 days) are more predictable than calendar-month language for
        exactly this reason.
      </p>

      <h2>Calculating the end date step by step</h2>
      <p>
        For a fixed-day calendar-day notice period, the fastest accurate method
        is to add the notice period length to your start date directly. The{" "}
        <Link href="/add-days-to-date">Add Days to Date Calculator</Link> does
        this without rounding errors. Enter the notice date (or the day after,
        depending on your convention), add the number of days, and read the
        result.
      </p>
      <ol>
        <li>
          Identify the notice date — the day notice is formally delivered or
          received, whichever your document specifies.
        </li>
        <li>
          Determine whether that day counts as day 1 or whether counting
          starts the following day.
        </li>
        <li>
          Confirm whether days are calendar days or business days.
        </li>
        <li>
          Add the required number of days to the correct start date.
        </li>
        <li>
          Note the resulting weekday. If the document requires the end date to
          fall on a working day, adjust forward or backward as specified.
        </li>
      </ol>

      <h2>Examples across different start dates</h2>
      <h3>30-day notice, calendar days, notice day excluded</h3>
      <ul>
        <li>Notice given June 4 → count starts June 5 → end date: July 4</li>
        <li>Notice given January 31 → count starts February 1 → end date: March 2 (or March 3 in a leap year)</li>
        <li>Notice given November 30 → count starts December 1 → end date: December 30</li>
      </ul>

      <h3>60-day notice, calendar days, notice day excluded</h3>
      <ul>
        <li>Notice given June 4 → count starts June 5 → end date: August 3</li>
        <li>Notice given October 31 → count starts November 1 → end date: December 30</li>
      </ul>

      <h3>30-day notice, business days only</h3>
      <p>
        Thirty business days from June 4 (excluding weekends) lands approximately
        6 calendar weeks later, not 30 calendar days. The exact date depends
        on which public holidays fall in that window. Use the{" "}
        <Link href="/business-days-calculator">Business Days Calculator</Link>{" "}
        for this scenario and add any holidays your contract excludes.
      </p>

      <h2>What happens when the end date falls on a weekend or holiday</h2>
      <p>
        The answer depends entirely on the document. Common approaches include:
      </p>
      <ul>
        <li>
          <strong>No adjustment:</strong> The notice period ends exactly 30
          (or 60, or 90) days after the start, regardless of what day it falls
          on. This is the most common approach for calendar-day counts in
          tenancy agreements.
        </li>
        <li>
          <strong>Next business day:</strong> If the end date falls on a
          weekend or public holiday, the effective date moves to the following
          Monday or the next working day. Common in financial and commercial
          contracts.
        </li>
        <li>
          <strong>Previous business day:</strong> Less common, but some
          documents roll backward to the last working day before the weekend or
          holiday.
        </li>
      </ul>
      <p>
        If your document does not address this, the safest approach is to treat
        the raw calendar date as the end date and communicate it clearly to
        both parties. Do not assume an adjustment will be made.
      </p>

      <h2>When to use which DateCalc tool</h2>
      <ul>
        <li>
          <strong>Calendar-day notice period:</strong>{" "}
          <Link href="/add-days-to-date">Add Days to Date</Link> — enter your
          start date and the number of days.
        </li>
        <li>
          <strong>Business-day notice period:</strong>{" "}
          <Link href="/business-days-calculator">Business Days Calculator</Link>{" "}
          — enter start and a target end date and adjust until the business-day
          count matches your requirement, or add holidays your contract
          excludes.
        </li>
        <li>
          <strong>Verify a date someone else gave you:</strong>{" "}
          <Link href="/date-difference-calculator">Date Difference Calculator</Link>{" "}
          — count the days between the notice date and the proposed end date to
          confirm the arithmetic is correct.
        </li>
      </ul>

      <h2>Important limitations</h2>
      <p>
        DateCalc calculates dates from inputs you provide. It does not read
        your contract, interpret legal language, or account for jurisdiction-
        specific rules. The calculations here assume you have already determined
        the correct start date, counting convention, and day type from your
        specific document. Where a formal deadline has legal or financial
        consequences, verify the result with the other party or a qualified
        professional.
      </p>
    </>
  );
}
