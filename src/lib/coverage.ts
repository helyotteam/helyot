/* ═══════════════════════════════════════════════════════════════════════════
   COVERAGE STATEMENTS

   One honest sentence per tier, shown on the location page under the intro.

   The site previously said «working across Cyprus» in the footer of every
   page, on the gallery hero and in two meta descriptions. That reads as a
   strength until a client in Paphos asks where the Paphos crew is — and the
   honest answer, «they drive from Limassol», then lands as a retreat rather
   than as a fact stated up front.

   Saying it first inverts that. A contractor who names its own radius sounds
   like one that knows its operation; a contractor who claims the whole island
   from a single base in a city of 250,000 does not. It also filters enquiries
   before they cost anyone a site visit.
   ═══════════════════════════════════════════════════════════════════════════ */

import type { LocationData } from './citiesData';

type Tier = LocationData['tier'];

const statements: Record<Tier, { en: string; ru: string }> = {
  primary: {
    en: 'This is our home ground. Crews, warehouse and showroom partners are all inside the city, which means a site visit within a day or two and materials that do not wait on a delivery from elsewhere.',
    ru: 'Это наш домашний район. Бригады, склад и партнёрские шоурумы находятся в городе — выезд на объект в течение дня-двух, а материалы не ждут поставки из другого города.',
  },
  secondary: {
    en: 'We work here regularly, with crews travelling from Limassol. In practice that changes two things and nothing else: a site visit is scheduled rather than same-day, and the programme allows for travel. Prices, warranty and the project manager are the same as at home.',
    ru: 'Здесь мы работаем регулярно, бригады приезжают из Лимасола. На практике это меняет две вещи и больше ничего: выезд назначается по графику, а не в тот же день, и в сроки заложена дорога. Цены, гарантия и проектный менеджер — те же, что дома.',
  },
  selected: {
    en: 'We take projects here selectively — the distance from Limassol has to make sense for the scope. Full renovations and villa work, yes; a single bathroom, honestly, is better given to someone local. Tell us the scope and we will say straight away whether we are the right call.',
    ru: 'Здесь мы берём проекты выборочно: расстояние от Лимасола должно быть оправдано объёмом. Полный ремонт и работы по виллам — да; один санузел честнее отдать местным. Опишите объём — сразу скажем, подходим ли мы.',
  },
};

export function coverageNote(loc: LocationData, lang: 'en' | 'ru'): string {
  return statements[loc.tier][lang];
}

/** Heading for the note. Kept short — it sits under the area intro. */
export function coverageLabel(tier: Tier, lang: 'en' | 'ru'): string {
  if (lang === 'ru') {
    return tier === 'primary' ? 'Свои бригады здесь'
         : tier === 'secondary' ? 'Работаем регулярно'
         : 'Проекты по согласованию';
  }
  return tier === 'primary' ? 'Our own crews here'
       : tier === 'secondary' ? 'Regular projects here'
       : 'Selected projects here';
}
