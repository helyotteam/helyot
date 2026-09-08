export const SITE = 'https://helyot.com';

export function getCanonical(path: string): string {
  return `${SITE}${path}`.replace(/\/$/, '');
}
