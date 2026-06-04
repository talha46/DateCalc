import { format } from "date-fns";
import type { EducationalSection } from "@/components/CalculatorEducationalContent";
import type { FaqItem } from "@/components/FaqSection";
import type { DaysFromTodayEducationalBase } from "@/lib/educationalCopy/daysFromToday";
import { holidayConfigBySlug, type HolidaySlug } from "@/lib/programmaticPages";

export type HolidayPageContext = {
  daysLeft: number;
  formattedUpcomingDate: string;
  date2026: string;
  date2027: string;
  isApproximate: boolean;
};

export type HolidayPageExtended = {
  educational: DaysFromTodayEducationalBase;
  extraSections: EducationalSection[];
  buildFaq: (ctx: HolidayPageContext) => FaqItem[];
};

function formatHoliday(year: number, slug: HolidaySlug) {
  return format(holidayConfigBySlug[slug].getDate(year), "EEEE, MMMM d, yyyy");
}

function getCanadianThanksgiving(year: number) {
  const firstDay = new Date(year, 9, 1);
  const offset = (1 - firstDay.getDay() + 7) % 7;
  const firstMonday = 1 + offset;
  const secondMonday = firstMonday + 7;
  return format(new Date(year, 9, secondMonday), "EEEE, MMMM d, yyyy");
}

const extendedSlugs = [
  "halloween",
  "thanksgiving",
  "diwali",
  "eid-al-adha",
  "eid-al-fitr",
] as const;

export type ExtendedHolidaySlug = (typeof extendedSlugs)[number];

export function isExtendedHolidaySlug(slug: HolidaySlug): slug is ExtendedHolidaySlug {
  return (extendedSlugs as readonly string[]).includes(slug);
}

export function buildHolidayPageContext(slug: ExtendedHolidaySlug, targetDate: Date, daysLeft: number): HolidayPageContext {
  const config = holidayConfigBySlug[slug];
  return {
    daysLeft,
    formattedUpcomingDate: format(targetDate, "EEEE, MMMM d, yyyy"),
    date2026: formatHoliday(2026, slug),
    date2027: formatHoliday(2027, slug),
    isApproximate: Boolean(config.isApproximate),
  };
}

