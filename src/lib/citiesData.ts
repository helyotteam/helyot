/**
 * Locations for the service × location SEO matrix.
 * Cities of Cyprus + key Limassol districts.
 * Every location carries UNIQUE local context so generated pages
 * are genuinely useful, not thin doorway pages.
 */

export interface LocationFAQ { q: string; a: string; }

export interface LocationData {
  slug:        string;
  type:        'city' | 'district';
  /** Parent city slug for districts */
  parent?:     string;
  nameEn:      string;  nameRu:      string;
  /** "in Germasogeia" / «в Гермасогее» — prepositional forms for headings */
  inEn:        string;  inRu:        string;
  lat:         number;  lng:         number;
  /** 2–3 sentence local intro — who lives/builds here, what the stock is like */
  introEn:     string;  introRu:     string;
  /** What typically goes wrong with property here — feeds the "what we check" block */
  issuesEn:    string[]; issuesRu:   string[];
  /** Location-specific FAQ (merged with service FAQ on page) */
  faqsEn:      LocationFAQ[]; faqsRu: LocationFAQ[];
  /** Price adjustment vs Limassol baseline, e.g. 1.0, 0.95 */
  priceFactor: number;
  /**
   * Physical and regulatory traits of the area.
   *
   * A service × location page used to carry one paragraph per *category*, so
   * all eight trades pages in a district read the same. Traits let the page
   * compose its own combination instead: each service says what a given trait
   * does to that particular job, and a page renders only the traits its
   * location actually has. Six locations × their own trait sets × 21 services
   * produces a different set of lines almost everywhere.
   */
  traits?: LocationTrait[];
  /**
   * How a trait actually shows up in this particular area.
   *
   * Two neighbouring districts can both be 'coastal' and 'older-stock', which
   * made their trait notes read identically. This clause names the local form
   * of the trait — the distance, the era, the specific regime — so the same
   * trait produces different text in different places.
   */
  traitContextEn?: Partial<Record<LocationTrait, string>>;
  traitContextRu?: Partial<Record<LocationTrait, string>>;
}

export type LocationTrait =
  | 'coastal'        // within ~1 km of the sea: salt attacks fixings and metal
  | 'older-stock'    // pre-2000 buildings: wiring, risers, tanking at end of life
  | 'managed'        // management company controls hours, lifts, facade changes
  | 'no-lift'        // walk-up blocks: everything is carried
  | 'hillside'       // level change: retaining, drainage, access for plant
  | 'conservation'   // facade and appearance need municipal consent
  | 'short-let'      // guest turnover: wear runs three times faster
  | 'premium';       // expectations and specification sit above the city average

