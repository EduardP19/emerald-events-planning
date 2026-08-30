// Central site constants used across metadata, JSON-LD and sitemap/robots.
// TODO: replace with the real production domain once the site goes live if this changes.
export const SITE_URL = 'https://www.emeraldevent.co.uk';
export const SITE_NAME = 'Emerald Event Planning';
export const BUSINESS = {
  legalName: 'Emerald Event Planning',
  founder: 'Angelle Cassell',
  telephone: '+447498853144',
  telephoneDisplay: '07498853144',
  email: 'emeraldeventplanning2026@outlook.com',
  // Home-based sole trader — no public storefront address, service-area business.
  addressLocality: 'Walthamstow, London',
  postalCode: 'E17',
  addressRegion: 'London',
  addressCountry: 'GB',
  // Approx. coordinates for E17, London — used as the centre point for the service-area radius.
  latitude: 51.5895,
  longitude: -0.0155,
  serviceRadiusMiles: 20,
  // Real places within ~20 miles of E17 — London plus the near edges of Essex, Herts & Kent.
  areasServed: ['London', 'Essex', 'Hertfordshire', 'Kent'],
  areasServedShort: 'London and within 20 miles',
  priceRange: '££',
};

export const ENQUIRY_FORM_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=VgltJykPAk6Du_FnlrO_avqjgoYlcYpNsC0Y7KhyQ5VUNlAzTENXVVMySzJIN04xVjdNTTgwQTVVTS4u';