const halloweenExtended: HolidayPageExtended = {
  educational: {
    howToIntro:
      "Halloween always sits on October 31 on the civil calendar, but the weekday changes every year—so parade permits, school parties, and candy orders shift with it. This countdown shows how many days remain until the next October 31 from your local today, plus a live clock for finer pacing. Use it when you are staging decorations, budgeting wholesale candy, or answering “how long until Halloween night?” without counting squares on a paper calendar.",
    steps: [
      "Confirm the upcoming October 31 date shown above; it is the next occurrence on or after today in your timezone.",
      "Watch the live timer when you need hours and minutes—for example, coordinating a neighborhood start time for trick-or-treat.",
      "Cross-check municipal guidance on official trick-or-treat hours; cities sometimes shift hours even when the holiday date stays the 31st.",
    ],
    aboutParagraphs: [
      "Modern Halloween in North America mixes costume play, haunted attractions, and door-to-door candy collection on October 31. The date is fixed even when local governments schedule community events on the nearest Saturday.",
      "Pressures are practical: retailers plan inventory peaks six to eight weeks out, schools publish costume guidelines, and families with food allergies look for teal-pumpkin participation. A clear day count helps spread costs and avoid last-minute shipping premiums.",
      "Pair this page with the Days Until Calculator for custom party dates, or the Date Difference Calculator when a rental contract references days relative to Halloween weekend.",
    ],
  },
  extraSections: [
    {
      heading: "History and origins of Halloween",
      paragraphs: [
        "Halloween’s roots reach into ancient Celtic Samhain, a late-harvest threshold when people lit bonfires and wore disguises to navigate stories about spirits crossing into the living world. Roman imperial calendars later layered autumn festivals onto local customs as communities converted and blended practices.",
        "Medieval Christianity observed All Hallows’ Eve—the evening before All Saints’ Day on November 1—within a broader remembrance season. Irish and Scottish immigrants carried folk traditions to North America in the nineteenth century; civic leaders eventually encouraged neighborhood trick-or-treating in the twentieth century to channel pranks into supervised routes.",
        "Today the holiday is largely secular in the United States and Canada, though church harvest festivals and Día de los Muertos observances nearby remind us that autumn still marks remembrance in many cultures—distinct holidays with their own dates and meanings.",
      ],
    },
    {
      heading: "How to prepare for Halloween",
      paragraphs: [
        "Six weeks out: sketch costumes that respect school rules, order specialty sizes online, and book hayrides or pumpkin patches before slots fill. Check whether your town publishes official trick-or-treat hours—they may differ from October 31 when the holiday lands on a weekday.",
        "Three weeks out: test makeup adhesives, plan teal pumpkins if you participate in allergy awareness, and confirm pet safety plans (quiet rooms, ID tags) before doorbells spike.",
        "One week out: carve pumpkins late enough to avoid rot, pre-portion candy for contactless bowls if desired, and charge flashlights for unlit sidewalks. Drivers should expect dusk pedestrian surges—slow residential turns even if you are not celebrating.",
      ],
    },
    {
      heading: "Halloween dates in 2026 and 2027",
      paragraphs: [
        `Halloween 2026 is ${formatHoliday(2026, "halloween")}. Weekend timing can boost evening events and late-night traffic when October 31 lands on Saturday.`,
        `Halloween 2027 is ${formatHoliday(2027, "halloween")}. Some municipalities schedule Saturday trick-or-treat on the 30th when the 31st is a Sunday—watch city websites for overrides.`,
      ],
    },
  ],
  buildFaq: (ctx) => [
    {
      question: "How many days until Halloween?",
      answer: `There are ${ctx.daysLeft} calendar days until the next Halloween on ${ctx.formattedUpcomingDate} (local date). The live timer above updates every second for finer planning. If your city moves trick-or-treat hours, follow municipal posts—the civil holiday date stays October 31 unless ordinances say otherwise.`,
    },
    {
      question: "What date is Halloween in 2026 and 2027?",
      answer: `Halloween is always October 31. In 2026 it is ${ctx.date2026}. In 2027 it is ${ctx.date2027}. Weekday shifts change commute and party logistics even when the calendar date is constant.`,
    },
    {
      question: "Why is Halloween always October 31?",
      answer:
        "North American practice fixed the civic celebration to October 31 through folk tradition tied to All Hallows’ Eve rather than a movable Monday rule like Thanksgiving. Some events shift to weekends, but retail and school calendars still reference the 31st.",
    },
    {
      question: "Is Halloween a federal public holiday?",
      answer:
        "No in the United States—banks and federal offices stay open. Schools and employers may host parties, but there is no nationwide paid holiday. Plan PTO separately if you want the day off.",
    },
    {
      question: "How do I count days until a Halloween party on another date?",
      answer:
        "Use the Days Until Calculator, label your event, and set the party date directly. Use this page when you specifically need the next October 31 anchor for candy budgets or seasonal marketing.",
    },
  ],
};

