/* =====================================================================
   omgitsrhirhi.com — ALL SITE CONTENT LIVES HERE
   Edit this file to update your links, stats, partners and shop.
   No coding needed: change the text between the quotes and save.
   Anything left as null or "" is hidden automatically on the site.
   ===================================================================== */

window.SITE = {
  name: "omgitsrhirhi",
  tagline: "i don't know where i'm going from here, but i can promise it won't be boring.",
  location: "Canada · everywhere in between",
  // Put a photo of yourself at assets/rhirhi.jpg (portrait/tall works best).
  photo: "assets/rhirhi.jpg",
  // Your business email for brands. Update to the inbox you check!
  email: "hello@omgitsrhirhi.com",
  // Last time you refreshed your numbers (shows on the media kit).
  statsUpdated: "November 2026",

  /* ---------- ABOUT ---------- */
  about: [
    "Hey, I'm Rhi — but the internet knows me as rhirhi. I'm a Canadian streamer, digital creator and professional rabbit-hole explorer.",
    "On Twitch I keep things cozy and chaotic in equal measure: games, good music and a community that feels like a group chat with your favourite people. Off stream, you can find me running multiple side projects, hitting up raves around the globe, and I design digital goods for other creators.",
    "I've never been great at staying in one lane. Gaming, music, nostalgia, money-saving hacks, side quests of every kind — if it's interesting, I'm probably trying it. You're invited along for the ride!"
     "I don't know where I'm going from here, but I can promise you it won't be boring!"
  ],
  aboutFacts: [
    { label: "Based in", value: "Ontario, Canada" },
    { label: "Main stage", value: "Twitch" },
    { label: "Community", value: "The Cosmic Forest" },
    { label: "Also does", value: "Digital design for creators and other side projects" }
  ],

  /* ---------- SOCIALS ----------
     followers / avgViews: type a number like "12.4K" — leave null to hide. */
  socials: [
    { platform: "Twitch",    icon: "fa-brands fa-twitch",    url: "https://twitch.tv/omgitsrhirhi",          handle: "@omgitsrhirhi", followers: 2200+, avgViews: null, primary: true },
    { platform: "TikTok",    icon: "fa-brands fa-tiktok",    url: "https://tiktok.com/@omgitsrhirhi",        handle: "@omgitsrhirhi", followers: 250+, avgViews: null },
    { platform: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com/omgitsrhirhi",      handle: "@omgitsrhirhi", followers: 860+, avgViews: null },
    { platform: "YouTube",   icon: "fa-brands fa-youtube",   url: "https://www.youtube.com/@omgitsrhirhi",   handle: "@omgitsrhirhi", followers: 450+, avgViews: null },
    { platform: "X",         icon: "fa-brands fa-x-twitter", url: "https://twitter.com/omgitsrhirhi",        handle: "@omgitsrhirhi", followers: 500+, avgViews: null },
    { platform: "Facebook",  icon: "fa-brands fa-facebook-f",url: "https://facebook.com/omgitsrhirhi",       handle: "omgitsrhirhi",  followers: 250+, avgViews: null }
  ],

  // Big link buttons in the Links section
  featuredLinks: [
    { title: "The Cosmic Forest Discord", note: "Discover new music & stream resources", url: "https://discord.gg/yZJDUx5bV8", icon: "fa-brands fa-discord" },
    { title: "Ko-fi", note: "Hire me for digital projects & stream help", url: "https://ko-fi.com/omgitsrhirhi", icon: "fa-solid fa-mug-hot" }
  ],

  /* ---------- MEDIA KIT ---------- */
  tags: ["Canada", "Twitch", "Gaming", "Music discovery", "Lifestyle", "Nostalgia", "Creator tools", "Millennial"],
  kitBio: "rhirhi is a Canadian streamer and digital creator making cozy, curious, never-boring content across gaming, music discovery, nostalgia and everyday side quests. Her community values authenticity and good recommendations — which makes them a natural fit for brands that are genuinely worth trying.",

  // Audience numbers — fill these in from your platform analytics.
  // Leave as null and the whole block hides.
  audience: {
    gender: null,   // e.g. [{ label: "Women", pct: 62 }, { label: "Men", pct: 34 }, { label: "Other", pct: 4 }]
    age: null,      // e.g. [{ label: "18–24", pct: 22 }, { label: "25–34", pct: 48 }, { label: "35–44", pct: 22 }, { label: "45+", pct: 8 }]
    countries: null // e.g. [{ label: "Canada", pct: 41 }, { label: "USA", pct: 33 }, { label: "UK", pct: 8 }, { label: "Other", pct: 18 }]
  },

  pillars: [
    { icon: "fa-solid fa-gamepad",     title: "Cozy & chaotic gaming", text: "Live gameplay, community nights and whatever weird new game just dropped." },
    { icon: "fa-solid fa-headphones",  title: "Music discovery",       text: "Indie finds and stream-safe music through The Cosmic Forest." },
    { icon: "fa-solid fa-compass",     title: "Side quests & lifestyle", text: "Nostalgia, money-saving hacks, new hobbies and the occasional detour." },
    { icon: "fa-solid fa-wand-magic-sparkles", title: "Creator tools", text: "Stream upgrades, overlays and tips for fellow creators." }
  ],

  services: [
    { title: "Sponsored streams",     text: "Integrated segments, playthroughs or dedicated sponsored streams." },
    { title: "Short-form video",      text: "TikTok, Reels and Shorts built around your product." },
    { title: "Affiliate & codes",     text: "Long-term discount codes and referral partnerships." },
    { title: "Product reviews",       text: "Honest, hands-on reviews and unboxings." },
    { title: "Digital design",        text: "Overlays, emotes and graphics for brands and creators." }
  ],
  ratesNote: "Rates and packages available on request — let's build something that fits.",

  /* ---------- PARTNERS & AFFILIATES ----------
     code: a discount code to show (or null). Group names become headings. */
  partnerGroups: [
    {
      group: "Discounts & coupons",
      items: [
        { name: "GFUEL", category: "Energy & hydration", url: "https://www.gfuel.com/RHIRHI", code: "RHIRHI" },
        { name: "Herb Approach", category: "Cannabis (Canada, 19+)", url: "https://herbapproach.com/?raf=ref5082213", code: null },
        { name: "Naked Cannabis", category: "Cannabis (Canada, 19+)", url: "https://stamped.io/ref/EFFjlTkm", code: null },
        { name: "Forage Hyperfoods", category: "Mushroom wellness", url: "https://prz.io/ZZNb5qvuG", code: null },
        { name: "Wealthsimple", category: "Investing & money", url: "https://wealthsimple.com/invite/AXTGLK", code: null }
      ]
    },
    {
      group: "Upgrade your stream",
      items: [
        { name: "Dixper", category: "Viewer interactions", url: "https://dixper.gg/omgitsrhirhi/referral", code: null },
        { name: "Blerp", category: "Sound alerts", url: "https://blerp.com/ref/omgitsrhirhi", code: null },
        { name: "Triiibe", category: "Stream avatars", url: "https://triiibe.gg/login?referer=222089", code: null }
      ]
    },
    {
      group: "Earn a little extra",
      items: [
        { name: "Microsoft Rewards", category: "Points for searching", url: "https://rewards.bing.com/welcome?rh=pQxmtIpOcyo&ref=rafsrchae", code: null },
        { name: "PaidViewpoint", category: "Paid surveys", url: "https://paidviewpoint.com/?r=omgitsrhirhi", code: null },
        { name: "Sweatcoin", category: "Get paid to walk", url: "https://sweatco.in/i/omgitsrhirhi", code: null },
        { name: "Money-Making Spreadsheet", category: "Free resource", url: "https://classic-gong-416.notion.site/Micro-Money-Making-Database-a0f8b253adee46ca920a9e257636f71a?pvs=4", code: "FREE" }
      ]
    }
  ],

  /* ---------- SHOP ----------
     Add items when you're ready. Example:
     { name: "Cosmic Forest Tee", price: "$32 CAD", image: "assets/shop/tee.jpg", url: "https://...", tag: "New" }
     While this list is empty the shop shows a "coming soon" teaser. */
  shop: []
};
