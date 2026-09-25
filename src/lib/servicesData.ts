export type ServiceCategory = 'spaces' | 'commercial' | 'specialist' | 'trades';

export interface ServiceFAQ { q: string; a: string; }

/* ── Deep-dive content ────────────────────────────────────────────────────
   The 21 services share one template. A handful of them carry enough real
   depth to deserve more than the standard includes/price/FAQ trio — painting
   is the first. Everything here is optional, so the other services render
   exactly as before and can adopt the blocks one at a time. */
export interface ServiceScopeItem   { title: string; body: string; photo?: string; }

/* PLACEHOLDER ARTWORK — swap these six paths when the real painting shots
   exist. They are stand-ins from the existing library, chosen only so the
   accordion is not empty; none of them shows the surface it sits on.
   Nothing else references this list, so replacing a path here is the whole
   job. Both languages read from it. */
export const PAINTING_SCOPE_PHOTOS = [
  '/images/gallery/apartment-after-2.webp',   // 01 walls & ceilings
  '/images/projects/germasogeia-villa.webp',  // 02 facades & balconies
  '/images/projects/marina-studio.webp',      // 03 doors & joinery
  '/images/projects/potamos-villa.webp',      // 04 metal & exterior
  '/images/gallery/office-after-1.webp',      // 05 commercial
  '/images/projects/city-bathroom.webp',      // 06 cracks & damp
];
export interface ServiceProfile     { title: string; target: string; focus: string; idealFor: string; photo: string; alt: string; }
export interface ServiceBenchmark   { title: string; scope: string; range: string; duration: string; }
export interface ServiceStandardRow { stage: string; basic: string; helyot: string; }
export interface ServiceClimateItem { title: string; problem: string; solution: string; }

export interface ServiceDeep {
  scopeTitle:   string;  scopeLead: string;   scope:      ServiceScopeItem[];
  profileTitle: string;  profiles:  ServiceProfile[];
  benchTitle:   string;  benchLead: string;   benchmarks: ServiceBenchmark[];
  factorsTitle: string;  factors:   ServiceScopeItem[];
  standardTitle:string;  standardLead: string;
  standardHeads:[string, string, string];     standard:   ServiceStandardRow[];
  climateTitle: string;  climateLead: string; climate:    ServiceClimateItem[];
  fitTitle:     string;  fitYesTitle: string; fitNoTitle: string;
  fitYes:       string[];                     fitNo:      string[];
}

export interface ServiceData {
  slug:          string;
  category:      ServiceCategory;
  icon:          string;
  titleEn:       string;       titleRu:       string;
  seoDescEn:     string;       seoDescRu:     string;
  heroSubEn:     string;       heroSubRu:     string;
  priceFrom:     number | null;
  priceLabelEn:  string;       priceLabelRu:  string;
  priceUnit:     'sqm' | 'unit' | 'flat' | 'quote';
  timelineEn:    string;       timelineRu:    string;
  includesEn:    string[];     includesRu:    string[];
  faqsEn:        ServiceFAQ[]; faqsRu:        ServiceFAQ[];
  relatedSlugs:  string[];
  deepEn?:       ServiceDeep;  deepRu?:       ServiceDeep;
}

