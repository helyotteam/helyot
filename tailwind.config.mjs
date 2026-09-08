/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Helyot Dark Design System ───────────────────────────── */
        helyot: {
          bg:       '#08080E',
          bg2:      '#0E0E1A',
          bg3:      '#141423',
          gold:     '#E8B86D',
          'gold-dim': '#B8893D',
          white:    '#F0F0F6',
          muted:    '#8080A0',
          dim:      '#50506A',
        },
        /* ── Legacy (kept for back-compat) ──────────────────────── */
        navy:  { DEFAULT: '#1C2B4A', 50: '#EEF1F7', 100: '#CDD6E8', 200: '#9BB0D4', 300: '#6989BC', 400: '#3D63A4', 500: '#1C2B4A', 600: '#172340', 700: '#111B33', 800: '#0C1326', 900: '#070D1A' },
        terra: { DEFAULT: '#C8612A', 50: '#FDF2EC', 100: '#F9DDD0', 200: '#F3BBA1', 300: '#EC9872', 400: '#E47A4A', 500: '#C8612A', 600: '#A84E22', 700: '#863D1B', 800: '#642D13', 900: '#421D0C' },
        sand:  { DEFAULT: '#C8B89A', 50: '#FAF8F5', 100: '#F2EDEA', 200: '#E6DDD5', 300: '#D9CDC0', 400: '#C8B89A', 500: '#B09D7E' },
        stone: { DEFAULT: '#717171', 50: '#FAFAFA', 100: '#F5F5F4', 200: '#E8E4DF', 300: '#D4CFC8', 400: '#A8A29E', 500: '#717171', 600: '#57534E', 700: '#44403C', 800: '#292524', 900: '#1C1917' },
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'],
        sans:    ['Inter',         'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono','monospace'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1' }],
        '9xl':  ['8rem',   { lineHeight: '1' }],
        '10xl': ['10rem',  { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'gold':       '0 8px 32px rgba(232,184,109,0.25)',
        'gold-lg':    '0 16px 48px rgba(232,184,109,0.30)',
        'card':       '0 1px 3px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.4), 0 20px 48px rgba(0,0,0,0.4)',
        'float':      '0 24px 48px rgba(0,0,0,0.5)',
        'inset':      'inset 0 0 0 1px rgba(255,255,255,0.07)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E8B86D 0%, #B8893D 100%)',
        'gradient-dark': 'linear-gradient(180deg, #08080E 0%, #0E0E1A 100%)',
        'gradient-brand': 'linear-gradient(135deg, #1C2B4A 0%, #2D4A7A 100%)',
        'gradient-terra': 'linear-gradient(135deg, #C8612A 0%, #E47A4A 100%)',
        'gradient-warm':  'linear-gradient(135deg, #FAF8F5 0%, #F2EDEA 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'grid-lines':   "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'%3E%3Cpath d='M60 0H0M0 60V0'/%3E%3C/g%3E%3C/svg%3E\")",
        'grid-loft':    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231C2B4A' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-left': 'slideLeft 0.5s ease forwards',
        'float':      'float 5s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'breathe':    'breathe 4s ease-in-out infinite',
        'scroll':     'scroll 30s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:     { from: { opacity: '0', transform: 'translateY(24px)' },  to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { from: { opacity: '0' },                                  to: { opacity: '1' } },
        slideLeft:  { from: { opacity: '0', transform: 'translateX(24px)' },  to: { opacity: '1', transform: 'translateX(0)' } },
        float:      { '0%,100%': { transform: 'translateY(0)' },              '50%': { transform: 'translateY(-12px)' } },
        shimmer:    { from: { backgroundPosition: '-200% 0' },                to:   { backgroundPosition: '200% 0' } },
        breathe:    { '0%,100%': { transform: 'scale(1)' },                   '50%': { transform: 'scale(1.03)' } },
        scroll:     { from: { transform: 'translateX(0)' },                   to:   { transform: 'translateX(-50%)' } },
        pulseGold:  { '0%,100%': { opacity: '1' },                            '50%': { opacity: '0.6' } },
      },
    },
  },
  plugins: [],
};