const thanksgivingExtended: HolidayPageExtended = {
  educational: {
    howToIntro:
      "United States Thanksgiving floats on the calendar: the fourth Thursday in November, not a fixed day number. That is why “how many days until Thanksgiving” changes every year even though everyone knows the holiday is “in November.” This page counts down to the next U.S. observance from your local today and shows the exact Thursday date for meal prep, travel, and PTO requests.",
    steps: [
      "Read the highlighted Thursday date—this year’s fourth November Thursday, computed automatically.",
      "Use the countdown for thaw timelines and travel buffers; turkey defrost math is measured in days, not hours of anxiety.",
      "Remember Canadian Thanksgiving is a different rule and month—see the section below if you are coordinating cross-border family.",
    ],
    aboutParagraphs: [
      "Contemporary U.S. Thanksgiving centers on family gatherings, charitable food drives, and a Thursday meal that anchors a four-day weekend for many workers. Retail and travel industries treat the week as a peak season with weather risk.",
      "Historically, regional harvest feasts and presidential proclamations preceded the modern federal pattern. President Lincoln’s 1863 proclamation during the Civil War popularized a national autumn gratitude day; Congress later codified the fourth-Thursday rule in the twentieth century to stabilize holiday commerce and school calendars.",
      "Scholarship continues to reexamine colonial narratives taught in schools; many families now pair dinner with donations, land acknowledgments, or service shifts rather than only reproducing Pilgrim mythology.",
    ],
  },
  extraSections: [
    {
      heading: "U.S. vs Canadian Thanksgiving dates",
      paragraphs: [
        "United States: fourth Thursday in November. Thanksgiving 2026 is Thursday, November 26, 2026. Thanksgiving 2027 is Thursday, November 25, 2027. The date wanders between November 22 and 28 depending on how Thursdays fall.",
        `Canada: second Monday in October—earlier harvest timing in northern latitudes. Canadian Thanksgiving 2026 is ${getCanadianThanksgiving(2026)}; 2027 is ${getCanadianThanksgiving(2027)}. It is a national statutory holiday in Canada, while the U.S. version is a federal holiday on the November Thursday shown above.`,
        "Do not ship perishable goods or schedule cross-border video calls using the wrong country’s rule—HR calendars in Toronto and Chicago diverge by six weeks.",
      ],
    },
    {
      heading: "Planning around the long weekend",
      paragraphs: [
        "Airports and highways peak the Wednesday before and the Sunday after U.S. Thanksgiving. Countdown clarity helps decide whether to fly Tuesday night or drive before rush spikes.",
        "Grocery thaw charts reference days before the meal; align your countdown with the actual Thursday you are cooking, not an assumed November 28.",
        "Black Friday retail staffing and return policies often reference calendar days after Thanksgiving—use the Date Difference Calculator when policies cite “within 30 days of purchase” tied to the weekend.",
      ],
    },
  ],
  buildFaq: (ctx) => [
    {
      question: "How many days until Thanksgiving?",
      answer: `${ctx.daysLeft} calendar days remain until the next U.S. Thanksgiving on ${ctx.formattedUpcomingDate}. The timer updates live. Canadian Thanksgiving is the second Monday in October—different date entirely.`,
    },
    {
      question: "What is the exact U.S. Thanksgiving date in 2026 and 2027?",
      answer: `U.S. Thanksgiving 2026 is ${ctx.date2026}. U.S. Thanksgiving 2027 is ${ctx.date2027}. Both are fourth Thursdays in November, not the last Thursday—an old misconception.`,
    },
    {
      question: "Why does Thanksgiving change dates each year?",
      answer:
        "Because it is defined as the fourth Thursday in November, not November 28 or the last Thursday. When November 1 is a Thursday, the fourth Thursday can be November 22; when November 1 is a Friday, it can be November 28.",
    },
    {
      question: "Is Thanksgiving a four-day weekend everywhere?",
      answer:
        "Many U.S. employers give Friday off after Thanksgiving, but it is not universal. Schools often take Wednesday–Friday; retail may require Friday shifts. Verify your handbook rather than assuming four paid days.",
    },
    {
      question: "How do I plan turkey thaw time with this countdown?",
      answer:
        "Use the day count to the actual holiday Thursday, then follow USDA thaw tables (refrigerator thaw measured in days per pound). Do not use “days until November” guesses—anchor on the displayed Thursday date.",
    },
  ],
};

