/**
 * LOCAL ANGLES — what actually differs about a kind of work in a given area.
 *
 * A service × location page used to be the service page plus a two-sentence
 * area intro: 26–33% unique text against its siblings, which is the thin-content
 * pattern search engines discount. This file carries the part that genuinely
 * changes with geography — building stock and its age, access and logistics,
 * climate exposure, and the scope lines those force onto a quote.
 *
 * Everything here is grounded in verifiable local characteristics (era of the
 * housing stock, distance to the sea, terrain, street width, management-company
 * regimes) and in the issues already recorded per location in citiesData. No
 * invented projects, no invented statistics.
 */
import type { ServiceCategory } from './servicesData';

export interface LocalAngle {
  /** One paragraph: why this kind of work is different in this area. */
  en: string;
  ru: string;
  /** Extra scope lines a quote here usually carries, on top of the service's. */
  addsEn: string[];
  addsRu: string[];
  /**
   * Cost drivers specific to this area, with the money attached.
   *
   * The service × location pages ran at 70% textual overlap against their own
   * siblings — the service copy is identical everywhere and only the area
   * paragraph moved. This is the part that cannot repeat: each row names a
   * condition that exists here and not there, and what it adds to a quote.
   * Grounded in the issues already recorded per location in citiesData.
   */
  factorsEn?: { what: string; why: string; cost: string }[];
  factorsRu?: { what: string; why: string; cost: string }[];
}

type ByCategory = Record<ServiceCategory, LocalAngle>;

