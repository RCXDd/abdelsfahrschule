import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { stadtteile } from "@/data/stadtteile";

export const metadata: Metadata = {
  title: "Fahrschule in allen Düsseldorfer Stadtteilen | Abdels Fahrschule",
  description:
    "Finde deine Fahrschule in deinem Düsseldorfer Stadtteil. Von Altstadt bis Wersten – wir sind überall in Düsseldorf für dich da.",
  keywords: [
    "Fahrschule Düsseldorf",
    "Fahrschule Stadtteile",
    ...stadtteile.map((s) => `Fahrschule ${s.name}`),
  ],
  alternates: {
    canonical: "https://abdelsfahrschule.de/stadtteile",
  },
};

export default function StadtteilePage() {
  // Group stadtteile by bezirk
  const bezirke = stadtteile.reduce(
    (acc, stadtteil) => {
      if (!acc[stadtteil.bezirk]) {
        acc[stadtteil.bezirk] = [];
      }
      acc[stadtteil.bezirk].push(stadtteil);
      return acc;
    },
    {} as Record<string, typeof stadtteile>
  );

  return (
    <main className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 canvas-aurora opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <MapPin className="w-12 h-12 text-accent-brown mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
            Fahrschule in <span className="text-gradient">deinem Stadtteil</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-blue max-w-3xl mx-auto">
            Wähle deinen Düsseldorfer Stadtteil und erfahre mehr über unsere
            Fahrschule in deiner Nähe.
          </p>
        </div>
      </section>

      {/* Stadtteile Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {Object.entries(bezirke).map(([bezirk, bezirkStadtteile]) => (
            <div key={bezirk} className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent-brown rounded-full" />
                {bezirk}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bezirkStadtteile.map((stadtteil) => (
                  <Link
                    key={stadtteil.slug}
                    href={`/fahrschule-duesseldorf-${stadtteil.slug}`}
                    className="group p-4 bg-white rounded-xl shadow-elevation-low hover:shadow-elevation-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-semibold text-primary group-hover:text-accent-brown transition-colors">
                      {stadtteil.name}
                    </h3>
                    <p className="text-sm text-secondary-blue mt-1">
                      {stadtteil.plz[0]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Beliebte Angebote
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/fuehrerschein-klasse-b-duesseldorf"
              className="group glass-premium rounded-2xl p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent-brown transition-colors">
                Führerschein Klasse B
              </h3>
              <p className="text-secondary-blue text-sm mb-4">
                Der klassische PKW-Führerschein
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-brown">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/intensivkurs-fahrschule-duesseldorf"
              className="group glass-premium rounded-2xl p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent-brown transition-colors">
                Intensivkurs
              </h3>
              <p className="text-secondary-blue text-sm mb-4">
                Führerschein in 2-4 Wochen
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-brown">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/automatik-fuehrerschein-duesseldorf"
              className="group glass-premium rounded-2xl p-6 shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent-brown transition-colors">
                Automatik-Führerschein
              </h3>
              <p className="text-secondary-blue text-sm mb-4">
                Entspannter fahren lernen
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-brown">
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Dein Stadtteil ist nicht dabei?
          </h2>
          <p className="text-xl text-secondary-blue mb-8">
            Kein Problem! Wir holen dich in ganz Düsseldorf ab. Kontaktiere uns
            einfach!
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-creme rounded-xl font-semibold text-lg shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1"
          >
            Jetzt anfragen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
