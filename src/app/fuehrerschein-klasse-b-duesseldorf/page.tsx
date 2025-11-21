import { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, Euro, CheckCircle, ArrowRight, BookOpen, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Führerschein Klasse B Düsseldorf | Abdels Fahrschule",
  description:
    "Führerschein Klasse B in Düsseldorf machen. Hohe Erfolgsquote, moderne Fahrzeuge, entspannte Atmosphäre. Theorie & Praxis - jetzt anmelden!",
  keywords: [
    "Führerschein Klasse B Düsseldorf",
    "PKW Führerschein Düsseldorf",
    "Führerschein machen Düsseldorf",
    "Fahrschule Klasse B",
    "Autoführerschein Düsseldorf",
  ],
  openGraph: {
    title: "Führerschein Klasse B Düsseldorf | Abdels Fahrschule",
    description:
      "Führerschein Klasse B in Düsseldorf. Hohe Erfolgsquote, moderne Fahrzeuge, entspannte Atmosphäre.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://abdelsfahrschule.de/fuehrerschein-klasse-b-duesseldorf",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Führerschein Klasse B",
  description: "Komplette Führerscheinausbildung Klasse B in Düsseldorf",
  provider: {
    "@type": "DrivingSchool",
    name: "Abdels Fahrschule",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Düsseldorf",
      addressCountry: "DE",
    },
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "Abdels Fahrschule Düsseldorf",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Düsseldorf",
        addressCountry: "DE",
      },
    },
  },
};

export default function FuehrerscheinKlasseBPage() {
  const ausbildungsinhalte = [
    {
      icon: BookOpen,
      title: "Theorieunterricht",
      items: ["12 Doppelstunden Grundstoff", "2 Doppelstunden klassenspezifisch", "Moderne Lernsoftware", "Flexible Unterrichtszeiten"],
    },
    {
      icon: Car,
      title: "Praktische Ausbildung",
      items: ["Grundfahraufgaben", "5 Überlandfahrten", "4 Autobahnfahrten", "3 Nachtfahrten"],
    },
  ];

  const kosten = [
    { label: "Grundgebühr", range: "200 - 400€" },
    { label: "Fahrstunde (45 min)", range: "45 - 65€" },
    { label: "Sonderfahrten", range: "55 - 75€" },
    { label: "Theorieprüfung", range: "ca. 25€" },
    { label: "Praktische Prüfung", range: "ca. 120€" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-creme">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 canvas-aurora opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-yellow/30 text-primary text-sm font-medium mb-6">
              PKW Führerschein
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6">
              Führerschein <span className="text-gradient">Klasse B</span>
              <br />
              in Düsseldorf
            </h1>
            <p className="text-xl md:text-2xl text-secondary-blue max-w-3xl mx-auto mb-10">
              Der klassische PKW-Führerschein. Mit uns entspannt und erfolgreich
              zum Ziel.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-creme rounded-xl font-semibold text-lg shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1"
            >
              Jetzt anmelden
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Was ist Klasse B */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  Was ist der Führerschein Klasse B?
                </h2>
                <p className="text-secondary-blue mb-4">
                  Der Führerschein Klasse B ist der Standard-PKW-Führerschein in
                  Deutschland. Mit ihm darfst du:
                </p>
                <ul className="space-y-3">
                  {[
                    "PKW bis 3.500 kg zulässige Gesamtmasse",
                    "Anhänger bis 750 kg",
                    "Kombinationen bis 3.500 kg",
                    "Motorisierte Krankenfahrstühle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-blue">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-premium rounded-2xl p-8 shadow-elevation-high">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Voraussetzungen
                </h3>
                <ul className="space-y-3 text-secondary-blue">
                  <li>• Mindestalter: 17 Jahre (BF17) oder 18 Jahre</li>
                  <li>• Sehtest</li>
                  <li>• Erste-Hilfe-Kurs (9 Stunden)</li>
                  <li>• Biometrisches Passfoto</li>
                  <li>• Antrag bei der Führerscheinstelle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ausbildungsinhalte */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Deine Ausbildung bei uns
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ausbildungsinhalte.map((inhalt, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-elevation-medium">
                  <inhalt.icon className="w-12 h-12 text-accent-brown mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">{inhalt.title}</h3>
                  <ul className="space-y-2">
                    {inhalt.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-secondary-blue">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kosten */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Kosten Führerschein Klasse B
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-elevation-medium">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="w-8 h-8 text-accent-brown" />
                <h3 className="text-xl font-bold text-primary">
                  Übliche Kosten in Düsseldorf
                </h3>
              </div>
              <div className="space-y-4">
                {kosten.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-secondary-blue">{item.label}</span>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary-blue mt-6">
                * Die Gesamtkosten hängen von der Anzahl der benötigten
                Fahrstunden ab. Kontaktiere uns für ein individuelles Angebot!
              </p>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Deine Vorteile bei Abdels Fahrschule
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Hohe Erfolgsquote",
                  desc: "Über 90% unserer Fahrschüler bestehen beim ersten Versuch",
                },
                {
                  icon: Users,
                  title: "Persönliche Betreuung",
                  desc: "Fester Fahrlehrer für deine gesamte Ausbildung",
                },
                {
                  icon: Clock,
                  title: "Flexible Zeiten",
                  desc: "Fahrstunden auch abends und am Wochenende möglich",
                },
              ].map((vorteil, i) => (
                <div
                  key={i}
                  className="glass-premium rounded-2xl p-6 shadow-elevation-medium text-center"
                >
                  <vorteil.icon className="w-12 h-12 text-accent-brown mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {vorteil.title}
                  </h3>
                  <p className="text-secondary-blue text-sm">{vorteil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Starte jetzt mit dem Führerschein Klasse B
            </h2>
            <p className="text-xl text-secondary-blue mb-8">
              Melde dich an und beginne deine Ausbildung bei Abdels Fahrschule
              in Düsseldorf.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-creme rounded-xl font-semibold text-lg shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1"
            >
              Kostenlos anfragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
