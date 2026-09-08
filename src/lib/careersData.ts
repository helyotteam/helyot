export interface Career {
  id: string;
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
  requirementsEn: string[];
  requirementsRu: string[];
  schedule: string;
  salaryEn?: string;
  salaryRu?: string;
}

export const careers: Career[] = [
  {
    id: 'site-manager',
    titleEn: 'Site Manager',
    titleRu: 'Прораб / Начальник участка',
    descriptionEn: 'Lead renovation projects from start to finish. Coordinate trades, manage timelines and ensure quality standards are met on every job.',
    descriptionRu: 'Руководство ремонтными проектами от начала до сдачи. Координация субподрядчиков, контроль сроков и качества работ.',
    requirementsEn: [
      '5+ years in construction or renovation management',
      'Strong organisational and communication skills',
      'Experience with residential and commercial projects',
      'Fluent in Russian or Greek; English is a plus',
      'Valid driving licence',
    ],
    requirementsRu: [
      'Опыт в строительстве или ремонте от 5 лет',
      'Навыки организации и коммуникации',
      'Опыт в жилых и коммерческих проектах',
      'Русский или греческий; английский — плюс',
      'Водительские права',
    ],
    schedule: 'Mon–Fri, 08:00–17:00',
    salaryEn: '€2,500–€3,500 / month',
    salaryRu: '€2 500–€3 500 / мес.',
  },
  {
    id: 'tile-setter',
    titleEn: 'Tile Setter',
    titleRu: 'Плиточник',
    descriptionEn: 'Install ceramic, porcelain, and natural stone tiles in bathrooms, kitchens, and common areas to a high standard.',
    descriptionRu: 'Укладка керамической, керамогранитной и натуральной каменной плитки в ванных, кухнях и общих зонах.',
    requirementsEn: [
      '3+ years of tile installation experience',
      'Proficiency with large-format tiles and mosaics',
      'Knowledge of waterproofing methods',
      'Attention to detail and clean finish',
    ],
    requirementsRu: [
      'Опыт укладки плитки от 3 лет',
      'Работа с крупноформатной плиткой и мозаикой',
      'Знание методов гидроизоляции',
      'Аккуратность и чистота работы',
    ],
    schedule: 'Mon–Sat, 08:00–17:00',
    salaryEn: '€1,800–€2,500 / month',
    salaryRu: '€1 800–€2 500 / мес.',
  },
  {
    id: 'electrician',
    titleEn: 'Certified Electrician',
    titleRu: 'Электрик (сертифицированный)',
    descriptionEn: 'Carry out full electrical installations in renovated apartments and villas in accordance with Cyprus regulations.',
    descriptionRu: 'Полная электромонтажная разводка в квартирах и виллах в соответствии с нормами Кипра.',
    requirementsEn: [
      'Cyprus CERA electrician licence (Class A or B)',
      '3+ years installation experience',
      'Knowledge of CENELEC wiring standards',
      'Reliable and safety-conscious',
    ],
    requirementsRu: [
      'Лицензия электрика CERA Кипра (класс A или B)',
      'Опыт монтажа от 3 лет',
      'Знание стандартов CENELEC',
      'Ответственность и соблюдение техники безопасности',
    ],
    schedule: 'Mon–Fri, 08:00–17:00',
    salaryEn: '€2,000–€3,000 / month',
    salaryRu: '€2 000–€3 000 / мес.',
  },
  {
    id: 'painter',
    titleEn: 'Painter & Plasterer',
    titleRu: 'Маляр-штукатур',
    descriptionEn: 'Prepare surfaces, apply plaster, and paint interior and exterior walls to a flawless finish.',
    descriptionRu: 'Подготовка поверхностей, нанесение штукатурки и покраска внутренних и внешних стен.',
    requirementsEn: [
      '2+ years of professional painting experience',
      'Skill in decorative plaster techniques',
      'Ability to work from scaffold at height',
      'Clean and methodical working style',
    ],
    requirementsRu: [
      'Опыт профессиональной покраски от 2 лет',
      'Навыки декоративной штукатурки',
      'Работа на высоте с лесов',
      'Аккуратный и методичный подход',
    ],
    schedule: 'Mon–Sat, 07:30–16:30',
    salaryEn: '€1,600–€2,200 / month',
    salaryRu: '€1 600–€2 200 / мес.',
  },
];
