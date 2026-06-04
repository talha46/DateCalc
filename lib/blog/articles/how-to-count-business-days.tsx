import Link from "next/link";

export default function HowToCountBusinessDaysArticle() {
  return (
    <>
      <p>
        Your lender emails: “Funds release within five business days.” Your lawyer counters: “Respond within one week.”
        Those sound interchangeable until a long weekend sits between you and the deadline. Business-day counting is how
        institutions pretend weekends do not exist for paperwork purposes—even though you still live through them. Getting
        it right means knowing what counts, what does not, and why five business days is not the same as one calendar
        week.
      </p>

      <h2>What counts as a business day?</h2>
      <p>
        In most U.S. commercial contexts, a business day is Monday through Friday, excluding Saturday and Sunday. No
        magical hour threshold applies—if the contract does not say “business hours,” the day itself is usually enough.
        Federal holidays may or may not count depending on who wrote the clause; banks often observe the Federal Reserve
        holiday calendar, while your startup might work through Columbus Day and take Diwali instead.
      </p>
      <p>
        The <Link href="/business-days-calculator">Business Days Calculator</Link> on DateCalc counts Monday–Friday between
        your chosen dates and lets you subtract specific holidays you add manually—because no single public list fits every
        employer.
      </p>

      <h2>How banks, courts, and contracts define business days</h2>
      <h3>Banks</h3>
      <p>
        ACH transfers, wire cutoffs, and Reg CC funds availability frequently use Federal Reserve business days. Holidays
        when the Fed is closed typically pause the clock even if the branch lobby is open for deposits. Read the footnotes
        on your disclosure PDF—they matter when payroll must land before a long weekend.
      </p>
      <h3>Courts</h3>
      <p>
        Civil procedure rules often define business days as weekdays excluding legal public holidays recognized by that
        court. Filing extensions can shift when holidays abut weekends. Electronic filing timestamps add another layer—late
        Friday night might still be Friday in the system.
      </p>
      <h3>Commercial contracts</h3>
      <p>
        Supply agreements, SaaS MSAs, and real estate riders sometimes define “Business Day” explicitly in Article 1. If
        they do, that definition wins over colloquial usage. If they do not, courts look to industry custom and geography—a
        Gulf-week schedule (Sunday–Thursday workweek) breaks U.S.-centric assumptions fast.
      </p>

      <h2>Why five business days is not one week</h2>
      <p>
        One calendar week is seven days, always. Five business days is five weekdays—often Monday through Friday of the same
        week if you start on a Monday, but seven calendar days if you start on a Wednesday (Wed–Fri plus Mon–Tue next week).
        Starting on a Friday can push five business days across two weekends, stretching nine calendar days on the ground.
      </p>
      <p>
        That gap is where refunds miss, wire transfers disappoint, and “it has been a week!” arguments fail in email threads.
        Compare calendar span with the <Link href="/date-difference-calculator">Date Difference Calculator</Link> and
        business span with the <Link href="/business-days-calculator">Business Days Calculator</Link> side by side when
        stakes are high.
      </p>

      <h2>Examples in the wild</h2>
      <h3>Loan processing</h3>
      <p>
        “Underwriting completes in ten business days” from a Friday submission usually means the clock starts Monday (unless
        the contract says same-day start). Ten business days can be two full weeks of calendar time plus a holiday if one
        sits inside the window.
      </p>
      <h3>Shipping estimates</h3>
      <p>
        Carriers quote business-day transit; retailers quote “delivery by Sunday” in calendar language. A five-business-day
        ship method ordered Thursday might arrive Thursday next week, not Tuesday—because Saturday and Sunday do not count
        toward the five but still pass on the calendar.
      </p>
      <h3>Legal deadlines</h3>
      <p>
        Opposing counsel offers “three business days to respond” after a Tuesday service. Count Tuesday? Wednesday? Service
        rules differ. When in doubt, ask for a calendar date in writing: “Response due June 12, 2026.”
      </p>
      <h3>Notice periods</h3>
      <p>
        Employment termination sometimes uses business days for internal review periods but calendar days for benefits
        continuation. Read each clause separately—mixing them is common, not accidental.
      </p>

      <h2>How holidays affect the count</h2>
      <p>
        A holiday on Wednesday removes one business day from the total if your definition excludes it. Observances that
        float (Thanksgiving, Eid) change year to year; fixed holidays (July 4, Christmas) are easier until they land on a
        weekend and get observed Monday instead—another place contracts specify “observed” vs “actual.”
      </p>
      <p>
        DateCalc does not guess your employer’s holiday list. Add each closure in the Business Days Calculator so the math
        matches your HR calendar, not a generic federal chart. For calendar-day totals that include weekends, stick with the{" "}
        <Link href="/date-difference-calculator">Date Difference Calculator</Link>.
      </p>

      <h2>Manual counting checklist</h2>
      <ol>
        <li>Confirm the document defines “business day” or defaults to weekday usage.</li>
        <li>Mark start and end dates; decide if endpoints are inclusive.</li>
        <li>Strike weekends between them.</li>
        <li>Strike each holiday your definition removes.</li>
        <li>Compare against software output before you send money or sign a waiver.</li>
      </ol>

      <h2>Putting it together</h2>
      <p>
        Business-day math is boring on purpose. The moment it becomes interesting, someone is arguing about late fees. Use
        tools for repeatability, read definitions for authority, and when someone says “one week,” ask the only question that
        matters: “Calendar days or business days?”
      </p>
    </>
  );
}
