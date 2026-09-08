/**
 * CINEMA — Helyot animation engine
 * GSAP 3 + ScrollTrigger + Lenis smooth scroll.
 *
 * Declarative data-attribute API (use in any .astro component):
 *
 *   data-reveal            fade-up on enter (default)
 *   data-reveal="left"     slide from left
 *   data-reveal="right"    slide from right
 *   data-reveal="scale"    scale 0.94 → 1
 *   data-reveal-delay="0.2"
 *   data-stagger-group + data-stagger-item   staggered children
 *   data-words             word-by-word mask reveal (headings)
 *   data-chars             char-by-char rise (short display lines)
 *   data-parallax="0.25"   scrub parallax (fraction of viewport)
 *   data-kenburns          slow zoom 1.12 → 1 pinned to section scroll
 *   data-hero-exit         content drifts up + fades as hero scrolls away
 *   data-count-to="50" data-count-suffix="+"
 *   data-h-scroll > data-h-track   pinned horizontal filmstrip
 *   data-magnetic          magnetic hover pull (desktop pointers only)
 *   data-line              scaleX 0 → 1 rule line
 *
 * Everything no-ops under prefers-reduced-motion.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time: number) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links must go through Lenis, not native jump
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -70 });
    });
  });
  return lenis;
}

function initReveals() {
  // New API
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
    const dir = el.dataset.reveal || 'up';
    const delay = parseFloat(el.dataset.revealDelay || '0');
    const from: gsap.TweenVars = { opacity: 0, duration: 1, ease: 'power3.out', delay };
    if (dir === 'left') from.x = -48;
    else if (dir === 'right') from.x = 48;
    else if (dir === 'scale') { from.scale = 0.94; from.y = 24; }
    else from.y = 44;
    gsap.from(el, {
      ...from,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Legacy .reveal elements (site-wide) — upgrade from IO to GSAP
  gsap.utils.toArray<HTMLElement>('.reveal:not(.visible)').forEach(el => {
    el.classList.add('visible'); // neutralise the CSS opacity:0 state
    gsap.from(el, {
      y: 36, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

function initStagger() {
  gsap.utils.toArray<HTMLElement>('[data-stagger-group]').forEach(group => {
    const items = group.querySelectorAll<HTMLElement>('[data-stagger-item]');
    if (!items.length) return;
    gsap.from(items, {
      y: 52, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.09,
      scrollTrigger: { trigger: group, start: 'top 82%', once: true },
    });
  });
}

function wrapWords(node: Node): void {
  // Recursively wrap words in masks, preserving inline elements (<em>, <span>…)
  const kids = Array.from(node.childNodes);
  kids.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent || '';
      if (!text.trim()) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
        const mask = document.createElement('span');
        mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.08em;margin-bottom:-.08em;';
        const inner = document.createElement('span');
        inner.className = 'w-in';
        inner.style.cssText = 'display:inline-block;will-change:transform;';
        inner.textContent = part;
        mask.appendChild(inner);
        frag.appendChild(mask);
      });
      child.replaceWith(frag);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapWords(child);
    }
  });
}

function initTextReveals() {
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach(el => {
    wrapWords(el);
    gsap.from(el.querySelectorAll('.w-in'), {
      yPercent: 115, duration: 0.9, ease: 'power4.out', stagger: 0.055,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-chars]').forEach(el => {
    const chars = (el.textContent || '').split('');
    el.innerHTML = chars.map(c =>
      c === ' ' ? ' ' : `<span class="c-in" style="display:inline-block;will-change:transform;">${c}</span>`
    ).join('');
    gsap.from(el.querySelectorAll('.c-in'), {
      yPercent: 60, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.022,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax || '0.25');
    const dist = window.innerHeight * speed;
    gsap.fromTo(el, { y: -dist * 0.5 }, {
      y: dist * 0.5, ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el.parentElement!,
        start: 'top bottom', end: 'bottom top', scrub: true,
      },
    });
  });
}

function initKenBurns() {
  gsap.utils.toArray<HTMLElement>('[data-kenburns]').forEach(el => {
    const section = el.closest('section') || el.parentElement!;
    gsap.fromTo(el, { scale: 1.14 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 },
    });
  });
}

function initHeroExit() {
  gsap.utils.toArray<HTMLElement>('[data-hero-exit]').forEach(el => {
    const section = el.closest('section')!;
    gsap.to(el, {
      y: -90, opacity: 0.25, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom 25%', scrub: 0.5 },
    });
  });
}

function initCounters() {
  /* The final figure is printed in the HTML, not zero: crawlers and answer
     engines read the served markup and were being told the company had
     completed 0 projects. The count-up starts from zero visually only once we
     know the animation will actually run. */
  gsap.utils.toArray<HTMLElement>('[data-count-to]').forEach(el => {
    const target = parseFloat(el.dataset.countTo || '0');
    const suffix = el.dataset.countSuffix || '';
    const isFloat = String(target).includes('.');
    const obj = { v: 0 };
    el.textContent = '0' + suffix;
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => gsap.to(obj, {
        v: target, duration: 1.8, ease: 'power2.out',
        onUpdate: () => {
          el.textContent = (isFloat ? obj.v.toFixed(1) : Math.round(obj.v).toString()) + suffix;
        },
      }),
    });
  });
}

function initHorizontalScroll() {
  gsap.utils.toArray<HTMLElement>('[data-h-scroll]').forEach(section => {
    const track = section.querySelector<HTMLElement>('[data-h-track]');
    if (!track) return;
    const dist = () => track.scrollWidth - window.innerWidth;
    if (dist() <= 0) return;
    gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: section, pin: true, scrub: 1,
        start: 'top top', end: () => '+=' + dist(),
        invalidateOnRefresh: true,
      },
    });
  });
}

function initMagnetic() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.22,
        y: (e.clientY - r.top - r.height / 2) * 0.22,
        duration: 0.4, ease: 'power2.out',
      });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1,0.45)' });
    });
  });
}

function initLines() {
  gsap.utils.toArray<HTMLElement>('[data-line]').forEach(el => {
    gsap.from(el, {
      scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'power3.inOut',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

export function initCinema() {
  if (reduced()) {
    // Kill the CSS-hidden state so content is simply visible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  initSmoothScroll();
  initReveals();
  initStagger();
  initTextReveals();
  initParallax();
  initKenBurns();
  initHeroExit();
  initCounters();
  initHorizontalScroll();
  initMagnetic();
  initLines();
}
