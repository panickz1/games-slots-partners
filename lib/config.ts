// Login / register are handled by a third-party affiliate platform (TBD).
// Set these in .env.local — see .env.example.
export const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL || "#";
export const REGISTER_URL = process.env.NEXT_PUBLIC_REGISTER_URL || "#";

export const SITE_URL = "https://partners.gameslots.com"; // placeholder
export const MAIN_SITE_URL = "https://gameslots.com";

export const CONTACT = {
  email: "affiliates@gameslots.com", // placeholder
  telegram: "https://t.me/gameslots_partners", // placeholder
};

// PLACEHOLDER — legal entity details used on /terms, /privacy and /cookies
export const COMPANY = {
  name: "[Company legal name]",
  registration: "[registration number]",
  address: "[registered address]",
  licence: "[licence number and regulator]",
  jurisdiction: "[governing law, e.g. Curaçao]",
  privacyEmail: "privacy@gameslots.com",
};

export const LEGAL_UPDATED = "9 October 2026";
