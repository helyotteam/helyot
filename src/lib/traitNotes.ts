/**
 * TRAIT NOTES — what an area's physical reality does to one specific job.
 *
 * The service × location pages shared a single paragraph per category, so all
 * eight trades pages in a district read alike. This file carries the missing
 * dimension: for a given service, what changes when the area is coastal, or
 * walk-up, or on a slope, or under a management company.
 *
 * A page renders only the notes whose trait its location actually has, so the
 * set of lines differs by both axes. Nothing here is invented — each note
 * states a physical consequence and, where it costs money, the money.
 *
 * Services without an entry fall back to the category-level angle, which is
 * still rendered above this block.
 */
import type { LocationTrait } from './citiesData';

export interface TraitNote { en: string; ru: string; }

type NotesByTrait = Partial<Record<LocationTrait, TraitNote>>;

export const traitNotes: Record<string, NotesByTrait> = {

  painting: {
    coastal: {
      en: 'Salt in the air attacks the coating from underneath. Exterior work here uses silicone or silicate systems rated for coastal exposure, not standard acrylic — the difference is roughly 15% on material and three times the service life.',
      ru: 'Соль в воздухе разрушает покрытие снизу. Наружные работы здесь идут силиконовыми или силикатными системами прибрежного класса, а не обычным акрилом — разница около 15% по материалу и втрое по сроку службы.',
    },
    'older-stock': {
      en: 'Walls in pre-2000 buildings rarely take paint straight. Expect crack opening, mesh reinforcement and a bonding primer before the first coat — €8–14/m² on top of ordinary preparation.',
      ru: 'Стены в домах до 2000 года редко принимают краску сразу. Закладывайте расшивку трещин, армирование сеткой и адгезионный грунт до первого слоя — €8–14/м² сверх обычной подготовки.',
    },
    managed: {
      en: 'Anything visible from outside — balcony soffits, railings, the elevation itself — needs the management company\'s consent before a brush touches it, and the working hours are theirs to set.',
      ru: 'Всё, что видно снаружи, — потолки балконов, ограждения, сам фасад — требует согласия управляющей компании до начала работ, и часы работ устанавливает тоже она.',
    },
    'short-let': {
      en: 'Guest turnover means walls are wiped, not admired. We specify washable matt in circulation areas rather than standard emulsion: it costs a little more and survives four seasons instead of two.',
      ru: 'При потоке гостей стены протирают, а не разглядывают. В проходных зонах закладываем моющуюся матовую вместо обычной: чуть дороже, живёт четыре сезона вместо двух.',
    },
    hillside: {
      en: 'Elevations on a slope need scaffold on uneven ground, and the lower storeys often carry damp from the retained side. Both are priced from the survey, not assumed.',
      ru: 'Фасады на склоне требуют лесов на неровном грунте, а нижние этажи часто несут сырость со стороны подпора. И то и другое считается по обследованию, а не по умолчанию.',
    },
    premium: {
      en: 'At this level the finish is judged in raking light. That means a higher class of plastering underneath and a third coat where a strong colour meets a light one — the paint is the last 20% of the cost, not the first.',
      ru: 'На этом уровне отделку смотрят в косом свете. Это значит более высокий класс штукатурки под ней и третий слой там, где насыщенный цвет ложится на светлый: краска здесь — последние 20% стоимости, а не первые.',
    },
    conservation: {
      en: 'Colour and finish on anything facing the street are set by the conservation rules, not by preference. Confirm the approved palette in writing before ordering material.',
      ru: 'Цвет и фактура всего, что выходит на улицу, определяются правилами охранной зоны, а не вкусом. Согласованную палитру подтверждайте письменно до закупки материала.',
    },
  },

  flooring: {
    coastal: {
      en: 'Humidity swings on the coast move timber more than inland. SPC and porcelain hold dimension here; solid and engineered board need a controlled interior and a proper expansion gap at every wall.',
      ru: 'Перепады влажности на побережье двигают дерево сильнее, чем в глубине острова. SPC и керамогранит держат размер; массив и инженерная доска требуют стабильного микроклимата и полноценного зазора у каждой стены.',
    },
    'older-stock': {
      en: 'Floors in older blocks are rarely within tolerance. Levelling to beads rather than a skim of self-levelling adds €8–14/m², and it is the difference between a quiet floor and a creaking one.',
      ru: 'Полы в старых домах редко в допуске. Выравнивание по маякам вместо тонкого наливного добавляет €8–14/м², и это разница между тихим полом и скрипящим.',
    },
    'no-lift': {
      en: 'Porcelain arrives in 25–30 kg crates and there is no lift. Manual carry to the flat is a line in the quote here, not a rounding error: €300–900 depending on floor.',
      ru: 'Керамогранит приходит в ящиках по 25–30 кг, лифта нет. Ручной подъём в квартиру здесь отдельная строка, а не мелочь: €300–900 в зависимости от этажа.',
    },
    'short-let': {
      en: 'Suitcase wheels and daily traffic finish a domestic-grade floor in two seasons. We specify a wear layer from 0.5 mm rather than the 0.3 mm normal in a private home.',
      ru: 'Колёса чемоданов и ежедневный поток добивают бытовое покрытие за два сезона. Закладываем износовый слой от 0,5 мм вместо 0,3 мм, нормальных для собственного жилья.',
    },
    managed: {
      en: 'Acoustic underlay is usually a condition of consent, not an upgrade — most complexes require a rated layer under any hard floor above ground level.',
      ru: 'Акустическая подложка здесь обычно условие согласования, а не улучшение: большинство комплексов требуют сертифицированный слой под любым жёстким покрытием выше первого этажа.',
    },
    premium: {
      en: 'Large-format tile and wide-board timber expose every millimetre of substrate error, so the preparation costs more than the covering in a fair number of these projects.',
      ru: 'Крупный формат и широкая доска показывают каждый миллиметр ошибки основания, поэтому подготовка в изрядной части таких проектов стоит дороже самого покрытия.',
    },
  },

  waterproofing: {
    coastal: {
      en: 'Salt-laden damp attacks the substrate as well as the membrane. Terraces and roofs within a kilometre of the sea get a primer specified for saline exposure before the membrane goes on.',
      ru: 'Просоленная влага атакует не только мембрану, но и основание. Террасы и кровли в километре от моря получают грунт, рассчитанный на солевую нагрузку, до нанесения мембраны.',
    },
    'older-stock': {
      en: 'In buildings of this era the original tanking is either absent or a coat of something along the joints. Assume full removal to the slab rather than an overlay — an overlay inherits the leak.',
      ru: 'В домах этой эпохи исходной гидроизоляции либо нет, либо это обмазка по швам. Рассчитывайте на полный демонтаж до плиты, а не на устройство поверх: поверх наследует протечку.',
    },
    hillside: {
      en: 'On a slope the water arriving at the building is not only rain. Retained ground behind the lower storeys needs drainage before any tanking, or the membrane is holding back a hydrostatic load it was never designed for.',
      ru: 'На склоне вода, приходящая к дому, — не только дождь. Удерживаемый грунт за нижними этажами требует дренажа до гидроизоляции, иначе мембрана держит гидростатическую нагрузку, на которую не рассчитана.',
    },
    managed: {
      en: 'A leak here is rarely confined to your flat. Works touching a shared slab or a communal terrace need the management company in the loop from the survey, not from the day of the failure.',
      ru: 'Протечка здесь редко ограничивается вашей квартирой. Работы, затрагивающие общую плиту или общую террасу, требуют участия управляющей компании с этапа обследования, а не с дня аварии.',
    },
    'short-let': {
      en: 'Several showers a day is a different load from a family bathroom. Falls, drainage capacity and the height the membrane is taken up the wall are all sized for it here.',
      ru: 'Несколько душей в день — не та нагрузка, что в семейной ванной. Уклоны, пропускная способность трапа и высота завода мембраны на стену здесь считаются под неё.',
    },
  },

  facade: {
    coastal: {
      en: 'Exposed reinforcement is the real enemy here, not the render. Where a balcony edge is already spalling, the steel is treated and passivated before anything is made good — cosmetic repair over corroding rebar returns within two seasons.',
      ru: 'Настоящий враг здесь не штукатурка, а оголённая арматура. Там, где кромка балкона уже крошится, металл обрабатывается и пассивируется до восстановления: косметика поверх ржавеющей арматуры возвращается за два сезона.',
    },
    'older-stock': {
      en: 'Renders of this age move with the structure. Alkali-resistant mesh over the whole elevation, not just at cracks, is what keeps the repair from reopening along the old lines.',
      ru: 'Штукатурка такого возраста двигается вместе с конструкцией. Щелочестойкая сетка по всему фасаду, а не только по трещинам, — то, что не даёт ремонту раскрыться по старым линиям.',
    },
    conservation: {
      en: 'Material, texture and colour are all consented items here, and stone elevations usually cannot be rendered at all. Approval is sought before design, because a refusal after scaffolding is expensive.',
      ru: 'Материал, фактура и цвет здесь — предмет согласования, а каменные фасады обычно вообще нельзя штукатурить. Разрешение запрашивается до проекта: отказ после установки лесов обходится дорого.',
    },
    hillside: {
      en: 'Scaffold on sloping ground needs a designed base, and the uphill elevation often cannot be reached from outside at all. Both change the access line materially.',
      ru: 'Леса на склоне требуют проектного основания, а к нагорному фасаду часто вообще нет подхода снаружи. И то и другое существенно меняет строку доступа.',
    },
    premium: {
      en: 'Natural stone elevations are repointed and re-sealed rather than coated. It is slower work, and the sealing is repeated every three to five years — worth knowing before choosing stone over render.',
      ru: 'Каменные фасады перешиваются по швам и гидрофобизируются, а не красятся. Работа медленнее, а пропитка повторяется каждые три-пять лет — это стоит знать до выбора камня вместо штукатурки.',
    },
  },

  'electrical-plumbing': {
    'older-stock': {
      en: 'Aluminium wiring and undersized risers are the two findings that change a quote here most. Both are checked at the survey, because both are full-replacement items rather than repairs.',
      ru: 'Алюминиевая проводка и занижённые стояки — две находки, которые здесь сильнее всего меняют смету. Обе проверяются на выезде, потому что обе относятся к полной замене, а не к ремонту.',
    },
    coastal: {
      en: 'Consumer units and external sockets in coastal buildings corrode from the inside. Enclosures here are specified to a higher ingress rating than the code minimum.',
      ru: 'Щитки и наружные розетки в прибрежных домах корродируют изнутри. Корпуса здесь закладываются с классом защиты выше минимально требуемого.',
    },
    'no-lift': {
      en: 'Consumer units, boilers and cylinders are carried up by hand. It rarely changes the specification, but it does change the labour line.',
      ru: 'Щитки, бойлеры и накопители поднимаются вручную. На спецификацию это влияет редко, на строку работ — всегда.',
    },
    managed: {
      en: 'Anything touching a riser or a communal meter is the building\'s business as well as yours, and isolation has to be booked rather than simply done.',
      ru: 'Всё, что касается стояка или общедомового счётчика, — дело не только ваше, и отключение здесь согласуется заранее, а не делается по факту.',
    },
    conservation: {
      en: 'Surface routing is often the only option because chasing is restricted in protected fabric. It is planned at design stage, since it decides where furniture can go.',
      ru: 'Открытая прокладка здесь часто единственный вариант, потому что штробление в охраняемых конструкциях ограничено. Планируется на этапе проекта, так как определяет расстановку мебели.',
    },
  },

  'apartment-renovation': {
    'older-stock': {
      en: 'A flat of this era usually goes back to the concrete: wiring, risers and tanking all reach end of life at roughly the same time, which is why a partial refresh here rarely stays partial.',
      ru: 'Квартира этой эпохи обычно раздевается до бетона: проводка, стояки и гидроизоляция подходят к концу ресурса примерно одновременно — поэтому частичное обновление здесь редко остаётся частичным.',
    },
    managed: {
      en: 'Working hours, the lift you may use and the route materials take are all set by the building. We agree them before the programme is written, because they decide how long it takes.',
      ru: 'Часы работ, доступный лифт и маршрут подъёма материалов задаёт дом. Мы согласуем их до составления графика, потому что именно они определяют срок.',
    },
    'no-lift': {
      en: 'Everything in and everything out goes by hand — 8 to 14 cubic metres of waste on a typical flat. It is a real line here, not a rounding error.',
      ru: 'Всё внутрь и всё наружу идёт вручную — 8–14 кубов мусора на типовую квартиру. Здесь это настоящая строка, а не округление.',
    },
    'short-let': {
      en: 'The programme is built backwards from the season opening, with a reserve week. Finishing in June instead of April does not cost you two months — it costs the season.',
      ru: 'График строится обратным отсчётом от открытия сезона, с резервной неделей. Закончить в июне вместо апреля стоит не двух месяцев, а сезона.',
    },
    coastal: {
      en: 'Ironmongery, hinges and runners within a kilometre of the sea are specified in stainless. The purchase difference is 10–15%; the service-life difference is threefold.',
      ru: 'Фурнитура, петли и направляющие в километре от моря закладываются в нержавейке. Разница в закупке 10–15%, в сроке службы — втрое.',
    },
    premium: {
      en: 'Concealed doors, shadow gaps and junctions without architrave need a higher class of plastering underneath — €8–14/m² before any finish is chosen.',
      ru: 'Скрытые двери, теневые швы и стыки без наличников требуют более высокого класса штукатурки под ними — €8–14/м² до выбора любой отделки.',
    },
  },
};

/** Notes for a service, filtered to the traits this location actually has. */
export function getTraitNotes(
  serviceSlug: string,
  traits: LocationTrait[] | undefined,
  lang: 'en' | 'ru',
): { trait: LocationTrait; text: string }[] {
  const byTrait = traitNotes[serviceSlug];
  if (!byTrait || !traits) return [];
  return traits
    .map(t => ({ trait: t, note: byTrait[t] }))
    .filter((x): x is { trait: LocationTrait; note: TraitNote } => Boolean(x.note))
    .map(x => ({ trait: x.trait, text: x.note[lang] }));
}
