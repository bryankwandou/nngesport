/**
 * English twin of `nng.ts`.
 *
 * Same shape, same numbers, same links. Only the prose changes. The type
 * assertion at the bottom of this file is what keeps the two from drifting:
 * add a field on one side and the compiler stops the build until the other
 * side catches up.
 *
 * Figures are written the English way here. Indonesian uses a dot for
 * thousands, English uses a comma, and a reader who sees "9.660" in an English
 * sentence will read it as nine point six.
 */

import type * as ID from "./nng";

export const site = {
  url: "https://nngesport.vercel.app",
  name: "NNG Esport",
  locale: "en_US",
};

export const org = {
  name: "NNG Esport",
  shortName: "NNG",
  displayName: "NNG FAM",
  tagline: "Out of Abepura, toward a bigger stage",
  founded: "2017",
  base: "Abepura, Jayapura, Papua",
  country: "Indonesia",
  intro:
    "NNG grew out of a plain habit: play, record, upload, repeat. It was never " +
    "funded into existence or planned in a boardroom. It came from a patchy " +
    "connection in Abepura and a refusal to skip a day.",
  longIntro:
    "Fifty-seven thousand uploads across three channels is not the residue of one " +
    "viral clip. It is the sum of thousands of ordinary days worked with nobody " +
    "watching, of channels that were wiped by platform penalties and reopened at " +
    "zero followers, and of the distance between Papua and the industry's centre " +
    "being treated as work to be done rather than a reason to stop.",
};

export const snapshotDate = "8 August 2026";
export const snapshotDateInstagram = "9 August 2026";

export const accountStats = {
  esport: {
    handle: "@nng_esport",
    nickname: "NNG FAM",
    followers: 9660,
    following: 6315,
    likes: 4428,
    videos: 8381,
    friends: 2751,
    avatar: "/img/nng-esport-avatar.jpg",
    bio: "NNG E-SPORT\nEst. 2017\nMLBB, PUBG, VALO",
    href: "https://www.tiktok.com/@nng_esport",
  },
  store: {
    handle: "@nng_store",
    nickname: "NNG Store",
    followers: 2307,
    following: 42,
    likes: 2050,
    videos: 6648,
    friends: 15,
    avatar: "/img/nng-store-avatar.jpg",
    bio: "NNG Store x @nayrbryanGaming Official\nNow or Never\nTokopedia, TikTok, Shopee",
    href: "https://www.tiktok.com/@nng_store",
  },
  founder: {
    handle: "@nayrbryanGaming",
    nickname: "nayrbryanGaming",
    followers: 75100,
    following: 4778,
    likes: 358800,
    videos: 42800,
    friends: 2129,
    avatar: "/img/nayrbryangaming-avatar.jpg",
    bio: "Est 10 Jan 2018\nNNG Esport\nCreating since 2010",
    href: "https://www.tiktok.com/@nayrbryangaming",
  },
};

export const motto = "Now or Never";

export const instagramAccounts = [
  {
    handle: "@nayrbryan_gaming",
    href: "https://www.instagram.com/nayrbryan_gaming/",
    fullName: "nayrbryanGaming",
    bio: "Trading psychology & discipline\nMarket insights | Risk management\nBuild consistency, not hype\nContent creator since 2010\nCEO | NNG Trading Community",
    followers: 1514,
    following: 2292,
    posts: 3867,
    avatar: "/img/nayrbryan-gaming-instagram.jpg",
    note: "Founder's channel",
  },
];

export const tradingCommunity = {
  name: "NNG Trading Community",
  lead: "nayrbryanGaming",
  focus: "Trading psychology, discipline, and risk management",
  source: "https://www.instagram.com/nayrbryan_gaming/",
};