const diwaliExtended: HolidayPageExtended = {
  educational: {
    howToIntro:
      "Diwali is a multi-day festival of lights observed across India and the global diaspora, with the main Lakshmi Puja night falling on a date that moves in the Gregorian calendar each year. This countdown targets the upcoming observance date used on DateCalc and updates daily—pair it with travel booking and leave requests once you confirm local temple announcements.",
    steps: [
      "Read the displayed Gregorian date for the next Diwali on this page—regional communities may observe adjacent days differently.",
      "Begin cleaning, lighting, and sweet preparation weeks ahead; electrical safety checks matter when adding festival lighting loads.",
      "Confirm office and school calendars in your city; diaspora hubs sometimes declare a single public day while families celebrate across a five-day window.",
    ],
    aboutParagraphs: [
      "Diwali symbolizes light overcoming darkness and is associated with Lakshmi, prosperity, and renewal in many Hindu households. Stories vary by region—Rama’s return in Ayodhya, Krishna traditions, harvest gratitude—yet lamps, rangoli, and family gatherings recur.",
      "Jain communities mark Mahavira’s nirvana; Sikhs commemorate Bandi Chhor Divas; some Buddhists observe related light festivals. The shared visual language is illumination even when theological emphasis differs.",
      "Economically, Diwali drives seasonal retail, gold purchases, and travel peaks analogous to year-end holidays elsewhere. Knowing the exact Gregorian anchor prevents booking flights for the wrong week.",
    ],
  },
  extraSections: [
    {
      heading: "How Diwali dates are calculated",
      paragraphs: [
        "Traditional timing follows the Hindu lunisolar calendar—often the new moon (Amavasya) of the month Kartik in many North Indian conventions, with regional shifts. Astronomical new moon and local sunset rules can move the observed night by a day between cities.",
        "DateCalc displays a Gregorian planning date derived from festival tables (Diwali 2026 on November 8, 2026 in our dataset; 2027 on November 8, 2027 in the current mapping). Always verify with your temple, panchang publisher, or family elders because diaspora calendars sometimes align with India Standard Time while you live elsewhere.",
        "Unlike fixed holidays such as Christmas on December 25, Diwali requires checking each year—this page exists so you do not assume last year’s Gregorian date repeats.",
      ],
    },
    {
      heading: "Diwali 2026 and 2027 dates",
      paragraphs: [
        `Diwali 2026 (main observance on DateCalc): ${formatHoliday(2026, "diwali")}.`,
        `Diwali 2027 (main observance on DateCalc): ${formatHoliday(2027, "diwali")}.`,
        "Families may also light lamps on Dhanteras and celebrate Bhai Dooj afterward—treat the headline date as the core anchor, not the entire cultural window.",
      ],
    },
    {
      heading: "Regional variations in celebration",
      paragraphs: [
        "North India often emphasizes Lakshmi Puja on Amavasya; Gujarat marks Bestu Varas (New Year) the day after; West Bengal’s Kali Puja can coincide nearby but is distinct. South Indian traditions may highlight Naraka Chaturdashi the day before main lamps.",
        "Fireworks use is declining in cities with air-quality regulations; LED displays and community events replace open pyrotechnics in many metros. Food traditions range from mithai boxes to savory snacks—logistics, not theology, drive shipping deadlines.",
        "Diaspora communities compress events into weekends when the official date lands midweek, similar to how other cultures handle movable observances.",
      ],
    },
  ],
  buildFaq: (ctx) => [
    {
      question: "How many days until Diwali?",
      answer: `${ctx.daysLeft} calendar days until the next Diwali date shown (${ctx.formattedUpcomingDate}) on this page. Regional calendars may add adjacent celebration days; confirm with local authorities for public leave.`,
    },
    {
      question: "What are the Diwali dates in 2026 and 2027?",
      answer: `On DateCalc’s festival table, Diwali 2026 is ${ctx.date2026} and Diwali 2027 is ${ctx.date2027}. Panchang variations can shift observance by a day—treat these as planning anchors, not religious rulings.`,
    },
    {
      question: "Why does Diwali change dates every Gregorian year?",
      answer:
        "Because it is tied to lunar months in the Hindu calendar, which shift roughly eleven days earlier each solar year. The Gregorian date wanders through autumn (and occasionally early winter) rather than staying fixed.",
    },
    {
      question: "Is Diwali only one day?",
      answer:
        "Culturally it is often a five-day season (Dhanteras through Bhai Dooj). Employers may grant one public holiday while families celebrate multiple evenings—plan travel for the whole week if elders gather from out of town.",
    },
    {
      question: "How do I count down to a different festival night?",
      answer:
        "Use the Days Until Calculator with a custom label and date. Use this page when you specifically need the mainstream Diwali anchor DateCalc publishes for 2026-style planning.",
    },
  ],
};