export const services: ServiceData[] = [
  /* ── BUILD ─────────────────────────────────────────────────────────────
     The catalogue held 21 services and every one of them was renovation or
     finishing. Meanwhile the journal carries six long pieces on building a
     house from scratch — cost per m², permits, taxes, retaining walls, NZEB —
     including the strongest article on the site. A reader finished 1,500 words
     on what a build costs and had nowhere to buy one. This closes that. */
  {
    slug: 'house-construction', category: 'spaces', icon: '🏗️',
    titleEn: 'House Construction',        titleRu: 'Строительство дома',
    seoDescEn: 'Turnkey house construction in Limassol and along the south coast. From plot survey and permits to handover. €2,000–3,200/m² to NZEB class A+. Fixed price, 5-year warranty.',
    seoDescRu: 'Строительство дома под ключ в Лимасоле и по Кипру. От изысканий и разрешений до сдачи. €2 000–3 200/м² с классом A+ по NZEB. Фиксированная цена, гарантия 5 лет.',
    heroSubEn: 'From an empty plot to keys in hand — design, permits and construction under one contract.',
    heroSubRu: 'От пустого участка до ключей — проект, разрешения и стройка по одному договору.',
    priceFrom: 2000, priceLabelEn: 'from €2,000/m²', priceLabelRu: 'от €2 000/м²', priceUnit: 'sqm',
    timelineEn: '18–28 months from plot to handover', timelineRu: '18–28 месяцев от участка до сдачи',
    includesEn: [
      'Plot survey: ground investigation and topographic survey',
      'Architectural design and structural calculations',
      'Planning and building permits filed on your behalf',
      'Foundations and structural frame',
      'Roof, waterproofing and thermal envelope to NZEB class A+',
      'Windows, external doors and joinery',
      'Full electrical and plumbing installation with CERA certification',
      'Interior finishing to the agreed specification',
      'Retaining walls and drainage where the plot slopes',
      'Handover with certificates, warranties and Title Deed support',
    ],
    includesRu: [
      'Изыскания по участку: геология и топосъёмка',
      'Архитектурный проект и расчёт конструкций',
      'Разрешения на планировку и строительство от вашего имени',
      'Фундамент и несущий каркас',
      'Кровля, гидроизоляция и тепловой контур по классу A+ NZEB',
      'Окна, наружные двери и столярка',
      'Полная электрика и сантехника с сертификатом CERA',
      'Внутренняя отделка по согласованной спецификации',
      'Подпорные стены и дренаж, если участок на склоне',
      'Сдача с сертификатами, гарантиями и сопровождением Title Deed',
    ],
    faqsEn: [
      { q: 'What does it cost to build a house in Cyprus?', a: '€2,000–3,200 per m² turnkey in 2026, to NZEB class A+ which is now mandatory. The «from €1,700» quoted elsewhere is the shell only — structure, roof and envelope, with no services, no finishes and no landscaping.' },
      { q: 'How long does the whole thing take?', a: '18–28 months from buying the plot to moving in: 3–12 months for design and permits, 10–16 months of construction, 2–4 months of finishing and handover.' },
      { q: 'Do you handle the permits?', a: 'Yes, start to finish. Drawings, submission and correspondence with the municipality in your name. Structural work does not begin until the permit is issued.' },
      { q: 'What changes if the plot slopes?', a: 'Retaining walls, drainage and terracing become their own budget line — €15,000–80,000 depending on the change in level. It is priced from the topographic survey, before the house is designed.' },
      { q: 'Is class A+ optional?', a: 'No. Every new house in Cyprus must meet the Near-Zero Energy standard. It adds 8–14% to the build and returns €3,000–5,000 a year on electricity.' },
      { q: 'Can I build on a plot I already own?', a: 'Yes. We start with the ground investigation and the building coefficients for that specific plot — density, coverage and height — because a design that breaches any of them is returned in full.' },
    ],
    faqsRu: [
      { q: 'Сколько стоит построить дом на Кипре?', a: '€2 000–3 200 за м² под ключ в 2026 году, с классом A+ по NZEB, который теперь обязателен. Цена «от €1 700», которую называют в других местах, — это коробка: конструктив, кровля и контур, без инженерии, отделки и благоустройства.' },
      { q: 'Сколько занимает весь цикл?', a: '18–28 месяцев от покупки участка до заезда: 3–12 месяцев на проект и согласования, 10–16 месяцев стройки, 2–4 месяца отделки и сдачи.' },
      { q: 'Разрешения берёте на себя?', a: 'Да, полностью. Чертежи, подача и переписка с муниципалитетом от вашего имени. Конструктивные работы не начинаются, пока разрешение не получено.' },
      { q: 'Что меняется, если участок на склоне?', a: 'Подпорные стены, дренаж и террасирование становятся отдельной статьёй — €15 000–80 000 в зависимости от перепада высот. Считается по топосъёмке, до проектирования дома.' },
      { q: 'Класс A+ обязателен?', a: 'Да. Все новые дома на Кипре обязаны соответствовать стандарту почти нулевого энергопотребления. Это добавляет 8–14% к стройке и возвращает €3 000–5 000 в год на электричестве.' },
      { q: 'Можно строить на участке, который у меня уже есть?', a: 'Да. Начинаем с геологии и коэффициентов застройки конкретного участка — плотность, покрытие, этажность, — потому что проект, превышающий любой из них, возвращается целиком.' },
    ],
    relatedSlugs: ['structural-extensions', 'energy-modernization', 'interior-design', 'facade'],
  },

  /* ── SPACES ──────────────────────────────────────────────────────────── */
  {
    slug: 'apartment-renovation', category: 'spaces', icon: '🏠',
    titleEn: 'Apartment Renovation',     titleRu: 'Ремонт квартир',
    seoDescEn: 'Turnkey apartment renovation in Limassol, Cyprus. Electrical, plumbing, tiling, flooring, painting. Fixed price. Free estimate.',
    seoDescRu: 'Ремонт квартир под ключ в Лимасоле, Кипр. Электрика, сантехника, плитка, полы, покраска. Фиксированная цена. Бесплатная смета.',
    heroSubEn: 'From layout redesign to final finishing — every trade, one fixed price.',
    heroSubRu: 'От перепланировки до финишной отделки — все работы по одной фиксированной цене.',
    priceFrom: 170, priceLabelEn: 'from €170/m²', priceLabelRu: 'от €170/м²', priceUnit: 'sqm',
    timelineEn: '5–14 weeks depending on size', timelineRu: '5–14 недель в зависимости от площади',
    includesEn: ['Demolition & waste removal','Full electrical rewire','New plumbing & drainage','Plastering & ceiling levelling','Tile installation (bathrooms & kitchen)','Flooring (parquet, SPC or tile)','Interior painting (2 coats + primer)','Door & skirting installation','Kitchen fitting (if supplied)','Snagging & handover'],
    includesRu: ['Демонтаж и вывоз мусора','Полная замена электропроводки','Новая сантехника и канализация','Штукатурка и выравнивание потолков','Укладка плитки (ванная, кухня)','Напольные покрытия (паркет, SPC или плитка)','Покраска (2 слоя + грунтовка)','Монтаж дверей и плинтусов','Установка кухни (при наличии)','Приёмка и передача'],
    faqsEn: [
      { q: 'How long does an apartment renovation take?', a: 'A standard 80 m² apartment takes 6–10 weeks. Larger apartments, or ones needing structural changes, run 10–14 weeks. Your quote carries a project-specific timeline with a handover date, not a range.' },
      { q: 'What is included in the fixed price?', a: 'All labour, standard materials, waste removal and project management. Fixtures you choose yourself — sanitary ware, tiles, flooring — are fitted at no extra labour cost.' },
      { q: 'Do I need to move out during the works?', a: 'For a full renovation we recommend it — dust, water shut-offs and power isolation make living on site unpleasant. For single-room work we phase the job so you keep a working kitchen and bathroom throughout.' },
      { q: 'Can you handle the permits?', a: 'Yes. Where layout or structural changes need consent, we prepare the drawings and file with the municipality on your behalf. Our handling is included in project management; the municipal fee itself is passed on at cost with the receipt.' },
      { q: 'Can I buy my own tiles and sanitary ware?', a: 'Yes, and many clients do. We fit anything you supply without a labour surcharge. If you would rather we buy, we order through our supplier network and pass on the trade price we pay.' },
      { q: 'How are payments staged?', a: 'Typically 30% on signing, 30% at structural completion, 30% at second fix and 10% at handover after snagging is cleared. Every milestone is tied to finished work you can see, and all of it is written into the contract.' },
    ],
    faqsRu: [
      { q: 'Сколько длится ремонт квартиры?', a: 'Стандартная квартира 80 м² — 6–10 недель. Большие квартиры или с изменением планировки — 10–14 недель. В смете стоит срок именно вашего проекта с датой сдачи, а не диапазон.' },
      { q: 'Что входит в фиксированную цену?', a: 'Все работы, стандартные материалы, вывоз мусора и управление проектом. Сантехника, плитка и полы, которые вы выбираете сами, монтируются без доплаты за работу.' },
      { q: 'Нужно ли уезжать на время ремонта?', a: 'При полном ремонте — рекомендуем: пыль, отключения воды и электричества делают проживание некомфортным. При работах в одной комнате разбиваем этапы так, чтобы кухня и санузел оставались рабочими.' },
      { q: 'Вы занимаетесь разрешениями?', a: 'Да. Если планировка или конструктив требуют согласования, мы готовим чертежи и подаём в муниципалитет от вашего имени. Наша работа входит в управление проектом, сама пошлина — по факту с квитанцией.' },
      { q: 'Можно купить плитку и сантехнику самому?', a: 'Да, многие так и делают. Всё, что вы привезёте, монтируем без наценки за работу. Если хотите, чтобы закупали мы, — берём через своих поставщиков и передаём вам ту же оптовую цену.' },
      { q: 'Как разбиты платежи?', a: 'Обычно 30% при подписании, 30% по завершении конструктива, 30% на этапе чистовой подготовки и 10% при сдаче после устранения замечаний. Каждый платёж привязан к работам, которые видно выполненными, и всё прописано в договоре.' },
    ],
    relatedSlugs: ['bathroom-renovation', 'kitchen-renovation', 'interior-design', 'flooring'],
  },

  {
    slug: 'villa-renovation', category: 'spaces', icon: '🏡',
    titleEn: 'Villa Renovation',          titleRu: 'Ремонт вилл',
    seoDescEn: 'Luxury villa renovation in Limassol — Agios Tychonas, Germasogeia, Potamos. Full renovation and extensions. Licensed contractor. Free site visit.',
    seoDescRu: 'Ремонт вилл в Лимасоле — Агиос Тихонас, Гермасогея, Потамос. Полный ремонт и пристройки. Лицензированный подрядчик. Бесплатный выезд.',
    heroSubEn: 'From structural works to luxury interior — everything under one fixed-price contract.',
    heroSubRu: 'От конструктивных работ до роскошного интерьера — всё по одному договору с фиксированной ценой.',
    priceFrom: 190, priceLabelEn: 'from €190/m²', priceLabelRu: 'от €190/м²', priceUnit: 'sqm',
    timelineEn: '10–20 weeks depending on scope', timelineRu: '10–20 недель в зависимости от объёма',
    includesEn: ['Structural assessment & permit handling','Demolition and waste removal','Full MEP replacement (electrical, plumbing, HVAC ducts)','External render, stone cladding and waterproofing','Interior plastering, tiling and flooring','Custom joinery and fitted furniture','Swimming pool renovation coordination','Terrace and outdoor works','Interior design consultation (premium)','Smart home pre-wiring'],
    includesRu: ['Конструктивная оценка и оформление разрешений','Демонтаж и вывоз мусора','Полная замена инженерных систем','Наружная штукатурка, облицовка камнем, гидроизоляция','Внутренняя отделка: штукатурка, плитка, полы','Мебель на заказ и встроенные шкафы','Координация ремонта бассейна','Работы на террасе и на улице','Дизайн-консультация интерьера (premium)','Предмонтаж умного дома'],
    faqsEn: [
      { q: 'Do you handle permits for extensions?', a: 'Yes. Extensions and structural changes need municipal consent, and we prepare or coordinate the drawings and file them for you. Nothing structural begins until the permit is in hand.' },
      { q: 'Can you work on an occupied villa?', a: 'Yes, by zoning the property and phasing the trades so you keep a habitable wing with power, water and a working bathroom. It extends the programme, and we say by how much before you sign.' },
      { q: 'Which areas do you cover for villas?', a: 'The whole of the government-controlled Republic of Cyprus. Most villa work is in Limassol — Agios Tychonas, Germasogeia, Potamos — but we run projects in Paphos, Larnaca and Nicosia on the same terms.' },
      { q: 'Do you coordinate the pool and landscaping?', a: 'Yes, as part of the same contract and the same schedule. Pool works, terraces and planting are sequenced with the building works so nothing gets dug up twice.' },
      { q: 'What does a villa renovation actually cost?', a: 'From €190/m². A 250 m² villa to a full specification lands around €72,000. The figure firms up after a free site visit, and once it is in the contract it does not move.' },
      { q: 'I live abroad. Can you run the project without me?', a: 'Yes, and we do it regularly. You get a photo walkthrough every Friday, your project manager is on WhatsApp during working hours, and we video-call before and after key milestones.' },
    ],
    faqsRu: [
      { q: 'Вы занимаетесь разрешениями на пристройки?', a: 'Да. Пристройки и конструктивные изменения требуют согласования с муниципалитетом — мы готовим или координируем чертежи и подаём их за вас. Конструктивные работы не начинаются, пока разрешение не получено.' },
      { q: 'Можно работать на вилле, где живут?', a: 'Да — зонируем объект и ведём работы по этапам, чтобы у вас оставалось жилое крыло с электричеством, водой и рабочим санузлом. Это удлиняет срок, и мы говорим насколько до подписания договора.' },
      { q: 'В каких районах вы делаете виллы?', a: 'По всей подконтрольной правительству территории Республики Кипр. Большая часть работ по виллам — Лимасол: Агиос Тихонас, Гермасогея, Потамос, но проекты в Пафосе, Ларнаке и Никосии ведём на тех же условиях.' },
      { q: 'Вы координируете бассейн и ландшафт?', a: 'Да, в рамках того же договора и того же графика. Бассейн, террасы и озеленение ставятся в очередь вместе со строительными работами, чтобы ничего не вскрывать дважды.' },
      { q: 'Сколько на самом деле стоит ремонт виллы?', a: 'От €190/м². Вилла 250 м² под полную отделку выходит около €72 000. Точная сумма определяется после бесплатного выезда, и после подписания договора она не меняется.' },
      { q: 'Я живу за границей. Можно вести проект без меня?', a: 'Да, мы делаем это регулярно. Каждую пятницу — фотообход объекта, прораб на связи в WhatsApp в рабочее время, перед ключевыми этапами и после них созваниваемся по видео.' },
    ],
    relatedSlugs: ['pool-renovation', 'terrace-outdoor', 'interior-design', 'facade'],
  },

  {
    slug: 'kitchen-renovation', category: 'spaces', icon: '🍳',
    titleEn: 'Kitchen & Dining',          titleRu: 'Кухня и столовая',
    seoDescEn: 'Kitchen renovation in Limassol. Custom cabinetry, worktops, appliance fitting, plumbing and electrical. Design and install. Free estimate.',
    seoDescRu: 'Ремонт кухни в Лимасоле. Мебель на заказ, столешницы, бытовая техника, сантехника и электрика. Дизайн и монтаж. Бесплатная смета.',
    heroSubEn: 'Full kitchen redesign — layout, cabinetry, worktops, appliances and MEP.',
    heroSubRu: 'Полная переработка кухни — планировка, мебель, столешницы, техника и инженерия.',
    priceFrom: 5000, priceLabelEn: 'from €5,000', priceLabelRu: 'от €5 000', priceUnit: 'flat',
    timelineEn: '3–5 weeks', timelineRu: '3–5 недель',
    includesEn: ['Layout planning and design concept','Demolition of existing kitchen','New electrical circuits for appliances','Plumbing for sink, dishwasher and fridge','Wall and floor tiling','Custom cabinetry fitting (supply or install)','Worktop fitting (stone, composite or timber)','Appliance installation and commissioning','Extractor hood ducting','Splashback and finishing details'],
    includesRu: ['Планировка и дизайн-концепция','Демонтаж старой кухни','Новая электрика для техники','Сантехника: мойка, посудомойка, холодильник','Плитка стен и пола','Монтаж кухонной мебели (поставка или установка)','Монтаж столешницы (камень, композит или дерево)','Установка и подключение техники','Вытяжная система','Фартук и финишные детали'],
    faqsEn: [
      { q: 'Can you supply the kitchen units?', a: 'Yes. We work with European manufacturers and pass on the trade price we pay. If you have already bought a kitchen elsewhere, we install it with no surcharge.' },
      { q: 'How long will I be without a kitchen?', a: 'Three to five weeks for a full replacement including services and tiling. We can set up a temporary sink and worktop elsewhere in the flat if you are staying put.' },
      { q: 'Do you move plumbing and electrics?', a: 'Yes — relocating the sink, hob, extraction and sockets is normal kitchen work and is priced in the quote. Electrical alterations are certified, and you receive the CERA certificate at handover.' },
      { q: 'Which worktop materials do you recommend for Cyprus?', a: 'Sintered stone and quartz hold up best — they do not stain, do not need sealing and cope with heat. Natural marble looks superb but is porous and will mark in a working family kitchen.' },
      { q: 'Can you do a kitchen without touching the rest of the flat?', a: 'Yes. We seal the doorway, protect floors on the route in, and clear waste daily. The rest of the apartment stays usable throughout.' },
      { q: 'What is covered by the warranty on a kitchen?', a: 'Our workmanship for five years, and the waterproofing behind and under wet areas for ten. Appliance and cabinet warranties come from their manufacturers and we hand you the paperwork.' },
    ],
    faqsRu: [
      { q: 'Вы можете поставить кухонную мебель?', a: 'Да. Работаем с европейскими производителями и передаём вам ту же оптовую цену, по которой покупаем сами. Если кухня уже куплена в другом месте — смонтируем без наценки.' },
      { q: 'Сколько я буду без кухни?', a: '3–5 недель при полной замене с инженерией и плиткой. Если вы остаётесь жить в квартире, организуем временную мойку и рабочую поверхность в другом помещении.' },
      { q: 'Вы переносите сантехнику и электрику?', a: 'Да — перенос мойки, варочной, вытяжки и розеток входит в обычный объём работ по кухне и учитывается в смете. Электрика сертифицируется, сертификат CERA передаём при сдаче.' },
      { q: 'Какие столешницы лучше для Кипра?', a: 'Лучше всего держатся спечённый камень и кварцевый агломерат — не впитывают пятна, не требуют пропитки и переносят нагрев. Натуральный мрамор выглядит великолепно, но пористый и в рабочей семейной кухне быстро получает следы.' },
      { q: 'Можно сделать кухню, не трогая остальную квартиру?', a: 'Да. Закрываем проём, защищаем полы по пути прохода и вывозим мусор ежедневно. Остальная квартира остаётся пригодной для жизни всё время работ.' },
      { q: 'Что покрывает гарантия на кухню?', a: 'Наши работы — 5 лет, гидроизоляция за мокрыми зонами и под ними — 10 лет. Гарантия на технику и мебель — от производителей, документы передаём вам.' },
    ],
    relatedSlugs: ['apartment-renovation', 'joinery', 'flooring', 'painting'],
  },

  {
    slug: 'bathroom-renovation', category: 'spaces', icon: '🛁',
    titleEn: 'Bathroom & Wet Rooms',      titleRu: 'Ванная и санузлы',
    seoDescEn: 'Bathroom renovation in Limassol. Full waterproofing, premium tiling, sanitary ware, steam rooms. EN 14891 certified. Free estimate.',
    seoDescRu: 'Ремонт ванной в Лимасоле. Полная гидроизоляция, premium-плитка, сантехника, хамам. Сертификация EN 14891. Бесплатная смета.',
    heroSubEn: 'Complete bathroom transformation — waterproofing, tiling, sanitary ware and steam rooms.',
    heroSubRu: 'Полная реновация ванной — гидроизоляция, плитка, сантехника, хамам.',
    priceFrom: 2000, priceLabelEn: 'from €2,000', priceLabelRu: 'от €2 000', priceUnit: 'flat',
    timelineEn: '10–18 working days', timelineRu: '10–18 рабочих дней',
    includesEn: ['Full demolition and disposal','EN 14891 liquid membrane waterproofing','Wall and floor tiling (any format)','Sanitary ware fitting (WC, basin, bath, shower)','Shower glass installation','Heated towel rail and underfloor heating wiring','Extractor fan and ventilation ducting','Vanity unit and mirror fitting','Grouting and sealant finishing','Snagging and sign-off'],
    includesRu: ['Полный демонтаж и вывоз','Жидкая мембранная гидроизоляция EN 14891','Плитка стен и пола (любой формат)','Монтаж сантехники (унитаз, раковина, ванна, душ)','Установка душевого стекла','Полотенцесушитель и кабель тёплого пола','Вентиляция и вытяжка','Тумба, зеркало','Затирка и герметизация','Приёмка и сдача'],
    faqsEn: [
      { q: 'How do you guarantee the waterproofing?', a: 'We use a liquid-applied system to EN 14891 across the full floor and up the walls in every wet zone, and we water-test before tiling. Wet-room waterproofing carries a 10-year warranty.' },
      { q: 'What slip rating do you specify for floors?', a: 'R10 as a minimum for a domestic bathroom floor, R11 for a walk-in shower area or anything used wet by children or older family members.' },
      { q: 'Do you build hammams and steam rooms?', a: 'Yes, it is one of our specialities — tanked construction, graded falls, sealed door and the ventilation and drainage sized for continuous steam.' },
      { q: 'How long does one bathroom take?', a: 'Two to four weeks from strip-out to finished, depending on size and how much of the plumbing moves. The waterproofing and screed curing times are the part that cannot be rushed.' },
      { q: 'Can you fit an existing suite I have already bought?', a: 'Yes, at no extra labour cost. Send us the specification before we quote so the first-fix positions and the pipework are set out for it.' },
      { q: 'What does a bathroom renovation start from?', a: 'From €2,000 for a full strip-out to finish. Tile format, the amount of pipework being moved and the sanitary ware you choose are what move the number.' },
    ],
    faqsRu: [
      { q: 'Как вы гарантируете гидроизоляцию?', a: 'Используем наливную систему по стандарту EN 14891 на всю площадь пола и с заходом на стены во всех мокрых зонах, перед укладкой плитки проливаем водой. Гарантия на гидроизоляцию мокрых зон — 10 лет.' },
      { q: 'Какой класс противоскольжения вы закладываете?', a: 'Минимум R10 для пола обычного санузла и R11 для зоны душа без поддона или там, где мокрым полом пользуются дети и пожилые.' },
      { q: 'Вы делаете хаммамы и парные?', a: 'Да, это одна из наших специализаций: полная обмазка, уклоны, герметичная дверь, вентиляция и слив, рассчитанные на постоянный пар.' },
      { q: 'Сколько делается один санузел?', a: '2–4 недели от демонтажа до готового результата — зависит от площади и от того, насколько переносится сантехника. Сроки набора прочности стяжки и гидроизоляции ускорить нельзя.' },
      { q: 'Можно смонтировать сантехнику, которую я уже купил?', a: 'Да, без доплаты за работу. Пришлите спецификацию до сметы, чтобы черновая разводка была сразу сделана под неё.' },
      { q: 'От какой суммы стартует ремонт санузла?', a: 'От €2 000 за полный цикл от демонтажа до отделки. На сумму влияют формат плитки, объём переноса труб и выбранная сантехника.' },
    ],
    relatedSlugs: ['apartment-renovation', 'waterproofing', 'flooring', 'painting'],
  },

  {
    slug: 'terrace-outdoor', category: 'spaces', icon: '🌿',
    titleEn: 'Terrace & Outdoor Living',  titleRu: 'Терраса и уличные зоны',
    seoDescEn: 'Terrace renovation in Limassol. Pergolas, decking, outdoor kitchens, landscaping, pool surrounds. Licensed contractor.',
    seoDescRu: 'Ремонт террасы в Лимасоле. Pergola, декинг, летние кухни, озеленение, благоустройство бассейна. Лицензированный подрядчик.',
    heroSubEn: 'Transform your outdoor space into a year-round living area.',
    heroSubRu: 'Превратите уличное пространство в место для жизни круглый год.',
    priceFrom: 1000, priceLabelEn: 'from €1,000', priceLabelRu: 'от €1 000', priceUnit: 'flat',
    timelineEn: '1–4 weeks depending on scope', timelineRu: '1–4 недели в зависимости от объёма',
    includesEn: ['Terrace waterproofing and drainage','Porcelain or natural stone decking','Timber or aluminium pergola construction','Outdoor kitchen unit and BBQ installation','Irrigation and landscape lighting','Plunge pool or spa coordination','Privacy screening and fencing','Outdoor electrical supply (weatherproofed)'],
    includesRu: ['Гидроизоляция и дренаж террасы','Керамогранитный или натуральный каменный декинг','Деревянная или алюминиевая pergola','Летняя кухня и барбекю','Полив и ландшафтное освещение','Координация монтажа spa/плунж-бассейна','Ограждения и экраны приватности','Уличная электрика (влагозащищённая)'],
    faqsEn: [
      { q: 'Which surface works best in the Cyprus climate?', a: 'Porcelain on pedestals or sand-and-cement bedded porcelain. It does not fade, does not need annual treatment and survives salt air. Timber decking looks beautiful and needs re-oiling every year near the sea.' },
      { q: 'Can you build a pergola with a motorised roof?', a: 'Yes — bioclimatic aluminium pergolas with motorised louvres, including the wiring, rain sensor and integration into a smart-home system if you have one.' },
      { q: 'Does a terrace need waterproofing?', a: 'If there is living space underneath, always — and to the same EN 14891 standard as a wet room, with the falls set before anything is laid. Most terrace leaks we are called to fix are missing or damaged tanking.' },
      { q: 'Do outdoor works need a permit?', a: 'A pergola, a change of surface or new external lighting usually does not. Anything that adds enclosed floor area or touches the structure does, and we file it for you.' },
      { q: 'When is the best time of year to do outdoor work?', a: 'October to April. Summer heat slows adhesive and screed curing and makes working conditions poor, which shows up in the finish.' },
      { q: 'Can you do outdoor kitchens and lighting?', a: 'Yes — outdoor kitchens, built-in barbecues, garden and facade lighting, and the drainage and power runs they need, all inside the same contract.' },
    ],
    faqsRu: [
      { q: 'Какое покрытие лучше работает в климате Кипра?', a: 'Керамогранит на опорах или на песчано-цементном основании: не выгорает, не требует ежегодной обработки и выдерживает солёный воздух. Деревянный настил красив, но у моря его надо промасливать каждый год.' },
      { q: 'Можете построить перголу с моторизованной крышей?', a: 'Да — биоклиматические алюминиевые перголы с моторизованными ламелями, включая проводку, датчик дождя и интеграцию в умный дом, если он у вас есть.' },
      { q: 'Нужна ли террасе гидроизоляция?', a: 'Если под ней жилое помещение — обязательно, по тому же стандарту EN 14891, что и мокрые зоны, с уклонами, заданными до укладки. Большинство протечек террас, которые мы приезжаем чинить, — это отсутствующая или повреждённая гидроизоляция.' },
      { q: 'Нужно ли разрешение на работы снаружи?', a: 'На перголу, смену покрытия или наружное освещение — обычно нет. На всё, что добавляет закрытую площадь или затрагивает конструктив, — да, и мы оформляем это за вас.' },
      { q: 'В какое время года лучше делать работы снаружи?', a: 'С октября по апрель. Летняя жара замедляет набор прочности клеевых составов и стяжки и ухудшает условия работы, а это видно в результате.' },
      { q: 'Делаете летние кухни и освещение?', a: 'Да — летние кухни, встроенные барбекю, садовое и фасадное освещение, а также слив и подводку электричества для них, всё в рамках одного договора.' },
    ],
    relatedSlugs: ['pool-renovation', 'waterproofing', 'villa-renovation', 'flooring'],
  },

  {
    slug: 'pool-renovation', category: 'spaces', icon: '🏊',
    titleEn: 'Swimming Pool Renovation',  titleRu: 'Ремонт бассейна',
    seoDescEn: 'Pool renovation in Limassol — resurfacing, mosaic tiling, filtration upgrade, coping and pool deck. Certified pool contractors.',
    seoDescRu: 'Ремонт бассейна в Лимасоле — покрытие, мозаичная облицовка, модернизация фильтрации, отмостка. Сертифицированные подрядчики.',
    heroSubEn: 'Full pool renovation — shell, filtration, surrounds and lighting.',
    heroSubRu: 'Полная реновация бассейна — чаша, фильтрация, окружение и освещение.',
    priceFrom: 2500, priceLabelEn: 'from €2,500', priceLabelRu: 'от €2 500', priceUnit: 'flat',
    timelineEn: '2–5 weeks', timelineRu: '2–5 недель',
    includesEn: ['Pool shell inspection and crack repair','Waterproofing of pool shell','Mosaic tile or liner installation','Filtration and pump upgrade','LED underwater lighting','Coping stone replacement','Pool deck (porcelain or natural stone)','Auto-fill and drainage check','Salt chlorinator fitting'],
    includesRu: ['Осмотр чаши и ремонт трещин','Гидроизоляция чаши','Мозаичная облицовка или лайнер','Модернизация фильтрации и насоса','LED подводное освещение','Замена бортового камня','Отмостка (керамогранит или натуральный камень)','Проверка автозалива и дренажа','Монтаж хлоргенератора (соль)'],
    faqsEn: [
      { q: 'How long is the pool out of use?', a: 'Three to six weeks for a full renovation: strip-out, structural repair, waterproofing, new finish and re-commissioning. A re-tile alone can be done in two.' },
      { q: 'Do you install pool heat pumps?', a: 'Yes, including the electrical supply, the pipework and the controls. In Cyprus a heat pump extends comfortable swimming from roughly five months a year to nine or ten.' },
      { q: 'Can you convert to salt water?', a: 'Yes. It means a chlorinator, compatible pipework and fittings, and checking that the existing finish tolerates it. Salt systems are gentler on skin and cheaper to run, but the equipment needs annual servicing.' },
      { q: 'My pool loses water. Can you find the leak?', a: 'Yes — we pressure-test the pipework and check the shell separately, so you know whether it is a line, a fitting or the structure before anyone starts breaking things.' },
      { q: 'Which finish lasts longest here?', a: 'Glass mosaic and full-body porcelain outlast painted or plastered finishes by years in Cyprus sun and salt. The cost difference is mostly labour, and it is paid back on the first re-do you do not have to make.' },
      { q: 'Is pool work covered by the warranty?', a: 'Waterproofing carries the 10-year cover, our workmanship five years. Pumps, heaters and chlorinators carry their manufacturers\' warranties and we register them in your name.' },
    ],
    faqsRu: [
      { q: 'Сколько бассейн будет недоступен?', a: '3–6 недель при полном ремонте: демонтаж, ремонт чаши, гидроизоляция, новая отделка и запуск. Только перекладка плитки — за две недели.' },
      { q: 'Устанавливаете тепловые насосы для бассейна?', a: 'Да, вместе с подводкой электричества, обвязкой и автоматикой. На Кипре тепловой насос продлевает комфортный сезон примерно с пяти месяцев в году до девяти-десяти.' },
      { q: 'Можно перевести бассейн на солёную воду?', a: 'Да. Нужен хлоргенератор, совместимая обвязка и фурнитура, а также проверка того, что существующая отделка это переносит. Солёные системы мягче для кожи и дешевле в эксплуатации, но оборудование требует ежегодного обслуживания.' },
      { q: 'Бассейн теряет воду. Найдёте течь?', a: 'Да — опрессовываем обвязку и отдельно проверяем чашу, чтобы стало понятно, дело в трубе, в закладной или в конструкции, до того как что-то вскрывать.' },
      { q: 'Какая отделка служит дольше в наших условиях?', a: 'Стеклянная мозаика и полнотелый керамогранит служат на годы дольше окрашенных или штукатурных покрытий под кипрским солнцем и солью. Разница в цене — в основном работа, и она окупается первым же ремонтом, который не пришлось делать.' },
      { q: 'Гарантия распространяется на бассейн?', a: 'На гидроизоляцию — 10 лет, на наши работы — 5 лет. Насосы, нагреватели и хлоргенераторы идут с гарантией производителей, и мы регистрируем их на ваше имя.' },
    ],
    relatedSlugs: ['terrace-outdoor', 'waterproofing', 'villa-renovation', 'electrical-plumbing'],
  },

  /* ── COMMERCIAL ───────────────────────────────────────────────────────── */
  {
    slug: 'office-fit-out', category: 'commercial', icon: '🏢',
    titleEn: 'Office Fit-Out',            titleRu: 'Офисный ремонт',
    seoDescEn: 'Office fit-out in Limassol. Open plan, meeting rooms, M&E, AV systems. Fast turnaround, fixed price, licensed contractor.',
    seoDescRu: 'Офисный ремонт в Лимасоле. Open-plan, переговорные, инженерные системы, AV. Быстрые сроки, фиксированная цена.',
    heroSubEn: 'Design-led office fit-out — from partitioning to furniture, on time and budget.',
    heroSubRu: 'Офис под ключ — от перегородок до мебели, в срок и в бюджет.',
    priceFrom: 150, priceLabelEn: 'from €150/m²', priceLabelRu: 'от €150/м²', priceUnit: 'sqm',
    timelineEn: '4–8 weeks', timelineRu: '4–8 недель',
    includesEn: ['Space planning and 3D design','Raised access flooring','Suspended acoustic ceiling with LED grid','Demountable glass partitioning','Server room with dedicated A/C','Electrical distribution (Legrand or Schneider)','Data, AV and security cabling','Kitchenette and breakout areas','Signage and corporate branding fit-out','Furniture supply and installation'],
    includesRu: ['Планировка и дизайн-концепция','Фальшпол с доступом к коммуникациям','Акустический подвесной потолок с LED','Разборные стеклянные перегородки','Серверная с выделенным кондиционером','Электрораспределение (Legrand, Schneider)','Кабели данных, AV и безопасности','Кухня и зоны отдыха','Вывески и корпоративный стиль','Поставка и монтаж мебели'],
    faqsEn: [
      { q: 'Do you work out of hours to avoid downtime?', a: 'Yes. Noisy and dusty work goes to evenings and weekends so the business keeps trading. We agree the schedule before signing so you know exactly which days affect you.' },
      { q: 'Do you fit out coworking spaces?', a: 'Yes — open floors, meeting rooms, phone booths and the acoustic treatment that makes them usable, plus the data and power distribution underneath.' },
      { q: 'Can you coordinate with our IT and AV contractor?', a: 'Yes, routinely. We set out the containment, power and back-boxes to their drawings and hold the programme so they are on site when the walls are still open.' },
      { q: 'Is the completion date contractual?', a: 'Yes. The handover date is in the contract, not an aspiration, and any change to it requires a written variation agreed with you.' },
      { q: 'What does an office fit-out cost?', a: 'From €150/m² for an open-plan floor including services. Partitioning density, HVAC changes and the specification of the meeting rooms are what move it.' },
      { q: 'Do you handle landlord approvals?', a: 'Yes. We prepare the drawings and the method statement the landlord or building management asks for, and deal with their consent process alongside the municipal one.' },
    ],
    faqsRu: [
      { q: 'Работаете в нерабочее время, чтобы не мешать?', a: 'Да. Шумные и пыльные работы переносим на вечера и выходные, чтобы бизнес продолжал работать. График согласуем до подписания, так что вы заранее знаете, какие дни вас затронут.' },
      { q: 'Делаете ремонт коворкингов?', a: 'Да — открытые пространства, переговорные, телефонные кабины и акустика, без которой они не работают, плюс распределение электрики и слаботочки.' },
      { q: 'Вы координируетесь с нашими ИТ и АВ подрядчиками?', a: 'Да, регулярно. Прокладываем каналы, питание и монтажные коробки по их чертежам и держим график так, чтобы они попали на объект, пока стены ещё открыты.' },
      { q: 'Дата сдачи прописана в договоре?', a: 'Да. Дата передачи объекта — в договоре, а не «ориентировочная», и любое её изменение оформляется письменным допсоглашением с вами.' },
      { q: 'Сколько стоит отделка офиса?', a: 'От €150/м² для open space с инженерией. На сумму влияют плотность перегородок, изменения в вентиляции и уровень отделки переговорных.' },
      { q: 'Вы занимаетесь согласованием с арендодателем?', a: 'Да. Готовим чертежи и описание работ, которые запрашивает собственник или управляющая компания, и ведём их согласование параллельно с муниципальным.' },
    ],
    relatedSlugs: ['smart-home', 'electrical-plumbing', 'flooring', 'painting'],
  },

  {
    slug: 'hotel-renovation', category: 'commercial', icon: '🏨',
    titleEn: 'Hotel & Hospitality',       titleRu: 'Отели и рестораны',
    seoDescEn: 'Hotel renovation in Limassol. Room refurbishment, lobby redesign, F&B renovation. Phased works with minimal operational disruption.',
    seoDescRu: 'Ремонт отелей в Лимасоле. Реновация номеров, лобби, F&B. Поэтапные работы с минимальным влиянием на операции.',
    heroSubEn: 'Hotel room refurbishment, lobby and restaurant renovation — phased to keep you operational.',
    heroSubRu: 'Реновация номеров, лобби и ресторана — поэтапно без остановки работы отеля.',
    priceFrom: 180, priceLabelEn: 'from €180/m²', priceLabelRu: 'от €180/м²', priceUnit: 'sqm',
    timelineEn: 'Phased schedule tailored to occupancy', timelineRu: 'Поэтапный план под загрузку отеля',
    includesEn: ['Room-by-room phased renovation programme','New bathroom fit-out (tile, sanitary, lighting)','Bedroom flooring and furniture replacement','Corridor and common area works','Lobby redesign and reception desk','Restaurant kitchen and F&B area fit-out','MEP upgrades (fire safety compliant)','Signage and hotel branding'],
    includesRu: ['Поэтапная программа реновации по номерам','Ремонт ванной (плитка, сантехника, свет)','Замена полов и мебели в номерах','Коридоры и общие зоны','Редизайн лобби и стойки регистрации','Ресторанная кухня и F&B зоны','Инженерные апгрейды (пожарная безопасность)','Вывески и брендинг отеля'],
    faqsEn: [
      { q: 'Can you renovate while the hotel is trading?', a: 'Yes. We work floor by floor or wing by wing with sealed hoardings, a separate lift and route for materials, and noisy work confined to agreed hours.' },
      { q: 'How fast can you turn around a room?', a: 'Five to eight working days per room on a rolling programme once the first pilot room is signed off. The pilot is where the specification and the sequence get fixed.' },
      { q: 'Do you build a sample room first?', a: 'We recommend it, and most owners do. One finished room lets you approve materials, lighting and joinery for real before the same decisions get repeated eighty times.' },
      { q: 'Can you meet a season opening date?', a: 'That is what the contract date is for. We plan backwards from your opening, order long-lead items first, and tell you at quote stage if the date is not realistic rather than discovering it in month three.' },
      { q: 'Do you cover the public areas and the kitchen?', a: 'Yes — lobby, restaurant, spa and back-of-house, including commercial kitchen extraction and the drainage and grease management that come with it.' },
      { q: 'Who is our point of contact?', a: 'One named project manager for the whole contract, on site daily, reachable on WhatsApp during working hours, with a photo report every Friday.' },
    ],
    faqsRu: [
      { q: 'Можно делать ремонт, пока отель работает?', a: 'Да. Работаем поэтажно или по крыльям, с герметичными перегородками, отдельным лифтом и маршрутом для материалов, а шумные работы — только в согласованные часы.' },
      { q: 'Как быстро вы сдаёте один номер?', a: '5–8 рабочих дней на номер в поточном режиме — после того как принят первый эталонный номер. Именно на нём фиксируются спецификация и последовательность работ.' },
      { q: 'Делаете сначала эталонный номер?', a: 'Рекомендуем, и большинство владельцев так и делает. Один готовый номер позволяет утвердить материалы, свет и мебель вживую, до того как то же решение повторится восемьдесят раз.' },
      { q: 'Успеете к открытию сезона?', a: 'Для этого и существует дата в договоре. Планируем от вашего открытия назад, сначала заказываем позиции с долгой поставкой, и если срок нереалистичен — говорим об этом на этапе сметы, а не на третий месяц.' },
      { q: 'Вы делаете общественные зоны и кухню?', a: 'Да — лобби, ресторан, спа и служебные помещения, включая вытяжку профессиональной кухни и связанные с ней слив и жироулавливание.' },
      { q: 'Кто будет нашим контактным лицом?', a: 'Один назначенный прораб на весь договор: каждый день на объекте, доступен в WhatsApp в рабочее время, каждую пятницу присылает фотоотчёт.' },
    ],
    relatedSlugs: ['office-fit-out', 'bathroom-renovation', 'flooring', 'painting'],
  },

  {
    slug: 'retail-restaurant', category: 'commercial', icon: '🍽️',
    titleEn: 'Retail & Restaurant',       titleRu: 'Ретейл и рестораны',
    seoDescEn: 'Shop fit-out and restaurant renovation in Limassol. Bespoke interiors, commercial kitchen, bar installations. Fast turnaround.',
    seoDescRu: 'Отделка магазинов и ресторанов в Лимасоле. Авторские интерьеры, коммерческая кухня, барные стойки. Быстрые сроки.',
    heroSubEn: 'Retail and hospitality interiors that convert visitors into loyal customers.',
    heroSubRu: 'Интерьеры для ретейла и HoReCa, которые превращают посетителей в постоянных клиентов.',
    priceFrom: 170, priceLabelEn: 'from €170/m²', priceLabelRu: 'от €170/м²', priceUnit: 'sqm',
    timelineEn: '3–8 weeks', timelineRu: '3–8 недель',
    includesEn: ['Concept and design planning','Full shopfit (shelving, counters, display units)','Commercial kitchen installation (stainless steel, ventilation)','Bar and back-bar construction','Decorative wall finishes and feature lighting','Electrical and plumbing for commercial use','Flooring (epoxy, porcelain or polished concrete)','Signage integration'],
    includesRu: ['Концепция и планировка','Полная отделка (стеллажи, прилавки, витрины)','Монтаж коммерческой кухни (нержавейка, вентиляция)','Барная стойка и бэк-бар','Декоративные покрытия и дизайнерское освещение','Электрика и сантехника для коммерческого использования','Полы (эпоксид, керамогранит, шлифованный бетон)','Интеграция вывесок'],
    faqsEn: [
      { q: 'Can you hit a seasonal opening date?', a: 'Yes, and it goes in the contract. We work backwards from your opening date and order long-lead items — extraction, joinery, glazing — first.' },
      { q: 'Do you install commercial kitchen extraction?', a: 'Yes — canopy, ducting, fire dampers, make-up air and the grease management, sized for the equipment schedule rather than guessed from the floor area.' },
      { q: 'Can you help with health and fire compliance?', a: 'We build to the requirements and produce the drawings and certificates inspectors ask for. The licence application itself stays with you or your consultant, and we supply whatever documentation they need.' },
      { q: 'Do you do the shopfront and signage?', a: 'Yes — glazing, entrance doors, awnings and illuminated signage, including the municipal consent that shopfront changes usually need.' },
      { q: 'What does a fit-out cost per square metre?', a: 'From €150/m² for retail. Restaurants run higher because of the kitchen services, extraction and drainage; we split those out as separate lines so you can see them.' },
      { q: 'Can you work overnight to keep us trading?', a: 'Yes. Overnight and closed-day working is normal for occupied retail, and the hours are agreed and priced before you sign.' },
    ],
    faqsRu: [
      { q: 'Успеете сдать к сезонному открытию?', a: 'Да, и это фиксируется в договоре. Планируем от даты открытия назад и в первую очередь заказываем позиции с долгой поставкой: вытяжку, мебель, остекление.' },
      { q: 'Ставите вытяжку для профессиональной кухни?', a: 'Да — зонт, воздуховоды, огнезадерживающие клапаны, приточный воздух и жироулавливание, рассчитанные под спецификацию оборудования, а не прикинутые по площади.' },
      { q: 'Поможете с санитарными и пожарными требованиями?', a: 'Строим в соответствии с требованиями и готовим чертежи и сертификаты, которые запрашивают инспекторы. Само получение лицензии остаётся за вами или вашим консультантом, а мы предоставляем всю нужную документацию.' },
      { q: 'Делаете фасад магазина и вывеску?', a: 'Да — остекление, входные группы, маркизы и световые вывески, включая согласование с муниципалитетом, которое обычно требуется при изменении фасада.' },
      { q: 'Сколько стоит отделка за квадратный метр?', a: 'От €150/м² для торгового помещения. Рестораны дороже из-за кухонной инженерии, вытяжки и слива — мы выносим их отдельными строками, чтобы вы это видели.' },
      { q: 'Можно работать ночью, чтобы мы не закрывались?', a: 'Да. Ночные работы и работы в выходные — обычная практика для действующих торговых точек, часы согласуются и учитываются в смете до подписания.' },
    ],
    relatedSlugs: ['office-fit-out', 'electrical-plumbing', 'flooring', 'joinery'],
  },

  /* ── SPECIALIST ───────────────────────────────────────────────────────── */
  {
    slug: 'interior-design', category: 'specialist', icon: '🎨',
    titleEn: 'Interior Design',            titleRu: 'Дизайн интерьера',
    seoDescEn: 'Interior design in Limassol. Material selection, furniture plans, lighting design. From €25/m².',
    seoDescRu: 'Дизайн интерьера в Лимасоле. Подбор материалов, расстановка мебели, дизайн освещения. От €25/м².',
    heroSubEn: 'Full design concept before a single tile is laid — approve every detail in advance.',
    heroSubRu: 'Детальная концепция дизайна до начала работ — утвердите каждую деталь заранее.',
    priceFrom: 25, priceLabelEn: 'from €25/m²', priceLabelRu: 'от €25/м²', priceUnit: 'sqm',
    timelineEn: '2–4 weeks for design package', timelineRu: '2–4 недели на дизайн-проект',
    includesEn: ['Initial brief and site survey','Concept mood board and colour palette','Design layouts and material schedules (every room)','Material and finish schedule','Furniture layout plans','Lighting design with zones and controls','Material sourcing from European suppliers','Coordination with construction team','Revisions until approved'],
    includesRu: ['Брифинг и замер объекта','Концептуальный мудборд и цветовая палитра','Планы и спецификации материалов (каждое помещение)','Спецификация материалов и отделки','Планы расстановки мебели','Дизайн освещения с зонами и управлением','Подбор материалов у европейских поставщиков','Координация с бригадой','Правки до утверждения'],
    faqsEn: [
      { q: 'Is the design included in the renovation price?', a: 'Yes, when we build the project. Design concepts for every room, the material board and two revision rounds are part of the quote, not an extra.' },
      { q: 'Can I use my own designer?', a: 'Yes, often. We build to another designer\'s drawings and flag anything unbuildable or non-compliant early, in writing, rather than halfway through.' },
      { q: 'How many revisions do I get?', a: 'Two full rounds are included, and in practice we keep going until you approve it. What we do not do is change the approved design on site without a written variation.' },
      { q: 'What do I actually receive?', a: 'Layouts for every main room, 3D visualisations, a material and finish board, and the drawings the site team builds from — lighting, electrical points and joinery.' },
      { q: 'Will the finished room look like the render?', a: 'That is the point of doing them. Renders are built from the actual materials and fittings on the board, so what you approve is what gets ordered and installed.' },
      { q: 'Can you design only, without the build?', a: 'Yes, as a paid design package. Most clients who start that way come back for the build, but there is no obligation and the drawings are yours either way.' },
    ],
    faqsRu: [
      { q: 'Входит ли дизайн в стоимость ремонта?', a: 'Да, если мы делаем и ремонт. Концепции всех помещений, подборка материалов и два круга правок входят в смету, а не оплачиваются отдельно.' },
      { q: 'Можно работать со своим дизайнером?', a: 'Да, так бывает часто. Строим по чертежам стороннего дизайнера и заранее письменно отмечаем всё, что невозможно построить или что не проходит по нормам, — а не на середине работ.' },
      { q: 'Сколько правок я могу внести?', a: 'Два полных круга включены, а на практике работаем до вашего утверждения. Чего мы не делаем — так это не меняем утверждённый проект на объекте без письменного допсоглашения.' },
      { q: 'Что я получаю на руки?', a: 'Планировки всех основных помещений, 3D-визуализации, подборку материалов и отделки и рабочие чертежи, по которым строит бригада: свет, точки электрики, мебель.' },
      { q: 'Готовая комната будет как на рендере?', a: 'Ради этого рендеры и делаются. Они строятся из реальных материалов и изделий из подборки, поэтому то, что вы утвердили, то и заказывается и монтируется.' },
      { q: 'Можно только дизайн, без ремонта?', a: 'Да, отдельным платным пакетом. Большинство тех, кто начинает так, возвращается за ремонтом, но обязательств нет — чертежи в любом случае остаются вашими.' },
    ],
    relatedSlugs: ['apartment-renovation', 'villa-renovation', 'smart-home', 'joinery'],
  },

  {
    slug: 'energy-modernization', category: 'specialist', icon: '⚡',
    titleEn: 'Energy Modernisation',      titleRu: 'Энергомодернизация',
    seoDescEn: 'Energy renovation in Limassol. Insulation, solar PV, heat pumps. EU grants up to €6,000. Licensed certified contractor.',
    seoDescRu: 'Энергомодернизация в Лимасоле. Утепление, солнечные панели, тепловые насосы. Субсидии ЕС до €6 000. Лицензированный подрядчик.',
    heroSubEn: 'Cut energy bills by up to 50% — and qualify for EU grants covering up to 40% of costs.',
    heroSubRu: 'Снизьте счета до 50% — и получите субсидии ЕС, покрывающие до 40% затрат.',
    priceFrom: null, priceLabelEn: 'EU grants available', priceLabelRu: 'Субсидии ЕС', priceUnit: 'quote',
    timelineEn: '2–6 weeks + grant processing', timelineRu: '2–6 недель + оформление субсидий',
    includesEn: ['Energy audit and EPC certification','Roof and wall insulation (SAVE programme)','Photovoltaic solar panel installation','Air-to-water heat pump installation','Solar water heater installation','Grant application management','Smart thermostat and energy monitoring','Commissioning and handover documentation'],
    includesRu: ['Энергоаудит и сертификат EPC','Утепление кровли и стен (программа SAVE)','Монтаж солнечных фотовольтаических панелей','Установка воздушного теплового насоса','Монтаж солнечного водонагревателя','Оформление грантовых заявок','Умный термостат и мониторинг энергии','Ввод в эксплуатацию и документация'],
    faqsEn: [
      { q: 'How much can I get from the SAVE grant?', a: 'Up to €6,000 depending on the measures and the property. We do the audit, tell you what actually qualifies, and prepare the application paperwork.' },
      { q: 'How quickly do solar panels pay back?', a: 'In Cyprus conditions, typically four to six years for a domestic system, faster if your consumption is high and daytime-heavy. We size the system to your actual bills, not to the roof area.' },
      { q: 'What gives the biggest saving first?', a: 'Usually insulation and glazing before generation. There is no point producing electricity to push through a roof and windows that leak it — we say so even though the panels are the bigger job.' },
      { q: 'Do you do the energy audit?', a: 'Yes, and it comes before any recommendation. The audit is what tells you which measures qualify for the grant and what each one is actually worth per year.' },
      { q: 'Can this be done on an occupied apartment?', a: 'Yes for glazing, lighting, HVAC and panels. External insulation on an apartment block needs the building\'s agreement, and we can help present it to the management committee.' },
      { q: 'Who owns the grant paperwork?', a: 'You do. The application is in your name, we prepare and submit the supporting documents, and you receive copies of everything filed.' },
    ],
    faqsRu: [
      { q: 'Сколько можно получить по гранту SAVE?', a: 'До €6 000 в зависимости от мероприятий и объекта. Мы проводим аудит, говорим, что реально проходит по условиям, и готовим документы для заявки.' },
      { q: 'За сколько окупаются солнечные панели?', a: 'В условиях Кипра обычно за 4–6 лет для бытовой системы, быстрее при высоком дневном потреблении. Мы подбираем мощность по вашим реальным счетам, а не по площади крыши.' },
      { q: 'Что даёт наибольшую экономию в первую очередь?', a: 'Обычно утепление и остекление, а уже потом генерация. Нет смысла производить электричество, чтобы оно уходило через крышу и окна, — мы говорим об этом прямо, хотя панели и есть более крупная работа.' },
      { q: 'Вы делаете энергоаудит?', a: 'Да, и он всегда предшествует рекомендациям. Именно аудит показывает, какие мероприятия проходят по гранту и сколько каждое из них реально даёт в год.' },
      { q: 'Можно сделать это в квартире, где живут?', a: 'Да — остекление, освещение, климат и панели. Наружное утепление многоквартирного дома требует согласия дома, и мы можем помочь представить проект собранию собственников.' },
      { q: 'На кого оформляется грант?', a: 'На вас. Заявка подаётся от вашего имени, мы готовим и подаём сопроводительные документы, а копии всего поданного передаём вам.' },
    ],
    relatedSlugs: ['villa-renovation', 'waterproofing', 'facade', 'smart-home'],
  },

  {
    slug: 'smart-home', category: 'specialist', icon: '🏠',
    titleEn: 'Smart Home Integration',    titleRu: 'Умный дом',
    seoDescEn: 'Smart home installation in Limassol. KNX, Lutron, Sonos, CCTV, access control. Retrofitting and new-build. Certified integrators.',
    seoDescRu: 'Умный дом в Лимасоле. KNX, Lutron, Sonos, видеонаблюдение, контроль доступа. Ретрофит и новое строительство. Сертифицированные специалисты.',
    heroSubEn: 'Climate, lighting, security and AV — all controlled from one app.',
    heroSubRu: 'Климат, освещение, безопасность и аудиовидео — всё управляется из одного приложения.',
    priceFrom: 2000, priceLabelEn: 'from €2,000', priceLabelRu: 'от €2 000', priceUnit: 'flat',
    timelineEn: '1–3 weeks', timelineRu: '1–3 недели',
    includesEn: ['System design and cabling plan','Structured cabling and conduit installation','KNX or Lutron lighting control','Multi-zone climate control (HVAC integration)','Multi-room audio (Sonos or equivalent)','CCTV and video doorbell installation','Access control (fingerprint, card or app)','App setup and user training'],
    includesRu: ['Проектирование системы и схема кабелей','Монтаж структурированной кабельной системы','Управление освещением KNX или Lutron','Многозональное климат-управление','Мультирум аудио (Sonos)','Видеонаблюдение и видеодомофон','Контроль доступа (отпечаток, карта, приложение)','Настройка приложения и обучение'],
    faqsEn: [
      { q: 'Can smart home be installed in a finished apartment?', a: 'Yes. Wireless and retrofit systems handle lighting, climate, blinds and security without opening walls. Wired systems give better reliability but need a renovation to install.' },
      { q: 'Which platform do you work with?', a: 'We work with the mainstream platforms rather than pushing one. The choice follows what you already use on your phone and whether you want everything to keep working with no internet.' },
      { q: 'What is worth automating first?', a: 'Lighting scenes, climate and blinds — the three you touch daily. Everything else is a nice extra, and we would rather you spend the budget on things you will actually use.' },
      { q: 'Does it still work if the internet goes down?', a: 'With a wired system and a local controller, yes — switches, scenes and climate keep working locally. Cloud-only devices will not, and we tell you which is which before you buy.' },
      { q: 'Can you pre-wire during a renovation?', a: 'Yes, and it is the cheapest moment to do it. Pre-wiring while walls are open costs a fraction of retrofitting later, even if you install the equipment years afterwards.' },
      { q: 'Who supports the system afterwards?', a: 'We do, and our workmanship carries the standard five-year warranty. Equipment carries manufacturer warranties, registered in your name at handover.' },
    ],
    faqsRu: [
      { q: 'Можно установить умный дом в готовую квартиру?', a: 'Да. Беспроводные и накладные системы закрывают свет, климат, шторы и безопасность без вскрытия стен. Проводные системы надёжнее, но их ставят во время ремонта.' },
      { q: 'С какой платформой вы работаете?', a: 'Работаем с распространёнными платформами, а не навязываем одну. Выбор зависит от того, чем вы уже пользуетесь на телефоне, и от того, нужно ли, чтобы всё продолжало работать без интернета.' },
      { q: 'Что автоматизировать в первую очередь?', a: 'Сценарии освещения, климат и шторы — то, к чему вы прикасаетесь каждый день. Остальное приятно иметь, но бюджет лучше потратить на то, чем вы реально будете пользоваться.' },
      { q: 'Будет работать, если пропадёт интернет?', a: 'С проводной системой и локальным контроллером — да: выключатели, сценарии и климат продолжают работать локально. Облачные устройства — нет, и мы говорим, что есть что, до покупки.' },
      { q: 'Можно сделать разводку во время ремонта?', a: 'Да, и это самый дешёвый момент. Прокладка кабеля при открытых стенах стоит долю от последующего монтажа, даже если само оборудование вы поставите через несколько лет.' },
      { q: 'Кто поддерживает систему потом?', a: 'Мы. На наши работы действует стандартная гарантия 5 лет. На оборудование — гарантии производителей, зарегистрированные на ваше имя при сдаче.' },
    ],
    relatedSlugs: ['interior-design', 'electrical-plumbing', 'office-fit-out', 'villa-renovation'],
  },

  {
    slug: 'structural-extensions', category: 'specialist', icon: '🔧',
    titleEn: 'Structural Works & Extensions', titleRu: 'Конструктив и пристройки',
    seoDescEn: 'Structural works in Limassol. Load-bearing wall removal, extensions, underpinning. Full permit management. Licensed structural works.',
    seoDescRu: 'Конструктивные работы в Лимасоле. Снос несущих стен, пристройки, усиление фундамента. Полное сопровождение разрешений.',
    heroSubEn: 'Structural changes and extensions handled safely, legally, and on time.',
    heroSubRu: 'Конструктивные изменения и пристройки — безопасно, законно и в срок.',
    priceFrom: null, priceLabelEn: 'quote only', priceLabelRu: 'по запросу', priceUnit: 'quote',
    timelineEn: 'Depends on scope — permit 4–8 weeks', timelineRu: 'Зависит от объёма — разрешение 4–8 недель',
    includesEn: ['Structural engineer assessment','Permit application to Cyprus Town Planning','Load-bearing wall removal with steel RSJ installation','Underpinning and foundation works','Extension construction (slab, blockwork, roof)','Tie-in to existing structure','Inspections and sign-off certificate'],
    includesRu: ['Оценка конструктора','Подача заявки в Отдел градостроительства Кипра','Снос несущих стен с установкой металлической балки','Усиление и работы с фундаментом','Строительство пристройки (плита, кладка, кровля)','Сопряжение с существующей конструкцией','Инспекции и акт приёмки'],
    faqsEn: [
      { q: 'How long does a permit take?', a: 'Two to four months for a typical residential extension, depending on the municipality and how complete the submission is. We start the drawings immediately so the clock begins as early as possible.' },
      { q: 'Can I remove a load-bearing wall?', a: 'Often yes, with a designed steel or concrete beam and an engineer\'s calculation. What we will not do is take one out on a hunch — a structural assessment comes first, every time.' },
      { q: 'Do you provide the engineer\'s drawings?', a: 'Yes, we prepare or coordinate them as part of the project, and they go into the permit submission and stay with you afterwards.' },
      { q: 'What happens if you find a structural problem mid-project?', a: 'We stop, price it as a written variation and show you the options before touching anything. You approve it in writing first — that is the whole point of the fixed-price contract.' },
      { q: 'Can you build a second floor on an existing house?', a: 'If the foundations and the existing structure take it, and the plot\'s building coefficient allows it. Both are checked before anything is quoted, not after.' },
      { q: 'Is an extension covered by the warranty?', a: 'Yes — five years on the structure, ten on any wet-room and terrace waterproofing, on the same written terms as everything else we build.' },
    ],
    faqsRu: [
      { q: 'Сколько занимает получение разрешения?', a: '2–4 месяца для типичной жилой пристройки — зависит от муниципалитета и от полноты пакета документов. Мы начинаем чертежи сразу, чтобы отсчёт пошёл как можно раньше.' },
      { q: 'Можно снести несущую стену?', a: 'Часто да — с расчётной стальной или бетонной балкой и расчётом инженера. Чего мы не делаем — так это не сносим «на глаз»: сначала всегда конструктивное обследование.' },
      { q: 'Вы предоставляете чертежи инженера?', a: 'Да, готовим или координируем их в рамках проекта, они входят в пакет на разрешение и остаются у вас после сдачи.' },
      { q: 'Что если по ходу найдётся конструктивная проблема?', a: 'Останавливаемся, оформляем письменное допсоглашение с ценой и показываем варианты до того, как что-то трогать. Вы утверждаете письменно — ради этого и существует договор с фиксированной ценой.' },
      { q: 'Можно надстроить второй этаж?', a: 'Если фундамент и существующая конструкция это выдерживают и коэффициент застройки участка позволяет. И то и другое проверяется до сметы, а не после.' },
      { q: 'Пристройка попадает под гарантию?', a: 'Да — 5 лет на конструктив и 10 лет на гидроизоляцию мокрых зон и террас, на тех же письменных условиях, что и всё остальное.' },
    ],
    relatedSlugs: ['villa-renovation', 'apartment-renovation', 'waterproofing', 'facade'],
  },

  /* ── TRADES ───────────────────────────────────────────────────────────── */
  {
    slug: 'flooring', category: 'trades', icon: '🪵',
    titleEn: 'Flooring',                  titleRu: 'Напольные покрытия',
    seoDescEn: 'Flooring installation in Limassol. Engineered wood, porcelain, marble, luxury vinyl (SPC/LVT). Supply and install. From €20/m².',
    seoDescRu: 'Укладка полов в Лимасоле. Паркетная доска, керамогранит, мрамор, LVT/SPC. Поставка и монтаж. От €20/м².',
    heroSubEn: 'Engineered wood, porcelain, marble and luxury vinyl — supplied and installed to perfection.',
    heroSubRu: 'Паркет, керамогранит, мрамор и LVT — поставим и уложим идеально.',
    priceFrom: 20, priceLabelEn: 'from €20/m²', priceLabelRu: 'от €20/м²', priceUnit: 'sqm',
    timelineEn: '3–10 days depending on area', timelineRu: '3–10 дней в зависимости от площади',
    includesEn: ['Floor survey and preparation','Self-levelling compound where needed','Underfloor heating cable installation (optional)','Material supply (if required)','Adhesive or floating installation','Skirting boards and trims','Door threshold strips','Final clean and protection'],
    includesRu: ['Обследование и подготовка основания','Самовыравнивающаяся стяжка при необходимости','Монтаж кабеля тёплого пола (опционально)','Поставка материала (при необходимости)','Укладка на клей или плавающий способ','Плинтусы и переходные планки','Очистка и защита после монтажа'],
    faqsEn: [
      { q: 'Which flooring suits the Cyprus climate best?', a: 'Porcelain and SPC handle heat, humidity and sand without moving. Solid wood is beautiful and needs a controlled humidity range — engineered board is the sensible compromise.' },
      { q: 'Can you lay new flooring over the old one?', a: 'Sometimes — it depends on the height you can give up at doors and whether the existing floor is sound and level. We check both before quoting; overlaying a failing floor just buys a year.' },
      { q: 'Do you do underfloor heating?', a: 'Yes, wet and electric. In Cyprus it is worth it in bathrooms and on stone or porcelain floors; whole-house systems make sense in the hills, less so on the coast.' },
      { q: 'How level does the floor need to be?', a: 'Large-format tiles and rigid boards need a flat substrate or they lip and creak. Self-levelling screed is usually a line in the quote, and we would rather include it than blame the floor later.' },
      { q: 'How long does a flooring job take?', a: 'A typical apartment is three to seven days plus curing time for screed and adhesive. Curing is the part that cannot be shortened without paying for it later.' },
      { q: 'What does flooring cost?', a: 'From €20/m² laid. Format, substrate preparation and the material you choose are what move it; we quote preparation separately so you can see it.' },
    ],
    faqsRu: [
      { q: 'Какие полы лучше для влажного климата Кипра?', a: 'Керамогранит и SPC переносят жару, влажность и песок без деформаций. Массив красив, но требует стабильной влажности — инженерная доска здесь разумный компромисс.' },
      { q: 'Можно уложить новый пол поверх старого?', a: 'Иногда — зависит от того, сколько высоты можно потерять у дверей, и от того, крепкое и ровное ли основание. Проверяем и то и другое до сметы: укладка поверх разрушающегося пола даёт максимум год.' },
      { q: 'Делаете тёплый пол?', a: 'Да, водяной и электрический. На Кипре он оправдан в санузлах и на каменных и керамогранитных полах; система на весь дом имеет смысл в горах и куда меньше на побережье.' },
      { q: 'Насколько ровным должно быть основание?', a: 'Крупноформатной плитке и жёстким плитам нужно ровное основание, иначе появляются перепады и скрипы. Наливная стяжка обычно отдельной строкой в смете — мы предпочитаем включить её, чем потом ссылаться на основание.' },
      { q: 'Сколько занимает укладка пола?', a: 'Типичная квартира — 3–7 дней плюс время набора прочности стяжки и клея. Именно на этом сокращать нельзя, иначе платить придётся позже.' },
      { q: 'Сколько стоят полы?', a: 'От €20/м² с укладкой. На цену влияют формат, подготовка основания и выбранный материал; подготовку выносим отдельной строкой, чтобы она была видна.' },
    ],
    relatedSlugs: ['apartment-renovation', 'bathroom-renovation', 'painting', 'joinery'],
  },

  {
    slug: 'plastering', category: 'trades', icon: '🧱',
    titleEn: 'Plastering',                titleRu: 'Штукатурные работы',
    seoDescEn: 'Plastering in Limassol, Cyprus. Machine and hand plaster, skimming, microcement and Venetian plaster. Fixed price, free site visit.',
    seoDescRu: 'Штукатурные работы в Лимасоле, Кипр. Машинная и ручная штукатурка, шпаклёвка, микроцемент и венецианская штукатурка. Фиксированная цена, бесплатный выезд.',
    heroSubEn: 'Flat walls and true corners — the layer every other finish depends on.',
    heroSubRu: 'Ровные стены и честные углы — слой, от которого зависит вся остальная отделка.',
    priceFrom: 7, priceLabelEn: 'from €7/m²', priceLabelRu: 'от €7/м²', priceUnit: 'sqm',
    timelineEn: '4–8 days per apartment plus drying', timelineRu: '4–8 дней на квартиру плюс сушка',
    includesEn: ['Wall and ceiling preparation','Machine or hand plaster application','Corner beads and reveals','Skimming and skim-coat finishing','Crack repair and substrate consolidation','Microcement application (walls, floors, splashbacks)','Venetian plaster and lime wash','Levelling checks before handover to paint'],
    includesRu: ['Подготовка стен и потолков','Машинная или ручная штукатурка','Уголки и откосы','Шпаклёвка и финишное выравнивание','Ремонт трещин и укрепление основания','Микроцемент (стены, полы, фартуки)','Венецианская штукатурка и известковые покрытия','Проверка геометрии перед передачей под покраску'],
    faqsEn: [
      { q: 'How long must plaster dry before painting?', a: 'Machine-applied gypsum plaster needs four to seven days before the first coat of primer, depending on ventilation and humidity. We do not rush it — painting damp plaster is the most common cause of cracking and peeling a year later.' },
      { q: 'Machine or hand plaster — which is better?', a: 'Machine plaster is faster, more consistent and cheaper per square metre on large areas. Hand work wins in small rooms, on repairs and anywhere the machine cannot reach. We use whichever the room actually calls for.' },
      { q: 'Do you do microcement and Venetian plaster?', a: 'Yes, both. Microcement for walls, floors and splashbacks from €25/m², Venetian plaster from €35/m², depending on the product and the number of coats.' },
      { q: 'My walls are cracked. Do they need re-plastering?', a: 'Not always. Hairline shrinkage cracks can be filled and reinforced. Cracks that follow a structural line need the cause dealt with first, and we say so rather than skimming over it.' },
      { q: 'How flat should the walls be?', a: 'Flat enough that large-format tiles, rigid boards and grazing light do not expose it. We check with a straightedge before handing the room over to painting, and any correction is our cost, not a variation.' },
      { q: 'What does plastering cost?', a: 'From €7/m² for machine plaster on walls, from €5/m² for substrate preparation and from €5/m² for a skim finish ready to paint. The quote separates them so you can see what you are paying for.' },
    ],
    faqsRu: [
      { q: 'Сколько штукатурка должна сохнуть перед покраской?', a: 'Машинной гипсовой штукатурке нужно 4–7 дней до первого слоя грунта — зависит от вентиляции и влажности. Мы не торопим этот этап: покраска по сырой штукатурке — самая частая причина трещин и отслоений через год.' },
      { q: 'Машинная или ручная штукатурка — что лучше?', a: 'Машинная быстрее, ровнее и дешевле за квадратный метр на больших площадях. Ручная выигрывает в маленьких помещениях, на ремонте и там, куда машина не достаёт. Выбираем по конкретному помещению.' },
      { q: 'Делаете микроцемент и венецианскую штукатурку?', a: 'Да, и то и другое. Микроцемент для стен, полов и фартуков — от €25/м², венецианская штукатурка — от €35/м², в зависимости от материала и количества слоёв.' },
      { q: 'У меня трещины на стенах. Нужна ли новая штукатурка?', a: 'Не всегда. Волосяные усадочные трещины можно заделать и армировать. Трещины, идущие по конструктивной линии, требуют сначала устранения причины — и мы скажем об этом, а не зашпаклюем сверху.' },
      { q: 'Насколько ровными должны быть стены?', a: 'Настолько, чтобы это не вскрылось при крупноформатной плитке, жёстких панелях и скользящем свете. Проверяем правилом до передачи под покраску, и любая доводка — за наш счёт, а не отдельным допсоглашением.' },
      { q: 'Сколько стоят штукатурные работы?', a: 'От €7/м² за машинную штукатурку стен, от €5/м² за подготовку основания и от €5/м² за финишную шпаклёвку под покраску. В смете это отдельные строки, чтобы было видно, за что вы платите.' },
    ],
    relatedSlugs: ['painting', 'apartment-renovation', 'flooring', 'facade'],
  },

  {
    slug: 'painting', category: 'trades', icon: '🖌️',
    titleEn: 'Painting',                  titleRu: 'Покраска',
    seoDescEn: 'Interior and exterior painting in Limassol, Cyprus. Primer plus two coats, coastal-grade exterior systems, certified applicators. Fixed price.',
    seoDescRu: 'Внутренняя и наружная покраска в Лимасоле, Кипр. Грунт плюс два слоя, прибрежные фасадные системы, сертифицированные мастера. Фиксированная цена.',
    heroSubEn: 'Even colour, clean lines and a finish that survives the Cyprus sun.',
    heroSubRu: 'Ровный цвет, чистые линии и покрытие, которое переживает кипрское солнце.',
    priceFrom: 6, priceLabelEn: 'from €6/m²', priceLabelRu: 'от €6/м²', priceUnit: 'sqm',
    timelineEn: '3–6 days per apartment', timelineRu: '3–6 дней на квартиру',
    includesEn: ['Full masking and floor protection','Surface repair and sanding','Primer coat','Interior painting, two finish coats','Exterior masonry painting, coastal specification','Spray finishing for joinery and doors','Colour consultation and on-wall sample panels','Daily clean-down and waste removal'],
    includesRu: ['Полная защита пола и оклейка','Ремонт поверхности и шлифовка','Грунтовочный слой','Внутренняя покраска, два финишных слоя','Наружная покраска фасада, прибрежный стандарт','Покраска столярки и дверей в распылителе','Консультация по цвету и выкрасы на стене','Ежедневная уборка и вывоз мусора'],
    faqsEn: [
      { q: 'What paint do you use on exterior walls in Cyprus?', a: 'Elastomeric masonry systems rated for Mediterranean exposure — UV-stable, breathable and specified for coastal salt on seafront elevations. Interior work is primer plus two finish coats.' },
      { q: 'Do you protect the furniture and floors?', a: 'Always, before anything opens. Professional dust sheets and masking film on every surface, and a sweep and dust removal at the end of each working day.' },
      { q: 'How many coats do I actually get?', a: 'Primer plus two finish coats as standard, and a third where a strong colour is going over a light one or the reverse. Coverage is our problem, not an extra line on your invoice.' },
      { q: 'Can I see the colour before you paint the whole room?', a: 'Yes, and we recommend it. We put sample panels on the actual wall so you judge the colour in your own light rather than from a card in a shop.' },
      { q: 'Can you paint while we live in the apartment?', a: 'Yes, room by room, using low-odour water-based systems inside. We keep one route clear and clean, and you keep a bathroom and a kitchen working throughout.' },
      { q: 'How long does painting an apartment take?', a: 'Three to six days for a typical apartment once the surfaces are ready. If plastering is part of the job, add its drying time before the first coat of primer.' },
    ],
    faqsRu: [
      { q: 'Какую краску вы используете для наружных стен на Кипре?', a: 'Эластомерные фасадные системы, рассчитанные на средиземноморские условия: УФ-стойкие, паропроницаемые, а на первой линии — в исполнении под солёный воздух. Внутри — грунт плюс два финишных слоя.' },
      { q: 'Вы защищаете мебель и полы?', a: 'Всегда, ещё до вскрытия банок. Профессиональные укрывные материалы и малярная плёнка на всех поверхностях, уборка и удаление пыли в конце каждого рабочего дня.' },
      { q: 'Сколько слоёв я реально получу?', a: 'Стандарт — грунт плюс два финишных слоя, третий — там, где насыщенный цвет ложится на светлый или наоборот. Укрывистость — наша проблема, а не дополнительная строка в вашем счёте.' },
      { q: 'Можно увидеть цвет до покраски всей комнаты?', a: 'Да, и мы это рекомендуем. Делаем выкрасы прямо на вашей стене, чтобы вы оценили цвет при своём освещении, а не по вееру в магазине.' },
      { q: 'Можно красить, пока мы живём в квартире?', a: 'Да, по одному помещению, с малозапаховыми составами на водной основе внутри. Держим один проход свободным и чистым, а санузел и кухня остаются рабочими всё время.' },
      { q: 'Сколько занимает покраска квартиры?', a: '3–6 дней на типичную квартиру при готовых поверхностях. Если в объём входит штукатурка, добавьте время её высыхания до первого слоя грунта.' },
    ],
    relatedSlugs: ['plastering', 'apartment-renovation', 'facade', 'joinery'],

    deepEn: {
      scopeTitle: 'What we paint',
      scopeLead: 'Complete residential and commercial painting across Limassol and the south coast, with a coating system chosen for each substrate rather than one tin used everywhere.',
      scope: [
        { title: 'Interior walls & ceilings', body: 'Full apartment and villa repainting, smooth skim-coating, moisture-resistant finishes for bathrooms and kitchens.' , photo: PAINTING_SCOPE_PHOTOS[0] },
        { title: 'Exterior facades & balconies', body: 'UV-stable and salt-resistant coating systems specified for Mediterranean exposure.' , photo: PAINTING_SCOPE_PHOTOS[1] },
        { title: 'Doors, frames & joinery', body: 'Spray or roller application for interior doors, architraves, skirting and built-in carpentry.' , photo: PAINTING_SCOPE_PHOTOS[2] },
        { title: 'Metal & exterior elements', body: 'Anti-corrosion treatment and protective topcoats for railings, gates, pergolas and structural steel.' , photo: PAINTING_SCOPE_PHOTOS[3] },
        { title: 'Commercial & retail', body: 'Durable washable wall systems for high-traffic space, executed out of hours to keep the business trading.' , photo: PAINTING_SCOPE_PHOTOS[4] },
        { title: 'Crack repair & damp treatment', body: 'Crack opening, mesh reinforcement and localised anti-mould treatment before any primer goes on.' , photo: PAINTING_SCOPE_PHOTOS[5] },
      ],
      profileTitle: 'Solutions matched to the property',
      profiles: [
        { title: 'Apartment repainting', target: 'A refresh, or the paint stage of a full interior renovation', focus: 'Speed, dust isolation, quiet working hours, floor and furniture protection', idealFor: 'Owners, rental managers, handover before a sale', photo: '/images/gallery/apartment-after-1.webp', alt: 'Repainted apartment interior in Limassol, walls and ceiling in a light matt finish' },
        { title: 'Villas & residences', target: 'Interior and exterior together', focus: 'High ceilings, scaffold access, capillary damp assessment, weather-resistant facade systems', idealFor: 'Private villa owners, coastal property maintenance', photo: '/images/projects/agios-villa.webp', alt: 'Villa exterior in Agios Tychonas after facade painting' },
        { title: 'Commercial & fit-outs', target: 'Business premises and hospitality', focus: 'Fixed timeline, night and weekend execution, zero-VOC odour-free coatings', idealFor: 'Office managers, retail, restaurants', photo: '/images/projects/city-office.webp', alt: 'Office interior in Limassol city centre with painted walls' },
      ],
      benchTitle: 'Scope and budget benchmarks',
      benchLead: 'The rate starts at €6 per square metre of painted surface and moves with the number of coats, the preparation the substrate needs and the size of the job. A two-bedroom apartment carries roughly 220–260 m² of wall and ceiling, which is how the same rate becomes the project figures below. Your own price is fixed in writing after the scope is agreed on site.',
      benchmarks: [
        { title: '2-bed apartment, interior refresh', scope: 'Walls and ceilings in sound condition, standard preparation, primer plus two coats of premium acrylic.', range: '€1,400 – €2,400', duration: '3–5 working days' },
        { title: '3-bed apartment, full surface restoration', scope: 'Crack opening, spot priming, full protection, walls, ceilings, doors and skirting.', range: '€2,800 – €4,500', duration: '6–9 working days' },
        { title: 'Detached villa, exterior facade', scope: 'Pressure washing, crack filling, elastomeric or silicone primer, two coats of UV and salt resistant paint, scaffolding.', range: '€4,500 – €9,000+', duration: '10–15 working days' },
      ],
      factorsTitle: 'What moves your final number',
      factors: [
        { title: 'Substrate condition', body: 'Sound smooth walls, or peeling paint, cracks and damp damage.' },
        { title: 'Preparation required', body: 'Standard sanding, or full mesh reinforcement and skim coating.' },
        { title: 'Access and height', body: 'Standard 2.7 m ceilings, or double-height stairwells needing scaffold.' },
        { title: 'State of the property', body: 'Empty space, or a furnished home needing heavy protection.' },
        { title: 'Coating system', body: 'Standard acrylic, or specialist anti-mould, breathable or elastomeric systems.' },
        { title: 'Extent of the scope', body: 'Walls only, or ceilings, doors, architraves and metalwork included.' },
      ],
      standardTitle: 'The Helyot standard, next to basic repainting',
      standardLead: 'We do not put fresh paint over an old problem. The difference is almost entirely in what happens before the first coat.',
      standardHeads: ['Stage', 'Basic repainting', 'The Helyot standard'],
      standard: [
        { stage: 'Diagnostics',    basic: 'Visual check',                      helyot: 'Moisture meter reading and substrate adhesion test' },
        { stage: 'Protection',     basic: 'Thin plastic or newspaper',         helyot: 'Heavy board floor protection, taped joinery, dust doors' },
        { stage: 'Preparation',    basic: 'Spot filler over unprimed dust',    helyot: 'Cracks opened, anti-mould wash, bonding primer' },
        { stage: 'Coating system', basic: 'One universal paint everywhere',    helyot: 'System matched to each substrate' },
        { stage: 'Quality control',basic: 'A final look round',                helyot: 'Raking LED light inspection and a signed snag list' },
        { stage: 'Handover',       basic: 'A rough sweep',                     helyot: 'Full clean-down, all protective material removed' },
      ],
      climateTitle: 'Built for Cyprus conditions',
      climateLead: 'Three local failure modes account for most paint that does not last here. Each one is prevented before the topcoat, not after.',
      climate: [
        { title: 'Rising damp and efflorescence', problem: 'Paint lifts on ground floors as coastal moisture and salt move up through the wall.', solution: 'Moisture tested before application, then microporous silicate or silicone systems that let the wall breathe instead of sealing water behind an acrylic film.' },
        { title: 'Thermal movement cracks', problem: 'Summer heat moves the structure and opens hairline cracks across exterior render.', solution: 'Cracks opened out, flexible elastomeric filler, alkali-resistant mesh reinforcement before the topcoat.' },
        { title: 'UV fade', problem: 'Strong sun pulls the colour out of dark and saturated facades within two seasons.', solution: 'Inorganic-pigment paints with high UV reflectance, specified for southern European exposure.' },
      ],
      fitTitle: 'And who we are not for',
      fitYesTitle: 'A good fit if',
      fitNoTitle: 'Probably not us if',
      fitYes: [
        'You own or manage an apartment, villa or commercial property that needs painting done properly and completely.',
        'Dust protection, clean execution and hitting the agreed date matter to you.',
        'You want one contractor answerable for preparation, materials and the finished result.',
      ],
      fitNo: [
        'You need a single wall touched up or an hourly handyman repair.',
        'You want the lowest number on the market, reached by skipping priming and crack preparation.',
        'You want paint applied over an active leak before the damp itself is fixed.',
      ],
    },
    deepRu: {
      scopeTitle: 'Что именно мы красим',
      scopeLead: 'Полный объём по жилым и коммерческим объектам на Кипре. Система покрытия подбирается под каждое основание, а не одна банка на все поверхности.',
      scope: [
        { title: 'Стены и потолки внутри', body: 'Перекраска квартир и вилл целиком, выведение под гладкое, влагостойкие составы для ванных и кухонь.' , photo: PAINTING_SCOPE_PHOTOS[0] },
        { title: 'Фасады и балконы', body: 'УФ-стойкие и солестойкие системы, рассчитанные на средиземноморскую экспозицию.' , photo: PAINTING_SCOPE_PHOTOS[1] },
        { title: 'Двери, наличники, столярка', body: 'Нанесение распылителем или валиком: межкомнатные двери, наличники, плинтусы, встроенная мебель.' , photo: PAINTING_SCOPE_PHOTOS[2] },
        { title: 'Металл и уличные элементы', body: 'Антикоррозийная обработка и защитные покрытия для перил, ворот, пергол и металлоконструкций.' , photo: PAINTING_SCOPE_PHOTOS[3] },
        { title: 'Коммерция и ретейл', body: 'Износостойкие моющиеся покрытия для мест с высокой проходимостью, работы в нерабочие часы.' , photo: PAINTING_SCOPE_PHOTOS[4] },
        { title: 'Трещины и сырость', body: 'Расшивка трещин, армирование сеткой, локальная обработка от плесени — до того, как ляжет грунт.' , photo: PAINTING_SCOPE_PHOTOS[5] },
      ],
      profileTitle: 'Решения под тип объекта',
      profiles: [
        { title: 'Перекраска квартиры', target: 'Обновление или покрасочный этап полного ремонта', focus: 'Скорость, изоляция пыли, тихие часы работ, защита пола и мебели', idealFor: 'Собственники, управляющие арендой, подготовка к продаже', photo: '/images/gallery/apartment-after-1.webp', alt: 'Квартира в Лимасоле после перекраски: стены и потолок в светлой матовой отделке' },
        { title: 'Виллы и дома', target: 'Интерьер и фасад в одном проекте', focus: 'Высокие потолки, леса, оценка капиллярной сырости, погодостойкие фасадные системы', idealFor: 'Владельцы вилл, обслуживание прибрежной недвижимости', photo: '/images/projects/agios-villa.webp', alt: 'Фасад виллы в Агиос Тихонасе после покраски' },
        { title: 'Коммерция и фит-аут', target: 'Бизнес-помещения и гостеприимство', focus: 'Жёсткий срок, работы ночью и в выходные, краски без запаха с нулевым VOC', idealFor: 'Управляющие офисами, магазины, рестораны', photo: '/images/projects/city-office.webp', alt: 'Офис в центре Лимасола с покрашенными стенами' },
      ],
      benchTitle: 'Объём и бюджетные ориентиры',
      benchLead: 'Ставка начинается от €6 за квадратный метр окрашиваемой поверхности и дальше зависит от числа слоёв, необходимой подготовки основания и объёма работ. В квартире с двумя спальнями стен и потолков набирается примерно 220–260 м² — так ставка и превращается в суммы ниже. Ваша цена фиксируется письменно после согласования объёма на месте.',
      benchmarks: [
        { title: 'Квартира 2 спальни, обновление', scope: 'Стены и потолки в нормальном состоянии, стандартная подготовка, грунт и два слоя премиального акрила.', range: '€1 400 – €2 400', duration: '3–5 рабочих дней' },
        { title: 'Квартира 3 спальни, восстановление поверхностей', scope: 'Расшивка трещин, локальное грунтование, полная защита, стены, потолки, двери и плинтусы.', range: '€2 800 – €4 500', duration: '6–9 рабочих дней' },
        { title: 'Отдельный дом, фасад', scope: 'Мойка под давлением, заделка трещин, эластомерный или силиконовый грунт, два слоя УФ- и солестойкой краски, леса.', range: '€4 500 – €9 000+', duration: '10–15 рабочих дней' },
      ],
      factorsTitle: 'Что двигает итоговую сумму',
      factors: [
        { title: 'Состояние основания', body: 'Ровные крепкие стены — или отслоения, трещины и следы сырости.' },
        { title: 'Объём подготовки', body: 'Обычная шлифовка — или армирование сеткой и выведение под гладкое.' },
        { title: 'Доступ и высота', body: 'Стандартные 2,7 м — или лестничный объём в два света, где нужны леса.' },
        { title: 'Состояние помещения', body: 'Пустая квартира — или жилой дом с мебелью, требующий серьёзной защиты.' },
        { title: 'Система покрытия', body: 'Стандартный акрил — или противогрибковые, паропроницаемые, эластомерные составы.' },
        { title: 'Границы объёма', body: 'Только стены — или ещё потолки, двери, наличники и металл.' },
      ],
      standardTitle: 'Стандарт Helyot рядом с обычной перекраской',
      standardLead: 'Мы не кладём свежую краску поверх старой проблемы. Разница почти целиком в том, что происходит до первого слоя.',
      standardHeads: ['Этап', 'Обычная перекраска', 'Стандарт Helyot'],
      standard: [
        { stage: 'Диагностика',   basic: 'Осмотр глазами',                     helyot: 'Замер влажности и проверка адгезии основания' },
        { stage: 'Защита',        basic: 'Тонкая плёнка или газеты',           helyot: 'Жёсткие щиты на пол, оклейка столярки, пылевые двери' },
        { stage: 'Подготовка',    basic: 'Шпаклёвка пятнами по пыли',          helyot: 'Расшивка трещин, обработка от плесени, адгезионный грунт' },
        { stage: 'Покрытие',      basic: 'Одна универсальная краска везде',    helyot: 'Система под каждое основание' },
        { stage: 'Контроль',      basic: 'Финальный взгляд',                   helyot: 'Проверка косым светом и подписанный список замечаний' },
        { stage: 'Сдача',         basic: 'Подмели',                            helyot: 'Полная уборка, весь защитный материал вывезен' },
      ],
      climateTitle: 'Рассчитано под условия Кипра',
      climateLead: 'Три местные причины объясняют почти всю краску, которая здесь не держится. Каждая снимается до финишного слоя, а не после.',
      climate: [
        { title: 'Капиллярная сырость и высолы', problem: 'На первых этажах краска вздувается: влага и соль с побережья поднимаются по стене.', solution: 'Замер влажности до начала, затем микропористые силикатные или силиконовые системы — стена дышит, а не запирает воду под акриловой плёнкой.' },
        { title: 'Трещины от температурных подвижек', problem: 'Летняя жара двигает конструкцию, по фасадной штукатурке идут волосяные трещины.', solution: 'Расшивка трещин, эластичный эластомерный состав, щелочестойкая армирующая сетка до финишного слоя.' },
        { title: 'Выгорание от ультрафиолета', problem: 'Сильное солнце вымывает цвет из тёмных и насыщенных фасадов за два сезона.', solution: 'Краски на неорганических пигментах с высокой отражающей способностью, рассчитанные на южноевропейскую экспозицию.' },
      ],
      fitTitle: 'И кому не подходим',
      fitYesTitle: 'Скорее да, если',
      fitNoTitle: 'Скорее нет, если',
      fitYes: [
        'У вас квартира, вилла или коммерческое помещение, которое нужно покрасить полностью и качественно.',
        'Для вас важны защита от пыли, чистая работа и соблюдение согласованной даты.',
        'Вам нужен один подрядчик, отвечающий и за подготовку, и за материалы, и за результат.',
      ],
      fitNo: [
        'Нужно подкрасить одну стену или вызвать мастера на час.',
        'Нужна самая низкая цена на рынке, полученная за счёт отказа от грунта и подготовки трещин.',
        'Нужно закраситьактивную протечку, не устранив причину сырости.',
      ],
    },  },
  {
    slug: 'electrical-plumbing', category: 'trades', icon: '⚡',
    titleEn: 'Electrical & Plumbing',     titleRu: 'Электрика и сантехника',
    seoDescEn: 'Electrical and plumbing in Limassol. Full rewire, panel upgrades, plumbing rough-in. CERA certified electricians. From €5/m².',
    seoDescRu: 'Электрика и сантехника в Лимасоле. Полная замена проводки, щиток, сантехника. Сертификат CERA. От €5/м².',
    heroSubEn: 'CERA-certified electrical and licensed plumbing — done right, documented, guaranteed.',
    heroSubRu: 'Электрика с сертификатом CERA и лицензированная сантехника — качественно, задокументировано, с гарантией.',
    priceFrom: 5, priceLabelEn: 'from €5/m²', priceLabelRu: 'от €5/м²', priceUnit: 'sqm',
    timelineEn: '3–7 days (rough-in)', timelineRu: '3–7 дней (разводка)',
    includesEn: ['Full electrical rewire (CENELEC standards)','New consumer unit (MCB + RCD protection)','Socket, switch and data point installation','Lighting circuit design and fitting','CERA test and certification','Plumbing supply pipe replacement (multi-layer PERT)','Waste pipe and stack replacement','Bathroom rough-in (WC, basin, shower)','Heating circuit installation','Pressure test and certification'],
    includesRu: ['Полная замена проводки (стандарты CENELEC)','Новый щиток (автоматы + УЗО)','Монтаж розеток, выключателей и точек данных','Схема и монтаж цепей освещения','Тест и сертификация CERA','Замена труб водоснабжения (многослойный PERT)','Замена канализационных труб и стояков','Черновая разводка в ванной (унитаз, раковина, душ)','Монтаж контура отопления','Испытание давлением и сертификация'],
    faqsEn: [
      { q: 'Is CERA certification mandatory?', a: 'For any new or altered electrical installation in Cyprus, yes. We are registered, and the certificate is issued and handed to you at completion — without it the installation is not legally signed off.' },
      { q: 'Does an old apartment need a full rewire?', a: 'If it still has the original 1980s or 1990s wiring, usually yes — no earthing on circuits, undersized cable and a board with no RCD. We test first and tell you honestly if a partial job is enough.' },
      { q: 'Can you replace pipework without destroying the walls?', a: 'Partly. Some routes can be re-run through ceilings, risers or boxing. Where a chase is unavoidable we say so upfront and price the making-good in the same quote.' },
      { q: 'Do you handle water pressure and hot water problems?', a: 'Yes — pressure sets, pump replacement, solar cylinder work and rebalancing the system. Low pressure in Cyprus flats is more often a blocked or undersized line than the mains.' },
      { q: 'Do you work on emergencies?', a: 'For our own clients under warranty, within 48 hours and at no call-out charge. We are a renovation contractor rather than a 24-hour emergency service, and it is fairer to say so.' },
      { q: 'What is covered by the warranty?', a: 'Five years on our electrical and plumbing workmanship, and ten on waterproofing in wet areas. Fittings and appliances carry their manufacturers\' terms.' },
    ],
    faqsRu: [
      { q: 'Обязательна ли сертификация CERA?', a: 'Для любой новой или изменённой электроустановки на Кипре — да. Мы зарегистрированы, сертификат выпускается и передаётся вам при сдаче: без него установка юридически не принята.' },
      { q: 'Нужна ли старой квартире полная замена проводки?', a: 'Если проводка родная, 1980-х или 1990-х, — обычно да: нет заземления на линиях, недостаточное сечение кабеля и щит без УЗО. Сначала проверяем и честно говорим, если достаточно частичной замены.' },
      { q: 'Можно заменить трубы, не разрушая стены?', a: 'Частично. Часть трасс можно перепроложить по потолкам, стоякам или в коробах. Там, где штробы не избежать, говорим об этом заранее и включаем восстановление отделки в ту же смету.' },
      { q: 'Занимаетесь проблемами с давлением и горячей водой?', a: 'Да — станции повышения давления, замена насосов, работы с солнечными бойлерами и балансировка системы. Низкое давление в кипрских квартирах чаще связано с забитой или узкой линией, чем с магистралью.' },
      { q: 'Вы выезжаете на аварии?', a: 'К своим клиентам по гарантии — в течение 48 часов и без платы за вызов. Мы подрядчик по ремонту, а не круглосуточная аварийная служба, и честнее сказать это прямо.' },
      { q: 'Что покрывает гарантия?', a: '5 лет на наши работы по электрике и сантехнике и 10 лет на гидроизоляцию мокрых зон. На изделия и технику действуют условия производителей.' },
    ],
    relatedSlugs: ['apartment-renovation', 'smart-home', 'bathroom-renovation', 'pool-renovation'],
  },

  {
    slug: 'waterproofing', category: 'trades', icon: '💧',
    titleEn: 'Waterproofing & Roofing',   titleRu: 'Гидроизоляция и кровля',
    seoDescEn: 'Waterproofing in Limassol. Flat roof, terrace, basement and wet room waterproofing systems. 10-year guarantee. Free inspection.',
    seoDescRu: 'Гидроизоляция в Лимасоле. Плоская кровля, терраса, подвал, влажные помещения. Гарантия 10 лет. Бесплатный осмотр.',
    heroSubEn: 'Permanent waterproofing systems — flat roofs, terraces and wet rooms with a 10-year guarantee.',
    heroSubRu: 'Постоянные системы гидроизоляции — плоские кровли, террасы и влажные помещения с гарантией 10 лет.',
    priceFrom: 13, priceLabelEn: 'from €13/m²', priceLabelRu: 'от €13/м²', priceUnit: 'sqm',
    timelineEn: '3–7 days', timelineRu: '3–7 дней',
    includesEn: ['Substrate preparation and crack repair','Primer application','Liquid membrane (Mapei or Sika, EN 14891)','Fleece reinforcement in stress zones','Protection screed or tile bedding','Flood test before completion','10-year waterproofing guarantee certificate','Roof drainage and overflow check'],
    includesRu: ['Подготовка основания и ремонт трещин','Грунтование','Жидкая мембрана (Mapei или Sika, EN 14891)','Армирование флисом в зонах напряжений','Защитная стяжка или плиточный клей','Гидравлическое испытание','Гарантийный сертификат на 10 лет','Проверка водоотвода и аварийного слива'],
    faqsEn: [
      { q: 'My roof leaks. Can it be fixed without lifting all the tiles?', a: 'Sometimes, if the failure is local and we can find it. We trace the source first — a targeted repair on a generally failed membrane is money spent twice, and we will tell you if that is what it is.' },
      { q: 'Which system do you use?', a: 'Liquid-applied membranes to EN 14891 for wet rooms and terraces, and the appropriate roof system for the substrate and the falls. We water-test before anything is tiled over.' },
      { q: 'How long does the warranty run?', a: 'Ten years on wet-room and terrace waterproofing — double the five years on general workmanship, because this is the failure that costs the most to put right.' },
      { q: 'Can you find where the water is coming in?', a: 'Yes. We flood-test and trace section by section rather than guessing. Water travels, and the wet patch on the ceiling is rarely under the actual failure.' },
      { q: 'Can waterproofing be done on an occupied property?', a: 'Terraces and roofs, yes — access is external. A bathroom means that room is out of use for the works and the curing time, which we state in the schedule.' },
      { q: 'Is basement and retaining-wall tanking included?', a: 'Yes — below-ground tanking, drainage and the detailing where it meets the structure, which is where most of these systems actually fail.' },
    ],
    faqsRu: [
      { q: 'Кровля течёт — можно починить без снятия всей плитки?', a: 'Иногда, если повреждение локальное и его удаётся найти. Сначала ищем источник: точечный ремонт по повсеместно отработавшей мембране — это деньги на ветер, и если дело в этом, мы скажем прямо.' },
      { q: 'Какую систему вы применяете?', a: 'Наливные мембраны по EN 14891 для мокрых зон и террас и подходящую кровельную систему под конкретное основание и уклоны. Перед укладкой плитки обязательно проливаем водой.' },
      { q: 'Сколько действует гарантия?', a: '10 лет на гидроизоляцию мокрых зон и террас — вдвое дольше пятилетней гарантии на общие работы, потому что именно этот отказ дороже всего исправлять.' },
      { q: 'Вы можете найти, откуда идёт вода?', a: 'Да. Проливаем и проверяем участок за участком, а не гадаем. Вода идёт по путям, и мокрое пятно на потолке редко находится под самим повреждением.' },
      { q: 'Можно делать гидроизоляцию, когда в доме живут?', a: 'Террасы и кровлю — да, доступ снаружи. Санузел на время работ и набора прочности выпадает из пользования, и мы указываем это в графике.' },
      { q: 'Делаете гидроизоляцию подвалов и подпорных стен?', a: 'Да — подземная гидроизоляция, дренаж и узлы примыкания к конструкции, а именно на узлах такие системы чаще всего и отказывают.' },
    ],
    relatedSlugs: ['bathroom-renovation', 'terrace-outdoor', 'pool-renovation', 'facade'],
  },

  {
    slug: 'joinery', category: 'trades', icon: '🪑',
    titleEn: 'Custom Joinery & Built-ins', titleRu: 'Мебель на заказ',
    seoDescEn: 'Custom joinery in Limassol. Bespoke wardrobes, built-in furniture, kitchens, TV units. MDF and solid wood. Designed and installed.',
    seoDescRu: 'Мебель на заказ в Лимасоле. Встроенные шкафы, мебель под заказ, кухни, ТВ-тумбы. МДФ и массив. Дизайн и монтаж.',
    heroSubEn: 'Bespoke built-in furniture designed around your space — not the other way round.',
    heroSubRu: 'Встроенная мебель, разработанная под ваше пространство — а не наоборот.',
    priceFrom: 720, priceLabelEn: 'from €720', priceLabelRu: 'от €720', priceUnit: 'flat',
    timelineEn: '2–4 weeks (design + manufacture + install)', timelineRu: '2–4 недели (дизайн + производство + монтаж)',
    includesEn: ['Measured survey and CAD drawings','Material and finish selection','CNC manufacture in our workshop','Site delivery and installation','Soft-close hinge and drawer fitting','Handle, lighting and electrical integration','Snagging and final adjustment'],
    includesRu: ['Обмеры и чертежи CAD','Выбор материала и отделки','Производство на ЧПУ в нашей мастерской','Доставка и монтаж на объекте','Монтаж доводчиков петель и ящиков','Интеграция ручек, подсветки и электрики','Финишная подстройка и приёмка'],
    faqsEn: [
      { q: 'What materials do you use for fitted wardrobes?', a: 'Moisture-resistant MDF carcasses with European hardware. Solid timber fronts where the design calls for it, but not for carcasses in a coastal humidity range.' },
      { q: 'How long does bespoke joinery take?', a: 'Four to eight weeks from approved drawings to installation. It is usually the longest lead item in a renovation, which is why we draw and order it early.' },
      { q: 'Can you match existing joinery?', a: 'Usually. Bring us a door, a drawer front or a photograph with a scale reference and we will match the profile and get as close on the finish as the original material allows.' },
      { q: 'Do you make kitchens as well?', a: 'Yes, and we also install kitchens bought elsewhere at no labour surcharge. Which route is cheaper depends on the specification, and we will tell you which.' },
      { q: 'Is joinery covered by the warranty?', a: 'Five years on our manufacture and installation. Hinges, runners and lift systems carry their manufacturer\'s terms, usually longer.' },
      { q: 'Can you work from a designer\'s drawings?', a: 'Yes, routinely — and we flag any dimension or detail that will not survive contact with the actual wall before we cut anything.' },
    ],
    faqsRu: [
      { q: 'Какие материалы вы используете для встроенных шкафов?', a: 'Влагостойкий МДФ и корпуса с европейской фурнитурой. Фасады из массива — там, где этого требует проект, но не корпуса при прибрежной влажности.' },
      { q: 'Сколько делается мебель на заказ?', a: '4–8 недель от утверждённых чертежей до монтажа. Обычно это самая долгая позиция в ремонте, поэтому чертим и заказываем её в первую очередь.' },
      { q: 'Можно повторить существующую мебель?', a: 'Обычно да. Привезите дверцу, фасад ящика или фотографию с масштабной привязкой — повторим профиль и подберём отделку настолько близко, насколько позволяет исходный материал.' },
      { q: 'Кухни тоже делаете?', a: 'Да, а также монтируем кухни, купленные в другом месте, без наценки за работу. Что выйдет дешевле, зависит от спецификации, и мы скажем, что именно.' },
      { q: 'Гарантия распространяется на мебель?', a: '5 лет на наше изготовление и монтаж. На петли, направляющие и подъёмные механизмы действуют условия производителей, обычно более длительные.' },
      { q: 'Можете работать по чертежам дизайнера?', a: 'Да, регулярно — и до раскроя отмечаем любой размер или узел, который не переживёт встречи с реальной стеной.' },
    ],
    relatedSlugs: ['kitchen-renovation', 'interior-design', 'painting', 'apartment-renovation'],
  },

  {
    slug: 'facade', category: 'trades', icon: '🏗️',
    titleEn: 'Facade & Exterior Render',  titleRu: 'Фасад и наружная отделка',
    seoDescEn: 'Facade renovation in Limassol. External insulation, render, stone cladding, exterior paint. Weatherproofing for Cyprus climate.',
    seoDescRu: 'Ремонт фасада в Лимасоле. Наружное утепление, штукатурка, облицовка камнем, наружная покраска. Защита от климата Кипра.',
    heroSubEn: 'External insulation, render and cladding — protecting your property for decades.',
    heroSubRu: 'Наружное утепление, штукатурка и облицовка — защита вашей недвижимости на десятилетия.',
    priceFrom: 25, priceLabelEn: 'from €25/m²', priceLabelRu: 'от €25/м²', priceUnit: 'sqm',
    timelineEn: '1–4 weeks depending on area', timelineRu: '1–4 недели в зависимости от площади',
    includesEn: ['Facade inspection and crack repair','ETICS external insulation system (EPS or mineral wool)','Fibreglass mesh reinforcement','Silicone render or mineral scratch coat','Stone or brick cladding (alternative to render)','Exterior masonry paint (15-year UV rating)','Sealant and movement joint treatment','Scaffold erection and dismantling'],
    includesRu: ['Осмотр и ремонт трещин фасада','Система ETICS наружного утепления (EPS или минвата)','Армирование стеклосеткой','Силиконовая или минеральная штукатурка','Облицовка камнем или кирпичом (альтернатива штукатурке)','Фасадная краска (UV-рейтинг 15 лет)','Герметик и деформационные швы','Монтаж и демонтаж лесов'],
    faqsEn: [
      { q: 'Is external insulation worth it in the Cyprus climate?', a: 'Yes, and mostly for cooling rather than heating. It keeps the structure cooler in summer, cuts air-conditioning load and removes the condensation that causes internal mould.' },
      { q: 'How do you deal with salt and sun damage?', a: 'Silicone-based renders and coatings hold colour and shed salt better than acrylic near the sea. On exposed elevations we also detail the sills and copings, because that is where the damage starts.' },
      { q: 'Do facade works need a permit?', a: 'A repaint in the same colour usually does not. Changing colour, adding cladding or altering openings usually does, and in an apartment block the building\'s agreement is needed too.' },
      { q: 'Do you handle scaffolding and access?', a: 'Yes — scaffolding, rope access or a platform, whichever suits the elevation, together with the permits and the pedestrian protection at street level.' },
      { q: 'How long do facade works take?', a: 'Two to six weeks for an apartment block elevation, depending on area, access and how much repair the substrate needs before anything decorative goes on.' },
      { q: 'Is the facade covered by the warranty?', a: 'Five years on our workmanship, ten where waterproofing is part of the job. Coating manufacturers add their own terms on the material itself.' },
    ],
    faqsRu: [
      { q: 'Стоит ли наружное утепление в климате Кипра?', a: 'Да, и в основном ради охлаждения, а не отопления. Оно держит конструкцию холоднее летом, снижает нагрузку на кондиционирование и убирает конденсат, из-за которого появляется плесень внутри.' },
      { q: 'Как вы боретесь с солью и солнцем?', a: 'Силиконовые штукатурки и покрытия у моря лучше держат цвет и сопротивляются соли, чем акриловые. На открытых фасадах отдельно прорабатываем отливы и парапеты — именно оттуда начинается разрушение.' },
      { q: 'Нужно ли разрешение на фасадные работы?', a: 'На перекраску в тот же цвет обычно нет. На смену цвета, облицовку или изменение проёмов — как правило да, а в многоквартирном доме нужно ещё и согласие дома.' },
      { q: 'Вы занимаетесь лесами и доступом?', a: 'Да — леса, промышленный альпинизм или подъёмник, что подходит под конкретный фасад, вместе с разрешениями и защитой пешеходной зоны внизу.' },
      { q: 'Сколько занимают фасадные работы?', a: '2–6 недель на фасад многоквартирного дома в зависимости от площади, доступа и объёма ремонта основания перед декоративными слоями.' },
      { q: 'Фасад попадает под гарантию?', a: '5 лет на наши работы и 10 лет там, где в объём входит гидроизоляция. Производители покрытий дают собственные условия на сам материал.' },
    ],
    relatedSlugs: ['waterproofing', 'painting', 'energy-modernization', 'villa-renovation'],
  },

  {
    slug: 'windows-doors', category: 'trades', icon: '🪟',
    titleEn: 'Windows & Doors',           titleRu: 'Окна и двери',
    seoDescEn: 'Window and door replacement in Limassol. PVC, aluminium, timber. Double and triple glazing. Supply and installation. From €210/unit.',
    seoDescRu: 'Замена окон и дверей в Лимасоле. ПВХ, алюминий, дерево. Двойное и тройное стекло. Поставка и установка. От €210/ед.',
    heroSubEn: 'Energy-rated windows and doors — supply, removal and installation with full sealing.',
    heroSubRu: 'Энергосберегающие окна и двери — поставка, демонтаж, установка с полной герметизацией.',
    priceFrom: 210, priceLabelEn: 'from €210/unit', priceLabelRu: 'от €210/ед.', priceUnit: 'unit',
    timelineEn: '1–3 days installation after manufacture', timelineRu: '1–3 дня монтажа после производства',
    includesEn: ['Site survey and measurement','Existing frame removal and disposal','New frame installation and levelling','Insulation foam and external sealant','Interior plastering around new frame','Double or triple glazing units','Hardware and locking mechanism','Threshold and sill installation'],
    includesRu: ['Обмеры на объекте','Демонтаж и вывоз старых рам','Установка и выравнивание новой рамы','Монтажная пена и внешний герметик','Внутренняя штукатурка вокруг рамы','Двойные или тройные стеклопакеты','Фурнитура и замки','Пороги и подоконники'],
    faqsEn: [
      { q: 'Which window material is best for Cyprus?', a: 'Thermally-broken aluminium for most of the island — it takes the sun, does not warp and carries large panes. uPVC is cheaper and fine inland; timber needs maintenance near the sea.' },
      { q: 'Does double glazing actually help here?', a: 'Yes, mainly against heat coming in. With a solar-control coating it cuts cooling load noticeably, and it also cuts street noise, which is why most seafront clients ask for it.' },
      { q: 'Can windows be replaced without damaging the finishes?', a: 'Mostly. Replacing into the existing frame keeps disruption low; a full replacement means making good the reveals, and we price that in rather than leaving it to you.' },
      { q: 'Do you fit security doors and shutters?', a: 'Yes — certified security entrance doors, roller shutters and motorised systems, including the electrical supply and the integration if you have a smart-home system.' },
      { q: 'How long does a window replacement take?', a: 'Measurement to installation is typically four to six weeks, most of it manufacturing. The installation itself is usually one to three days for an apartment.' },
      { q: 'Is there a warranty on windows?', a: 'Five years on our installation, and the manufacturer\'s own warranty on the units and hardware, registered in your name and handed over with the rest of the documents.' },
    ],
    faqsRu: [
      { q: 'Какой материал окон лучше для Кипра?', a: 'Алюминий с терморазрывом подходит для большей части острова: держит солнце, не ведёт и несёт большие полотна. ПВХ дешевле и нормально работает вдали от моря; дерево у моря требует обслуживания.' },
      { q: 'Реально ли помогает стеклопакет?', a: 'Да, в первую очередь против поступающего тепла. С солнцезащитным покрытием он заметно снижает нагрузку на кондиционирование, а заодно режет уличный шум — поэтому его чаще всего просят на первой линии.' },
      { q: 'Можно заменить окна, не повредив отделку?', a: 'В основном да. Замена в существующую раму даёт минимум разрушений; при полной замене нужно восстанавливать откосы, и мы закладываем это в смету, а не оставляем вам.' },
      { q: 'Ставите бронедвери и роллеты?', a: 'Да — сертифицированные входные двери, роллеты и моторизованные системы, вместе с подводкой электричества и интеграцией, если у вас есть умный дом.' },
      { q: 'Сколько занимает замена окон?', a: 'От замера до монтажа обычно 4–6 недель, из которых большая часть — производство. Сам монтаж в квартире занимает, как правило, 1–3 дня.' },
      { q: 'Есть ли гарантия на окна?', a: '5 лет на наш монтаж плюс гарантия производителя на профиль, стеклопакеты и фурнитуру, оформленная на ваше имя и переданная вместе с остальными документами.' },
    ],
    relatedSlugs: ['facade', 'energy-modernization', 'apartment-renovation', 'waterproofing'],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map((s) => getServiceBySlug(s)).filter(Boolean) as ServiceData[];
}

export const categoryColors: Record<ServiceCategory, string> = {
  spaces:     'border-terra-400',
  commercial: 'border-navy-400',
  specialist: 'border-amber-400',
  trades:     'border-stone-400',
};

export const categoryBg: Record<ServiceCategory, string> = {
  spaces:     'bg-terra-50 text-terra-700 border-terra-200',
  commercial: 'bg-navy-50 text-navy-700 border-navy-200',
  specialist: 'bg-amber-50 text-amber-700 border-amber-200',
  trades:     'bg-stone-100 text-stone-600 border-stone-200',
};
