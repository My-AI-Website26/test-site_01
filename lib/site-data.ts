// TODO(owner): This is the single source of truth for all business details used
// across the site (contact card, footer, JSON-LD). Verify every value below —
// address, phone, email, map coordinates, and opening hours — against the real,
// current business before launch, then update here only; every component reads
// from this file.

export const SITE_URL = "https://www.torsbeanie.co.uk"; // TODO(owner): replace with the real production domain

export const CONTACT = {
  name: "Torsbeanie",
  address: "10 Weavers Court, Halstead, Essex, CO9 2JN",
  addressLocality: "Halstead",
  addressRegion: "Essex",
  postalCode: "CO9 2JN",
  addressCountry: "GB",
  phoneDisplay: "07890 896846",
  phoneHref: "tel:+447890896846",
  email: "torsbeanie@proton.me",
  facebook: "https://facebook.com/torsbeanie",
  facebookDisplay: "facebook.com/torsbeanie",
  lat: 51.9432274,
  lng: 0.6358559,
};

export const OPENING_HOURS = {
  // Condensed line shown in the footer.
  summary: "Mon–Sat 8am–4pm · Sun 9am–2pm", // TODO(owner): confirm real hours
  // Full breakdown shown in the Contact section.
  days: [
    { day: "Monday", hours: "8:00am – 4:00pm" },
    { day: "Tuesday", hours: "8:00am – 4:00pm" },
    { day: "Wednesday", hours: "8:00am – 4:00pm" },
    { day: "Thursday", hours: "8:00am – 4:00pm" },
    { day: "Friday", hours: "8:00am – 4:00pm" },
    { day: "Saturday", hours: "8:00am – 4:00pm" },
    { day: "Sunday", hours: "9:00am – 2:00pm" },
  ],
  // schema.org openingHours format, used by the JSON-LD structured data.
  schemaFormat: ["Mo-Sa 08:00-16:00", "Su 09:00-14:00"],
};
