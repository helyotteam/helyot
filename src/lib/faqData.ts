export interface Faq { q: string; a: string }
export interface FaqCategory { label: string; slug: string; faqs: Faq[] }

/* Slugs are shared between languages so anchors and filters stay stable. */
export const faqCategoriesEn: FaqCategory[] = [
  {
    label: 'Pricing & Contracts',
    slug: 'pricing',
    faqs: [
      {
        q: 'Do you work on a fixed-price contract?',
        a: 'Yes, always. Every Helyot project is contracted at a fixed sum. The figure you sign is the figure you pay at handover — no additions, no "provisional sums", no surprise line items. If your scope changes at your own request, we issue a written variation order with a cost before we proceed. Nothing changes without your explicit written approval.',
      },
      {
        q: 'What exactly is included in the price?',
        a: 'All labour, project management, and standard materials required to complete the agreed scope. Waste removal and site cleaning are included. Fixtures you have specified separately — tiles, flooring, sanitary ware, kitchen units — are purchased by you and installed by us at no additional labour cost. We provide a detailed bill of materials at quotation stage so you know exactly what to source.',
      },
      {
        q: 'How do you handle problems discovered during demolition?',
        a: 'We stop work, photograph everything, and present a written variation order documenting the issue, the required solution, and the cost impact before we touch anything further. We never proceed with additional work — and never charge for it — without your signed approval. This is a contractual obligation, not a courtesy.',
      },
      {
        q: 'What are your payment stages?',
        a: 'Typically: 30% mobilisation on contract signing, 30% at structural completion, 30% at second fix (before finishes), and 10% at final handover after snagging is resolved. For smaller projects the structure is adjusted accordingly. All payment milestones are defined in the contract — no discretionary invoices.',
      },
      {
        q: 'Can I get a quote without any commitment?',
        a: 'Yes. Our site visit and consultation are completely free and carry no obligation whatsoever. We visit, measure and present a full itemised fixed price. You are under no pressure to proceed, and there is no deadline on the quote. We would rather spend the time properly than rush you into a decision.',
      },
      {
        q: 'Do your prices include VAT?',
        a: 'All quotes are presented excluding VAT, with VAT shown separately at the applicable rate. Cyprus VAT on renovation work is currently 5% for primary residences (conditions apply) and 19% for commercial and investment properties. We will confirm the applicable rate for your project at quotation stage.',
      },
    ],
  },
  {
    label: 'Timeline & Planning',
    slug: 'timeline',
    faqs: [
      {
        q: 'How long does a typical renovation take?',
        a: 'A studio or 1-bedroom apartment (40–65 m²) typically takes 4–6 weeks from start to handover. A 2–3 bedroom apartment (70–120 m²) takes 6–9 weeks. A full villa renovation runs 12–18 weeks depending on scope. These figures assume a full gut-and-renovation with all trades. Your project schedule is provided at contract signing with specific milestone dates.',
      },
      {
        q: 'How quickly can you start after signing the contract?',
        a: 'We typically begin on site within 2–3 weeks of contract signing. We use that window to obtain any required permits, pre-order materials so nothing waits on site, and brief the team in detail. For smaller projects with no structural changes and no permit requirements, we can sometimes start sooner.',
      },
      {
        q: 'What happens if the project runs late?',
        a: 'If a delay is caused by our team or our management, we notify you immediately with a revised schedule and a recovery plan. Our contracts include a daily compensation clause for delays attributable to Helyot — the amount is agreed at signing. Delays caused by factors outside our control (permit delays, material supply issues outside Cyprus) are handled transparently with regular updates.',
      },
      {
        q: 'Can you work while I am away from Cyprus?',
        a: 'Yes — and we do this regularly. Many of our clients are overseas investors or expats living abroad. You receive a photo walkthrough report every Friday, your project manager is reachable on WhatsApp during working hours, and we can video-call before and after key milestones. You do not need to be in Cyprus during the build.',
      },
      {
        q: 'Can you complete a renovation between short-let bookings?',
        a: 'Yes. We are experienced working to tight turnaround windows for Airbnb and holiday-rental properties across Germasogeia, Agios Tychonas, and the city centre. Tell us your check-out and check-in dates, and we will work back from there. Partial renovations (one bathroom, kitchen only) can sometimes be completed without vacating the property entirely.',
      },
      {
        q: 'Do I need to move out during the renovation?',
        a: 'For full renovations we strongly recommend vacating — it is safer, faster, and results in better quality finishes. For partial works (a single room, a bathroom, kitchen only) we can phase the project to allow occupation of the remainder of the property. We will advise you honestly at the site visit based on what the project actually involves.',
      },
    ],
  },
  {
    label: 'Quality & Warranty',
    slug: 'quality',
    faqs: [
      {
        q: 'What warranty do you provide?',
        a: '5 years on all structural and finishing work — the longest offered by any renovation company in Limassol. 10 years on all waterproofing installations. 1 year on cosmetic finishes (paint, minor surface marks). All warranty terms are documented in writing and signed at handover. The warranty document is yours to keep.',
      },
      {
        q: 'How do I make a warranty claim?',
        a: 'Contact us by phone, WhatsApp, or email with photos of the issue. We acknowledge within 24 working hours, arrange a site visit within 3 working days, and rectify any defect covered by the warranty within 10 working days — at our cost, without argument.',
      },
      {
        q: 'Are your electricians CERA certified?',
        a: 'Yes. All electrical work is carried out by our in-house CERA-licensed electricians. Every installation receives a full test certificate before the Electricity Authority of Cyprus reconnects power. Copies of all certificates are handed to you at project handover.',
      },
      {
        q: 'Do you use subcontractors?',
        a: 'No. Every trade on your project — plastering, electrical, plumbing, tiling, carpentry, painting — is carried out by directly employed Helyot team members. We have zero subcontractors. This is not a marketing claim: it is a structural decision made when the company was founded, and it is the primary reason our quality stays consistent from one project to the next.',
      },
      {
        q: 'What quality checks happen during the build?',
        a: 'Your project manager is on site every day and signs off each trade stage before the next begins. We use Leica laser levels throughout for perfectly flat floors, walls, and ceilings. Waterproofing is flood-tested for 24 hours before tiling. Electrical installations are tested before plastering covers them. Photographs of each stage are archived and available to you on request.',
      },
      {
        q: 'Do you carry professional indemnity and public liability insurance?',
        a: 'Yes. Helyot carries Professional Indemnity Insurance and Public Liability Insurance. Copies of the current certificates are available at our Limassol office on request, and are provided to clients before work begins.',
      },
    ],
  },
  {
    label: 'Design & Materials',
    slug: 'design',
    faqs: [
      {
        q: 'Do you have an in-house interior design service?',
        a: 'Yes. Every Helyot project includes an in-house interior designer who reviews finishes, colours, lighting positions and furniture layouts with you before work begins. You approve every detail in advance. Interior design consultation is included in the project price, not charged separately.',
      },
      {
        q: 'Can I choose my own tiles, flooring, and materials?',
        a: 'Absolutely. We present a curated material selection board during the design phase, but you are not bound to it. If you have tiles or materials you want to source yourself, we install them at no extra labour cost. If you want us to source everything, we do so with our supplier network and pass on the trade pricing we receive.',
      },
      {
        q: 'Can you work with my own architect or interior designer?',
        a: 'Yes. We execute third-party design packages regularly and are comfortable working from architect-stamped drawings and designer specifications. We require a complete, construction-ready specification before we price the work and before we begin. We do not proceed from mood boards or concept-only drawings.',
      },
      {
        q: 'What material brands do you work with?',
        a: 'For electrical systems we specify Schneider Electric and Legrand. Plumbing is predominantly Grohe, Hansgrohe, and Geberit. Tiles are sourced from Mapei-certified suppliers. Structural materials meet Cyprus and EU standards. We are brand-agnostic where the client has a preference — we advise honestly on quality and value.',
      },
      {
        q: 'Can you help with kitchen design and installation?',
        a: 'Yes. We design and install custom kitchens in-house. We work with several Limassol cabinet manufacturers and can also install kitchens supplied by international brands. Our team handles all plumbing, electrical, and tiling associated with the kitchen — one contractor, one point of accountability.',
      },
    ],
  },
  {
    label: 'Permits & Legal',
    slug: 'permits',
    faqs: [
      {
        q: 'Do you handle planning and building permits?',
        a: 'Yes. For projects requiring structural changes, we manage the full permit application with the relevant municipality on your behalf. We prepare or coordinate all required drawings, submit the application, liaise with the municipality, and obtain the permit before any structural work begins. For residential structural changes, the process typically takes 4–8 weeks.',
      },
      {
        q: 'What work requires a permit in Cyprus?',
        a: 'Structural changes (removing or adding walls, changes to load-bearing elements), changes to the building envelope (new windows, roof work), and anything affecting shared areas in apartment buildings. Cosmetic work — tiling, painting, kitchen replacement, bathroom refits without plumbing repositioning — generally does not require a permit. We advise you at the site visit what your project requires.',
      },
      {
        q: 'Do you work on commercial properties?',
        a: 'Yes. We carry out office fit-outs, retail fit-outs, restaurant renovations, and hotel room refurbishments. Commercial projects have their own permit requirements and our team is experienced with the municipal approval process. Speak to us about your project timeline — commercial works often have tighter schedules and we plan accordingly.',
      },
      {
        q: 'Which areas of Cyprus do you cover?',
        a: 'We are based in Limassol and cover the full Limassol district — Germasogeia, Agios Tychonas, Potamos Germasogeias, Limassol Marina, the city centre and surrounding areas — where the majority of our projects are. We also take on work in Paphos, Larnaca, Nicosia, Ayia Napa, Protaras and Paralimni. Helyot operates only in the government-controlled areas of the Republic of Cyprus.',
      },
      {
        q: 'Can you help with the Cyprus energy renovation grant scheme?',
        a: 'Yes. We carry out energy renovation works that qualify for the government subsidy scheme — insulation, new windows, solar systems, and heat pumps. We assess your eligibility during the site visit and handle the documentation required for the grant application.',
      },
    ],
  },
  {
    label: 'Working with Helyot',
    slug: 'working',
    faqs: [
      {
        q: 'Who will be my main point of contact?',
        a: 'You are assigned a named project manager before work begins. That person is your single point of contact for the entire project — questions, decisions, updates, and concerns. You deal with one person who knows your project inside out. Your project manager is reachable on WhatsApp during working hours and responds within two hours.',
      },
      {
        q: 'How do I stay updated on progress?',
        a: 'Every Friday your project manager sends a photo report covering every room and every active trade. Between reports, you can message at any time and visit the site at any time during working hours — no appointment needed. We also video-call before and after key milestones for clients who are not in Cyprus.',
      },
      {
        q: 'What happens at the handover?',
        a: 'We walk through every room together with a printed snag list. You note any items you want addressed and we resolve them within 5 working days at our cost, no debate. Once you are satisfied, you sign the handover document, pay the final 10%, and receive your keys, all CERA certificates, all building permits, and your 5-year warranty document.',
      },
      {
        q: 'Can I visit the site during construction?',
        a: 'Yes, at any time during working hours. No appointment, no notice required. It is your property and you have the right to see what is happening at any moment. We do ask that you wear appropriate footwear and follow any site safety instructions from our project manager.',
      },
      {
        q: 'What if I am not happy with the result?',
        a: 'Raise it immediately with your project manager. If it is something within the agreed scope and specification, we correct it at our cost. If it is a matter of personal preference that differs from the approved design, we discuss options and agree how to proceed. We do not walk away from problems.',
      },
    ],
  },
];

