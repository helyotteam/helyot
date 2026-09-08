import type { APIRoute } from 'astro';

/**
 * Robots policy: open to all search engines AND all AI crawlers.
 * Being cited by AI assistants (ChatGPT, Claude, Perplexity, Gemini)
 * is a first-class acquisition channel for Helyot.
 */
export const GET: APIRoute = () => {
  const content = `# helyot.com — welcome, humans and machines
User-agent: *
Allow: /
Disallow: /netlify/

# AI assistants & their crawlers — explicitly welcome
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: meta-externalagent
Allow: /

Sitemap: https://helyot.com/sitemap.xml
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain' } });
};