export const localAngles: Record<string, ByCategory> = {

  /* ─── LIMASSOL — the city itself ─────────────────────────────────────── */
  limassol: {
    spaces: {
      en: 'Limassol residential work splits into two completely different jobs. The 1980s blocks inland were built before thermal insulation and modern wiring were normal, so a renovation there usually means going back to the concrete. The seafront towers built after 2015 are structurally sound but were finished to a developer specification, so the work is replacement rather than reconstruction. We price the two very differently, and the site visit is where we establish which one you have.',
      ru: 'Жилые проекты в Лимасоле делятся на две совершенно разные задачи. Дома 1980-х в глубине города строились до того, как утепление и современная электрика стали нормой, — там ремонт обычно означает возврат к бетону. Прибрежные башни после 2015 года конструктивно в порядке, но отделаны по застройщицкому стандарту, поэтому работа сводится к замене, а не к перестройке. Цены на эти два случая различаются сильно, и определяем мы это на выезде.',
      addsEn: ['Assessment of the original wiring and whether it needs full replacement', 'Parking permit for the skip where the street has no loading bay'],
      addsRu: ['Оценка исходной проводки и необходимости полной замены', 'Разрешение на стоянку контейнера, если у дома нет зоны разгрузки'],
      factorsEn: [
        { what: 'Full rewire', why: 'алюминий до 2000 года не держит современную нагрузку', cost: '€2 800–4 500' },
        { what: 'Skip permit', why: 'у большинства домов нет зоны разгрузки', cost: '€120–300' },
        { what: 'Riser survey', why: 'занижённый диаметр в домах 1980-х', cost: '€800–1 500' },
      ],
      factorsRu: [
        { what: 'Полная замена проводки', why: 'алюминий до 2000 года не держит современную нагрузку', cost: '€2 800–4 500' },
        { what: 'Разрешение на контейнер', why: 'у большинства домов нет зоны разгрузки', cost: '€120–300' },
        { what: 'Ревизия стояков', why: 'занижённый диаметр в домах 1980-х', cost: '€800–1 500' },
      ],
    },
    commercial: {
      en: 'Commercial work in the city centre and business district runs on access windows rather than square metres. Deliveries and waste removal have to fit around trading hours and the loading restrictions on the surrounding streets, which is why our commercial programmes here put the noisy and dusty phases into evenings and weekends by default rather than as an extra.',
      ru: 'Коммерческие работы в центре и деловом районе определяются не площадью, а окнами доступа. Поставки и вывоз мусора приходится подгонять под часы работы и ограничения на погрузку на соседних улицах — поэтому в наших коммерческих графиках здесь шумные и пыльные этапы по умолчанию стоят на вечер и выходные, а не как доплата.',
      addsEn: ['Delivery and waste windows agreed with the building manager', 'Out-of-hours working priced into the base programme'],
      addsRu: ['Окна поставок и вывоза, согласованные с управляющей', 'Работы вне часов, заложенные в базовый график'],
      factorsEn: [
        { what: 'Evening working windows', why: 'поставки и вывоз подстраиваются под часы торговли', cost: '+10–18% к работам' },
        { what: 'Escape-route protection', why: 'требование при работах в действующем здании', cost: '€400–900' },
              { what: 'Dust barriers in a trading space', why: 'работы идут при работающем бизнесе', cost: '€300–700' },
        { what: 'Night waste removal', why: 'дневная погрузка в центре ограничена', cost: '+€15–25/м³' },
      ],
      factorsRu: [
        { what: 'Работы в вечерние окна', why: 'поставки и вывоз подстраиваются под часы торговли', cost: '+10–18% к работам' },
        { what: 'Защита путей эвакуации', why: 'требование при работах в действующем здании', cost: '€400–900' },
              { what: 'Пылевые барьеры в действующем помещении', why: 'работы идут при работающем бизнесе', cost: '€300–700' },
        { what: 'Ночной вывоз мусора', why: 'дневная погрузка в центре ограничена', cost: '+€15–25/м³' },
      ],
    },
    specialist: {
      en: 'Being based in the city means specialist work here has the shortest lead times we can offer anywhere on the island. Our designers, our warehouse and our supplier network are all inside Limassol, so material samples reach you in days rather than by courier, and a change of specification mid-design does not add a week to the programme.',
      ru: 'База в городе означает, что специальные работы здесь идут с самыми короткими сроками, какие мы можем предложить на острове. Дизайнеры, склад и сеть поставщиков — всё внутри Лимасола, поэтому образцы материалов приезжают к вам за дни, а не курьером, и смена спецификации на этапе проекта не добавляет к сроку неделю.',
      addsEn: ['Material samples delivered to your property, not posted', 'Designer site visits during the build, not only before it'],
      addsRu: ['Образцы материалов привозим на объект, а не отправляем почтой', 'Выезды дизайнера во время работ, а не только до них'],
      factorsEn: [
        { what: 'Survey before design', why: 'две разные эпохи застройки требуют разной методики', cost: '€300–600' },
        { what: 'Routing approval', why: 'скрытая разводка в монолите ограничена', cost: '€200–500' },
              { what: 'Routing through structure', why: 'скрытый монтаж ограничен несущими', cost: '€10–18/м²' },
        { what: 'Survey before ordering', why: 'две эпохи застройки, разные габариты', cost: '€200–400' },
      ],
      factorsRu: [
        { what: 'Обследование до проекта', why: 'две разные эпохи застройки требуют разной методики', cost: '€300–600' },
        { what: 'Согласование трасс', why: 'скрытая разводка в монолите ограничена', cost: '€200–500' },
              { what: 'Разводка по монолиту', why: 'скрытый монтаж ограничен несущими', cost: '€10–18/м²' },
        { what: 'Замер до заказа оборудования', why: 'две эпохи застройки, разные габариты', cost: '€200–400' },
      ],
    },
    trades: {
      en: 'Single-trade jobs get scheduled fastest in the city because the crews and the material store are here. A flooring or painting job in Limassol can usually start within days of the quote being signed, where the same job further out waits for a crew rotation.',
      ru: 'Отдельные виды работ в городе ставятся в график быстрее всего — бригады и склад материалов здесь. Полы или покраска в Лимасоле обычно стартуют через несколько дней после подписания сметы, тогда как та же работа дальше ждёт ротации бригады.',
      addsEn: ['Same-week start available on smaller scopes', 'Materials drawn from our own store rather than ordered in'],
      addsRu: ['Возможен старт в течение той же недели на небольших объёмах', 'Материалы берём со своего склада, а не заказываем'],
      factorsEn: [
        { what: 'Chasing concrete', why: 'монолит 1980-х, каналы под новые трассы', cost: '€8–14/м²' },
        { what: 'Waste removal, narrow street', why: 'нет площадки под контейнер', cost: '€45–70/м³' },
              { what: 'Common-area protection', why: 'дома без отдельного входа', cost: '€200–500' },
        { what: 'Working to building hours', why: 'ограничения по часам в жилых кварталах', cost: '+5–10% к срокам' },
      ],
      factorsRu: [
        { what: 'Штробление бетона', why: 'монолит 1980-х, каналы под новые трассы', cost: '€8–14/м²' },
        { what: 'Вывоз с узкой улицы', why: 'нет площадки под контейнер', cost: '€45–70/м³' },
              { what: 'Защита общих зон', why: 'дома без отдельного входа', cost: '€200–500' },
        { what: 'Работы по графику дома', why: 'ограничения по часам в жилых кварталах', cost: '+5–10% к срокам' },
      ],
    },
  },

  /* ─── GERMASOGEIA — complexes and holiday lets ───────────────────────── */
  germasogeia: {
    spaces: {
      en: 'Most Germasogeia apartments sit in complexes built between 1998 and 2008, which means the bathrooms and kitchens are all reaching the end of their service life at roughly the same time. The complex itself sets the constraints: permitted working hours, which lift takes materials, where a skip can stand. We agree all three with the management company before quoting, because getting them wrong is what turns a six-week job into a ten-week one.',
      ru: 'Большинство квартир в Гермасогее — в комплексах 1998–2008 годов, а значит ванные и кухни там подходят к концу срока службы примерно одновременно. Ограничения задаёт сам комплекс: разрешённые часы работ, каким лифтом поднимать материалы, где может стоять контейнер. Всё три пункта мы согласуем с управляющей до сметы — именно из-за них шестинедельный проект превращается в десятинедельный.',
      addsEn: ['Working hours and lift access agreed with complex management', 'Protection of communal corridors and lift on the material route', 'Scheduling into the November–March window for rental units'],
      addsRu: ['Часы работ и доступ к лифту согласованы с управляющей комплекса', 'Защита общих коридоров и лифта на маршруте материалов', 'Постановка в окно ноябрь–март для арендных квартир'],
      factorsEn: [
        { what: 'Damp treatment, ground floors', why: 'влажность от бассейна дамбы', cost: '€400–1 200' },
        { what: 'Management company consent', why: 'часы работ и маршрут подъёма материалов', cost: '€0, но 1–2 недели' },
        { what: 'Replacing 1998–2008 wet rooms', why: 'ванные и кухни той эпохи на полном износе', cost: '€4 500–9 000 за санузел' },
      ],
      factorsRu: [
        { what: 'Обработка первых этажей от сырости', why: 'влажность от бассейна дамбы', cost: '€400–1 200' },
        { what: 'Согласование с УК', why: 'часы работ и маршрут подъёма материалов', cost: '€0, но 1–2 недели' },
        { what: 'Замена узлов 1998–2008', why: 'ванные и кухни той эпохи на полном износе', cost: '€4 500–9 000 за санузел' },
      ],
    },
    commercial: {
      en: 'Retail and restaurant work along the Germasogeia strip is governed by the season, not the calendar. A fit-out that misses the opening date misses a year of trade, so we plan these backwards from your opening and order long-lead items — extraction, glazing, joinery — before anything else is touched.',
      ru: 'Работы в торговых точках и ресторанах вдоль полосы Гермасогеи подчинены сезону, а не календарю. Отделка, не успевшая к дате открытия, стоит года выручки, поэтому мы планируем такие проекты от даты открытия назад и первым делом заказываем позиции с долгой поставкой: вытяжку, остекление, мебель.',
      addsEn: ['Programme planned backwards from your opening date', 'Long-lead items ordered before demolition begins'],
      addsRu: ['График построен от вашей даты открытия назад', 'Позиции с долгой поставкой заказаны до начала демонтажа'],
      factorsEn: [
        { what: 'Night and weekend shifts', why: 'комплексы живут на посуточной аренде', cost: '+12–20% к работам' },
        { what: 'Lift and lobby protection', why: 'требование управляющей компании', cost: '€250–600' },
              { what: 'Access through residential lobbies', why: 'общий вход с арендаторами', cost: '€200–500' },
        { what: 'Off-site storage', why: 'нет места под материалы', cost: '€150–400/мес' },
      ],
      factorsRu: [
        { what: 'Ночные и выходные смены', why: 'комплексы живут на посуточной аренде', cost: '+12–20% к работам' },
        { what: 'Защита лифтов и холла', why: 'требование управляющей компании', cost: '€250–600' },
              { what: 'Проход через жилые холлы', why: 'общий вход с арендаторами', cost: '€200–500' },
        { what: 'Складирование вне объекта', why: 'нет места под материалы', cost: '€150–400/мес' },
      ],
    },
    specialist: {
      en: 'Interiors built for short lets here have to survive a turnover the owner never sees. That changes the specification rather than the look: harder flooring, washable paint systems, fittings that a cleaner can service without a call-out. We design for the fifth year, not the photograph taken in the first week.',
      ru: 'Интерьеры под краткосрочную аренду здесь должны пережить оборот, которого владелец не видит. Это меняет спецификацию, а не внешний вид: более стойкие полы, моющиеся системы окраски, фурнитура, которую уборщик обслужит без вызова мастера. Мы проектируем на пятый год, а не на фотографию первой недели.',
      addsEn: ['Specification chosen for short-let wear, not showroom appearance', 'Fittings selected so routine servicing needs no contractor'],
      addsRu: ['Спецификация под износ краткосрочной аренды, а не под шоурум', 'Фурнитура подобрана так, чтобы обслуживание не требовало подрядчика'],
      factorsEn: [
        { what: 'Ventilation sized for letting', why: 'поток гостей даёт нагрузку выше жилой', cost: '€300–700' },
        { what: 'Materials on a 5-year cycle', why: 'износ от краткосрочной аренды втрое выше', cost: '+8–14% к отделке' },
              { what: 'Design around guest turnover', why: 'объект работает между сезонами', cost: '€300–600' },
        { what: 'Damp protection, lower floors', why: 'близость дамбы', cost: '€400–1 200' },
      ],
      factorsRu: [
        { what: 'Расчёт вентиляции под аренду', why: 'поток гостей даёт нагрузку выше жилой', cost: '€300–700' },
        { what: 'Материалы под 5-летний цикл', why: 'износ от краткосрочной аренды втрое выше', cost: '+8–14% к отделке' },
              { what: 'Проект под смену жильцов', why: 'объект работает между сезонами', cost: '€300–600' },
        { what: 'Влагозащита нижних уровней', why: 'близость дамбы', cost: '€400–1 200' },
      ],
    },
    trades: {
      en: 'Short-let properties here cycle their finishes every four to five years, so single-trade refreshes are the most common brief in Germasogeia. Paint, silicone, flooring patches and joinery touch-ups fit into a two to three week window between seasons, which is when we book most of them.',
      ru: 'Объекты под краткосрочную аренду здесь обновляют отделку каждые четыре-пять лет, поэтому в Гермасогее чаще всего заказывают именно отдельные виды работ. Покраска, силикон, локальный ремонт полов и подкраска столярки укладываются в окно 2–3 недели между сезонами — туда мы их и ставим.',
      addsEn: ['Between-season scheduling as standard', 'Patch repair rather than full replacement where the finish allows'],
      addsRu: ['Постановка между сезонами по умолчанию', 'Локальный ремонт вместо полной замены, где позволяет отделка'],
      factorsEn: [
        { what: 'Washable finishes', why: 'полы и покраска обновляются каждые 4–5 лет', cost: '+10–15% к материалам' },
        { what: 'Out-of-season programme', why: 'июнь–сентябрь шумные работы ограничены', cost: 'окно октябрь–май' },
              { what: 'Epoxy grout instead of cementitious', why: 'мокрые зоны в аренде', cost: '+€8–14/м²' },
        { what: 'Compressed programme', why: 'работы между заездами', cost: '+10–15%' },
      ],
      factorsRu: [
        { what: 'Моющиеся покрытия вместо обычных', why: 'полы и покраска обновляются каждые 4–5 лет', cost: '+10–15% к материалам' },
        { what: 'Работы вне сезона', why: 'июнь–сентябрь шумные работы ограничены', cost: 'окно октябрь–май' },
              { what: 'Эпоксидная затирка вместо цементной', why: 'мокрые зоны в аренде', cost: '+€8–14/м²' },
        { what: 'Ускоренный график', why: 'работы между заездами', cost: '+10–15%' },
      ],
    },
  },

  /* ─── AGIOS TYCHONAS — hillside villas ───────────────────────────────── */
  'agios-tychonas': {
    spaces: {
      en: 'Agios Tychonas villas sit on a slope, and the slope shapes the job. Split levels mean longer service runs and more of them; terraces stacked above living space mean waterproofing is structural rather than cosmetic; and driveways that are steep and narrow decide what size of delivery can reach the house at all. We survey access on the first visit, because on a hillside plot it is the constraint that moves the price.',
      ru: 'Виллы в Агиос Тихонасе стоят на склоне, и склон определяет работу. Разноуровневые планировки означают более длинные и многочисленные инженерные трассы; террасы над жилыми помещениями делают гидроизоляцию конструктивной задачей, а не косметической; крутые и узкие подъезды определяют, какого размера доставка вообще доедет до дома. Доступ мы обследуем на первом же выезде — на склоне именно он двигает цену.',
      addsEn: ['Access survey for delivery vehicle size and turning', 'Terrace waterproofing treated as structural where living space sits below', 'Longer service runs priced from the actual level changes'],
      addsRu: ['Обследование подъезда: габариты машины и разворот', 'Гидроизоляция террас как конструктивная задача, если под ними жилое', 'Длина инженерных трасс считается по фактическим перепадам уровней'],
      factorsEn: [
        { what: 'Repointing stone elevations', why: 'натуральный камень требует гидрофобизации', cost: '€35–70/м²' },
        { what: 'Terrace, irrigation and lighting as one', why: 'сады масштаба поместья', cost: '€8 000–25 000' },
        { what: 'Premium finishing tolerance', why: 'ожидания уровня не прощают упрощений', cost: '+15–25% к чистовой' },
      ],
      factorsRu: [
        { what: 'Перешивка швов каменного фасада', why: 'натуральный камень требует гидрофобизации', cost: '€35–70/м²' },
        { what: 'Терраса, полив и свет одним проектом', why: 'сады масштаба поместья', cost: '€8 000–25 000' },
        { what: 'Премиальный допуск по отделке', why: 'ожидания уровня не прощают упрощений', cost: '+15–25% к чистовой' },
      ],
    },
    commercial: {
      en: 'The commercial work here is hotels and hospitality along the coast road. That means phased, room-by-room programmes with a sealed route for materials that never crosses a guest path, and noisy phases confined to hours the property agrees in advance.',
      ru: 'Коммерческие работы здесь — это отели и гостиничный сегмент вдоль прибрежной дороги. Отсюда поэтапные графики по номерам, изолированный маршрут для материалов, который нигде не пересекается с гостевым, и шумные этапы строго в часы, согласованные с объектом заранее.',
      addsEn: ['Material route sealed off from guest circulation', 'Room-by-room phasing with a signed-off pilot room'],
      addsRu: ['Маршрут материалов изолирован от гостевых зон', 'Поэтапная сдача по номерам с утверждённым эталонным номером'],
      factorsEn: [
        { what: 'Appearance approval', why: 'премиальная застройка с едиными требованиями', cost: '€300–800' },
        { what: 'Working around neighbours', why: 'плотная вилловая застройка', cost: '+8–12%' },
      ],
      factorsRu: [
        { what: 'Согласование облика', why: 'премиальная застройка с едиными требованиями', cost: '€300–800' },
        { what: 'Работы без остановки соседей', why: 'плотная вилловая застройка', cost: '+8–12%' },
      ],
    },
    specialist: {
      en: 'Large villa footprints make the case for wired systems rather than retrofit ones — the distances defeat wireless reliability, and there is usually a renovation underway to run cable during. Design work here is also more about how the levels connect than about individual rooms.',
      ru: 'Большие площади вилл склоняют выбор к проводным системам, а не к накладным: расстояния убивают надёжность беспроводных, а ремонт, во время которого можно проложить кабель, обычно и так идёт. Проектная работа здесь больше про то, как связаны уровни, чем про отдельные комнаты.',
      addsEn: ['Wired distribution specified where distances defeat wireless', 'Design addressing level-to-level circulation, not just rooms'],
      addsRu: ['Проводная разводка там, где расстояния мешают беспроводной', 'Проект решает связь между уровнями, а не только комнаты'],
      factorsEn: [
        { what: 'Landscape and lighting design', why: 'терраса и сад считаются вместе с домом', cost: '€25–45/м²' },
        { what: 'Pool shell renovation', why: 'бассейны 2000-х на исходе ресурса', cost: '€8 000–25 000' },
      ],
      factorsRu: [
        { what: 'Проект ландшафта и света', why: 'терраса и сад считаются вместе с домом', cost: '€25–45/м²' },
        { what: 'Реновация чаши бассейна', why: 'бассейны 2000-х на исходе ресурса', cost: '€8 000–25 000' },
      ],
    },
    trades: {
      en: 'Single-trade work on a hillside villa is mostly a materials-handling problem. Getting tile, board or plant to a lower terrace can take longer than laying it, so our quotes here separate the handling from the trade rather than burying it in a rate.',
      ru: 'Отдельные виды работ на вилле по склону — в основном задача логистики. Доставить плитку, плиты или оборудование на нижнюю террасу бывает дольше, чем уложить, поэтому в наших сметах здесь логистика вынесена отдельной строкой, а не спрятана в расценку.',
      addsEn: ['Material handling quoted as its own line, not hidden in the rate', 'Lower-terrace access method agreed before the start date'],
      addsRu: ['Логистика материалов — отдельная строка сметы', 'Способ доступа на нижние террасы согласован до старта'],
      factorsEn: [
        { what: 'Stone sealing', why: 'фасады из натурального камня', cost: '€12–25/м²' },
        { what: 'Marine-grade ironmongery', why: 'нержавейка A4 вместо обычной', cost: '+10–15% к крепежу' },
      ],
      factorsRu: [
        { what: 'Гидрофобизация камня', why: 'фасады из натурального камня', cost: '€12–25/м²' },
        { what: 'Морская фурнитура', why: 'нержавейка A4 вместо обычной', cost: '+10–15% к крепежу' },
      ],
    },
  },

  /* ─── POTAMOS GERMASOGEIAS — river mouth, groundwater ────────────────── */
  'potamos-germasogeias': {
    spaces: {
      en: 'Potamos sits at the river mouth, and the water table shows up in the work. Ground-floor units and basements here carry a real damp risk, so before any finish goes on we check what the existing tanking is doing and whether the problem is coming up through the slab or in through a wall. Putting new flooring over an unresolved damp path is the single most expensive mistake made on properties in this area.',
      ru: 'Потамос стоит в устье реки, и уровень грунтовых вод проявляется в работах. Первые этажи и подвалы здесь несут реальный риск сырости, поэтому до любой отделки мы проверяем, работает ли существующая гидроизоляция и откуда идёт влага — снизу через плиту или сбоку через стену. Уложить новый пол поверх неустранённой сырости — самая дорогая ошибка на объектах этого района.',
      addsEn: ['Damp diagnosis before any finish is specified', 'Slab and wall checked separately to locate the path', 'Below-ground tanking where the survey calls for it'],
      addsRu: ['Диагностика сырости до выбора отделки', 'Плита и стены проверяются раздельно для поиска источника', 'Подземная гидроизоляция, если этого требует обследование'],
      factorsEn: [
        { what: 'Supply and extract ventilation', why: 'существующая не рассчитана на круглогодичную аренду', cost: '€600–1 400' },
        { what: 'Balcony door replacement', why: 'рамы съедены прибрежным воздухом', cost: '€4 000–9 000' },
        { what: 'Reclaiming corridor space', why: 'старые планировки теряют метры', cost: '€1 500–4 000' },
      ],
      factorsRu: [
        { what: 'Приточно-вытяжная вентиляция', why: 'существующая не рассчитана на круглогодичную аренду', cost: '€600–1 400' },
        { what: 'Замена балконных блоков', why: 'рамы съедены прибрежным воздухом', cost: '€4 000–9 000' },
        { what: 'Перепланировка коридоров', why: 'старые планировки теряют метры', cost: '€1 500–4 000' },
      ],
    },
    commercial: {
      en: 'Commercial units here are smaller and mostly ground floor, which puts them in the same damp exposure as the housing. Any fit-out that involves flooring or fixed joinery starts with the same moisture check we run on residential ground floors.',
      ru: 'Коммерческие помещения здесь меньше и в основном на первом этаже, то есть под тем же воздействием сырости, что и жильё. Любая отделка с полами или встроенной мебелью начинается с той же проверки влажности, что и на первых этажах жилых домов.',
      addsEn: ['Moisture check before flooring or fixed joinery is ordered'],
      addsRu: ['Проверка влажности до заказа полов и встроенной мебели'],
      factorsEn: [
        { what: 'Material lifting, no lift', why: 'дома без лифта, логистика в смете сразу', cost: '€300–900' },
        { what: 'Floor-by-floor working', why: 'узкие лестничные марши', cost: '+8–15%' },
      ],
      factorsRu: [
        { what: 'Подъём материалов без лифта', why: 'дома без лифта, логистика в смете сразу', cost: '€300–900' },
        { what: 'Работы по этажам', why: 'узкие лестничные марши', cost: '+8–15%' },
      ],
    },
    specialist: {
      en: 'Energy work in Potamos usually finds humidity as the real problem before insulation is. Damp walls conduct heat and grow mould, so the audit here almost always sequences moisture control ahead of the measures that generate the headline saving.',
      ru: 'Энергоработы в Потамосе обычно упираются во влажность раньше, чем в утепление. Сырые стены проводят тепло и дают плесень, поэтому аудит здесь почти всегда ставит борьбу с влагой перед мероприятиями, которые дают основную экономию.',
      addsEn: ['Moisture control sequenced before insulation measures'],
      addsRu: ['Контроль влажности идёт раньше утепления'],
      factorsEn: [
        { what: 'Air-change calculation', why: 'вентиляция под круглогодичную аренду', cost: '€300–700' },
        { what: 'Layout optimisation', why: 'возврат метров из коридоров', cost: '€800–2 000' },
      ],
      factorsRu: [
        { what: 'Расчёт воздухообмена', why: 'вентиляция под круглогодичную аренду', cost: '€300–700' },
        { what: 'Оптимизация планировки', why: 'возврат метров из коридоров', cost: '€800–2 000' },
      ],
    },
    trades: {
      en: 'Flooring and plastering here are the trades most affected by the water table. We measure substrate moisture before laying anything and will say so if the reading means the job should wait rather than be covered over.',
      ru: 'Полы и штукатурка здесь сильнее всего зависят от уровня грунтовых вод. Мы измеряем влажность основания до укладки и прямо скажем, если показания означают, что работу лучше отложить, а не закрыть отделкой.',
      addsEn: ['Substrate moisture measured and recorded before laying'],
      addsRu: ['Влажность основания измеряется и фиксируется до укладки'],
      factorsEn: [
        { what: 'Manual lifting', why: 'нет лифта в большей части домов', cost: '€300–900' },
        { what: 'Thermally broken profiles', why: 'прибрежный воздух съедает обычные', cost: '+15–25% к окнам' },
      ],
      factorsRu: [
        { what: 'Подъём вручную', why: 'нет лифта в большей части домов', cost: '€300–900' },
        { what: 'Профили с терморазрывом', why: 'прибрежный воздух съедает обычные', cost: '+15–25% к окнам' },
      ],
    },
  },

  /* ─── LIMASSOL MARINA — salt, management, access windows ─────────────── */
  'limassol-marina': {
    spaces: {
      en: 'Marina apartments face two things nothing inland does: salt air and a management regime. Salt attacks metalwork, external fixings and anything with an untreated finish on the seaward side, so hardware specification here is not a style decision. The management company controls when work can happen, which lift carries materials and how long it can be booked — all of which we agree before a price is fixed, never after.',
      ru: 'Квартиры на Марине сталкиваются с двумя вещами, которых нет в глубине города: солёный воздух и режим управляющей компании. Соль разъедает металл, наружный крепёж и любую необработанную отделку со стороны моря, поэтому выбор фурнитуры здесь — не вопрос вкуса. Управляющая определяет, когда можно работать, каким лифтом возить материалы и на сколько его можно забронировать. Всё это мы согласуем до фиксации цены, а не после.',
      addsEn: ['Marine-grade hardware and fixings on seaward elevations', 'Lift booking and working hours agreed with building management', 'Balcony and terrace details specified for salt exposure'],
      addsRu: ['Фурнитура и крепёж морского исполнения со стороны моря', 'Бронь лифта и часы работ согласованы с управляющей', 'Узлы балконов и террас рассчитаны на солевую нагрузку'],
      factorsEn: [
        { what: 'Licensed contractors only', why: 'требование комплекса', cost: 'доступ по аккредитации' },
        { what: 'Lift and common-area protection', why: 'строгий регламент', cost: '€400–900' },
        { what: 'Upgrading to bespoke', why: 'интерьеры уровня застройщика', cost: '+20–35% к чистовой' },
      ],
      factorsRu: [
        { what: 'Только лицензированные подрядчики', why: 'требование комплекса', cost: 'доступ по аккредитации' },
        { what: 'Защита лифтов и общих зон', why: 'строгий регламент', cost: '€400–900' },
        { what: 'Доведение до bespoke', why: 'интерьеры уровня застройщика', cost: '+20–35% к чистовой' },
      ],
    },
    commercial: {
      en: 'Marina retail units trade on footfall that does not stop for a renovation, so the hoarding matters as much as the fit-out behind it. Works run to the marina management schedule with a clean, presentable frontage maintained throughout.',
      ru: 'Торговые помещения на Марине живут за счёт потока, который не останавливается на время ремонта, поэтому ограждение важно не меньше самой отделки за ним. Работы идут по графику управляющей марины, а фасад всё это время остаётся чистым и презентабельным.',
      addsEn: ['Presentable hoarding maintained for the duration', 'Programme aligned to marina management schedule'],
      addsRu: ['Аккуратное ограждение поддерживается всё время работ', 'График согласован с расписанием управляющей марины'],
      factorsEn: [
        { what: 'Agreed working hours', why: 'регламент комплекса', cost: '+15–25% к срокам' },
        { what: 'Delivery routes', why: 'только через служебные зоны', cost: '€300–800' },
      ],
      factorsRu: [
        { what: 'Согласованные часы работ', why: 'регламент комплекса', cost: '+15–25% к срокам' },
        { what: 'Маршруты доставки', why: 'только через служебные зоны', cost: '€300–800' },
      ],
    },
    specialist: {
      en: 'This is where pre-wiring during a renovation pays for itself most clearly. Retrofitting cable into a finished marina apartment means working around a management regime that limits when anyone can be on site at all, which multiplies what the same work would cost inland.',
      ru: 'Именно здесь прокладка кабеля во время ремонта окупается очевиднее всего. Тянуть кабель в уже отделанной квартире на Марине означает работать в режиме управляющей, который ограничивает само присутствие на объекте, — и это кратно увеличивает стоимость той же работы по сравнению с городом.',
      addsEn: ['Pre-wiring while walls are open, priced against later retrofit'],
      addsRu: ['Кабель прокладывается при открытых стенах — с расчётом против поздней доводки'],
      factorsEn: [
        { what: 'AV and smart design at first fix', why: 'системы проектируются, а не доставляются по факту', cost: '€25–60/м²' },
        { what: 'Marine-spec external elements', why: 'коррозия диктует класс материалов', cost: '+12–20%' },
      ],
      factorsRu: [
        { what: 'Проект AV и smart на этапе черновой', why: 'системы проектируются, а не доставляются по факту', cost: '€25–60/м²' },
        { what: 'Морское исполнение наружных элементов', why: 'коррозия диктует класс материалов', cost: '+12–20%' },
      ],
    },
    trades: {
      en: 'Single trades here live or die on the access window. A painting or flooring crew that cannot book the service lift loses the day, so we confirm the booking before the crew is scheduled rather than on the morning.',
      ru: 'Отдельные виды работ здесь полностью зависят от окна доступа. Бригада маляров или укладчиков, не получившая грузовой лифт, теряет день, поэтому бронь мы подтверждаем до постановки бригады в график, а не утром в день работ.',
      addsEn: ['Service lift booked and confirmed before the crew is scheduled', 'Exterior-facing finishes specified for salt exposure'],
      addsRu: ['Грузовой лифт забронирован до постановки бригады', 'Отделка со стороны моря подобрана под солевую нагрузку'],
      factorsEn: [
        { what: 'A4 stainless on all external fixings', why: 'морская коррозия', cost: '+12–18% к металлу' },
        { what: 'Working to building regulations', why: 'согласованные окна и защита путей', cost: '+15–25% к срокам' },
      ],
      factorsRu: [
        { what: 'Нержавейка A4 на весь наружный крепёж', why: 'морская коррозия', cost: '+12–18% к металлу' },
        { what: 'Работы по регламенту комплекса', why: 'согласованные окна и защита путей', cost: '+15–25% к срокам' },
      ],
    },
  },

  /* ─── LIMASSOL CITY CENTRE — older stock, narrow streets ─────────────── */
  'limassol-city-centre': {
    spaces: {
      en: 'The city centre holds the oldest housing stock we work with, and older buildings hide more. Wiring predates modern earthing, pipework has often been patched rather than replaced, and layouts were drawn before open-plan living. We budget a contingency conversation into the survey here for exactly that reason — not because we expect problems, but because opening a wall in a pre-1980s building tells you things a drawing cannot.',
      ru: 'В центре города — самый старый жилой фонд из тех, с которыми мы работаем, а старые дома скрывают больше. Проводка сделана до появления современного заземления, трубы чаще латали, чем меняли, а планировки чертились до того, как появилось открытое пространство. Именно поэтому на выезде здесь мы отдельно обсуждаем резерв — не потому что ждём проблем, а потому что вскрытая стена в доме до 1980-х показывает то, чего не покажет чертёж.',
      addsEn: ['Survey of original wiring, earthing and pipework condition', 'Written variation procedure agreed upfront for concealed findings', 'Street access and unloading arranged where there is no forecourt'],
      addsRu: ['Обследование исходной проводки, заземления и состояния труб', 'Порядок письменных допсоглашений на скрытые находки — заранее', 'Доступ и разгрузка на улице там, где нет своей площадки'],
      factorsEn: [
        { what: 'Facade consent', why: 'охранная зона, разрешение до начала работ', cost: '€700–1 500 и 10–20 недель' },
        { what: 'Full services replacement', why: 'здания до 1980 года', cost: '€5 000–9 000' },
        { what: 'What is under old plaster', why: 'структурные сюрпризы на общих стенах', cost: 'резерв 10–15%' },
      ],
      factorsRu: [
        { what: 'Согласование фасада', why: 'охранная зона, разрешение до начала работ', cost: '€700–1 500 и 10–20 недель' },
        { what: 'Полная замена инженерии', why: 'здания до 1980 года', cost: '€5 000–9 000' },
        { what: 'Вскрытие под старой штукатуркой', why: 'структурные сюрпризы на общих стенах', cost: 'резерв 10–15%' },
      ],
    },
    commercial: {
      en: 'Shopfront work in the centre almost always needs municipal consent, and the streets are narrow enough that unloading and pedestrian protection have to be planned rather than improvised. We handle the consent and the street arrangements as part of the job, not as your problem.',
      ru: 'Работы по фасадам магазинов в центре почти всегда требуют согласования с муниципалитетом, а улицы достаточно узкие, чтобы разгрузку и защиту пешеходов приходилось планировать, а не решать на месте. Согласование и уличные вопросы мы берём на себя, а не оставляем вам.',
      addsEn: ['Municipal consent for shopfront changes prepared and filed', 'Pedestrian protection and unloading plan for narrow streets'],
      addsRu: ['Согласование изменения фасада подготовлено и подано', 'План защиты пешеходов и разгрузки на узких улицах'],
      factorsEn: [
        { what: 'Street-by-street logistics', why: 'нет парковки и площадки', cost: '€400–1 000' },
        { what: 'Night deliveries', why: 'ограничения по погрузке в центре', cost: '+10–18%' },
      ],
      factorsRu: [
        { what: 'Поулично планируемая логистика', why: 'нет парковки и площадки', cost: '€400–1 000' },
        { what: 'Ночные поставки', why: 'ограничения по погрузке в центре', cost: '+10–18%' },
      ],
    },
    specialist: {
      en: 'Older buildings make energy work worth more here than almost anywhere in Limassol, because the starting point is so poor. Single glazing, uninsulated walls and original wiring mean the measures that qualify for a grant are usually the same ones that fix the day-to-day discomfort.',
      ru: 'Старые дома делают энергоработы здесь ценнее, чем почти где-либо в Лимасоле, — просто потому что стартовая точка настолько низкая. Одинарные стёкла, неутеплённые стены и родная проводка означают, что мероприятия, проходящие по гранту, обычно те же самые, что решают ежедневный дискомфорт.',
      addsEn: ['Audit weighted to the measures that also fix day-to-day comfort'],
      addsRu: ['Аудит с упором на мероприятия, которые заодно решают комфорт'],
      factorsEn: [
        { what: 'Party-wall survey', why: 'соседи и неизвестная конструкция', cost: '€400–900' },
        { what: 'Design within conservation limits', why: 'ограничения по внешнему виду', cost: '€500–1 200' },
      ],
      factorsRu: [
        { what: 'Обследование общих стен', why: 'соседи и неизвестная конструкция', cost: '€400–900' },
        { what: 'Проект с учётом охранной зоны', why: 'ограничения по внешнему виду', cost: '€500–1 200' },
      ],
    },
    trades: {
      en: 'On pre-1980s walls, preparation is most of the trade. Plaster is often lime rather than gypsum, surfaces move, and a paint system chosen for a new build will not hold. Our quotes here separate preparation from finishing so you can see where the hours actually go.',
      ru: 'На стенах домов до 1980-х подготовка и есть основная часть работы. Штукатурка часто известковая, а не гипсовая, поверхности «дышат», и система окраски, подобранная для новостройки, здесь не держится. В наших сметах подготовка вынесена отдельно от отделки, чтобы было видно, куда реально уходят часы.',
      addsEn: ['Preparation quoted separately from finishing', 'Coating system matched to lime plaster where present'],
      addsRu: ['Подготовка в смете отдельно от отделки', 'Система покрытия подобрана под известковую штукатурку'],
      factorsEn: [
        { what: 'Manual waste removal', why: 'нет подъезда для контейнера', cost: '€60–90/м³' },
        { what: 'No change to the elevation', why: 'охранная зона', cost: 'согласование до старта' },
      ],
      factorsRu: [
        { what: 'Ручной вынос мусора', why: 'нет подъезда для контейнера', cost: '€60–90/м³' },
        { what: 'Работы без изменения фасада', why: 'охранная зона', cost: 'согласование до старта' },
      ],
    },
  },
};

/** Angle for a location + service category, or null where none is recorded. */
export function getLocalAngle(locationSlug: string, category: ServiceCategory): LocalAngle | null {
  return localAngles[locationSlug]?.[category] ?? null;
}
