/**
 * Article helpers.
 *
 * `minuteRead` used to be typed by hand into every frontmatter block and had
 * drifted badly — 32 of 43 posts were out by three minutes or more, several
 * claiming 8–9 minutes for two hundred words. On a site whose whole pitch is
 * that its numbers hold, a made-up number in the byline is the cheapest way to
 * lose a reader. It is derived from the text now, so it cannot drift again.
 */
const WPM = 180;

/** Strips markdown noise so the count reflects prose, not syntax. */
export function readingMinutes(body: string): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s*\|.*\|\s*$/gm, m => m.replace(/[|\-:]/g, ' '))
    .replace(/[#*_>`]/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}

export interface FaqPair { q: string; a: string; }

/**
 * Pulls the question/answer pairs out of an article's FAQ section so they can
 * be published as FAQPage. Twelve articles already carry a real FAQ; none of
 * them was machine-readable. Matches the house format:
 *
 *   ## Частые вопросы
 *   **Question?**
 *   Answer paragraph.
 */
export function extractFaq(body: string): FaqPair[] {
  const heading = /^##\s+(Частые вопросы|Frequently asked questions|FAQ)\s*$/im;
  const m = body.match(heading);
  if (!m || m.index === undefined) return [];
  const after = body.slice(m.index + m[0].length);
  const section = after.split(/^##\s+/m)[0];

  const pairs: FaqPair[] = [];
  const re = /^\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=\n\*\*|$)/gm;
  let x: RegExpExecArray | null;
  while ((x = re.exec(section)) !== null) {
    const q = x[1].trim();
    const a = x[2].replace(/\s+/g, ' ').trim();
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}
