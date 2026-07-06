export const SITE = {
  name: 'Phantasia Creative Works',
  shortName: 'Phantasia',
  domain: 'https://phantasiacreative.com',
  description:
    'A custom 3D studio transforming ideas into reality. Character sculpting, product design, and game-ready assets.',
  email: 'hello@phantasiacreative.com',
  // Pre-filled opener so visitors never face a blank chat box — edit the text freely.
  whatsapp:
    'https://wa.me/6287787524223?text=' +
    encodeURIComponent("Hi! I'd like to start a project with Phantasia."),
  instagram: 'https://instagram.com/phantasiacreativeworks',
  youtube: 'https://www.youtube.com/@PhantasiaCreative',
  locale: 'en_US',
  location: 'South Tangerang, Indonesia',
  ga4: 'G-PXMJL5R1RG',
  // Cloudflare Web Analytics: paste the token from your CF dashboard (Analytics → Web Analytics).
  // Leave empty to disable. Loads in production only.
  cloudflareToken: '',
  // Brief form endpoint: sign up free at formspree.io, create a form, paste its
  // endpoint here (looks like https://formspree.io/f/abcdwxyz). Empty = form page
  // shows WhatsApp/email fallback instead.
  formEndpoint: 'https://formspree.io/f/mwvdyzne',
  ogImage: '/assets/og-image.jpg',
  twitter: 'https://x.com/PhantasiaWorks',
  twitterHandle: '@PhantasiaWorks',
  founded: '2024',
};

export const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Availability', href: '/#availability' },
];

export const POSTS_PER_PAGE = 9;

// Availability slots shown on the homepage. Update these as work moves —
// fill is % complete for in-progress slots; omit fill (or set open: true) for open slots.
export const SLOTS = [
  { open: false, fill: 80 },
  { open: false, fill: 50 },
  { open: false, fill: 20 },
  { open: true },
  { open: true },
];
