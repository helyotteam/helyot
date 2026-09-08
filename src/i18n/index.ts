import { en } from './en';
import { ru } from './ru';

export type Lang = 'en' | 'ru';

const translations = { en, ru } as const;

export function t(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'ru') return 'ru';
  return 'en';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'ru') {
    return path.startsWith('/ru') ? path : `/ru${path}`;
  }
  return path.startsWith('/ru') ? path.slice(3) || '/' : path;
}

export { en, ru };
