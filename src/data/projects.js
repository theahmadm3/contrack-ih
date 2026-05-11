// Project portfolio — each entry feeds the homepage Work section,
// the /projects index page, and the dynamic /projects/:slug detail page.
//
// To add a project:
// 1. Drop images into src/assets/images/projects/<slug>/
// 2. Import and reference them in the `gallery` array below
// 3. Add the project object

export const projects = [
  {
    slug: 'zari',
    name: 'ZARI.ng',
    sector: 'E-commerce',
    year: '2024',
    role: 'Full product build',
    duration: '6 months',
    teamSize: '5 engineers + 1 PM',
    summary:
      'Gift-based e-commerce platform with inventory automation, real-time payments, and a 3× user base growth in six months.',
    challenge:
      'ZARI needed a gift-focused e-commerce platform that could handle real-time inventory across multiple vendors, secure payment processing for the Nigerian market, and a delightful gifting experience that worked across mobile and desktop.',
    solution:
      'We built a custom platform with a microservices architecture: vendor inventory sync, Paystack integration with fallback gateways, a curated catalog system, and a checkout flow optimized for gift purchases (delivery scheduling, gift notes, anonymous sender option).',
    impact:
      '3× growth in active users within six months of launch. Average order value increased 47% after introducing the curated gift bundles feature. Cart abandonment dropped to 18% — well below industry average.',
    tags: ['Web App', 'Payments', 'Inventory', 'Next.js', 'PostgreSQL'],
    coverImage: null, // TODO: import cover image
    gallery: [], // TODO: import gallery images
    liveUrl: 'https://zari.ng',
    testimonial: {
      quote:
        "Contrack didn't just build us a website — they built infrastructure that's scaled with us through three growth phases without breaking a sweat.",
      author: 'ZARI Founder',
    },
  },
  {
    slug: 'flybird',
    name: 'FlyBird',
    sector: 'Aviation',
    year: '2024',
    role: 'ERP + Mobile + Web',
    duration: '8 months',
    teamSize: '6 engineers + 1 PM + 1 designer',
    summary:
      'ERP and booking system for a private jet charter operator. Web + native mobile, end-to-end.',
    challenge:
      "FlyBird operates in a high-stakes environment where bookings, crew scheduling, fleet maintenance, and customer communication can't afford downtime. They needed to consolidate eight disconnected tools into one platform.",
    solution:
      'A unified ERP covering bookings, fleet management, crew rosters, and customer CRM — plus a customer-facing mobile app (iOS/Android) for quote requests, flight tracking, and in-app communication with concierge.',
    impact:
      'Booking turnaround reduced from 4 hours to 22 minutes. Crew scheduling conflicts dropped 89%. The mobile app now handles 60% of new booking enquiries.',
    tags: ['ERP', 'Mobile', 'Booking', 'React Native', 'Node.js'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
  {
    slug: 'moh40',
    name: 'Moh40',
    sector: 'Logistics',
    year: '2023',
    role: 'Dashboard + Payments',
    duration: '4 months',
    teamSize: '4 engineers',
    summary:
      'Cargo logistics dashboard with secure payment rails and live shipment visibility.',
    challenge:
      "Moh40's clients needed transparency. Cargo movements were tracked across spreadsheets, WhatsApp messages, and phone calls — leading to disputes, delayed payments, and lost shipments.",
    solution:
      'A real-time dashboard with GPS-tracked shipment status, an escrow-style payment system, automated invoicing, and a client portal where shippers can monitor cargo from pickup to delivery.',
    impact:
      'Payment cycle shortened from 21 days to 6 days on average. Dispute volume dropped 73%. Client retention improved measurably in the first quarter post-launch.',
    tags: ['Dashboard', 'Logistics', 'Fintech', 'React', 'Django'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
  {
    slug: 'kdin',
    name: 'KDIN',
    sector: 'NGO',
    year: '2023',
    role: 'M&E Platform',
    duration: '5 months',
    teamSize: '3 engineers + 1 PM',
    summary:
      'Monitoring & Evaluation dashboard with impact tracking for a donor-funded development program.',
    challenge:
      'KDIN runs multiple donor-funded programs across Northern Nigeria. Reporting to international donors required gathering, validating, and visualizing data from over a dozen field locations — manually, monthly, and painfully.',
    solution:
      'A custom M&E platform with field data collection (offline-capable mobile app for fieldworkers), automated impact metric calculations, and one-click donor report generation in the formats their funders require.',
    impact:
      'Monthly reporting cycle compressed from 2 weeks to 3 days. Donor confidence visibly improved with audit-ready exports. Program leads now spend their time on program design, not data wrangling.',
    tags: ['M&E', 'NGO', 'Dashboard', 'Offline-first', 'Reporting'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
