export const en = {
  lang: 'en',
  locale: 'en_US',
  dir: 'ltr',

  site: {
    name: 'Helyot',
    tagline: 'Premium Renovation & Repair Services in Limassol, Cyprus',
    description: 'Professional renovation and repair services in Limassol. Apartments, villas, offices. Free estimate. Licensed contractors. Call now.',
    phone: '+357 97 499 231',
    email: 'helyotteam@gmail.com',
    dataEmail: 'helyotteam@gmail.com',
    address: 'Limassol, Cyprus',
    /* Replace with the Business Profile share link. Until it is a real URL the
   rating renders as plain text rather than a link to nowhere. */
    googleMapsUrl: '',
    googleMapsRating: '4.9',
    googleMapsReviews: '47',
    whatsapp: '+35797499231',
  },

  nav: {
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About Us',
    blog: 'Blog',
    contacts: 'Contacts',
    careers: 'Careers',
    bookCall: 'Book a Call',
  },

  hero: {
    headline: 'Premium Renovation in Limassol',
    subheadline: 'From concept to handover — turnkey renovation for apartments, villas and offices.',
    cta: 'Get Free Estimate',
    ctaSecondary: 'See Portfolio',
    badge: 'Licensed & Insured',
  },

  services: {
    title: 'Our Services',
    subtitle: 'End-to-end renovation solutions tailored to your needs',
    list: [
      { slug: 'apartment-renovation', title: 'Apartment Renovation', description: 'Complete apartment makeovers — from layout redesign to final finishing.' },
      { slug: 'bathroom-renovation', title: 'Bathroom Renovation', description: 'Full bathroom and wet room renovations with premium materials.' },
      { slug: 'kitchen-renovation', title: 'Kitchen Renovation', description: 'Custom kitchen design and installation for modern living.' },
      { slug: 'office-fit-out', title: 'Office Fit-Out', description: 'Commercial and office fit-out solutions for businesses.' },
      { slug: 'villa-renovation', title: 'Villa Renovation', description: 'Luxury villa renovation and exterior works in Limassol.' },
      { slug: 'flooring', title: 'Flooring', description: 'Tile, parquet, laminate and epoxy flooring installation.' },
      { slug: 'painting', title: 'Painting & Plastering', description: 'Interior and exterior painting with durable finishes.' },
      { slug: 'plumbing', title: 'Plumbing & Electrical', description: 'Full MEP works — certified plumbers and electricians.' },
    ],
  },

  booking: {
    title: 'Book a Consultation',
    subtitle: 'Choose a convenient time and we will call you back',
    servicePlaceholder: 'Select service',
    datePlaceholder: 'Choose date',
    timePlaceholder: 'Choose time',
    namePlaceholder: 'Your name',
    phonePlaceholder: 'Phone number',
    whatsappPlaceholder: 'WhatsApp (optional)',
    submit: 'Book Now',
    success: 'We will contact you within 15 minutes!',
    timeSlots: ['10:00', '12:00', '14:00', '16:00'],
    validation: {
      name: 'Please enter your name',
      phone: 'Please enter a valid phone number',
    },
  },

  contact: {
    title: 'Contact Us',
    subtitle: 'Get a free estimate for your renovation project',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Email address',
    phonePlaceholder: 'Phone number',
    messagePlaceholder: 'Describe your project...',
    submit: 'Send Message',
    success: 'Thank you! We will get back to you shortly.',
    validation: {
      name: 'Name is required',
      email: 'Please enter a valid email address',
      phone: 'Please enter a valid phone number',
    },
  },

  testimonials: {
    title: 'Client Reviews',
    subtitle: 'What our customers say about us',
    readAll: 'Read all reviews on Google',
    averageRating: '4.85',
    reviewCount: 94,
    items: [
      { name: 'Maria K.', rating: 5, text: 'Exceptional quality and professionalism. Our apartment looks stunning. Completed on time and within budget.', date: '2024-11-10' },
      { name: 'Dmitri V.', rating: 5, text: 'Renovated our villa from top to bottom. The team was punctual, tidy, and communicated clearly throughout.', date: '2024-10-22' },
      { name: 'Anna S.', rating: 5, text: 'Kitchen and bathroom renovation was done perfectly. Highly recommend to anyone in Limassol!', date: '2024-09-15' },
      { name: 'George P.', rating: 4, text: 'Great workmanship on our office fit-out. Minor delays but the final result was worth it.', date: '2024-08-30' },
    ],
  },

  promo: {
    text: '10% discount on full renovation until',
    cta: 'Book Now',
    deadline: '2026-12-31',
  },

  footer: {
    tagline: 'Quality renovation in Limassol since 2022.',
    privacyPolicy: 'Privacy Policy',
    careers: 'Careers',
    sitemap: 'Sitemap',
    reportBug: 'Report an Error',
    reportBugSubject: 'Error report — helyot.com',
    allRights: 'All rights reserved.',
  },

  cookie: {
    title: 'We use cookies',
    description: 'We use cookies to improve your experience, analyse traffic and personalise content. You can manage your preferences below.',
    accept: 'Accept All',
    configure: 'Manage',
    decline: 'Decline',
    necessary: 'Necessary (always on)',
    analytics: 'Analytics',
    marketing: 'Marketing',
    save: 'Save Preferences',
  },

  notFound: {
    title: 'Page Not Found',
    description: 'Sorry, this page does not exist. Perhaps you were looking for one of our services?',
    backHome: 'Back to Home',
    search: 'Search the site...',
    popular: 'Popular pages',
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: 1 January 2025',
  },

  careers: {
    title: 'Careers',
    subtitle: 'Join our team of renovation professionals',
    applyNow: 'Apply Now',
    uploadResume: 'Upload CV (PDF or DOCX)',
    submit: 'Submit Application',
    salary: 'Salary',
    schedule: 'Schedule',
    requirements: 'Requirements',
    success: 'Application received! We will contact you within 2 business days.',
    fileError: 'Please upload a PDF or DOCX file only.',
  },

  blog: {
    title: 'Renovation Blog',
    subtitle: 'Tips, guides and news from our renovation experts',
    readMore: 'Read more',
    publishedOn: 'Published on',
    minuteRead: 'min read',
  },
} as const;

export type I18nStrings = typeof en;