export const leadership = [
  {
    role: "Founder & CEO",
    handle: "nayrbryanGaming",
    displayName: "nayrbryanGaming",
    legalName: "Muhammad S. Vino Bryan Soeharto",
    initials: "NB",
    bio:
      "The face most often seen across NNG's channels. Posting to YouTube since 2017 " +
      "and TikTok since 2018, with a range running from Growtopia and PUBG through to " +
      "Genshin Impact. More recent work splits across podcasting, CapCut templates, " +
      "NFT art, and VTubing.",
    quote: "Build consistency, not hype.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@nayrbryanGamingOfficial" },
      { label: "TikTok", href: "https://www.tiktok.com/@nayrbryangaming" },
      { label: "Instagram", href: "https://www.instagram.com/nayrbryan_gaming/" },
      { label: "Threads", href: "https://www.threads.com/@nayrbryan_gaming" },
      { label: "X", href: "https://x.com/GamingNayrbryan" },
      { label: "objkt", href: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5" },
    ],
    stats: [
      { label: "TikTok followers", value: "75,100" },
      { label: "TikTok uploads", value: "42,800" },
      { label: "Instagram followers", value: "1,514" },
    ],
  },
  {
    role: "Co-Founder",
    handle: "bryan_kwandou",
    displayName: "Bryan Kwandou",
    initials: "BK",
    bio:
      "Describes himself as a content creator since 2010. Outside NNG the work covers " +
      "streaming, freelance jobs, NFT art, and photography.",
    quote:
      "A real champion does not train until they get it right once. They train until it is hard to get it wrong.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
    links: [
      { label: "Threads", href: "https://www.threads.com/@bryan_kwandou" },
      { label: "Instagram", href: "https://www.instagram.com/bryan_kwandou/" },
    ],
    stats: [
      { label: "Threads followers", value: "132" },
      { label: "Years creating", value: "16" },
    ],
  },
];

