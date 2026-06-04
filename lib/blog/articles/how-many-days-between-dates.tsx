import Link from "next/link";

export default function HowManyDaysBetweenDatesArticle() {
  return (
    <>
      <p>
        “How many days between these two dates?” sounds like a third-grade problem until the answer decides whether a
        warranty is still valid, a notice was filed on time, or a shipment qualifies for a refund. The hard part is not
        arithmetic—it is knowing <em>which</em> days count. Calendar days and business days diverge quickly once weekends
        and holidays enter the picture, and contracts rarely bother to define them until something goes wrong.
      </p>

      <h2>Calendar days vs business days</h2>
      <p>
        <strong>Calendar days</strong> are every day on the wall calendar: Monday, Saturday, holidays, all of them. If a
        lease says you have thirty calendar days to vacate, the clock includes four or five weekends inside that span.
      </p>
      <p>
        <strong>Business days</strong> (or working days) usually mean weekdays when offices operate—typically Monday
        through Friday—with weekends excluded. Some definitions also exclude public holidays; banks and courts may follow
        federal or state lists that your employer does not. The{" "}
        <Link href="/date-difference-calculator">Date Difference Calculator</Link> can show calendar totals; the{" "}
        <Link href="/business-days-calculator">Business Days Calculator</Link> handles weekday-only math with optional
        holidays you add yourself.
      </p>
      <p>
        Mixing the two silently is how people miss deadlines by a week. If you are unsure, search the document for the
        words “calendar,” “business,” or “working”—if none appear, ask before you count.
      </p>

      <h2>How to manually count days between dates</h2>
      <h3>Method 1: Inclusive day counting</h3>
      <p>
        Some legal notices count both the start and end day. Lay a finger on the start date, move to the next midnight,
        and count each day until you reach the end date. Inclusive counting often adds one compared with exclusive math—if
        your manual total is off by one, check the contract’s examples first.
      </p>
      <h3>Method 2: Subtract and adjust</h3>
      <p>
        Convert both dates to a serial form (many spreadsheets do this automatically), subtract, then apply inclusive or
        exclusive rules. On paper, list month lengths and subtract year-month-day columns with borrowing, similar to age
        math but without caring about birth anniversaries—only elapsed span.
      </p>
      <h3>Method 3: Anchor weeks</h3>
      <p>
        For medium spans, count whole weeks (seven-day blocks) plus leftover days. The{" "}
        <Link href="/weeks-between-dates">Weeks Between Dates</Link> tool formalizes that split when you are planning in
        weekly cadences rather than raw days.
      </p>

      <h2>Why date calculations matter in real life</h2>
      <ul>
        <li>
          <strong>Contracts:</strong> Notice periods, cure periods, and termination windows almost always reference day
          counts.
        </li>
        <li>
          <strong>Deadlines:</strong> Court filings, tax payments, and grant submissions fail on calendar math errors.
        </li>
        <li>
          <strong>Shipping:</strong> Carriers quote business-day transit; marketing pages quote calendar-day delivery.
        </li>
        <li>
          <strong>Legal notices:</strong> Certified mail clocks often run in calendar days from receipt.
        </li>
        <li>
          <strong>HR and benefits:</strong> Probation, FMLA, and seniority sometimes hinge on days employed, not months
          rounded.
        </li>
      </ul>

      <h2>The 30/60/90-day rule in business</h2>
      <p>
        Vendor contracts, SaaS trials, and procurement policies love round numbers: pay within thirty days, audit within
        sixty, renew or cancel within ninety. These are usually <strong>calendar-day</strong> windows unless the agreement
        says otherwise. Thirty calendar days from June 4 lands on July 4; thirty <em>business</em> days lands roughly six
        weeks later—often mid-July if no holidays intervene.
      </p>
      <p>
        Quick-reference pages like <Link href="/30-days-from-today">30 days from today</Link>,{" "}
        <Link href="/60-days-from-today">60 days</Link>, and <Link href="/90-days-from-today">90 days</Link> show the
        landing date from today’s anchor. For arbitrary start dates, use{" "}
        <Link href="/add-days-to-date">Add Days to Date</Link>.
      </p>

      <h2>Examples you will actually use</h2>
      <h3>Notice periods</h3>
      <p>
        A tenant must give thirty days’ notice before moving out. If notice is calendar-based and delivered June 4, the
        earliest lawful move-out might be July 3 or July 4 depending on inclusive language—read the lease. Business-day
        notice is rarer in residential leases but appears in commercial subleases.
      </p>
      <h3>Warranty periods</h3>
      <p>
        A laptop warranty runs one year from purchase (365 or 366 calendar days, depending on leap years) or ninety days
        from refurbished sale. Crossing February in a leap year adds a day you might forget if you approximate with 365.
      </p>
      <h3>Visa validity and immigration</h3>
      <p>
        “Valid for 180 days from entry” is calendar language. Overstaying by one day because you counted business days is
        an expensive mistake. Always mirror the government’s definition.
      </p>
      <h3>Shipping estimates</h3>
      <p>
        “Five to seven business days” excludes weekends; “ships within 48 hours” is usually calendar hours. Compare
        carrier tracking (business) with refund policies (often calendar).
      </p>

      <h2>Sanity checks before you sign</h2>
      <p>
        Run both modes in the <Link href="/date-difference-calculator">Date Difference Calculator</Link>: total calendar
        days plus optional business-day toggle. If the two numbers diverge more than you expected, the document probably
        assumes one of them—clarify in writing. For countdowns to a single future day (court date, product launch), the{" "}
        <Link href="/days-until">Days Until</Link> tool updates every second so you do not manually refresh the math.
      </p>
      <p>
        Dates are not mysterious; they are just counting with rules attached. Once you name the rule, the counting becomes
        boring—which is exactly what you want before money or status is on the line.
      </p>
    </>
  );
}
