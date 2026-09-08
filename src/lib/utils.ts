export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(dateStr: string, locale = 'en-GB'): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CY', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
}

export function estimatedRead(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function truncate(str: string, maxLen = 160): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 3).trimEnd() + '…';
}

export function getAbsoluteUrl(path: string, base = 'https://helyot.com'): string {
  if (path.startsWith('http')) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

export function countdownParts(deadline: string): { days: number; hours: number; mins: number; secs: number } {
  const diff = Math.max(0, new Date(deadline + 'T23:59:59').getTime() - Date.now());
  return {
    days:  Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    mins:  Math.floor((diff % 3_600_000) / 60_000),
    secs:  Math.floor((diff % 60_000) / 1_000),
  };
}

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function validatePhone(val: string): boolean {
  return /^\+?[\d\s\-()]{7,20}$/.test(val.trim());
}

export function validateEmail(val: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}