export const divisions = [
  {
    game: "Mobile Legends: Bang Bang",
    code: "MLBB",
    blurb:
      "The busiest division, and the only one that has produced an official creator partnership.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    game: "PUBG Mobile",
    code: "PUBG",
    blurb: "The earliest title on the channels, still running since the first stretch.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    game: "Valorant",
    code: "VALO",
    blurb: "The youngest division, and the only one played on a desktop rather than a phone.",
    competitive: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
];

export const otherTitles = [
  { game: "Free Fire", code: "FF" },
  { game: "Growtopia", code: "GT" },
  { game: "Genshin Impact", code: "GI" },
];


export const timeline = [
  {
    year: "2010",
    title: "Ground zero",
    body:
      "The habit of making content starts. No team name yet, no crest, just recordings " +
      "of whatever was being played.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
  },
  {
    year: "2017",
    title: "NNG E-Sport is founded",
    body:
      "The year the official account gives as the organisation's starting point. The first " +
      "long-form channel runs the same year, with Growtopia and PUBG filling most of the uploads.",
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    year: "2021",
    title: "The merch line opens",
    body:
      "@nng_store starts up as the commercial side, selling through Tokopedia, TikTok, and " +
      "Shopee under the motto Now or Never.",
    verified: true,
    source: "https://www.tiktok.com/@nng_store",
  },
  {
    year: "2018",
    title: "The rhythm moves to TikTok",
    body:
      "Short form gets tried and turns out to suit gameplay clips far better than long video does.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2024",
    title: "Rebuilt from nothing",
    body:
      "Three earlier channels are lost to platform penalties. The channels running today are " +
      "the result of starting again at one follower.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2024",
    title: "Podcast and templates",
    body:
      "The podcast goes live on Spotify. Self-made CapCut templates get picked up by other creators.",
    verified: true,
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    year: "2025",
    title: "Mobile Legends partnership",
    body: "An official post marks a creator partnership with Mobile Legends: Bang Bang.",
    verified: true,
    source: "https://www.threads.com/@nayrbryan_gaming/post/DIij_H1xG51/",
  },
  {
    year: "2026",
    title: "NNG stands up as an organisation",
    body:
      "Leadership roles start being stated openly. @nng_esport and the @nng_store merch line " +
      "run side by side.",
    verified: true,
    source: "https://www.threads.com/@bryan_kwandou",
  },
];

export const channels = [
  {
    platform: "TikTok",
    handle: "@nng_esport",
    href: "https://www.tiktok.com/@nng_esport",
    note: "Main organisation channel",
    stat: "9,660 followers · 8,381 uploads",
    primary: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_esport",
  },
  {
    platform: "TikTok",
    handle: "@nng_store",
    href: "https://www.tiktok.com/@nng_store",
    note: "Merch line",
    stat: "2,307 followers · 6,648 uploads",
    primary: true,
    verified: true,
    source: "https://www.tiktok.com/@nng_store",
  },
  {
    platform: "Instagram",
    handle: "@nngstoreofficial",
    href: "https://www.instagram.com/nngstoreofficial/",
    note: "Product storefront",
    primary: true,
    verified: true,
    source: "https://www.instagram.com/nngstoreofficial/",
  },
  {
    platform: "TikTok",
    handle: "@nayrbryanGaming",
    href: "https://www.tiktok.com/@nayrbryangaming",
    note: "Founder's channel",
    verified: true,
    source: "https://www.tiktok.com/@nayrbryangaming/video/7460425277848521992",
  },
  {
    platform: "YouTube",
    handle: "nayrbryanGaming",
    href: "https://www.youtube.com/@nayrbryanGamingOfficial",
    note: "Long-form archive",
    verified: true,
  },
  {
    platform: "Instagram",
    handle: "@nayrbryan_gaming",
    href: "https://www.instagram.com/nayrbryan_gaming/",
    note: "Founder's day-to-day",
    verified: true,
  },
  {
    platform: "Threads",
    handle: "@bryan_kwandou",
    href: "https://www.threads.com/@bryan_kwandou",
    note: "Co-founder's notes",
    verified: true,
  },
  {
    platform: "objkt",
    handle: "NFT collection",
    href: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5",
    note: "Digital work on the Tezos network",
    verified: true,
  },
];

export const roster: ID.Player[] = [];

export const openSlots = [
  { role: "Gold Laner", division: "MLBB" },
  { role: "EXP Laner", division: "MLBB" },
  { role: "Mid Laner", division: "MLBB" },
  { role: "Jungler", division: "MLBB" },
  { role: "Roamer", division: "MLBB" },
];

export const achievements: ID.Achievement[] = [];

export const milestones = [
  {
    label: "Mobile Legends creator partner",
    year: "2025",
    detail: "An official partnership with Mobile Legends: Bang Bang.",
    source: "https://www.threads.com/@nayrbryan_gaming/post/DIij_H1xG51/",
  },
  {
    label: "Spotify podcast",
    year: "2024",
    detail: "An audio channel running alongside the video ones.",
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    label: "CapCut templates",
    year: "2024",
    detail: "Self-made editing templates picked up by other creators.",
    source: "https://www.youtube.com/@nayrbryanGamingOfficial",
  },
  {
    label: "NFT work on Tezos",
    year: "2024",
    detail: "A digital collection published on objkt.",
    source: "https://objkt.com/users/tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5",
  },
];


export const nav = [
  { label: "Home", href: "/en" },
  { label: "History", href: "/en/sejarah" },
  { label: "Roster", href: "/en/roster" },
  { label: "Achievements", href: "/en/prestasi" },
  { label: "Store", href: "/en/toko" },
  { label: "Channels", href: "/en/kanal" },
  { label: "Contact", href: "/en/kontak" },
];

export const storeChannels = [
  {
    platform: "Instagram",
    handle: "@nngstoreofficial",
    href: "https://www.instagram.com/nngstoreofficial/",
    note: "Product storefront",
  },
  {
    platform: "TikTok",
    handle: "@nng_store",
    href: "https://www.tiktok.com/@nng_store",
    note: "Product demos and shopping streams",
  },
];

export const storeCategories = [
  {
    name: "Match jerseys",
    detail: "The kit worn in competition, usually released to follow the season.",
  },
  {
    name: "Everyday tees",
    detail: "A looser cut with a smaller crest, made for ordinary wear.",
  },
  {
    name: "Headwear",
    detail: "Caps and beanies with the shield crest embroidered.",
  },
  {
    name: "Desk gear",
    detail: "Mousepads, keyrings, and stickers that come with an order.",
  },
];

export const contact = {
  general:
    "Partnerships, sponsorships, and interview requests go through direct messages on the official channels.",
  preferred: [
    { label: "TikTok @nng_esport", href: "https://www.tiktok.com/@nng_esport" },
    { label: "Instagram @nngstoreofficial", href: "https://www.instagram.com/nngstoreofficial/" },
    { label: "Threads @bryan_kwandou", href: "https://www.threads.com/@bryan_kwandou" },
  ],
};

/*
  The guard. Every export above is checked against its Indonesian counterpart,
  so the two files cannot drift apart without the build failing first.
*/
type Shape = {
  [K in keyof typeof ID]: unknown;
};
const _parity: Record<keyof Shape, true> = {
  site: true, org: true, snapshotDate: true, snapshotDateInstagram: true,
  accountStats: true, motto: true, instagramAccounts: true, tradingCommunity: true,
  leadership: true, divisions: true, otherTitles: true,
  timeline: true, channels: true, roster: true, openSlots: true,
  achievements: true, milestones: true, nav: true,
  storeChannels: true, storeCategories: true, contact: true,
};
void _parity;