export const locations: LocationData[] = [

  /* ══ CITIES ═══════════════════════════════════════════════════════════ */
  {
    slug: 'limassol', type: 'city',
    nameEn: 'Limassol', nameRu: 'Лимасол',
    inEn: 'in Limassol', inRu: 'в Лимасоле',
    lat: 34.6841, lng: 33.0379,
    introEn: 'Limassol is where Helyot is based — our crews, warehouse and showroom partners are all inside the city. The housing stock ranges from 1980s apartment blocks around the old hospital district to the new seafront towers, which means no two renovations start from the same point.',
    introRu: 'Лимасол — домашний город Helyot: наши бригады, склад и партнёрские шоурумы находятся здесь. Жилой фонд — от многоквартирных домов 1980-х у старого госпиталя до новых башен первой линии, поэтому двух одинаковых ремонтов не бывает.',
    issuesEn: [
      'Salt-air corrosion of balcony rebar and railings on any building within 800 m of the sea',
      'Pre-2000 aluminium wiring that fails modern load requirements',
      'Flat-roof waterproofing at end of life on 1980s–90s blocks',
      'Undersized drainage risers shared between apartments in older buildings',
    ],
    issuesRu: [
      'Коррозия арматуры балконов и перил от морского воздуха в зданиях ближе 800 м от моря',
      'Алюминиевая проводка до 2000 года, не выдерживающая современных нагрузок',
      'Гидроизоляция плоских крыш 1980–90-х на исходе ресурса',
      'Заниженные общие канализационные стояки в старых домах',
    ],
    faqsEn: [
      { q: 'Do you handle building-management approvals in Limassol apartment blocks?', a: 'Yes. We prepare the works notice for your building committee, agree lift protection and working hours, and handle neighbour communication — standard practice on every Limassol apartment project we run.' },
      { q: 'How quickly can you start a project in Limassol?', a: 'A site visit usually happens within 48 hours anywhere in Limassol. Start dates depend on scope: cosmetic projects can begin within 2–3 weeks, full renovations typically within 4–6 weeks of quote approval.' },
    ],
    faqsRu: [
      { q: 'Вы согласовываете работы с управляющей компанией дома в Лимасоле?', a: 'Да. Мы готовим уведомление о работах для комитета здания, согласовываем защиту лифта и часы работ, общаемся с соседями — это стандарт на каждом нашем квартирном проекте в Лимасоле.' },
      { q: 'Как быстро вы можете начать проект в Лимасоле?', a: 'Выезд на объект — обычно в течение 48 часов в любой точке Лимасола. Старт работ зависит от объёма: косметический ремонт — через 2–3 недели, полный — через 4–6 недель после утверждения сметы.' },
    ],
    priceFactor: 1.0,
    traits: ['coastal', 'older-stock'],
    traitContextEn: { 'coastal': 'buildings within about 800 m of the water', 'older-stock': '1980s blocks built before insulation and modern wiring were normal' },
    traitContextRu: { 'coastal': 'дома примерно в 800 м от воды', 'older-stock': 'корпуса 1980-х, построенные до того, как утепление и современная электрика стали нормой' },
  },
  {
    slug: 'paphos', type: 'city',
    nameEn: 'Paphos', nameRu: 'Пафос',
    inEn: 'in Paphos', inRu: 'в Пафосе',
    lat: 34.7754, lng: 32.4245,
    introEn: 'Paphos is villa country: most of our projects here are 2000s-era houses in Peyia, Tala and Emba bought by international owners, plus sea-view apartments around Kato Paphos. Winters are wetter than Limassol, so damp management and terrace waterproofing come up in almost every survey.',
    introRu: 'Пафос — край вилл: большинство наших проектов здесь — дома 2000-х в Пейе, Тале и Эмбе, купленные иностранными владельцами, плюс квартиры с видом на море в Като-Пафосе. Зимы влажнее лимасольских, поэтому борьба с сыростью и гидроизоляция террас встречаются почти в каждом обследовании.',
    issuesEn: [
      'Rising damp and winter condensation in villas built without cavity insulation',
      'Terrace and pool-deck waterproofing failures on 15–20-year-old builds',
      'Original 2000s kitchens and bathrooms reaching end of life across Peyia and Tala',
      'Single-glazed aluminium windows losing heat in winter and gaining it in summer',
    ],
    issuesRu: [
      'Капиллярная влага и зимний конденсат в виллах без утепления стен',
      'Отказ гидроизоляции террас и зон у бассейна в домах 15–20 лет',
      'Кухни и ванные 2000-х выработали ресурс по всей Пейе и Тале',
      'Алюминиевые окна с одинарным стеклопакетом теряют тепло зимой и греются летом',
    ],
    faqsEn: [
      { q: 'Do you really work in Paphos, or only in Limassol?', a: 'We run Paphos projects with the same in-house crews, coordinated from Limassol — 45 minutes down the motorway. For projects over two weeks we schedule the team in blocks so travel never eats into your working days.' },
      { q: 'Can you manage a renovation while I am abroad?', a: 'Most of our Paphos clients are overseas owners. You get a weekly photo-and-video report, a dedicated project manager on WhatsApp, and staged payments tied to milestones you can verify remotely.' },
    ],
    faqsRu: [
      { q: 'Вы действительно работаете в Пафосе или только в Лимасоле?', a: 'Проекты в Пафосе ведут те же штатные бригады с координацией из Лимасола — 45 минут по трассе. Для проектов длиннее двух недель бригада работает блоками, чтобы дорога не съедала рабочие дни.' },
      { q: 'Можете вести ремонт, пока я за границей?', a: 'Большинство наших клиентов в Пафосе — владельцы, живущие за рубежом. Вы получаете еженедельный фото- и видеоотчёт, персонального менеджера в WhatsApp и поэтапную оплату по контрольным точкам, которые можно проверить удалённо.' },
    ],
    priceFactor: 1.0,
  },
  {
    slug: 'larnaca', type: 'city',
    nameEn: 'Larnaca', nameRu: 'Ларнака',
    inEn: 'in Larnaca', inRu: 'в Ларнаке',
    lat: 34.9199, lng: 33.6201,
    introEn: 'Larnaca combines some of the oldest housing stock on the coast with the island\'s newest marina development. We renovate seafront apartments around Finikoudes and Mackenzie that need full system replacements, and fit out new units near the marina where owners want more than the developer\'s standard finish.',
    introRu: 'Ларнака сочетает один из самых старых жилых фондов побережья с новейшим проектом марины. Мы ремонтируем квартиры первой линии у Финикудеса и Маккензи, где нужна полная замена инженерии, и доводим до ума новостройки у марины, где владельцев не устраивает застройщицкая отделка.',
    issuesEn: [
      'Concrete spalling on 1970s–80s seafront balconies — the most acute on the island',
      'Galvanised steel water pipes past their service life in pre-1990 buildings',
      'Developer-grade finishes in new marina-area units that owners upgrade within a year',
      'Airport-corridor noise that calls for acoustic glazing on renovation',
    ],
    issuesRu: [
      'Разрушение бетона балконов первой линии 1970–80-х — самое острое на острове',
      'Оцинкованные водопроводные трубы в домах до 1990 года выработали ресурс',
      'Базовая отделка от застройщика в новостройках у марины — владельцы меняют её в первый же год',
      'Шум авиакоридора требует акустического остекления при ремонте',
    ],
    faqsEn: [
      { q: 'Is Larnaca more affordable to renovate than Limassol?', a: 'Labour rates are the same — our crews are the same people. Materials cost the same too. What differs is scope: older Larnaca stock more often needs full rewiring and replumbing, which we flag honestly at the survey stage.' },
      { q: 'Do you work on the new marina developments?', a: 'Yes — we do owner upgrades in and around the Larnaca marina quarter: flooring, kitchens, bathrooms, built-in joinery and smart-home prewiring, coordinated with the building management requirements.' },
    ],
    faqsRu: [
      { q: 'Ремонт в Ларнаке дешевле, чем в Лимасоле?', a: 'Ставки на работы те же — бригады те же самые. Материалы стоят одинаково. Разница в объёме: старый фонд Ларнаки чаще требует полной замены проводки и труб, и мы честно говорим об этом на этапе обследования.' },
      { q: 'Вы работаете в новых комплексах у марины?', a: 'Да — делаем доработку от владельца в квартале марины Ларнаки: полы, кухни, ванные, встроенная мебель и подготовка под умный дом, с учётом требований управляющей компании.' },
    ],
    priceFactor: 0.97,
  },
  {
    slug: 'nicosia', type: 'city',
    nameEn: 'Nicosia', nameRu: 'Никосия',
    inEn: 'in Nicosia', inRu: 'в Никосии',
    lat: 35.1856, lng: 33.3823,
    introEn: 'Nicosia is the island\'s office capital and its harshest climate — hotter summers and colder winters than the coast, with no sea breeze. Our capital projects split between 1970s–90s apartment renovations in Engomi and Strovolos and commercial fit-outs in the business district, where insulation and HVAC sizing matter more than anywhere else in Cyprus.',
    introRu: 'Никосия — офисная столица острова и самый жёсткий климат: летом жарче, зимой холоднее, чем на побережье, и без морского бриза. Наши столичные проекты — это ремонт квартир 1970–90-х в Энгоми и Строволосе и отделка офисов в деловом квартале, где утепление и расчёт климатической системы важнее, чем где-либо на Кипре.',
    issuesEn: [
      'No insulation in most pre-1995 buildings — brutal August cooling bills',
      'Winter condensation and mould on north-facing walls',
      'Ageing central-heating systems (a coastal rarity, a Nicosia standard)',
      'Office stock needing modern electrical capacity for dense workstations',
    ],
    issuesRu: [
      'Отсутствие утепления в большинстве домов до 1995 года — огромные счета за охлаждение в августе',
      'Зимний конденсат и плесень на северных стенах',
      'Стареющие системы центрального отопления (редкость на побережье — норма в Никосии)',
      'Офисный фонд требует современной электрической мощности под плотные рабочие места',
    ],
    faqsEn: [
      { q: 'Does the Nicosia climate change what you recommend?', a: 'Significantly. We push harder for external or internal wall insulation, double glazing with thermal break, and correctly sized VRV/VRF systems — the payback in Nicosia is 2–3 years faster than on the coast because both seasons work the equipment.' },
      { q: 'Do you do office fit-outs in Nicosia?', a: 'Yes — Nicosia is where most of our commercial work happens. We phase works around your operations, handle landlord and municipality approvals, and deliver to a contractual completion date.' },
    ],
    faqsRu: [
      { q: 'Климат Никосии влияет на ваши рекомендации?', a: 'Существенно. Мы настойчивее предлагаем утепление стен, стеклопакеты с терморазрывом и правильно рассчитанные VRV/VRF-системы — в Никосии они окупаются на 2–3 года быстрее, чем на побережье, потому что оборудование работает оба сезона.' },
      { q: 'Вы делаете отделку офисов в Никосии?', a: 'Да — именно в Никосии проходит большая часть нашей коммерческой работы. Работы фазируются под ваш график, мы берём на себя согласования с собственником здания и муниципалитетом и сдаём к договорной дате.' },
    ],
    priceFactor: 0.97,
  },

  /* ══ LIMASSOL DISTRICTS ═══════════════════════════════════════════════ */
  {
    slug: 'germasogeia', type: 'district', parent: 'limassol',
    nameEn: 'Germasogeia', nameRu: 'Гермасогея',
    inEn: 'in Germasogeia', inRu: 'в Гермасогее',
    lat: 34.7167, lng: 33.0833,
    introEn: 'Germasogeia is Limassol\'s renovation heartland — 1990s–2010s apartment complexes and villas five minutes from the tourist strip, heavily bought for holiday lets and family relocation. Half our Germasogeia projects are investor turnarounds between rental seasons; the other half are owners upgrading complexes that are now 20+ years old.',
    introRu: 'Гермасогея — сердце ремонтного рынка Лимасола: комплексы и виллы 1990–2010-х в пяти минутах от туристической зоны, активно скупаемые под аренду и переезд семей. Половина наших проектов здесь — инвесторские обновления между сезонами, вторая — владельцы, обновляющие комплексы, которым уже за 20 лет.',
    issuesEn: [
      'Complex-era bathrooms and kitchens (1998–2008) at full wear',
      'Humidity from the Germasogeia dam basin affecting ground floors',
      'Short-let wear: flooring, paint and joinery cycling every 4–5 years',
      'Communal-area rules that constrain working hours and material routes',
    ],
    issuesRu: [
      'Ванные и кухни эпохи комплексов (1998–2008) на полном износе',
      'Влажность от бассейна дамбы Гермасогеи, влияющая на первые этажи',
      'Износ от краткосрочной аренды: полы, покраска и мебель обновляются каждые 4–5 лет',
      'Правила комплексов, ограничивающие часы работ и маршруты подъёма материалов',
    ],
    faqsEn: [
      { q: 'Can you finish a rental apartment between seasons?', a: 'Yes — this is our most common Germasogeia brief. A cosmetic refresh (paint, silicone, minor repairs) fits in 2–3 weeks; a bathroom-and-kitchen turnaround in 5–7 weeks. We book these into the November–March window.' },
      { q: 'Do you coordinate with complex management?', a: 'Always. We know most Germasogeia complex managers by name, arrange lift protection and skip placement, and keep works inside permitted hours so your neighbours stay friendly.' },
    ],
    faqsRu: [
      { q: 'Успеете отремонтировать арендную квартиру между сезонами?', a: 'Да — это самый частый запрос в Гермасогее. Косметическое обновление (покраска, силикон, мелкий ремонт) — 2–3 недели; замена ванной и кухни — 5–7 недель. Такие проекты мы ставим в окно с ноября по март.' },
      { q: 'Вы согласовываете работы с управлением комплекса?', a: 'Всегда. Мы знаем большинство управляющих комплексов Гермасогеи лично, организуем защиту лифта и размещение контейнера и работаем строго в разрешённые часы — чтобы соседи остались довольны.' },
    ],
    priceFactor: 1.0,
    traits: ['coastal', 'older-stock', 'managed', 'short-let'],
    traitContextEn: { 'coastal': 'much of the district inside a kilometre of the sea, plus humidity off the dam basin', 'older-stock': 'complex-era bathrooms and kitchens of 1998–2008 at full wear', 'managed': 'nearly every block has a company setting hours and lift access', 'short-let': 'flooring, paint and joinery cycling every 4–5 years' },
    traitContextRu: { 'coastal': 'бо́льшая часть района в километре от моря плюс влажность от бассейна дамбы', 'older-stock': 'ванные и кухни эпохи комплексов 1998–2008 на полном износе', 'managed': 'почти в каждом доме есть компания, задающая часы и доступ к лифту', 'short-let': 'полы, покраска и мебель обновляются каждые 4–5 лет' },
  },
  {
    slug: 'agios-tychonas', type: 'district', parent: 'limassol',
    nameEn: 'Agios Tychonas', nameRu: 'Агиос Тихонас',
    inEn: 'in Agios Tychonas', inRu: 'в Агиос Тихонасе',
    lat: 34.7231, lng: 33.1470,
    introEn: 'Agios Tychonas is the island\'s most exclusive coastal municipality — large villa plots between the five-star hotel row and the hills. Projects here are full-scope: stone facades, pools, landscaped terraces and interiors finished to hotel standard, usually with an interior designer involved from day one.',
    introRu: 'Агиос Тихонас — самый престижный прибрежный муниципалитет острова: большие участки вилл между линией пятизвёздочных отелей и холмами. Проекты здесь всегда комплексные: каменные фасады, бассейны, террасы с ландшафтом и интерьеры отельного уровня, обычно с дизайнером с первого дня.',
    issuesEn: [
      'Natural-stone facades needing repointing and hydrophobic treatment',
      'Pool shells and decks from the 2000s due for full refurbishment',
      'Estate-scale gardens where terrace, irrigation and lighting must be one project',
      'Premium interior expectations that punish any shortcut in finishing',
    ],
    issuesRu: [
      'Фасады из натурального камня требуют перешивки швов и гидрофобизации',
      'Чаши и зоны бассейнов 2000-х нуждаются в полной реновации',
      'Сады масштаба поместья, где терраса, полив и свет — один проект',
      'Ожидания премиального интерьера, не прощающие ни одного упрощения в отделке',
    ],
    faqsEn: [
      { q: 'Can you match a five-star-hotel finish standard?', a: 'That is the Agios Tychonas baseline. Our finishing crews work to hotel-grade tolerances — book-matched stone, shadow-gap ceilings, flush joinery — and we bring our interior design team in from the first survey.' },
      { q: 'Can you run a villa project while we are away for the season?', a: 'Yes. Most Agios Tychonas owners are seasonal residents. We run gated-community access, weekly video walkthroughs, and hand over deep-cleaned and staged before you fly back.' },
    ],
    faqsRu: [
      { q: 'Сможете выдержать уровень отделки пятизвёздочного отеля?', a: 'Это базовый стандарт для Агиос Тихонаса. Наши отделочники работают по отельным допускам — камень с подбором рисунка, теневые швы потолков, скрытая фурнитура, — а дизайнер подключается с первого обследования.' },
      { q: 'Можете вести проект виллы, пока мы в отъезде на сезон?', a: 'Да. Большинство владельцев здесь живут сезонно. Мы работаем с пропусками закрытых посёлков, присылаем еженедельные видеообходы и сдаём объект после глубокой уборки — заходите и живите.' },
    ],
    priceFactor: 1.08,
    traits: ['coastal', 'hillside', 'premium'],
    traitContextEn: { 'coastal': 'seafront villa plots with direct exposure', 'hillside': 'estate plots above the road with real level change', 'premium': 'expectations that do not forgive a simplified detail' },
    traitContextRu: { 'coastal': 'прибрежные вилловые участки с прямой экспозицией', 'hillside': 'участки поместий выше дороги с реальным перепадом высот', 'premium': 'ожидания, не прощающие ни одного упрощённого узла' },
  },
  {
    slug: 'potamos-germasogeias', type: 'district', parent: 'limassol',
    nameEn: 'Potamos Germasogeias', nameRu: 'Потамос Гермасогеяс',
    inEn: 'in Potamos Germasogeias', inRu: 'в Потамосе',
    lat: 34.7050, lng: 33.0900,
    introEn: 'Potamos is Limassol\'s densest holiday quarter — compact 1990s apartment buildings a short walk from the beach, dominated by short-let investment units. Renovations here are about speed and durability: finishes that survive weekly changeovers, layouts that squeeze a second sleeping space from 55 m², and works scheduled tightly into the off-season.',
    introRu: 'Потамос — самый плотный курортный квартал Лимасола: компактные дома 1990-х в пешей доступности от пляжа, в основном инвестиционные квартиры под краткосрочную аренду. Ремонт здесь — про скорость и живучесть: отделка, выдерживающая еженедельную смену гостей, планировки, выжимающие второе спальное место из 55 м², и работы, жёстко вписанные в межсезонье.',
    issuesEn: [
      'Bathroom ventilation never designed for year-round rental occupancy',
      'Balcony door and window frames corroded by beachfront air',
      'Legacy layouts wasting floor area on corridors',
      'Buildings with no lift — material logistics priced in from the start',
    ],
    issuesRu: [
      'Вентиляция ванных, не рассчитанная на круглогодичную аренду',
      'Рамы балконных дверей и окон, съеденные прибрежным воздухом',
      'Устаревшие планировки, теряющие метры на коридорах',
      'Дома без лифта — логистика материалов заложена в смету сразу',
    ],
    faqsEn: [
      { q: 'What finishes survive short-let turnover best?', a: 'SPC flooring over tile (silent, waterproof, scratch-resistant), washable matt paints, solid-surface counters and hotel-spec silicone work. We spec Potamos units for a 5-year refresh cycle instead of the typical 3.' },
      { q: 'My building has no lift — is that a problem?', a: 'No, just a line item. About a third of Potamos buildings are walk-ups; we price the carry crew into the quote so there are no surprises, and protect the stairwell for the duration.' },
    ],
    faqsRu: [
      { q: 'Какая отделка лучше всего переживает краткосрочную аренду?', a: 'SPC-полы поверх плитки (тихие, влагостойкие, стойкие к царапинам), моющаяся матовая краска, столешницы из акрилового камня и силикон отельного стандарта. Квартиры в Потамосе мы рассчитываем на 5-летний цикл обновления вместо обычных трёх.' },
      { q: 'В моём доме нет лифта — это проблема?', a: 'Нет, просто строка в смете. Около трети домов Потамоса без лифта; мы закладываем подъём материалов в цену сразу и защищаем лестницу на весь срок работ.' },
    ],
    priceFactor: 1.0,
    traits: ['coastal', 'no-lift', 'older-stock', 'short-let'],
    traitContextEn: { 'coastal': 'balcony and window frames already eaten by the sea air', 'no-lift': 'most of the stock is walk-up', 'older-stock': 'dated layouts losing metres to corridors', 'short-let': 'bathroom ventilation never sized for year-round guests' },
    traitContextRu: { 'coastal': 'рамы балконов и окон, уже съеденные морским воздухом', 'no-lift': 'бо́льшая часть домов без лифта', 'older-stock': 'устаревшие планировки, теряющие метры на коридорах', 'short-let': 'вентиляция ванных, не рассчитанная на круглогодичных гостей' },
  },
  {
    slug: 'limassol-marina', type: 'district', parent: 'limassol',
    nameEn: 'Limassol Marina', nameRu: 'Лимасол Марина',
    inEn: 'at Limassol Marina', inRu: 'в Лимасол Марине',
    lat: 34.6708, lng: 33.0413,
    introEn: 'Limassol Marina is the island\'s flagship waterfront address — apartments, penthouses and villas with berths, delivered from 2014 onwards. Owners here don\'t renovate because something is broken; they renovate to personalise a developer finish, add smart-home layers, or refit for a new buyer. Marine air and strict estate management set the rules of engagement.',
    introRu: 'Лимасол Марина — флагманский адрес острова на воде: квартиры, пентхаусы и виллы с причалами, сдающиеся с 2014 года. Здесь ремонтируют не потому, что что-то сломалось, — а чтобы персонализировать отделку застройщика, добавить умный дом или подготовить объект для нового владельца. Морской воздух и строгий менеджмент комплекса задают правила игры.',
    issuesEn: [
      'Strict estate-management rules: approved hours, protected lifts, licensed contractors only',
      'Marine-grade corrosion demands on any exterior metal or fixings',
      'Developer-standard interiors owners want elevated to bespoke',
      'Integrated AV/smart systems that must be designed, not retrofitted ad hoc',
    ],
    issuesRu: [
      'Строгие правила комплекса: согласованные часы, защита лифтов, только лицензированные подрядчики',
      'Морская коррозия диктует требования к любому наружному металлу и крепежу',
      'Интерьеры уровня застройщика, которые владельцы хотят довести до bespoke',
      'Интегрированные AV- и smart-системы, которые надо проектировать, а не доставлять по факту',
    ],
    faqsEn: [
      { q: 'Are you approved to work inside Limassol Marina?', a: 'Yes — we are a licensed contractor, fully insured, and we handle the estate management application for you: method statements, insurance certificates, working-hours plan and lift protection are all part of our submission.' },
      { q: 'Can you refit a penthouse without disturbing the neighbours?', a: 'That is the marina discipline: acoustic screens at the front door, dust extraction on every cutting tool, materials moved in approved windows, and daily cleaning of common areas on the route.' },
    ],
    faqsRu: [
      { q: 'У вас есть допуск на работы в Лимасол Марине?', a: 'Да — мы лицензированный подрядчик с полным страхованием и сами подаём заявку в менеджмент комплекса: технологические карты, страховые сертификаты, план часов работ и защита лифтов входят в наш пакет.' },
      { q: 'Сможете переделать пентхаус, не побеспокоив соседей?', a: 'Это дисциплина марины: акустические экраны на входе, пылеудаление на каждом режущем инструменте, занос материалов в согласованные окна и ежедневная уборка общих зон по маршруту.' },
    ],
    priceFactor: 1.1,
    traits: ['coastal', 'managed', 'premium'],
    traitContextEn: { 'coastal': 'the most severe salt exposure on the island', 'managed': 'agreed hours, lift protection and licensed contractors only', 'premium': 'developer-level interiors owners want taken to bespoke' },
    traitContextRu: { 'coastal': 'самая жёсткая солевая экспозиция на острове', 'managed': 'согласованные часы, защита лифтов и только лицензированные подрядчики', 'premium': 'интерьеры уровня застройщика, которые владельцы доводят до bespoke' },
  },
  {
    slug: 'limassol-city-centre', type: 'district', parent: 'limassol',
    nameEn: 'Limassol City Centre', nameRu: 'Центр Лимасола',
    inEn: 'in Limassol City Centre', inRu: 'в центре Лимасола',
    lat: 34.6750, lng: 33.0443,
    introEn: 'The old town and city centre hold Limassol\'s character stock — pre-1980 townhouses, listed facades near the castle quarter, and mixed-use buildings with shops below and apartments above. These are the deepest renovations we do: full rewiring, replumbing, structural openings and municipality permits are the norm rather than the exception.',
    introRu: 'Старый город и центр — характерный фонд Лимасола: таунхаусы до 1980 года, охраняемые фасады у квартала замка, здания с магазинами внизу и квартирами наверху. Это самые глубокие ремонты в нашей практике: полная замена проводки и труб, проёмы в несущих стенах и разрешения муниципалитета — норма, а не исключение.',
    issuesEn: [
      'Heritage-zone facade rules requiring municipality sign-off before works',
      'Complete electrical and plumbing replacement in almost every pre-1980 building',
      'Shared party walls and structural surprises behind old plaster',
      'No parking or staging space — logistics planned street by street',
    ],
    issuesRu: [
      'Правила охранной зоны фасадов, требующие согласования муниципалитета до начала работ',
      'Полная замена электрики и сантехники почти в каждом здании до 1980 года',
      'Общие стены с соседями и структурные сюрпризы под старой штукатуркой',
      'Отсутствие парковки и площадки — логистика планируется поулично',
    ],
    faqsEn: [
      { q: 'Do you handle heritage and municipality permits for the old town?', a: 'Yes — we prepare the drawings and applications for the Limassol municipality, including facade-zone approvals. Expect 4–10 weeks for permits depending on scope; we schedule design work in parallel so no time is lost.' },
      { q: 'What surprises should I budget for in a pre-1980 building?', a: 'We survey before quoting, but the honest answer: assume full rewiring, assume replumbing, and hold a 10% contingency for what old plaster hides. Our fixed price absorbs everything the survey could reasonably find.' },
    ],
    faqsRu: [
      { q: 'Вы занимаетесь согласованиями для старого города?', a: 'Да — мы готовим чертежи и заявки в муниципалитет Лимасола, включая согласования в фасадной зоне. Разрешения занимают 4–10 недель в зависимости от объёма; проектирование мы ведём параллельно, чтобы не терять время.' },
      { q: 'К каким сюрпризам готовиться в здании до 1980 года?', a: 'Мы обследуем объект до сметы, но честный ответ: закладывайте полную замену проводки и труб и держите резерв 10% на то, что скрывает старая штукатурка. Наша фиксированная цена покрывает всё, что могло разумно показать обследование.' },
    ],
    priceFactor: 1.02,
    traits: ['conservation', 'older-stock'],
    traitContextEn: { 'conservation': 'facade rules requiring municipal consent before work starts', 'older-stock': 'pre-1980 buildings where services are replaced in full' },
    traitContextRu: { 'conservation': 'правила фасадов, требующие согласования муниципалитета до начала работ', 'older-stock': 'здания до 1980 года, где инженерия меняется целиком' },
  },
  /* ══ FAMAGUSTA FREE AREA (east coast, Republic-controlled) ═══════════ */
  {
    slug: 'ayia-napa', type: 'city',
    nameEn: 'Ayia Napa', nameRu: 'Айя-Напа',
    inEn: 'in Ayia Napa', inRu: 'в Айя-Напе',
    lat: 34.9823, lng: 34.0016,
    introEn: 'Ayia Napa has outgrown its party reputation: the new marina towers and villas, a wave of quality restaurants and a maturing holiday-home market now drive most renovation work. Our projects here split between short-let apartment refurbishments timed to the November–April window and premium fit-outs around the marina quarter.',
    introRu: 'Айя-Напа переросла репутацию тусовочного курорта: башни и виллы новой марины, волна качественных ресторанов и взрослеющий рынок курортного жилья задают тон ремонтам. Наши проекты здесь — обновление квартир под аренду в окно с ноября по апрель и премиальная отделка в квартале марины.',
    issuesEn: [
      'Intense salt-and-sun exposure that destroys exterior paint and sealants in 5–7 years',
      '1990s holiday stock with original bathrooms unfit for today\'s nightly rates',
      'A hard seasonal deadline: everything must be finished before the season opens in May',
      'Restaurant and bar fit-outs that need health-authority-compliant kitchens',
    ],
    issuesRu: [
      'Жёсткое солнце и соль, убивающие наружную покраску и герметики за 5–7 лет',
      'Курортный фонд 1990-х с исходными ванными, не соответствующими сегодняшним ценам за ночь',
      'Жёсткий сезонный дедлайн: всё должно быть готово до открытия сезона в мае',
      'Отделка ресторанов и баров с кухнями по требованиям санитарных органов',
    ],
    faqsEn: [
      { q: 'Can you finish a holiday apartment before the season starts?', a: 'Yes — if we survey by December. A bathroom-and-kitchen refresh takes 5–7 weeks, a full refurbishment 8–12. We schedule Ayia Napa projects in reverse from a hard May deadline, with a buffer week built in.' },
      { q: 'Do you handle restaurant fit-outs in Ayia Napa?', a: 'Yes — including kitchen extraction, grease management and surfaces that pass health-authority inspection. We coordinate the works around your licence timeline so you open on schedule.' },
    ],
    faqsRu: [
      { q: 'Успеете подготовить квартиру к началу сезона?', a: 'Да — если обследуем объект до декабря. Обновление ванной и кухни — 5–7 недель, полный ремонт — 8–12. Проекты в Айя-Напе мы планируем обратным отсчётом от жёсткого майского дедлайна с резервной неделей.' },
      { q: 'Вы делаете отделку ресторанов в Айя-Напе?', a: 'Да — включая вытяжку кухни, жироулавливание и поверхности, проходящие санитарную инспекцию. Работы синхронизируем со сроками вашей лицензии, чтобы открытие не сдвинулось.' },
    ],
    priceFactor: 1.0,
  },
  {
    slug: 'protaras', type: 'city',
    nameEn: 'Protaras', nameRu: 'Протарас',
    inEn: 'in Protaras', inRu: 'в Протарасе',
    lat: 35.0125, lng: 34.0583,
    introEn: 'Protaras is the family end of the east coast — sea-view villas and holiday homes on the Pernera and Kapparis hills, mostly built 1995–2015 and owned by Scandinavian, British and Russian families who visit every summer. The classic brief: refresh a fifteen-year-old villa, rebuild the terrace around the pool, and have it spotless by June.',
    introRu: 'Протарас — семейный край восточного побережья: виллы с видом на море на холмах Пернеры и Каппариса, построенные в 1995–2015 годах, у скандинавских, британских и русских семей, приезжающих каждое лето. Классический запрос: освежить виллу пятнадцати лет, перестроить террасу у бассейна и сдать всё в идеале к июню.',
    issuesEn: [
      'Pool terraces and pergolas from the 2000s at the end of their structural life',
      'Winter humidity on the seafront rows — mould behind wardrobes and in closed villas',
      'Original aluminium windows that rattle in east-coast winds',
      'Gardens and irrigation left unattended between owner visits',
    ],
    issuesRu: [
      'Террасы у бассейнов и перголы 2000-х на исходе конструктивного ресурса',
      'Зимняя влажность на первой линии — плесень за шкафами и в закрытых виллах',
      'Родные алюминиевые окна, дребезжащие на восточных ветрах',
      'Сады и полив, остающиеся без присмотра между приездами владельцев',
    ],
    faqsEn: [
      { q: 'We only visit Protaras in summer — can you renovate while we are away?', a: 'That is the standard Protaras arrangement. We hold keys under a signed protocol, send weekly photo and video reports, and time completion two weeks before your arrival so the villa is aired, cleaned and ready.' },
      { q: 'Can you deal with winter mould in a seafront villa?', a: 'Yes — but we treat the cause, not just the stains: ventilation gaps behind fitted furniture, trickle vents or a dehumidification unit, and anti-fungal paint systems rated for coastal exposure.' },
    ],
    faqsRu: [
      { q: 'Мы бываем в Протарасе только летом — сможете ремонтировать без нас?', a: 'Это стандартный формат для Протараса. Мы принимаем ключи по подписанному протоколу, присылаем еженедельные фото- и видеоотчёты и завершаем работы за две недели до вашего приезда — вилла проветрена, убрана и готова.' },
      { q: 'Справитесь с зимней плесенью в вилле на первой линии?', a: 'Да — но мы лечим причину, а не пятна: вентиляционные зазоры за встроенной мебелью, приточные клапаны или осушитель и антигрибковые краски для прибрежной зоны.' },
    ],
    priceFactor: 1.0,
  },
  {
    slug: 'paralimni', type: 'city',
    nameEn: 'Paralimni', nameRu: 'Паралимни',
    inEn: 'in Paralimni', inRu: 'в Паралимни',
    lat: 35.0380, lng: 33.9823,
    introEn: 'Paralimni is where the east coast actually lives year-round — the administrative centre of the free Famagusta area, with family houses from the 1980s–2000s, local schools and a real winter population. Renovations here are practical and complete: full apartment and house refurbishments, energy upgrades and kitchens that get used every day, not two weeks a year.',
    introRu: 'Паралимни — место, где восточное побережье живёт круглый год: административный центр свободного района Фамагусты, семейные дома 1980–2000-х, школы и настоящее зимнее население. Ремонты здесь практичные и полные: комплексные ремонты квартир и домов, энергомодернизация и кухни, которыми пользуются каждый день, а не две недели в году.',
    issuesEn: [
      'Uninsulated 1980s–90s houses that are expensive to cool and cold in January',
      'Original electrical boards undersized for modern appliances and EV charging',
      'Flat roofs due for re-waterproofing across the older housing stock',
      'Extensions and garage conversions that need municipal permits done properly',
    ],
    issuesRu: [
      'Неутеплённые дома 1980–90-х — дорогие в охлаждении и холодные в январе',
      'Родные электрощиты, не рассчитанные на современную технику и зарядку электромобиля',
      'Плоские крыши старого фонда, требующие новой гидроизоляции',
      'Пристройки и переоборудование гаражей, требующие правильных муниципальных разрешений',
    ],
    faqsEn: [
      { q: 'Do you cover the whole free Famagusta area from Paralimni?', a: 'Yes — Paralimni, Protaras, Pernera, Kapparis, Ayia Napa, Sotira, Deryneia, Frenaros and Avgorou. Note: we operate only in the Republic-controlled areas of Cyprus; we do not take projects in the occupied north.' },
      { q: 'Are prices in Paralimni different from Limassol?', a: 'Labour rates match our Limassol baseline — same crews, same standards. Where you save is scope: Paralimni houses usually have simpler access and parking, which trims logistics costs from the quote.' },
    ],
    faqsRu: [
      { q: 'Вы покрываете весь свободный район Фамагусты из Паралимни?', a: 'Да — Паралимни, Протарас, Пернера, Каппарис, Айя-Напа, Сотира, Деринья, Френарос и Авгору. Важно: мы работаем только на подконтрольной Республике Кипр территории; проекты на оккупированном севере не берём.' },
      { q: 'Цены в Паралимни отличаются от Лимасола?', a: 'Ставки на работы совпадают с лимасольскими — те же бригады, те же стандарты. Экономия в другом: у домов Паралимни обычно проще доступ и парковка, что снижает логистику в смете.' },
    ],
    priceFactor: 0.97,
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────── */
export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
export const cities    = locations.filter(l => l.type === 'city');
export const districts = locations.filter(l => l.type === 'district');

/**
 * Locations that get a full service × location page.
 *
 * The matrix used to run all 12 locations against all 21 services — 504 pages
 * whose text was only 25–31% unique from its siblings, which is exactly the
 * thin-content pattern search engines discount. These six are the ones with
 * genuine local material: Limassol and its districts have real area
 * photography and real projects to point at. Paphos, Larnaca, Nicosia and the
 * east-coast towns keep their location hubs — they are served, they just do
 * not get 21 near-identical pages each.
 */
export const matrixLocationSlugs = [
  'limassol',
  'germasogeia',
  'agios-tychonas',
  'potamos-germasogeias',
  'limassol-marina',
  'limassol-city-centre',
] as const;

export const matrixLocations = locations.filter(l =>
  (matrixLocationSlugs as readonly string[]).includes(l.slug));
