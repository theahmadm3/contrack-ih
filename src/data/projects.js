// ── Image imports ──────────────────────────────────────────────
// JETOps (jet-ops-1 to jet-ops-6)
import jetOps1 from '../assets/images/jet-ops-1.png'; // 2558×1260 — wide hero
import jetOps2 from '../assets/images/jet-ops-2.png'; // 1200×1210 — near-square
import jetOps3 from '../assets/images/jet-ops-3.png'; // 914×644   — 4:3
import jetOps4 from '../assets/images/jet-ops-4.png'; // 1206×518  — ultra-wide
import jetOps5 from '../assets/images/jet-ops-5.png'; // 1206×518  — ultra-wide
import jetOps6 from '../assets/images/jet-ops-6.png'; // 1566×1048 — 3:2 tall side

// DomesticStaffApp (dsa-1 to dsa-6)
import dsa1 from '../assets/images/dsa-1.png'; // 2258×1246 — wide hero
import dsa2 from '../assets/images/dsa-2.png'; // 2258×1246 — wide tall side
import dsa3 from '../assets/images/dsa-3.png'; // 1902×884  — wide
import dsa4 from '../assets/images/dsa-4.png'; // 1326×1086 — near-square
import dsa5 from '../assets/images/dsa-5.png'; // 1310×1272 — near-square
import dsa6 from '../assets/images/dsa-6.png'; // 1326×1086 — near-square

// ZARI (zari-1 to zari-6)
import zari1 from '../assets/images/zari-1.png'; // 2406×1254 — wide hero
import zari2 from '../assets/images/zari-2.png'; // 2510×1274 — wide tall side
import zari3 from '../assets/images/zari-3.png'; // 1614×1074 — 4:3
import zari4 from '../assets/images/zari-4.png'; // 2050×1082 — wide
import zari5 from '../assets/images/zari-5.png'; // 1614×1074 — 4:3
import zari6 from '../assets/images/zari-6.png'; // 2000×1042 — wide

// ── Gallery slot assignment guide ──────────────────────────────
// The ProjectDetail gallery layout is:
//   [0] Large hero  — best for wide landscape shots (≥2:1 ratio)
//   [1] 2×2 top-left  ─┐
//   [2] 2×2 top-right  ├─ best for near-square or 4:3 shots
//   [3] 2×2 bot-left   |
//   [4] 2×2 bot-right ─┘
//   [5] Tall side   — works with any ratio, cropped to fill

