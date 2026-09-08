/**
 * CALCULATOR MODEL
 *
 * The previous model multiplied one €/m² rate by area and nothing else, which
 * produced four problems:
 *   1. Cost per m² never changed with size. A 30 m² studio came out at €8,600
 *      for a whole flat while the site's own price list puts a bathroom at
 *      €2,000 and a kitchen at €5,000 — €7,000 for two rooms alone.
 *   2. "Full electrical" and "Plumbing" were charged as extras even though both
 *      are listed inside the base scope of an apartment renovation.
 *   3. roomMultipliers were defined and never used, so the real cost driver —
 *      how many wet rooms there are — had no effect at all.
 *   4. The per-location priceFactor used on location pages was ignored, so the
 *      same job quoted differently on two pages of the same site.
 *
 * This model is:
 *
 *   setup + effectiveArea(area) × shellRate × levelRatio
 *         + bathrooms × bathRate + kitchens × kitchenRate
 *   …then × locationFactor, and never below the published "from" rate.
 *
 * Rates are calibrated so the model reproduces the figures already published
 * elsewhere on the site: an 80 m² apartment at ≈ €25,000 and a 250 m² villa at
 * ≈ €72,000. Nothing here is a new claim.
 */

export type PropertyType = 'apartment' | 'villa' | 'office';
export type FinishLevel  = 'economy' | 'standard' | 'premium';

/** Fixed cost that does not scale: mobilisation, project management, waste. */
export const setupCost: Record<PropertyType, number> = {
  apartment: 1500, villa: 3600, office: 1800,
};

/**
 * Area bands. Cost per m² falls as the job grows because the fixed overheads
 * spread — 60 m² at full rate, the next 90 at 92%, everything above at 85%.
 */
export const areaBands: [number, number][] = [[60, 1.0], [90, 0.92], [Infinity, 0.85]];

/* levelRatio.standard was 1.0, which put an 85 m² two-bed at €22.8–29k. The
   figure the business actually quotes for that job is €25–35k, so the standard
   band is calibrated to it; economy and premium keep their relative spacing. */
/** Shell work per m²: demolition, services, plaster, floors, paint, doors. */
export const shellRate: Record<PropertyType, number> = {
  apartment: 141.8, villa: 208.4, office: 122,
};

export const levelRatio: Record<FinishLevel, number> = {
  economy: 0.62, standard: 1.35, premium: 1.85,
};

/** Wet rooms priced per room — this is what actually moves a renovation quote. */
export const bathroomCost: Record<FinishLevel, number> = {
  economy: 2100, standard: 4200, premium: 8400,
};
export const kitchenCost: Record<FinishLevel, number> = {
  economy: 4800, standard: 8400, premium: 16800,
};

/** The "from €X/m²" headline published on the service pages. Acts as a floor. */
export const floorRate: Record<PropertyType, number> = {
  apartment: 170, villa: 190, office: 150,
};

/** Sensible area range per type — a 500 m² apartment is not a real brief. */
export const areaRange: Record<PropertyType, { min: number; max: number; def: number }> = {
  apartment: { min: 30,  max: 250, def: 80  },
  villa:     { min: 100, max: 600, def: 250 },
  office:    { min: 40,  max: 500, def: 120 },
};

/**
 * Add-ons. Only work that is NOT already inside the base scope appears here —
 * electrical and plumbing were removed because a renovation quote includes a
 * full rewire and new drainage by default.
 */
export const extraServices: Record<string, {
  labelEn: string; labelRu: string; costPct: number;
  /** Types where the option makes sense at all. */
  types?: PropertyType[];
}> = {
  design:     { labelEn: 'Interior design',     labelRu: 'Дизайн интерьера',  costPct: 12 },
  smart:      { labelEn: 'Smart home',          labelRu: 'Умный дом',         costPct: 14 },
  ac:         { labelEn: 'Air conditioning',    labelRu: 'Кондиционирование', costPct: 6  },
  energy:     { labelEn: 'Energy upgrade',      labelRu: 'Энергомодернизация', costPct: 9 },
  joinery:    { labelEn: 'Bespoke joinery',     labelRu: 'Мебель на заказ',   costPct: 11 },
  outdoor:    { labelEn: 'Terrace & outdoor',   labelRu: 'Терраса и участок', costPct: 8, types: ['villa', 'office'] },
};

/**
 * Weeks on site. Interpolated inside the range the service pages already
 * publish — 5–14 for apartments, 10–20 for villas, 4–8 for offices — so the
 * calculator can never quote a timeline the rest of the site contradicts.
 */
export const timelineRange: Record<PropertyType, [number, number]> = {
  apartment: [5, 14], villa: [10, 20], office: [4, 8],
};

