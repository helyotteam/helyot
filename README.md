# Helyot — сайт ремонта и строительства в Лимасоле

Статический сайт на Astro 4 для компании Helyot (Кипр). Двуязычный, 416 страниц,
деплой на Netlify.

**Продакшн:** [helyot.com](https://helyot.com)

---

## Стек

| Слой | Что используется |
|---|---|
| Фреймворк | Astro 4.16, `output: 'static'` |
| Стили | Tailwind 3.4 (без базовых стилей) + scoped CSS в компонентах |
| Анимация | GSAP 3.15 + ScrollTrigger, Lenis (плавный скролл) — `src/scripts/cinema.ts` |
| Контент | Astro Content Collections, MDX |
| Формы | Netlify Functions → Telegram |
| Хостинг | Netlify |

Шрифты: Spectral (заголовки), Inter (текст), Jost (интерфейсные подписи).

---

## Запуск

Нужен Node.js 20+.

```bash
npm install
```

```bash
npm run dev
```

Откроется на `http://localhost:4321`. Сборка — `npm run build`, результат в `dist/`.

---

## Что внутри

**416 страниц**, из них:

| Раздел | Страниц | Где лежит |
|---|---|---|
| Услуга × локация | 252 | генерируется из `servicesData.ts` × `citiesData.ts` |
| Блог EN | 29 | `src/content/blog_en/` |
| Блог RU | 20 | `src/content/blog_ru/` |
| Портфолио | 4 | `src/content/portfolio/` |
| Услуги, локации, служебные | остальное | `src/pages/` |

22 услуги и 12 локаций перемножаются в матрицу посадочных страниц. Уникальность
каждой пары обеспечивают три механизма: `traitNotes.ts` (заметки «признак локации ×
услуга»), `localAngles.ts` (местные факторы с ценами) и `traitContext` в
`citiesData.ts`.

### Языки

Английский — по умолчанию, без префикса (`/services`). Русский — с префиксом
(`/ru/uslugi`). Соответствие маршрутов и переводы статей заданы в `src/i18n/ui.ts`.

---

## Структура

```
src/
├── components/
│   ├── sections/    15 секций страниц (Hero, QuoteWall, JournalPreview…)
│   ├── pages/       крупные шаблоны (ServiceDetailPage, GalleryPage)
│   ├── shared/      Header, Footer, SEO
│   └── ui/          кнопки, карточки, баннер cookie, Mascot (страницы 404)
├── content/         блог EN/RU, портфолио + config.ts (схемы)
├── i18n/            ui.ts (маршруты, соответствия статей), en.ts, ru.ts
├── layouts/         BaseLayout, BlogLayout, ServiceLayout
├── lib/             данные и утилиты — см. ниже
├── pages/           маршруты
├── scripts/         cinema.ts (GSAP + Lenis)
└── styles/          global.css, glass.css

netlify/functions/   send-lead.ts — приём заявок
```

### Ключевые файлы данных

| Файл | За что отвечает |
|---|---|
| `lib/servicesData.ts` | 22 услуги: цены, сроки, состав работ, FAQ |
| `lib/citiesData.ts` | 12 локаций + признаки (`coastal`, `older-stock`, `premium`…) |
| `lib/traitNotes.ts` | тексты «признак × услуга» для уникальности матрицы |
| `lib/localAngles.ts` | местные факторы с ценами по локации и категории |
| `lib/calculatorData.ts` | ставки калькулятора сметы |
| `lib/article.ts` | время чтения и разбор FAQ из тела статьи |

---

## Переменные окружения

Задаются в Netlify → Site settings → Environment variables. Шаблон — в `.env.example`.

| Переменная | Назначение | Обязательна |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | доставка заявок в Telegram | да |
| `TELEGRAM_CHAT_ID` | чат, куда падают заявки | да |
| `WEBHOOK_URL` | дублирование заявок во внешнюю систему | нет |
| `PUBLIC_GA_ID` | Google Analytics 4 (`G-XXXXXXXXXX`) | нет |

Аналитика подключается **только после согласия на cookie** (GDPR). Пустой
`PUBLIC_GA_ID` полностью отключает её.

Токены в репозиторий не коммитятся: `.env` в `.gitignore`.

---

## Деплой

Netlify собирает из ветки `main`:

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

Редиректы, заголовки безопасности и CSP — в `netlify.toml`.

**После первого деплоя:** отправьте тестовую заявку через форму и проверьте, что
она пришла в Telegram. Функция намеренно не показывает посетителю ошибки доставки,
поэтому молчание в чате — единственный способ заметить незаданный токен.

---

## Как добавить контент

### Статья в блог

Файл `.mdx` в `src/content/blog_en/` или `src/content/blog_ru/`:

```yaml
---
title: "Заголовок статьи"
seoTitle: "Короткий заголовок для <title>"   # если title длиннее 60 символов
description: "Мета-описание, 140–160 символов"
publishedDate: "2026-09-08"
ogImage: "/images/blog/cover.webp"
featured: 90        # больше = выше в подборках
tags: ["ремонт", "цены"]
area: "Limassol"
author: "Helyot Team"
---
```

Время чтения считается из текста автоматически — вручную его задавать не нужно.
Раздел `## Частые вопросы` (или `## Frequently asked questions`) с парами
`**Вопрос?**` + ответ автоматически превращается в разметку `FAQPage`.

Если у статьи есть перевод, добавьте пару в `BLOG_PAIRS` в `src/i18n/ui.ts` —
это включит `hreflang` и переключатель языка.

### Кейс в портфолио

Файл `.mdx` в `src/content/portfolio/`:

```yaml
---
title: "Название проекта"
area: "Germasogeia"
type: "apartment"
sqm: 95
duration: "7 недель"
year: 2026
level: "standard"
coverImage: "/images/portfolio/project.webp"
images: ["/images/portfolio/project-1.webp"]
---
```

---

## Дизайн-система

Цвета заданы в компонентах напрямую, не через CSS-переменные:

| Роль | Значение |
|---|---|
| Акцент (золото) | `#E8B86D`, светлый `#F3D5A0` |
| Фон | `#08080E`, глубокий `#06060A`, карточки `#0E0E1A` |
| Текст | `#F0F0F6`, вторичный `#9DA0B8`, приглушённый `#8288A5` |
| Линии | `rgba(255,255,255,.08)`, золотые `rgba(232,184,109,.28)` |

Радиус скругления — 4px. Анимации: только `transform` и `opacity`, ease-out,
до 300 мс, задержка в каскаде 60 мс.

---

## Что не коммитится

`node_modules/`, `dist/`, `.astro/` — воспроизводятся сборкой. `.env` — секреты.
Полный список в `.gitignore`.

Папки `_archive/`, `_media-archive/`, `.attic/` в репозитории **есть** — это архив
неиспользуемых материалов, сохранён намеренно.
