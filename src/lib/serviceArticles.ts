/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE ↔ ARTICLE PAIRING

   Thirteen services have a long-form journal piece covering the same subject.
   Left alone, the two pages competed for the same query: the article
   «Office Fit-Out in Limassol: Cost and Timeline» and the service page
   «Office Fit-Out in Limassol — cost & timeline» were, as <title> tags,
   the same page twice. Ten more pairs sat within a word of each other.

   Deleting the articles was not on the table and would have been the wrong
   call anyway — they answer a different question. So the two page types are
   split by intent instead:

     service page  →  commercial.    «X in Limassol — turnkey»
                                     the reader wants it done
     article       →  informational. «what it costs / why it fails / what to
                                     plan for» — the reader wants to decide

   The modifier swap is what does the work. A service that owns a cost article
   drops «cost & timeline» from its title and takes «turnkey» / «под ключ»,
   which also fills a real gap: that modifier previously appeared on two
   titles site-wide, while it is how clients here actually phrase the search.
   Services without an article keep «cost & timeline» — nothing competes with
   them for it.

   The same map drives reciprocal linking. The service page points at its
   article as further reading; the article points back with commercial anchor
   text. That tells a search engine which of the pair to rank for what,
   instead of leaving it to guess.
   ═══════════════════════════════════════════════════════════════════════════ */

export interface ArticlePair {
  /** Blog slug in each language. Undefined where that language has no piece yet. */
  en?: string;
  ru?: string;
  /** Short label for the "further reading" link on the service page. */
  labelEn: string;
  labelRu: string;
}

export const serviceArticles: Record<string, ArticlePair> = {
  'apartment-renovation': {
    en: 'apartment-renovation-cost-2025',
    ru: 'stoimost-remonta-kvartiry-2025',
    labelEn: 'Full cost breakdown by stage',
    labelRu: 'Полная разбивка цены по этапам',
  },
  'kitchen-renovation': {
    en: 'kitchen-renovation-cost-limassol',
    ru: 'kuhnya-stoimost-kipr',
    labelEn: 'What drives a kitchen budget',
    labelRu: 'Из чего складывается цена кухни',
  },
  'bathroom-renovation': {
    en: 'bathroom-renovation-guide',
    labelEn: 'Stages, tanking and what goes wrong',
    labelRu: 'Этапы, гидроизоляция и типовые ошибки',
  },
  'pool-renovation': {
    en: 'swimming-pool-renovation-limassol',
    labelEn: 'Pool renovation in detail',
    labelRu: 'Ремонт бассейна подробно',
  },
  'terrace-outdoor': {
    en: 'terrace-outdoor-living-limassol',
    labelEn: 'What survives a Cyprus summer',
    labelRu: 'Что выдерживает кипрское лето',
  },
  'smart-home': {
    en: 'smart-home-integration-limassol',
    labelEn: 'KNX and Lutron compared',
    labelRu: 'KNX и Lutron: сравнение',
  },
  'office-fit-out': {
    en: 'office-fitout-limassol',
    labelEn: 'What to plan for before you start',
    labelRu: 'Что спланировать до начала',
  },
  flooring: {
    en: 'flooring-guide-cyprus',
    ru: 'napolnye-pokrytiya-kipr',
    labelEn: 'Which floors survive the climate',
    labelRu: 'Какой пол выдержит климат',
  },
  waterproofing: {
    en: 'waterproofing-guide-limassol',
    ru: 'gidroizolyatsiya-kipr',
    labelEn: 'Why most tanking jobs fail',
    labelRu: 'Почему гидроизоляция не работает',
  },
  'windows-doors': {
    en: 'windows-doors-replacement-cyprus',
    ru: 'okna-i-dveri-kipr',
    labelEn: 'Aluminium, PVC or timber',
    labelRu: 'Алюминий, ПВХ или дерево',
  },
  'interior-design': {
    en: 'interior-design-cyprus',
    ru: 'dizajn-interera-na-kipre',
    labelEn: 'Styles, costs and what lets well',
    labelRu: 'Стили, цены и что работает в аренде',
  },
  'energy-modernization': {
    en: 'energy-class-a-plus-cyprus',
    ru: 'energoklass-a-plus-kipr',
    labelEn: 'What energy class A+ actually saves',
    labelRu: 'Сколько экономит энергокласс A+',
  },
  'house-construction': {
    en: 'house-building-cost-cyprus-2026',
    ru: 'stoimost-stroitelstva-doma-kipr-2026',
    labelEn: 'Real build cost per m²',
    labelRu: 'Реальная цена стройки за м²',
  },
};

/** True where a dedicated cost/guide article owns the informational query. */
export function hasArticle(serviceSlug: string): boolean {
  return serviceSlug in serviceArticles;
}

/**
 * Title modifier for a service page. Services whose informational query is
 * answered by an article take the commercial modifier; the rest keep the
 * cost one, since nothing competes with them for it.
 */
export function serviceTitleSuffix(serviceSlug: string, lang: 'en' | 'ru'): string {
  const commercial = hasArticle(serviceSlug);
  if (lang === 'ru') return commercial ? 'под ключ — цены' : '— цена и сроки';
  return commercial ? '— turnkey service' : '— cost & timeline';
}

/** The article to offer as further reading, in this language, if one exists. */
export function articleFor(
  serviceSlug: string,
  lang: 'en' | 'ru',
): { href: string; label: string } | null {
  const pair = serviceArticles[serviceSlug];
  if (!pair) return null;
  const slug = lang === 'ru' ? pair.ru : pair.en;
  if (!slug) return null;
  return {
    href: lang === 'ru' ? `/ru/blog/${slug}` : `/en/blog/${slug}`,
    label: lang === 'ru' ? pair.labelRu : pair.labelEn,
  };
}