export const projects = [
  {
    slug: 'jetops',
    name: 'JETOps',
    sector: 'Aviation Operations SaaS',
    year: '2026',
    role: 'SaaS Product Build',
    duration: 'Ongoing',
    teamSize: 'In development',
    featuredOnHome: true,
    summary:
      'Aviation operations and charter coordination platform designed for private jet operators and brokers, featuring aircraft availability management, booking workflows, operational dashboards, and broker coordination tools.',
    challenge:
      'Private jet operators and brokers rely on fragmented tools — spreadsheets, WhatsApp threads, and legacy software — to manage aircraft availability, bookings, and crew. Errors are costly and coordination breakdowns directly impact revenue.',
    solution:
      'A purpose-built SaaS platform covering the full operational arc: aircraft availability calendar, booking and quote workflows, broker coordination portal, crew scheduling, and real-time operational dashboards for management oversight.',
    impact:
      'Currently in active development. Designed to reduce booking coordination time by over 70% and give operators a single source of truth for fleet status and revenue.',
    tags: ['SaaS', 'Web App', 'Mobile', 'Aviation', 'Operations'],
    coverImage: jetOps1,
    gallery: [
      jetOps1, // [0] hero — 2558×1260 wide landscape, JETOps homepage
      jetOps2, // [1] 2×2 — 1200×1210 near-square, booking form
      jetOps3, // [2] 2×2 — 914×644, broker network section
      jetOps4, // [3] 2×2 — 1206×518 ultra-wide, "Need a flight?" CTA
      jetOps5, // [4] 2×2 — 1206×518 ultra-wide, "Charter Operator?" CTA
      jetOps6, // [5] side — 1566×1048, built for charter operators grid
    ],
    liveUrl: null,
    testimonial: null,
  },
  {
    slug: 'domestic-staff-app',
    name: 'DomesticStaffApp',
    sector: 'Workforce & Household Platform',
    year: '2025',
    role: 'Platform Build',
    duration: 'Ongoing',
    teamSize: 'In development',
    featuredOnHome: true,
    summary:
      'Domestic staffing and workforce platform connecting households with verified domestic workers through onboarding, KYC verification, and operational management workflows.',
    challenge:
      'The domestic staffing market in Nigeria operates almost entirely on informal referrals, with no verification, no contracts, and no recourse when placements go wrong — for either the household or the worker.',
    solution:
      'A two-sided marketplace with rigorous KYC and background verification for workers, structured onboarding flows, contract management, payment rails, and an employer dashboard for ongoing workforce management.',
    impact:
      'Currently in active development. Addresses a significant trust gap in a market with millions of active placements annually.',
    tags: ['SaaS', 'Marketplace', 'Mobile App', 'Platform', 'KYC'],
    coverImage: dsa1,
    gallery: [
      dsa1, // [0] hero — 2258×1246 wide, landing page
      dsa4, // [1] 2×2 — 1326×1086 near-square, service personnel listing
      dsa5, // [2] 2×2 — 1310×1272 near-square, rate the app screen
      dsa6, // [3] 2×2 — 1326×1086 near-square, create ticket screen
      dsa3, // [4] 2×2 — 1902×884 wide, dashboard welcome screen
      dsa2, // [5] side — 2258×1246 wide, sign-up screen
    ],
    liveUrl: null,
    testimonial: null,
  },
  {
    slug: 'zari',
    name: 'ZARI.ng',
    sector: 'E-Commerce Platform',
    year: '2024',
    role: 'Full product build',
    duration: '6 months',
    teamSize: '5 engineers + 1 PM',
    featuredOnHome: true,
    summary:
      'Gift-based e-commerce platform with inventory automation, real-time payments, and a 3× customer base growth in six months.',
    challenge:
      'ZARI needed a gift-focused e-commerce platform that could handle real-time inventory across multiple vendors, secure payment processing for the Nigerian market, and a delightful gifting experience that worked across mobile and desktop.',
    solution:
      'A custom platform with vendor inventory sync, Paystack integration with fallback gateways, a curated catalog system, and a checkout flow optimized for gift purchases — delivery scheduling, gift notes, anonymous sender option.',
    impact:
      '3× growth in customer base within six months of launch. Average order value increased 47% after introducing curated gift bundles. Cart abandonment dropped to 18% — well below industry average.',
    tags: ['E-Commerce', 'Web App', 'Mobile App', 'Payments', 'Inventory'],
    coverImage: zari1,
    gallery: [
      zari1, // [0] hero — 2406×1254 wide, homepage collections
      zari3, // [1] 2×2 — 1614×1074, product detail modal
      zari5, // [2] 2×2 — 1614×1074, build your box products
      zari6, // [3] 2×2 — 2000×1042 wide, product detail page
      zari4, // [4] 2×2 — 2050×1082 wide, shop / gift box grid
      zari2, // [5] side — 2510×1274 wide, mobile app features
    ],
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
    sector: 'Private Aviation ERP',
    year: '2024',
    role: 'ERP + Mobile + Web',
    duration: '8 months',
    teamSize: '6 engineers + 1 PM + 1 designer',
    featuredOnHome: true,
    summary:
      'ERP and booking management system developed for a private jet charter operator, supporting aircraft operations, bookings, payments, crew coordination, and operational workflows.',
    challenge:
      "FlyBird needed to consolidate eight disconnected tools into one platform. In high-stakes aviation, booking errors, crew scheduling conflicts, and payment delays aren't just inconvenient — they're expensive.",
    solution:
      'A unified ERP covering bookings, fleet management, crew rosters, payments, and customer CRM — plus a customer-facing mobile app (iOS/Android) for quote requests, flight tracking, and concierge communication.',
    impact:
      'Booking turnaround reduced from 4 hours to 22 minutes. Crew scheduling conflicts dropped 89%. The mobile app now handles 60% of new booking enquiries.',
    tags: ['ERP', 'Operations', 'Dashboard', 'Mobile', 'Aviation'],
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
    featuredOnHome: false,
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
    featuredOnHome: false,
    summary:
      'Monitoring & Evaluation dashboard with impact tracking for a donor-funded development program.',
    challenge:
      'KDIN runs multiple donor-funded programs across Northern Nigeria. Reporting to international donors required gathering, validating, and visualizing data from over a dozen field locations — manually, monthly, and painfully.',
    solution:
      'A custom M&E platform with offline-capable mobile data collection for fieldworkers, automated impact metric calculations, and one-click donor report generation.',
    impact:
      'Monthly reporting cycle compressed from 2 weeks to 3 days. Donor confidence improved with audit-ready exports. Program leads now spend their time on program design, not data wrangling.',
    tags: ['M&E', 'NGO', 'Dashboard', 'Offline-first', 'Reporting'],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    testimonial: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featuredOnHome);

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}