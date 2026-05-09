import type { CalculatorEducationalContentProps } from "@/components/CalculatorEducationalContent";
import type { HolidaySlug } from "@/lib/programmaticPages";

export type HolidayEducationalBase = Pick<
  CalculatorEducationalContentProps,
  "howToIntro" | "steps" | "aboutParagraphs"
>;

const holidayEducationalBySlug: Record<HolidaySlug, HolidayEducationalBase> = {
  "new-year": {
    howToIntro:
      "Track how quickly January first approaches in your timezone using live countdown units alongside the exact upcoming calendar anchor. Glance at days remaining when budgeting fireworks logistics, travel backups, or publication freezes tied to year turnover.",
    steps: [
      "Read the highlighted upcoming celebration date—January first shifts between weekdays yearly, which cascades into commute plans.",
      "Watch the ticking countdown if you need finer granularity than whole days for midnight broadcasts or coordinated toast timing.",
      "Cross-reference related planners—annual resolutions, fiscal-calendar closes, or fiscal-year resets tied to organizations adopting January beginnings.",
    ],
    aboutParagraphs: [
      "New Year’s Day marks the Gregorian calendar rollover celebrated widely with fireworks, countdown gatherings, and reflections even among cultures maintaining parallel lunar festivities. Many municipalities synchronize civic closures and transit schedules around midnight transitions—timezone hopping televises ball drops sequentially worldwide.",
      "Historically, civil calendars consolidated through reforms such as the Gregorian adjustment—January gradually stabilized as the renewal month across nations adopting solar synchronization despite religious calendars retaining distinct New Year anchors elsewhere.",
      "Traditions include fireworks, champagne toasts, resolutions lists, polar plunges, concerts, and communal countdown chants; multicultural neighborhoods blend diaspora rituals with civic fireworks permitting cycles regulated for noise and safety.",
    ],
  },
  halloween: {
    howToIntro:
      "Blend spooky anticipation with logistics planning by pairing countdown outputs with the printed October thirty-first anchor when coordinating costumes, candy inventory, or parade permits.",
    steps: [
      "Confirm the upcoming October thirty-first date displayed alongside localized weekday context.",
      "Use countdown granularity to pace crafting timelines—homemade costumes often need weekends carved weeks ahead.",
      "Explore adjacent planners such as school costume bans or municipal trick-or-treat windows advertised separately from raw calendar math.",
    ],
    aboutParagraphs: [
      "Halloween on October thirty-first blends folklore-infused festivities—ghost narratives, jack-o’-lantern carving, and playful scare aesthetics—with kid-centric candy economics across suburbs worldwide.",
      "Historical roots intertwine Celtic harvest festivals and Catholic remembrance customs layered through immigrant narratives in North America; contemporary celebrations emphasize costume creativity more than agricultural signaling.",
      "Traditions span haunted attractions, trunk-or-trunk alternatives, allergy-conscious teal pumpkins, community parades, and cinematic horror marathons—each locality emphasizes safety briefings because dusk pedestrian spikes coincide with drivers adjusting costumes.",
    ],
  },
  "eid-al-fitr": {
    howToIntro:
      "Gauge proximity to Eid al-Fitr—the festival marking Ramadan’s conclusion—with countdown clocks alongside displayed Islamic-calendar estimates. Verify authoritative mosque announcements because lunar visibility shifts geography.",
    steps: [
      "Review approximate upcoming dates noting disclaimers about moon sighting variability.",
      "Plan charitable giving or travel buffers counting backward from projected celebrations.",
      "Confirm workplace accommodations early since lunar shifts may slide observances by a day relative to printed Gregorian guesses.",
    ],
    aboutParagraphs: [
      "Eid al-Fitr celebrates Ramadan’s disciplined fasting completion through communal prayer, festive attire, and generosity toward neighbors experiencing hardship.",
      "Islamic calendars follow lunar months—months shorten roughly eleven days annually relative to Gregorian solar years—so Gregorian anchors bounce unpredictably without astronomical forecasting.",
      "Traditions include congregational morning salah, zakat al-fitr distributions before prayers, sweet breakfasts afterward, family visits, children receiving gifts, and vibrant street fairs across diaspora communities adapting dress customs locally.",
    ],
  },
  "eid-al-adha": {
    howToIntro:
      "Monitor countdown pacing toward Eid al-Adha commemorating willingness narratives tied to pilgrimage seasons—dates hinge on lunar calendars like other movable Islamic observances.",
    steps: [
      "Cross-check displayed Gregorian approximation against mosque bulletins when scheduling livestock logistics or annual leave.",
      "Allocate charity timelines honoring qurbani distributions coordinated regionally.",
      "Coordinate travel expectations knowing Hajj clustering concentrates airfare demand globally.",
    ],
    aboutParagraphs: [
      "Eid al-Adha honors sacrifice narratives within Abrahamic storytelling while emphasizing charity splits toward needy recipients.",
      "Gregorian alignment floats annually due to lunar Islamic months—multicultural HR departments publish tentative calendars while emphasizing verification channels.",
      "Traditions include communal prayers, ritual sacrifice coordinated hygienically under municipal oversight, meat shares stewarded fairly, stylish attire exchanges, and hospitality emphasizing elders alongside marginalized neighbors.",
    ],
  },
  diwali: {
    howToIntro:
      "Prepare illuminations and gifting workflows using countdown clarity toward Diwali’s multi-day festivities anchored regionally across autumn solar/lunar intersections.",
    steps: [
      "Note displayed Gregorian anchor while acknowledging regional variation across Indian states or diaspora calendars.",
      "Stage cleaning cycles, sweet kitchens, and electrical inspections progressively rather than cramming final nights.",
      "Pair countdown outputs with travel bookings—airports swell near festival clusters.",
    ],
    aboutParagraphs: [
      "Diwali symbolizes light overcoming darkness—oil lamps, LED cascades, and rangoli artistry brighten neighborhoods alongside Lakshmi devotion narratives for prosperity-minded households.",
      "Historical textures weave harvest gratitude, mythic return tales, and regional New Year semantics—Sikh, Jain, and Hindu emphases differ while sharing illumination motifs.",
      "Traditions include fireworks (declining where regulated), mithai exchanges, card parties, new accounting ledgers, textile gifting, and temple pilgrimages scaled to diaspora convenience.",
    ],
  },
  thanksgiving: {
    howToIntro:
      "Monitor weeks remaining until United States Thanksgiving—the fourth Thursday of November—ideal for thaw timelines, travel buffers, and volunteer kitchen staging.",
    steps: [
      "Confirm fourth-Thursday mechanics via displayed date instead of memorizing month-specific integers yearly.",
      "Backtrack frozen poultry defrost math using daily countdown totals.",
      "Coordinate PTO alongside Black Friday retail staffing spikes immediately afterward.",
    ],
    aboutParagraphs: [
      "Thanksgiving commemorates harvest gratitude narratives reinterpreted across centuries—modern civic emphasis highlights family reunions, charitable drives, and turkey-centric menus.",
      "Historical scholarship interrogates colonial storytelling behind Plymouth myths; contemporary observances increasingly foreground Indigenous perspectives alongside charitable redistribution.",
      "Traditions include parade broadcasts, football tripleheaders, gratitude reflections, volunteering shifts, Friendsgiving alternatives, and leftovers remix recipes stretching poultry economics responsibly.",
    ],
  },
  "valentines-day": {
    howToIntro:
      "Coordinate proposals, reservations, or classroom card batches using countdown pacing toward February fourteenth—especially when Valentine’s lands midweek versus weekend altering logistics.",
    steps: [
      "Verify weekday alignment via displayed date—midweek holidays reshape dinner reservations versus weekend escapes.",
      "Stage florists and chocolatiers earlier because supply chains spike globally.",
      "Balance inclusive messaging for classrooms through structured card exchanges limiting exclusion dynamics.",
    ],
    aboutParagraphs: [
      "Valentine’s Day consolidates romantic gestures—cards, florals, confectionery—into a February focal point across advertising-heavy economies despite saint-name historical obscurity.",
      "Medieval literary traditions linking courtly love gradually commercialized through Victorian epistolary culture before twentieth-century mass-market greeting cards scaled affection commodification.",
      "Traditions include handwritten notes, prix-fixe dining, artisan chocolates, spa bookings, subtle workplace appreciation norms, and platonic friendship celebrations reframing exclusion sensitivities.",
    ],
  },
};

export function getHolidayEducationalBase(slug: HolidaySlug): HolidayEducationalBase {
  return holidayEducationalBySlug[slug];
}
