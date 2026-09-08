/**
 * Detailed price breakdowns + worked examples for service × location pages.
 * All figures are "from" baselines for the Republic of Cyprus market —
 * labour + standard materials unless a row says otherwise.
 * Location pages multiply example totals by the location priceFactor.
 *
 * NOTE FOR EDITORS: these are honest market baselines, not quotes.
 * Update the numbers here and every page regenerates on build.
 */

export interface PriceRow {
  en: string;      ru: string;       /* row label                      */
  priceEn: string; priceRu: string;  /* display price incl. unit       */
}

export interface WorkedExample {
  en: string;  ru: string;  /* object label, e.g. "2-bedroom apartment" */
  sqm: number;              /* size used for the calculation            */
}

/** Per-work-type breakdown tables, keyed by service slug */
export const priceRowsBySlug: Record<string, PriceRow[]> = {

  'apartment-renovation': [
    { en: 'Demolition & waste removal',            ru: 'Демонтаж и вывоз мусора',                     priceEn: 'from €12/m²',      priceRu: 'от €12/м²' },
    { en: 'Electrical point (rewire)',             ru: 'Электроточка (новая проводка)',               priceEn: 'from €35/point',   priceRu: 'от €35/точка' },
    { en: 'Plumbing wet point',                    ru: 'Сантехническая точка',                        priceEn: 'from €150/point',  priceRu: 'от €150/точка' },
    { en: 'Plastering & levelling',                ru: 'Штукатурка и выравнивание',                   priceEn: 'from €11/m²',      priceRu: 'от €11/м²' },
    { en: 'Tiling (walls & floors)',               ru: 'Укладка плитки (стены и полы)',               priceEn: 'from €20/m²',      priceRu: 'от €20/м²' },
    { en: 'Painting, 2 coats + prep',              ru: 'Покраска, 2 слоя + подготовка',               priceEn: 'from €8/m²',      priceRu: 'от €8/м²' },
    { en: 'Interior door installation',            ru: 'Установка межкомнатной двери',                priceEn: 'from €70/door',   priceRu: 'от €70/дверь' },
  ],

  'villa-renovation': [
    { en: 'Structural survey & permits',           ru: 'Обследование конструкций и разрешения',       priceEn: 'from €540',        priceRu: 'от €540' },
    { en: 'Full MEP replacement',                  ru: 'Полная замена инженерных систем',             priceEn: 'from €40/m²',      priceRu: 'от €40/м²' },
    { en: 'External render & waterproofing',       ru: 'Наружная штукатурка и гидроизоляция',         priceEn: 'from €30/m²',      priceRu: 'от €30/м²' },
    { en: 'Interior finishing package',            ru: 'Внутренняя отделка под ключ',                 priceEn: 'from €110/m²',     priceRu: 'от €110/м²' },
    { en: 'Custom joinery & wardrobes',            ru: 'Мебель на заказ и шкафы',                     priceEn: 'from €290/m² front', priceRu: 'от €290/м² фасада' },
    { en: 'Terrace & outdoor works',               ru: 'Терраса и наружные работы',                   priceEn: 'from €50/m²',      priceRu: 'от €50/м²' },
  ],

  'kitchen-renovation': [
    { en: 'Strip-out of old kitchen',              ru: 'Демонтаж старой кухни',                       priceEn: 'from €270',        priceRu: 'от €270' },
    { en: 'Electrical relocation',                 ru: 'Перенос электрики',                           priceEn: 'from €40/point',   priceRu: 'от €40/точка' },
    { en: 'Plumbing relocation',                   ru: 'Перенос сантехники',                          priceEn: 'from €150/point',  priceRu: 'от €150/точка' },
    { en: 'Wall tiling / splashback',              ru: 'Плитка / фартук',                             priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Kitchen assembly & fitting',            ru: 'Сборка и установка кухни',                    priceEn: 'from €360',        priceRu: 'от €360' },
    { en: 'Worktop templating & fitting',          ru: 'Шаблон и монтаж столешницы',                  priceEn: 'from €170',        priceRu: 'от €170' },
  ],

  'bathroom-renovation': [
    { en: 'Full strip-out & waste removal',        ru: 'Полный демонтаж и вывоз',                     priceEn: 'from €230',        priceRu: 'от €230' },
    { en: 'Tanking / waterproofing system',        ru: 'Гидроизоляция (система)',                     priceEn: 'from €17/m²',      priceRu: 'от €17/м²' },
    { en: 'Tiling (walls & floor)',                ru: 'Плитка (стены и пол)',                        priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Sanitaryware installation',             ru: 'Установка сантехники',                        priceEn: 'from €50/item',    priceRu: 'от €50/прибор' },
    { en: 'Shower screen / enclosure fitting',     ru: 'Монтаж душевой перегородки',                  priceEn: 'from €70',        priceRu: 'от €70' },
    { en: 'Underfloor heating (electric)',         ru: 'Тёплый пол (электрический)',                  priceEn: 'from €40/m²',      priceRu: 'от €40/м²' },
  ],

  'terrace-outdoor': [
    { en: 'Composite / hardwood decking',          ru: 'Террасная доска (композит / дерево)',         priceEn: 'from €50/m²',      priceRu: 'от €50/м²' },
    { en: 'Pergola (aluminium / timber)',          ru: 'Пергола (алюминий / дерево)',                 priceEn: 'from €230/m²',     priceRu: 'от €230/м²' },
    { en: 'Outdoor kitchen / BBQ zone',            ru: 'Летняя кухня / зона барбекю',                 priceEn: 'from €1,500',      priceRu: 'от €1 500' },
    { en: 'Garden irrigation system',              ru: 'Система полива',                              priceEn: 'from €5/m²',       priceRu: 'от €5/м²' },
    { en: 'Outdoor lighting',                      ru: 'Уличное освещение',                           priceEn: 'from €25/point',   priceRu: 'от €25/точка' },
  ],

  'pool-renovation': [
    { en: 'Shell repair & re-rendering',           ru: 'Ремонт чаши и оштукатуривание',               priceEn: 'from €70/m²',     priceRu: 'от €70/м²' },
    { en: 'Mosaic / tile finish',                  ru: 'Мозаика / плитка',                            priceEn: 'from €50/m²',      priceRu: 'от €50/м²' },
    { en: 'Pump & filtration replacement',         ru: 'Замена насоса и фильтрации',                  priceEn: 'from €1,000',      priceRu: 'от €1 000' },
    { en: 'Pool deck renovation',                  ru: 'Реновация зоны вокруг бассейна',              priceEn: 'from €55/m²',      priceRu: 'от €55/м²' },
    { en: 'LED lighting & automation',             ru: 'LED-подсветка и автоматика',                  priceEn: 'from €390',        priceRu: 'от €390' },
  ],

  'office-fit-out': [
    { en: 'Partitions (glass / drywall)',          ru: 'Перегородки (стекло / ГКЛ)',                  priceEn: 'from €40/m²',      priceRu: 'от €40/м²' },
    { en: 'Suspended ceiling & acoustics',         ru: 'Подвесной потолок и акустика',                priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Raised floor / floor finish',           ru: 'Фальшпол / напольное покрытие',               priceEn: 'from €17/m²',      priceRu: 'от €17/м²' },
    { en: 'Power & data cabling',                  ru: 'Электрика и СКС',                             priceEn: 'from €30/m²',      priceRu: 'от €30/м²' },
    { en: 'VRV/VRF air conditioning',              ru: 'Кондиционирование VRV/VRF',                   priceEn: 'from €50/m²',      priceRu: 'от €50/м²' },
  ],

  'hotel-renovation': [
    { en: 'Guest room refurbishment',              ru: 'Реновация номера',                            priceEn: 'from €2,500/room', priceRu: 'от €2 500/номер' },
    { en: 'Guest bathroom rebuild',                ru: 'Перестройка ванной номера',                   priceEn: 'from €2,500/room', priceRu: 'от €2 500/номер' },
    { en: 'Corridors & common areas',              ru: 'Коридоры и общие зоны',                       priceEn: 'from €70/m²',     priceRu: 'от €70/м²' },
    { en: 'Reception & lobby',                     ru: 'Ресепшн и лобби',                             priceEn: 'from €170/m²',     priceRu: 'от €170/м²' },
    { en: 'Facade refresh',                        ru: 'Обновление фасада',                           priceEn: 'from €30/m²',      priceRu: 'от €30/м²' },
  ],

  'retail-restaurant': [
    { en: 'Shell & core to opening',               ru: 'От бетона до открытия',                       priceEn: 'from €230/m²',     priceRu: 'от €230/м²' },
    { en: 'Commercial kitchen zone',               ru: 'Профессиональная кухонная зона',              priceEn: 'from €310/m²',     priceRu: 'от €310/м²' },
    { en: 'Bar counter (custom)',                  ru: 'Барная стойка (на заказ)',                    priceEn: 'from €1,500',      priceRu: 'от €1 500' },
    { en: 'Dining area finish',                    ru: 'Отделка зала',                                priceEn: 'from €140/m²',     priceRu: 'от €140/м²' },
    { en: 'Extraction & ventilation',              ru: 'Вытяжка и вентиляция',                        priceEn: 'from €55/m²',      priceRu: 'от €55/м²' },
  ],

  'interior-design': [
    { en: 'Design concept & moodboards',           ru: 'Концепция и мудборды',                        priceEn: 'from €11/m²',      priceRu: 'от €11/м²' },
    { en: 'Full design package (drawings)',        ru: 'Полный дизайн-проект (чертежи)',              priceEn: 'from €20/m²',      priceRu: 'от €20/м²' },
    { en: '3D visualisation',                      ru: '3D-визуализация',                             priceEn: 'from €170/room',   priceRu: 'от €170/комната' },
    { en: 'FF&E selection & procurement',          ru: 'Подбор и закупка мебели и материалов',        priceEn: 'from €7/m²',      priceRu: 'от €7/м²' },
    { en: 'Author supervision',                    ru: 'Авторский надзор',                            priceEn: 'from €270/month',  priceRu: 'от €270/месяц' },
  ],

  'energy-modernization': [
    { en: 'External wall insulation (ETICS)',      ru: 'Утепление фасада (мокрый фасад)',             priceEn: 'from €35/m²',      priceRu: 'от €35/м²' },
    { en: 'Roof / attic insulation',               ru: 'Утепление крыши / чердака',                   priceEn: 'from €20/m²',      priceRu: 'от €20/м²' },
    { en: 'Thermal-break windows',                 ru: 'Окна с терморазрывом',                        priceEn: 'from €250/m²',     priceRu: 'от €250/м²' },
    { en: 'Air-source heat pump',                  ru: 'Тепловой насос воздух-вода',                  priceEn: 'from €1,500',      priceRu: 'от €1 500' },
    { en: 'Photovoltaic system (per kW)',          ru: 'Солнечная станция (за кВт)',                  priceEn: 'from €570/kW',     priceRu: 'от €570/кВт' },
  ],

  'smart-home': [
    { en: 'Smart wiring preparation',              ru: 'Подготовка слаботочной проводки',             priceEn: 'from €7/m²',      priceRu: 'от €7/м²' },
    { en: 'Lighting control (per zone)',           ru: 'Управление светом (за зону)',                 priceEn: 'from €85/zone',   priceRu: 'от €85/зона' },
    { en: 'Climate integration (per zone)',        ru: 'Интеграция климата (за зону)',                priceEn: 'from €130/zone',   priceRu: 'от €130/зона' },
    { en: 'Security & video integration',          ru: 'Охрана и видеонаблюдение',                    priceEn: 'from €720',      priceRu: 'от €720' },
    { en: 'Full system (design + install)',        ru: 'Система под ключ (проект + монтаж)',          priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
  ],

  'structural-extensions': [
    { en: 'Engineer\'s structural report',         ru: 'Заключение инженера-конструктора',            priceEn: 'from €270',        priceRu: 'от €270' },
    { en: 'Opening in load-bearing wall',          ru: 'Проём в несущей стене',                       priceEn: 'from €540',        priceRu: 'от €540' },
    { en: 'Extension shell (per m²)',              ru: 'Коробка пристройки (за м²)',                  priceEn: 'from €660/m²',   priceRu: 'от €660/м²' },
    { en: 'Covered veranda / room conversion',     ru: 'Крытая веранда / переоборудование',           priceEn: 'from €230/m²',     priceRu: 'от €230/м²' },
    { en: 'Permit drawings & application',         ru: 'Чертежи и подача на разрешение',              priceEn: 'from €720',      priceRu: 'от €720' },
  ],

  'flooring': [
    { en: 'Screed & self-levelling',               ru: 'Стяжка и наливной пол',                       priceEn: 'from €8/m²',      priceRu: 'от €8/м²' },
    { en: 'SPC / laminate installation',           ru: 'Укладка SPC / ламината',                      priceEn: 'from €7/m²',      priceRu: 'от €7/м²' },
    { en: 'Engineered parquet',                    ru: 'Инженерный паркет',                           priceEn: 'from €17/m²',      priceRu: 'от €17/м²' },
    { en: 'Large-format tile',                     ru: 'Крупноформатная плитка',                      priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Skirting installation',                 ru: 'Монтаж плинтуса',                             priceEn: 'from €5/m',        priceRu: 'от €5/м' },
  ],

  'plastering': [
    { en: 'Substrate preparation and crack repair', ru: 'Подготовка основания и ремонт трещин',       priceEn: 'from €5/m²',       priceRu: 'от €5/м²' },
    { en: 'Machine plaster, walls',                 ru: 'Машинная штукатурка, стены',                 priceEn: 'from €7/m²',      priceRu: 'от €7/м²' },
    { en: 'Skim finish, ready for paint',           ru: 'Финишная шпаклёвка под покраску',            priceEn: 'from €5/m²',       priceRu: 'от €5/м²' },
    { en: 'Microcement',                            ru: 'Микроцемент',                                priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Venetian plaster',                       ru: 'Венецианская штукатурка',                    priceEn: 'from €35/m²',      priceRu: 'от €35/м²' },
  ],

  'painting': [
    { en: 'Masking and floor protection',           ru: 'Оклейка и защита пола',                      priceEn: 'from €2/m²',       priceRu: 'от €2/м²' },
    { en: 'Primer coat',                            ru: 'Грунтовочный слой',                          priceEn: 'from €2/m²',       priceRu: 'от €2/м²' },
    { en: 'Interior painting, 2 coats',             ru: 'Внутренняя покраска, 2 слоя',                priceEn: 'from €5/m²',       priceRu: 'от €5/м²' },
    { en: 'Exterior painting (coastal spec)',       ru: 'Наружная покраска (прибрежный стандарт)',    priceEn: 'from €8/m²',      priceRu: 'от €8/м²' },
    { en: 'Spray finishing, joinery and doors',     ru: 'Покраска столярки и дверей в распылителе',   priceEn: 'from €13/m²',      priceRu: 'от €13/м²' },
  ],

  'electrical-plumbing': [
    { en: 'New electrical point',                  ru: 'Новая электроточка',                          priceEn: 'from €35/point',   priceRu: 'от €35/точка' },
    { en: 'Consumer unit replacement',             ru: 'Замена электрощита',                          priceEn: 'from €230',        priceRu: 'от €230' },
    { en: 'Full apartment rewire',                 ru: 'Полная замена проводки в квартире',           priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'New plumbing point',                    ru: 'Новая сантехническая точка',                  priceEn: 'from €150/point',  priceRu: 'от €150/точка' },
    { en: 'Water heater / boiler install',         ru: 'Установка водонагревателя',                   priceEn: 'from €110',        priceRu: 'от €110' },
  ],

  'waterproofing': [
    { en: 'Flat roof membrane system',             ru: 'Мембранная система плоской крыши',            priceEn: 'from €13/m²',      priceRu: 'от €13/м²' },
    { en: 'Wet-room tanking (EN 14891)',           ru: 'Гидроизоляция мокрых зон (EN 14891)',         priceEn: 'from €17/m²',      priceRu: 'от €17/м²' },
    { en: 'Balcony & terrace system',              ru: 'Система для балконов и террас',               priceEn: 'from €20/m²',      priceRu: 'от €20/м²' },
    { en: 'Crack injection (resin)',               ru: 'Инъектирование трещин (смола)',               priceEn: 'from €55/m',       priceRu: 'от €55/м' },
    { en: 'Basement / retaining wall',             ru: 'Подвал / подпорная стена',                    priceEn: 'from €30/m²',      priceRu: 'от €30/м²' },
  ],

  'joinery': [
    { en: 'Fitted wardrobes (per m² front)',       ru: 'Встроенные шкафы (за м² фасада)',             priceEn: 'from €290/m²',     priceRu: 'от €290/м²' },
    { en: 'Kitchen units (per linear m)',          ru: 'Кухонные модули (за пог. м)',                 priceEn: 'from €250/m',      priceRu: 'от €250/пог. м' },
    { en: 'TV / media wall units',                 ru: 'ТВ-зона / медиастенка',                       priceEn: 'from €230/m',      priceRu: 'от €230/пог. м' },
    { en: 'Solid interior doors (custom)',         ru: 'Массивные межкомнатные двери (на заказ)',     priceEn: 'from €290/door',   priceRu: 'от €290/дверь' },
    { en: 'Bespoke shelving & niches',             ru: 'Полки и ниши на заказ',                       priceEn: 'from €130/m²',     priceRu: 'от €130/м²' },
  ],

  'facade': [
    { en: 'Render repair (patch)',                 ru: 'Локальный ремонт штукатурки',                 priceEn: 'from €18/m²',      priceRu: 'от €18/м²' },
    { en: 'Full render + paint system',            ru: 'Штукатурка + покраска под ключ',              priceEn: 'from €30/m²',      priceRu: 'от €30/м²' },
    { en: 'Stone repointing',                      ru: 'Перешивка швов камня',                        priceEn: 'from €25/m²',      priceRu: 'от €25/м²' },
    { en: 'Hydrophobic protective coating',        ru: 'Гидрофобное защитное покрытие',               priceEn: 'from €7/m²',      priceRu: 'от €7/м²' },
    { en: 'Scaffolding (per m² facade)',           ru: 'Леса (за м² фасада)',                         priceEn: 'from €5/m²',       priceRu: 'от €5/м²' },
  ],

  'windows-doors': [
    { en: 'uPVC window supply + install',          ru: 'Окно ПВХ с установкой',                       priceEn: 'from €230/unit',   priceRu: 'от €230/шт.' },
    { en: 'Aluminium thermal-break window',        ru: 'Алюминиевое окно с терморазрывом',            priceEn: 'from €250/m²',     priceRu: 'от €250/м²' },
    { en: 'Sliding / lift-slide system',           ru: 'Раздвижная / подъёмно-сдвижная система',      priceEn: 'from €390/m²',     priceRu: 'от €390/м²' },
    { en: 'Entrance door (security)',              ru: 'Входная дверь (взломостойкая)',               priceEn: 'from €840',      priceRu: 'от €840' },
    { en: 'Fly screens & shutters',                ru: 'Москитные сетки и роллеты',                   priceEn: 'from €40/unit',    priceRu: 'от €40/шт.' },
  ],
};

/** Worked examples — only for services where price × m² is meaningful */
export const examplesBySlug: Record<string, WorkedExample[]> = {
  'apartment-renovation': [
    { en: 'Studio, 45 m²',            ru: 'Студия, 45 м²',              sqm: 45 },
    { en: '2-bedroom apartment, 85 m²', ru: 'Квартира с 2 спальнями, 85 м²', sqm: 85 },
    { en: 'Penthouse, 160 m²',        ru: 'Пентхаус, 160 м²',           sqm: 160 },
  ],
  'villa-renovation': [
    { en: 'Townhouse, 160 m²',        ru: 'Таунхаус, 160 м²',           sqm: 160 },
    { en: 'Family villa, 250 m²',     ru: 'Семейная вилла, 250 м²',     sqm: 250 },
    { en: 'Estate villa, 400 m²',     ru: 'Вилла-резиденция, 400 м²',   sqm: 400 },
  ],
  'office-fit-out': [
    { en: 'Small office, 80 m²',      ru: 'Небольшой офис, 80 м²',      sqm: 80 },
    { en: 'Open-plan floor, 250 m²',  ru: 'Этаж open-space, 250 м²',    sqm: 250 },
    { en: 'Full HQ, 600 m²',          ru: 'Штаб-квартира, 600 м²',      sqm: 600 },
  ],
  'retail-restaurant': [
    { en: 'Café, 60 m²',              ru: 'Кафе, 60 м²',                sqm: 60 },
    { en: 'Restaurant, 150 m²',       ru: 'Ресторан, 150 м²',           sqm: 150 },
    { en: 'Flagship store, 300 m²',   ru: 'Флагманский магазин, 300 м²', sqm: 300 },
  ],
  'interior-design': [
    { en: 'Apartment, 85 m²',         ru: 'Квартира, 85 м²',            sqm: 85 },
    { en: 'Villa, 250 m²',            ru: 'Вилла, 250 м²',              sqm: 250 },
    { en: 'Penthouse, 160 m²',        ru: 'Пентхаус, 160 м²',           sqm: 160 },
  ],
  'flooring': [
    { en: 'Bedroom, 16 m²',           ru: 'Спальня, 16 м²',             sqm: 16 },
    { en: 'Apartment, 85 m²',         ru: 'Квартира, 85 м²',            sqm: 85 },
    { en: 'Villa, 250 m²',            ru: 'Вилла, 250 м²',              sqm: 250 },
  ],
  'plastering': [
    { en: 'Room, 25 m²',              ru: 'Комната, 25 м²',             sqm: 25 },
    { en: 'Apartment, 85 m²',         ru: 'Квартира, 85 м²',            sqm: 85 },
    { en: 'Villa, 250 m²',            ru: 'Вилла, 250 м²',              sqm: 250 },
  ],
  'facade': [
    { en: 'Townhouse facade, 120 m²', ru: 'Фасад таунхауса, 120 м²',    sqm: 120 },
    { en: 'Villa facade, 280 m²',     ru: 'Фасад виллы, 280 м²',        sqm: 280 },
    { en: 'Apartment building, 600 m²', ru: 'Многоквартирный дом, 600 м²', sqm: 600 },
  ],
  'waterproofing': [
    { en: 'Balcony, 12 m²',           ru: 'Балкон, 12 м²',              sqm: 12 },
    { en: 'Flat roof, 90 m²',         ru: 'Плоская крыша, 90 м²',       sqm: 90 },
    { en: 'Villa roof + terraces, 220 m²', ru: 'Крыша виллы + террасы, 220 м²', sqm: 220 },
  ],
  'hotel-renovation': [
    { en: 'Boutique floor, 350 m²',   ru: 'Этаж бутик-отеля, 350 м²',   sqm: 350 },
    { en: 'Guest wing, 800 m²',       ru: 'Гостевое крыло, 800 м²',     sqm: 800 },
    { en: 'Full property, 2,000 m²',  ru: 'Отель целиком, 2 000 м²',    sqm: 2000 },
  ],
};