const eidAlAdhaExtended: HolidayPageExtended = {
  educational: {
    howToIntro:
      "Eid al-Adha, the Festival of Sacrifice, follows the Islamic lunar calendar and therefore shifts across Gregorian seasons. It commemorates Ibrahim’s willingness to sacrifice and is tied to the Hajj season. This countdown uses planning dates that may move by a day or two after official moon sighting—read mosque bulletins before booking travel or leave.",
    steps: [
      "Treat the displayed date as an estimate until your local authority announces sighting.",
      "Plan qurbani logistics, charity distributions, and family visits once the congregation confirms the day.",
      "Coordinate PTO early; lunar holidays can cluster airfare demand with Hajj routes.",
    ],
    aboutParagraphs: [
      "Eid al-Adha is the second of the two major Eid festivals for Muslims. Prayers are held in congregation, often outdoors, followed by charitable meat distribution and family meals.",
      "The spiritual narrative emphasizes obedience, charity, and community care for those with less. Many households balance tradition with municipal rules on animal slaughter and hygiene.",
      "Because the Islamic year is shorter than the solar year, Eid al-Adha appears about eleven days earlier each Gregorian year over long horizons—HR teams should not recycle last year’s calendar entry.",
    ],
  },
  extraSections: [
    {
      heading: "Significance of Eid al-Adha",
      paragraphs: [
        "The day honors willingness to sacrifice for God’s command and the replacement of sacrifice with a ram in the Quranic narrative. It concludes the Hajj for pilgrims in Mecca and connects global Muslims to that pilgrimage through prayer and charity.",
        "Qurbani (ritual sacrifice) is distributed in thirds in many traditions: family, friends, and those in need. Cities regulate slaughter sites to protect public health—follow local guidance rather than ad-hoc streets.",
        "Even for those not performing Hajj, the Eid is a time of renewed community ties, children receiving gifts, and visiting elders.",
      ],
    },
    {
      heading: "How the Islamic calendar sets the date",
      paragraphs: [
        "Months begin with the sighting of the new crescent (hilal) according to regional jurisprudence—astronomical calculation, local sighting, or Saudi announcement depending on your community. Dhul Hijjah’s ninth day is the Day of Arafah; Eid al-Adha is the tenth.",
        "DateCalc stores approximate Gregorian conversions for planning (2026 estimate May 27, 2026; 2027 shifts with the lunar cycle). Confirm with your mosque because weather and geography affect sighting acceptance.",
        "The Islamic calendar has 354–355 days per year, so Eid dates drift backward through Western seasons over a decade.",
      ],
    },
    {
      heading: "Eid al-Adha 2026 and 2027 (approximate)",
      paragraphs: [
        `Eid al-Adha 2026 (planning estimate on DateCalc): ${formatHoliday(2026, "eid-al-adha")}.`,
        `Eid al-Adha 2027 (planning estimate on DateCalc): ${formatHoliday(2027, "eid-al-adha")}.`,
        "These may shift by one day after moon committees announce the start of Dhul Hijjah. Revisit this countdown after the announcement.",
      ],
    },
  ],
  buildFaq: (ctx) => [
    {
      question: "How many days until Eid al-Adha?",
      answer: `${ctx.daysLeft} calendar days until the next planning date for Eid al-Adha (${ctx.formattedUpcomingDate}). ${ctx.isApproximate ? "Islamic holidays may move by a day after moon sighting—confirm locally." : ""}`,
    },
    {
      question: "What are approximate Eid al-Adha dates in 2026 and 2027?",
      answer: `Planning estimates: 2026 on ${ctx.date2026}; 2027 on ${ctx.date2027}. Communities following different sighting criteria may differ by a day.`,
    },
    {
      question: "Why is Eid al-Adha on a different Gregorian date each year?",
      answer:
        "The Islamic calendar is lunar. Months shift through the solar year, so Eid al-Adha moves backward on the Western calendar roughly eleven days annually over time.",
    },
    {
      question: "How is Eid al-Adha related to Hajj?",
      answer:
        "It begins on the tenth of Dhul Hijjah, after pilgrims stand at Arafah. Muslims worldwide mark the day with prayer even if they are not on pilgrimage.",
    },
    {
      question: "Should I use business days to plan Eid travel?",
      answer:
        "Airlines and employers usually reason in calendar days for leave requests. Use the Days Until Calculator for custom flight dates; use this page for the festival anchor once announced.",
    },
  ],
};

