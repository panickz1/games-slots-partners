// All copy lives here so it can be moved to next-intl message files when
// PT / PT-BR / PL are added. Values marked PLACEHOLDER must be confirmed.

export const en = {
  nav: [
    { label: "Product", href: "/#product" },
    { label: "Commissions", href: "/#commissions" },
    { label: "Getting started", href: "/#start" },
    { label: "FAQ", href: "/#faq" },
  ],
  cta: {
    login: "Log in",
    register: "Become a partner",
    registerShort: "Join",
  },

  hero: {
    title: "The casino affiliate program from GameSlots",
    subtitle:
      "Send us players. We give them live tables, PvP battles and a tier shop worth coming back for, and we pay you for as long as they stay.",
    terms: ["Up to 50% RevShare", "CPA up to €400", "Paid weekly"], // PLACEHOLDER
    screenshot: { src: "/screens/lobby.webp", label: "GameSlots casino lobby" },
  },

  product: {
    label: "Product",
    title: "What your players get",
    intro:
      "Retention is what turns a sign-up into commission. These are the parts of GameSlots that keep players around.",
    items: [
      {
        title: "Tiers, achievements and the Shop",
        text: "Every bet earns XP. Ten tiers, from Bronze to Legendary, each unlocks rewards like free spins, and points go to the Shop. A reason to come back that doesn't depend on a bonus.",
        screenshot: { src: "/screens/tiers.webp", label: "GameSlots Tiers Program, Bronze to Legendary" },
      },
      {
        title: "Live casino and 5,000+ games", // PLACEHOLDER count
        text: "Live dealers, slots, table games, TV games and virtuals from 100+ providers. Whatever your audience plays, it's here, in English, Portuguese and Polish.", // PLACEHOLDER count
        screenshot: { src: "/screens/games.webp", label: "GameSlots casino games lobby" },
      },
      // Move back to first once public/screens/pvp.webp exists
      {
        title: "PvP Battles",
        text: "Players pick a slot, put up a stake and play head-to-head. It's the feature players talk about, and the one most competitors don't have.",
        screenshot: { src: "/screens/pvp.webp", label: "PvP Battles" },
      },
    ],
  },

  terms: {
    // PLACEHOLDER — confirm all four
    items: [
      { value: "50%", label: "Lifetime RevShare, top tier" },
      { value: "0", label: "Negative carryover" },
      { value: "7 days", label: "Payout cycle" },
      { value: "60 days", label: "Cookie window" },
    ],
  },

  commissions: {
    label: "Commissions",
    title: "How you get paid",
    intro: "Three models. Pick one at sign-up, and talk to your manager if your traffic needs something else.",
    calculator: {
      title: "Estimate your earnings",
      playersLabel: "New depositing players per month",
      revenueLabel: "Average net revenue per player",
      revshare: "RevShare",
      cpa: "CPA",
      monthly: "Estimated per month",
      revshareNote: "At 40% RevShare, on the players you send each month. Keeps paying while they play.", // PLACEHOLDER rate
      cpaNote: "At €250 average CPA. One-off payment per qualified player.", // PLACEHOLDER rate
      disclaimer: "Illustrative only. Actual earnings depend on GEO, traffic quality and player activity.",
      revshareRate: 0.4, // PLACEHOLDER
      cpaRate: 250, // PLACEHOLDER
    },
    table: {
      head: ["Model", "Rate", "Paid on", "Works best for"],
      // PLACEHOLDER rates
      rows: [
        ["RevShare", "25–50%, tiered by volume", "Net gaming revenue, lifetime", "SEO, content sites, communities"],
        ["CPA", "Up to €400, by GEO", "First qualifying deposit", "Paid traffic, media buying"],
        ["Hybrid", "Lower CPA + RevShare", "Both of the above", "Streamers, mixed traffic"],
      ],
      footnote: "High-volume or unusual setups (fixed fees, sponsorships): talk to us.",
    },
  },

  start: {
    label: "Getting started",
    title: "Live in a day",
    steps: [
      { title: "Apply", text: "A short form: your site or channel, GEOs and traffic sources. We reply within 24 hours." }, // PLACEHOLDER SLA
      { title: "Get set up", text: "Your manager agrees your deal and gives you tracking links and promo codes." },
      { title: "Send traffic", text: "Use our banners and landing pages, or your own. Stats update in real time." },
      { title: "Get paid", text: "Weekly, by bank transfer, e-wallet or crypto. No fees on our side." }, // PLACEHOLDER
    ],
    toolsTitle: "In your dashboard",
    tools: [
      "Tracking links with sub-IDs",
      "Personal promo codes",
      "Banners and landing pages in EN, PT and PL",
      "S2S postbacks and a stats API",
      "Real-time reports by GEO, campaign and sub-ID",
    ],
    manager: {
      title: "Talk to a person",
      text: "Every partner gets a named affiliate manager on Telegram. No ticket queues.",
      // PLACEHOLDER — replace with real manager
      name: "Manager name",
      role: "Affiliate manager",
      handle: "@gameslots_partners",
    },
  },

  faq: {
    label: "FAQ",
    title: "Questions",
    intro: "Anything else, ask your manager or email us.",
    // PLACEHOLDER answers — confirm terms before launch
    items: [
      {
        q: "Who can join?",
        a: "Website owners, streamers, social and community admins, and media buyers. We review every application and reply within 24 hours.",
      },
      {
        q: "Which commission model should I pick?",
        a: "If your traffic is organic and long-term, RevShare usually earns more. If you buy traffic and need fast payback, CPA. Hybrid sits in between. You can change model later by agreement.",
      },
      {
        q: "When and how do I get paid?",
        a: "Every week, for the previous week's earnings, once you're over €100. Bank transfer, e-wallets or crypto. We don't charge payout fees.",
      },
      {
        q: "Is there negative carryover?",
        a: "No. Each period starts at zero, so one big player win doesn't eat into next month.",
      },
      {
        q: "Which GEOs and traffic sources are allowed?",
        a: "Most GEOs where GameSlots operates, and SEO, social, streaming, PPC and email. Brand bidding and incentivised traffic aren't allowed. The full list is in the terms.",
      },
      {
        q: "How are players tracked?",
        a: "Through your tracking links (60-day cookie) and your personal promo codes, which work even without a click.",
      },
    ],
  },

  finalCta: {
    title: "Got traffic? Let's talk.",
    text: "Applying takes two minutes. You'll hear back within a day.",
  },

  footer: {
    tagline: "The affiliate program of GameSlots.",
    legal: [
      { label: "Terms & Conditions", href: "/terms/" },
      { label: "Privacy Policy", href: "/privacy/" },
      { label: "Cookie Policy", href: "/cookies/" },
    ],
    disclaimer:
      "18+. Gambling can be addictive; play responsibly. Partners must comply with local laws and advertising rules in every market they promote.",
  },

  cookie: {
    text: "We store your cookie choice on this device. No tracking cookies are set on this site.",
    policy: "Cookie Policy",
    accept: "Accept",
    decline: "Decline",
  },
};

export type Content = typeof en;
