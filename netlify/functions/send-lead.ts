import type { Handler } from '@netlify/functions';

/**
 * Receives leads from contact, booking, and career forms.
 *
 * Required env vars (set in Netlify dashboard):
 *   WEBHOOK_URL          — your webhook endpoint (n8n, Zapier, Make.com)
 *   TELEGRAM_BOT_TOKEN   — Telegram bot token from @BotFather
 *   TELEGRAM_CHAT_ID     — Telegram chat/group ID for notifications
 */

const WEBHOOK_URL         = process.env.WEBHOOK_URL ?? '';
const TELEGRAM_BOT_TOKEN  = process.env.TELEGRAM_BOT_TOKEN ?? '';
const TELEGRAM_CHAT_ID    = process.env.TELEGRAM_CHAT_ID ?? '';

async function sendTelegram(text: string): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
  }).catch(() => {});
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let payload: Record<string, string> = {};
  const ct = event.headers['content-type'] ?? '';

  if (ct.includes('application/json') && event.body) {
    try { payload = JSON.parse(event.body); } catch {
      return { statusCode: 400, body: 'Bad JSON' };
    }
  }

  // Remove honeypot
  delete payload['_gotcha'];

  const lines = Object.entries(payload)
    .map(([k, v]) => `*${k}*: ${String(v)}`)
    .join('\n');

  const leadType = payload.type ?? 'lead';
  const message = `🔔 *New ${leadType} — helyot.com*\n\n${lines}`;

  await sendTelegram(message);

  if (WEBHOOK_URL) {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true }),
  };
};