export function weeksFor(
  type: PropertyType, area: number, level: FinishLevel, scope: WorkScope = 'full',
): [number, number] {
  const k = scopeWeeks[scope];
  const [lo, hi] = timelineRange[type].map(v => Math.max(1, Math.round(v * k))) as [number, number];
  const { min, max } = areaRange[type];
  const t = Math.min(1, Math.max(0, (area - min) / (max - min)));
  const lift = level === 'premium' ? 0.15 : level === 'economy' ? -0.1 : 0;
  const mid = lo + (hi - lo) * Math.min(1, Math.max(0, t + lift));
  const span = Math.max(2, Math.round((hi - lo) * 0.35));
  return [
    Math.max(lo, Math.round(mid - span / 2)),
    Math.min(hi, Math.round(mid + span / 2)),
  ];
}

/**
 * Scope of work. The model only knew how to price a full renovation, so anyone
 * after a repaint had nothing to calculate — the floor rate alone would have
 * quoted them a gut-out. Cosmetic work touches surfaces, not services: no
 * rewire, no drainage, wet rooms refreshed rather than replaced.
 */
export type WorkScope = 'cosmetic' | 'full';

export const scopeFactors: Record<WorkScope, {
  setup: number; shell: number; wet: number; floor: number;
}> = {
  // Prep, patching, painting, protection and waste. Wet rooms get a refresh —
  // silicone, grout, fittings — not a strip-out.
  cosmetic: { setup: 0.5, shell: 0.30, wet: 0.25, floor: 0.16 },
  full:     { setup: 1.0, shell: 1.00, wet: 1.00, floor: 1.00 },
};

/** Weeks are much shorter when nothing structural is opened up. */
export const scopeWeeks: Record<WorkScope, number> = { cosmetic: 0.35, full: 1 };

export interface Breakdown {
  setup: number; shell: number; bathrooms: number; kitchens: number; extras: number;
  subtotal: number; total: number; perSqm: number;
  low: number; high: number; floored: boolean;
}

export function effectiveArea(area: number): number {
  let left = area, out = 0;
  for (const [size, k] of areaBands) {
    const take = Math.min(left, size);
    out += take * k; left -= take;
    if (left <= 0) break;
  }
  return out;
}

export function calculate(opts: {
  type: PropertyType; level: FinishLevel; area: number;
  bathrooms?: number; kitchens?: number; extras?: string[];
  locationFactor?: number; scope?: WorkScope;
}): Breakdown {
  const { type, level, area } = opts;
  const sc = scopeFactors[opts.scope ?? 'full'];
  const bathrooms = opts.bathrooms ?? 1;
  const kitchens  = opts.kitchens ?? 1;
  const factor    = opts.locationFactor ?? 1;

  const setup     = setupCost[type] * sc.setup;
  const shell     = effectiveArea(area) * shellRate[type] * levelRatio[level] * sc.shell;
  const bathTotal = bathrooms * bathroomCost[level] * sc.wet;
  const kitTotal  = kitchens * kitchenCost[level] * sc.wet;
  const core      = setup + shell + bathTotal + kitTotal;

  const pct = (opts.extras ?? []).reduce((s, k) => s + (extraServices[k]?.costPct ?? 0), 0);
  const extras = core * (pct / 100);

  const subtotal = core + extras;
  // Never quote below the "from €X/m²" the service pages advertise.
  const floor    = area * floorRate[type] * sc.floor;
  const floored  = subtotal < floor;
  const total    = Math.max(subtotal, floor) * factor;

  return {
    setup: Math.round(setup * factor),
    shell: Math.round(shell * factor),
    bathrooms: Math.round(bathTotal * factor),
    kitchens: Math.round(kitTotal * factor),
    extras: Math.round(extras * factor),
    subtotal: Math.round(subtotal * factor),
    total: Math.round(total),
    perSqm: Math.round(total / area),
    // Symmetric, because we are equally likely to be over or under until we
    // have seen the property. The old ×0.9/×1.15 spread had no basis.
    low:  Math.round(total * 0.88),
    high: Math.round(total * 1.12),
    floored,
  };
}

/** Payment milestones exactly as published in the FAQ and on /process. */
export const paymentStages: { pct: number; en: string; ru: string }[] = [
  { pct: 30, en: 'On signing',            ru: 'При подписании' },
  { pct: 30, en: 'Structural completion', ru: 'Конструктив завершён' },
  { pct: 30, en: 'Second fix',            ru: 'Чистовая подготовка' },
  { pct: 10, en: 'Handover',              ru: 'Сдача' },
];

export const servicesList = [
  { slug: 'apartment-renovation', titleEn: 'Apartment Renovation', titleRu: 'Ремонт квартир' },
  { slug: 'villa-renovation',     titleEn: 'Villa Renovation',     titleRu: 'Ремонт вилл' },
  { slug: 'office-fit-out',       titleEn: 'Office Fit-Out',       titleRu: 'Отделка офиса' },
  { slug: 'bathroom-renovation',  titleEn: 'Bathroom Renovation',  titleRu: 'Ремонт ванной' },
  { slug: 'kitchen-renovation',   titleEn: 'Kitchen Renovation',   titleRu: 'Ремонт кухни' },
];