export const faqCategoriesRu: FaqCategory[] = [
  {
    label: 'Цены и договор',
    slug: 'pricing',
    faqs: [
      {
        q: 'Вы работаете по договору с фиксированной ценой?',
        a: 'Да, всегда. Каждый проект Helyot оформляется договором на фиксированную сумму. Цифра, под которой вы подписались, — это та же цифра, которую вы платите при сдаче: без доплат, без «резервных сумм», без внезапных строк в смете. Если вы сами меняете объём работ, мы оформляем письменное дополнительное соглашение со стоимостью — и только потом приступаем. Ничего не меняется без вашего письменного согласия.',
      },
      {
        q: 'Что именно входит в цену?',
        a: 'Все работы, управление проектом и стандартные материалы, необходимые для выполнения согласованного объёма. Вывоз мусора и уборка объекта включены. Отделочные позиции, которые вы выбираете отдельно, — плитка, напольные покрытия, сантехника, кухонная мебель — покупаете вы, а монтируем мы без дополнительной платы за работу. На этапе сметы вы получаете подробную ведомость материалов, чтобы точно знать, что закупать.',
      },
      {
        q: 'Что происходит, если проблему обнаружили при демонтаже?',
        a: 'Мы останавливаем работы, всё фотографируем и предоставляем письменное дополнительное соглашение с описанием проблемы, необходимого решения и влияния на стоимость — до того, как продолжим. Мы никогда не выполняем дополнительные работы и не выставляем за них счёт без вашей подписи. Это обязательство по договору, а не любезность.',
      },
      {
        q: 'Какие этапы оплаты?',
        a: 'Обычно так: 30% при подписании договора, 30% по завершении конструктивных работ, 30% на этапе чистовой подготовки (до отделки) и 10% при финальной сдаче после устранения замечаний. Для небольших проектов схема корректируется. Все этапы оплаты прописаны в договоре — никаких счетов «по усмотрению».',
      },
      {
        q: 'Можно получить смету без обязательств?',
        a: 'Да. Выезд на объект и консультация полностью бесплатны и ни к чему вас не обязывают. Мы приезжаем, делаем замеры и предоставляем полную постатейную фиксированную цену. Мы не давим на вас и не ставим срок действия сметы. Нам важнее сделать это как следует, чем торопить вас с решением.',
      },
      {
        q: 'Цены указаны с НДС?',
        a: 'Все сметы даются без НДС, а НДС показывается отдельной строкой по применимой ставке. На Кипре НДС на ремонтные работы сейчас составляет 5% для основного жилья (при выполнении условий) и 19% для коммерческой и инвестиционной недвижимости. Применимую к вашему проекту ставку мы подтвердим на этапе сметы.',
      },
    ],
  },
  {
    label: 'Сроки и планирование',
    slug: 'timeline',
    faqs: [
      {
        q: 'Сколько длится типичный ремонт?',
        a: 'Студия или однокомнатная квартира (40–65 м²) — обычно 4–6 недель от старта до сдачи. Квартира с 2–3 спальнями (70–120 м²) — 6–9 недель. Полный ремонт виллы занимает 12–18 недель в зависимости от объёма. Это сроки для ремонта под ключ со всеми видами работ. График вашего проекта с конкретными контрольными датами выдаётся при подписании договора.',
      },
      {
        q: 'Как быстро вы начнёте после подписания договора?',
        a: 'Обычно выходим на объект в течение 2–3 недель после подписания. Это время уходит на получение разрешений, предзаказ материалов (чтобы стройка не ждала поставок) и детальную постановку задач бригаде. Для небольших проектов без изменений конструктива и без разрешений иногда начинаем раньше.',
      },
      {
        q: 'Что будет, если проект затянется?',
        a: 'Если задержка возникла по вине нашей команды или управления, мы сразу сообщаем вам, даём пересмотренный график и план наверстывания. В наших договорах есть пункт о ежедневной компенсации за задержки по вине Helyot — сумма согласуется при подписании. Задержки по независящим от нас причинам (сроки разрешений, поставки материалов из-за рубежа) ведём прозрачно, с регулярными обновлениями.',
      },
      {
        q: 'Можно ли вести ремонт, пока меня нет на Кипре?',
        a: 'Да, и мы делаем это регулярно. Многие наши заказчики — зарубежные инвесторы и экспаты, живущие за границей. Каждую пятницу вы получаете фотоотчёт с обходом объекта, ваш прораб доступен в WhatsApp в рабочее время, а перед ключевыми этапами и после них мы созваниваемся по видео. Находиться на Кипре во время работ не обязательно.',
      },
      {
        q: 'Успеете сделать ремонт между краткосрочными бронированиями?',
        a: 'Да. У нас есть опыт работы в жёсткие окна между заездами для объектов Airbnb и курортной аренды в Гермасогее, Агиос Тихонас и центре города. Назовите даты выезда и заезда гостей — мы построим график от них. Частичный ремонт (одна ванная, только кухня) иногда удаётся сделать вообще без освобождения квартиры.',
      },
      {
        q: 'Нужно ли съезжать на время ремонта?',
        a: 'Для ремонта под ключ мы настоятельно рекомендуем съехать — так безопаснее, быстрее и качество отделки выше. Для частичных работ (одна комната, ванная, только кухня) мы можем разбить проект на этапы, чтобы остальной частью жилья можно было пользоваться. На выезде честно скажем, что реально потребуется именно в вашем случае.',
      },
    ],
  },
  {
    label: 'Качество и гарантия',
    slug: 'quality',
    faqs: [
      {
        q: 'Какую гарантию вы даёте?',
        a: '5 лет на все конструктивные и отделочные работы — самая длинная гарантия среди ремонтных компаний Лимасола. 10 лет на всю гидроизоляцию. 1 год на косметическую отделку (краска, мелкие поверхностные дефекты). Все условия гарантии зафиксированы письменно и подписываются при сдаче. Гарантийный документ остаётся у вас.',
      },
      {
        q: 'Как обратиться по гарантии?',
        a: 'Свяжитесь с нами по телефону, в WhatsApp или по почте и приложите фотографии проблемы. Мы подтверждаем обращение в течение 24 рабочих часов, организуем выезд на объект в течение 3 рабочих дней и устраняем любой дефект, покрытый гарантией, в течение 10 рабочих дней — за наш счёт и без споров.',
      },
      {
        q: 'Ваши электрики сертифицированы CERA?',
        a: 'Да. Все электромонтажные работы выполняют наши штатные электрики с лицензией CERA. На каждую установку выдаётся полный протокол испытаний до того, как Электроэнергетическое управление Кипра подключит электричество. Копии всех сертификатов передаются вам при сдаче объекта.',
      },
      {
        q: 'Вы привлекаете субподрядчиков?',
        a: 'Нет. Все работы на вашем объекте — штукатурка, электрика, сантехника, плитка, столярка, покраска — выполняют штатные сотрудники Helyot. Субподрядчиков у нас нет вообще. Это не маркетинговое заявление: такое решение было принято при основании компании, и именно оно обеспечивает стабильное качество от проекта к проекту.',
      },
      {
        q: 'Как контролируется качество во время работ?',
        a: 'Ваш прораб находится на объекте каждый день и принимает каждый этап до начала следующего. Мы используем лазерные уровни Leica для идеально ровных полов, стен и потолков. Гидроизоляция проходит суточные испытания наливом до укладки плитки. Электрика тестируется до того, как её закроет штукатурка. Фотографии каждого этапа архивируются и доступны вам по запросу.',
      },
      {
        q: 'У вас есть страхование ответственности?',
        a: 'Да. У Helyot оформлены страхование профессиональной ответственности и страхование гражданской ответственности. Копии действующих сертификатов можно получить в нашем офисе в Лимасоле по запросу; клиентам они предоставляются до начала работ.',
      },
    ],
  },
  {
    label: 'Дизайн и материалы',
    slug: 'design',
    faqs: [
      {
        q: 'У вас есть свой дизайнер интерьера?',
        a: 'Да. В каждый проект Helyot включён штатный дизайнер интерьера, который до начала работ проходит с вами по отделке, цветам, расположению света и расстановке мебели. Вы согласовываете каждую деталь заранее. Консультация дизайнера входит в стоимость проекта и не оплачивается отдельно.',
      },
      {
        q: 'Могу ли я выбрать свою плитку, полы и материалы?',
        a: 'Разумеется. На этапе дизайна мы показываем подобранную подборку материалов, но вы ничем не связаны. Если у вас есть плитка или материалы, которые вы хотите купить сами, мы смонтируем их без доплаты за работу. Если хотите, чтобы закупкой занимались мы, — сделаем это через свою сеть поставщиков и передадим вам оптовые цены, которые получаем сами.',
      },
      {
        q: 'Можете работать с моим архитектором или дизайнером?',
        a: 'Да. Мы регулярно реализуем чужие проектные пакеты и спокойно работаем по чертежам со штампом архитектора и спецификациям дизайнера. Нам нужна полная спецификация, готовая к производству работ, — до того как мы посчитаем стоимость и приступим. По мудбордам и концепт-эскизам мы не работаем.',
      },
      {
        q: 'С какими брендами материалов вы работаете?',
        a: 'В электрике мы закладываем Schneider Electric и Legrand. Сантехника — преимущественно Grohe, Hansgrohe и Geberit. Плитку берём у поставщиков, сертифицированных Mapei. Конструктивные материалы соответствуют нормам Кипра и ЕС. Если у заказчика есть предпочтения по брендам, мы к ним нейтральны — честно советуем по качеству и соотношению цены.',
      },
      {
        q: 'Поможете с проектом и монтажом кухни?',
        a: 'Да. Мы проектируем и устанавливаем кухни на заказ силами своей команды. Работаем с несколькими мебельными производствами Лимасола, а также монтируем кухни международных брендов. Вся сантехника, электрика и плитка, связанные с кухней, — на нас: один подрядчик, одна точка ответственности.',
      },
    ],
  },
  {
    label: 'Разрешения и документы',
    slug: 'permits',
    faqs: [
      {
        q: 'Вы занимаетесь разрешениями на строительство?',
        a: 'Да. Для проектов с изменением конструктива мы ведём всю процедуру получения разрешения в соответствующем муниципалитете от вашего имени. Готовим или координируем необходимые чертежи, подаём заявление, взаимодействуем с муниципалитетом и получаем разрешение до начала любых конструктивных работ. Для жилых объектов процесс обычно занимает 4–8 недель.',
      },
      {
        q: 'Какие работы на Кипре требуют разрешения?',
        a: 'Изменения конструктива (снос или возведение стен, вмешательство в несущие элементы), изменения оболочки здания (новые окна, работы по кровле) и всё, что затрагивает общее имущество в многоквартирных домах. Косметические работы — плитка, покраска, замена кухни, обновление санузла без переноса сантехники — как правило, разрешения не требуют. Что нужно именно в вашем случае, мы скажем на выезде.',
      },
      {
        q: 'Вы работаете с коммерческой недвижимостью?',
        a: 'Да. Мы делаем отделку офисов и торговых помещений, ремонт ресторанов и обновление гостиничных номеров. У коммерческих объектов свои требования к разрешениям, и наша команда знакома с процедурой муниципального согласования. Обсудите с нами сроки — у коммерческих работ график обычно жёстче, и мы это учитываем.',
      },
      {
        q: 'В каких районах Кипра вы работаете?',
        a: 'Наша база — Лимасол, и мы покрываем весь Лимасольский район: Гермасогея, Агиос Тихонас, Потамос Гермасогеяс, Лимасол Марина, центр города и окрестности — здесь большинство наших проектов. Также берём работы в Пафосе, Ларнаке, Никосии, Айя-Напе, Протарасе и Паралимни. Helyot работает только на подконтрольной правительству территории Республики Кипр.',
      },
      {
        q: 'Поможете с программой энергосубсидий Кипра?',
        a: 'Да. Мы выполняем работы по энергомодернизации, которые попадают под государственную программу субсидий, — утепление, новые окна, солнечные системы и тепловые насосы. Оцениваем ваше право на субсидию во время выезда и готовим документы, необходимые для подачи заявки.',
      },
    ],
  },
  {
    label: 'Работа с Helyot',
    slug: 'working',
    faqs: [
      {
        q: 'Кто будет моим основным контактом?',
        a: 'До начала работ за вами закрепляется конкретный прораб. Этот человек — ваш единственный контакт на весь проект: вопросы, решения, обновления и претензии. Вы общаетесь с одним человеком, который знает ваш объект досконально. Прораб доступен в WhatsApp в рабочее время и отвечает в течение двух часов.',
      },
      {
        q: 'Как я буду узнавать о ходе работ?',
        a: 'Каждую пятницу прораб присылает фотоотчёт по всем помещениям и всем активным работам. Между отчётами вы можете написать в любой момент и приехать на объект в любое время в рабочие часы — без предварительной договорённости. Для заказчиков не на Кипре мы также созваниваемся по видео до и после ключевых этапов.',
      },
      {
        q: 'Что происходит при сдаче?',
        a: 'Мы вместе обходим каждое помещение с распечатанным списком замечаний. Вы отмечаете всё, что хотите доработать, и мы устраняем это за 5 рабочих дней за свой счёт, без обсуждений. Когда вас всё устраивает, вы подписываете акт сдачи-приёмки, вносите последние 10% и получаете ключи, все сертификаты CERA, все разрешения и гарантийный документ на 5 лет.',
      },
      {
        q: 'Можно приезжать на объект во время работ?',
        a: 'Да, в любое время в рабочие часы. Без записи и без предупреждения. Это ваша недвижимость, и вы вправе видеть, что происходит, в любой момент. Просим только надевать подходящую обувь и выполнять указания прораба по технике безопасности.',
      },
      {
        q: 'А если меня не устроит результат?',
        a: 'Сразу скажите об этом прорабу. Если речь о том, что входит в согласованный объём и спецификацию, — исправим за свой счёт. Если это вопрос личных предпочтений, расходящихся с утверждённым проектом, — обсудим варианты и договоримся, как поступить. Мы не уходим от проблем.',
      },
    ],
  },
];
