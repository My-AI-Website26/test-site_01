import { CONTACT, OPENING_HOURS, SITE_URL } from "@/lib/site-data";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: CONTACT.name,
    url: SITE_URL,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    sameAs: [CONTACT.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.addressLocality,
      addressRegion: CONTACT.addressRegion,
      postalCode: CONTACT.postalCode,
      addressCountry: CONTACT.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.lat,
      longitude: CONTACT.lng,
    },
    openingHours: OPENING_HOURS.schemaFormat,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