const eidAlFitrExtended: HolidayPageExtended = {
  educational: {
    howToIntro:
      "Eid al-Fitr breaks the fast at the end of Ramadan—the month of dawn-to-dusk fasting. The festival begins after the sighting of the Shawwal crescent, so the Gregorian date moves every year. This page counts down to DateCalc’s planning estimate; verify with your mosque before you finalize catering, gifts, or PTO.",
    steps: [
      "Watch for moon-sighting announcements the night before expected Eid—communities may celebrate on different days.",
      "Pay zakat al-fitr before the Eid prayer where your school of thought requires it; charities publish deadlines tied to the festival morning.",
      "Plan communal prayer spaces, meal sharing, and children's activities once the date is confirmed.",
    ],
    aboutParagraphs: [
      "Ramadan emphasizes fasting, prayer, and charity; Eid al-Fitr is the celebratory close—special foods, new clothes, and visiting relatives. The name means “festival of breaking the fast.”",
      "Because Ramadan length depends on lunar months (29 or 30 days), the Eid date is not known with civil-calendar certainty until the end of the month. Multicultural workplaces increasingly publish tentative grids with footnotes about sighting.",
      "Diaspora communities sometimes align with home-country announcements or local sighting—two neighboring mosques can legitimately differ by a day. Plan grace in travel and shift schedules.",
    ],
  },
  extraSections: [
    {
      heading: "Significance of Eid al-Fitr",
      paragraphs: [
        "The day opens with a special congregational prayer, often in parks or large halls, followed by feasting and gift-giving. It is a time to forgive grudges, visit elders, and include neighbors who may be alone.",
        "Zakat al-fitr is a charitable due intended to purify the fast and feed those in need before the prayer in many traditions—automation-friendly charities publish calculators tied to local food costs.",
        "Culturally, sweets vary by region: maamoul, sheer khurma, or local pastries. The theme is generosity after a disciplined month.",
      ],
    },
    {
      heading: "How Ramadan’s end determines the date",
      paragraphs: [
        "Ramadan lasts until the hilal of Shawwal is sighted (or declared by authority). If the crescent is not seen, the month may complete thirty days, pushing Eid one day later than some printed calendars predicted.",
        "DateCalc uses planning estimates (2026: March 20, 2026; 2027 shifts per lunar tables). Treat them like weather forecasts—useful for logistics, not a replacement for religious announcement.",
        "Night-before uncertainty is normal; hospitality teams should keep menus flexible and venues holdable with short cancellation windows.",
      ],
    },
    {
      heading: "Eid al-Fitr 2026 and 2027 (approximate)",
      paragraphs: [
        `Eid al-Fitr 2026 (planning estimate on DateCalc): ${formatHoliday(2026, "eid-al-fitr")}.`,
        `Eid al-Fitr 2027 (planning estimate on DateCalc): ${formatHoliday(2027, "eid-al-fitr")}.`,
        "Confirm after Ramadan ends in your community; some countries follow consolidated announcements, others insist on local sighting.",
      ],
    },
  ],
  buildFaq: (ctx) => [
    {
      question: "How many days until Eid al-Fitr?",
      answer: `${ctx.daysLeft} calendar days until the next planning date for Eid al-Fitr (${ctx.formattedUpcomingDate}). The live timer helps hour-level coordination, but the day itself may shift by one after moon sighting.`,
    },
    {
      question: "What are approximate Eid al-Fitr dates in 2026 and 2027?",
      answer: `Planning estimates on DateCalc: 2026 on ${ctx.date2026}; 2027 on ${ctx.date2027}. Your mosque may announce a different day—refresh this page after confirmation.`,
    },
    {
      question: "Why can Eid al-Fitr differ between two cities?",
      answer:
        "Moon sighting criteria vary (local horizon vs global announcement). Cloud cover, jurisprudence, and diaspora alignment choices all produce legitimate one-day spreads.",
    },
    {
      question: "Is Eid al-Fitr the last day of Ramadan?",
      answer:
        "It is the first day of Shawwal, immediately after Ramadan ends at the sighting of the new crescent. Fasting does not occur on Eid itself.",
    },
    {
      question: "How do I plan charity deadlines before Eid?",
      answer:
        "Follow your scholar’s timing for zakat al-fitr—many require payment before the Eid prayer. Use calendar days backward from the confirmed Eid date via Add Days to Date once the day is announced.",
    },
  ],
};

export const holidayPagesExtended: Record<ExtendedHolidaySlug, HolidayPageExtended> = {
  halloween: halloweenExtended,
  thanksgiving: thanksgivingExtended,
  diwali: diwaliExtended,
  "eid-al-adha": eidAlAdhaExtended,
  "eid-al-fitr": eidAlFitrExtended,
};

export function getHolidayPageExtended(slug: HolidaySlug): HolidayPageExtended | null {
  if (!isExtendedHolidaySlug(slug)) return null;
  return holidayPagesExtended[slug];
}
