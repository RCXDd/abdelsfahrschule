import { Metadata } from "next";
import {
  getStadtteilBySlug,
  getNearbyStadtteile,
  getAllStadtteilSlugs,
} from "@/data/stadtteile";
import StadtteilContent from "@/components/StadtteilContent";

// Generate static params for all stadtteile
export async function generateStaticParams() {
  return getAllStadtteilSlugs().map((stadtteil) => ({
    stadtteil,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadtteil: string }>;
}): Promise<Metadata> {
  const { stadtteil } = await params;
  const data = getStadtteilBySlug(stadtteil);

  if (!data) {
    return {
      title: "Fahrschule nicht gefunden",
    };
  }

  const title = `Fahrschule ${data.name} Düsseldorf | Abdels Fahrschule`;
  const description = `Deine Fahrschule in ${data.name}, Düsseldorf. Führerschein Klasse B mit hoher Erfolgsquote. Moderne Fahrzeuge, flexible Termine & entspannte Atmosphäre. Jetzt anmelden!`;

  return {
    title,
    description,
    keywords: [
      `Fahrschule ${data.name}`,
      `Fahrschule Düsseldorf ${data.name}`,
      `Führerschein ${data.name}`,
      `Fahrschule ${data.plz[0]}`,
      "Fahrschule Düsseldorf",
      "Führerschein Klasse B",
      ...data.keywords,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
    },
    alternates: {
      canonical: `https://abdelsfahrschule.de/fahrschule-duesseldorf-${stadtteil}`,
    },
  };
}

// JSON-LD Schema for LocalBusiness
function generateSchema(stadtteil: { name: string; slug: string; plz: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: `Abdels Fahrschule`,
    description: `Fahrschule für ${stadtteil.name} und Düsseldorf. Führerschein Klasse B mit entspannter Atmosphäre und hoher Erfolgsquote. Standort in Ratingen.`,
    url: `https://abdelsfahrschule.de/fahrschule-duesseldorf-${stadtteil.slug}`,
    telephone: "+49 176 70714319",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Berliner Platz 12",
      addressLocality: "Ratingen",
      postalCode: "40880",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.2970,
      longitude: 6.8494,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Düsseldorf",
      },
      {
        "@type": "City",
        name: "Ratingen",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/abdelsfahrschule",
      "https://www.facebook.com/abdelsfahrschule",
    ],
  };
}

export default async function StadtteilPage({
  params,
}: {
  params: Promise<{ stadtteil: string }>;
}) {
  const { stadtteil } = await params;
  const data = getStadtteilBySlug(stadtteil);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Stadtteil nicht gefunden</h1>
      </div>
    );
  }

  const nearbyStadtteile = getNearbyStadtteile(stadtteil);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchema(data)),
        }}
      />
      <StadtteilContent data={data} nearbyStadtteile={nearbyStadtteile} />
    </>
  );
}
