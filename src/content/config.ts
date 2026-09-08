import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title:         z.string(),
  /* Display headline can be long; this is what goes in <title> when it is. */
  seoTitle:      z.string().optional(),
  description:   z.string(),
  publishedDate: z.string(),
  ogImage:       z.string().optional(),
  /**
   * Editorial weight, not recency. Sorting the front page by date alone put a
   * swimming-pool guide at the top — accurate, but not what someone deciding
   * whether to renovate needs first. Higher wins; 0 means "index only".
   */
  featured:      z.number().default(0),
  minuteRead:    z.number().optional(),
  tags:          z.array(z.string()).default([]),
  area:          z.string().optional(),
  author:        z.string().default('Helyot Team'),
});

const blog_en = defineCollection({ type: 'content', schema: blogSchema });
const blog_ru = defineCollection({ type: 'content', schema: blogSchema });

const portfolioSchema = z.object({
    title:         z.string(),
    description:   z.string(),
    area:          z.string(),
    type:          z.enum(['apartment', 'villa', 'office', 'bathroom', 'kitchen']),
    sqm:           z.number(),
    duration:      z.string(),
    year:          z.number(),
    level:         z.enum(['economy', 'standard', 'premium']),
    coverImage:    z.string(),
    images:        z.array(z.string()).default([]),
    tours:         z.array(z.object({ type: z.string(), url: z.string() })).default([]),
    testimonial:   z.object({ author: z.string(), text: z.string(), rating: z.number() }).optional(),
});

const portfolio = defineCollection({ type: 'content', schema: portfolioSchema });

/* Russian portfolio mirrors the English one, same shape — kept as a separate
   collection so /ru/portfolio serves real Russian copy instead of English. */
const portfolio_ru = defineCollection({ type: 'content', schema: portfolioSchema });

export const collections = { blog_en, blog_ru, portfolio, portfolio_ru };
