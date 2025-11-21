import { Metadata } from "next";
import Link from "next/link";
import { Car, CheckCircle, ArrowRight, Gauge, Shield, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatik Führerschein Düsseldorf | Abdels Fahrschule",
  description:
    "Automatik Führerschein in Düsseldorf machen. Einfacher schalten, entspannter fahren. Moderne Automatik-Fahrzeuge bei Abdels Fahrschule.",
  keywords: [
    "Automatik Führerschein Düsseldorf",
    "Automatikgetriebe Führerschein",
    "Fahrschule Automatik",
    "Führerschein ohne Schalten",
    "Automatik Fahrschule Düsseldorf",
  ],
  openGraph: {
    title: "Automatik Führerschein Düsseldorf | Abdels Fahrschule",
    description: "Automatik Führerschein in Düsseldorf. Einfacher lernen, entspannter fahren.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://abdelsfahrschule.de/automatik-fuehrerschein-duesseldorf",
  },
};

export default function AutomatikFuehrerscheinPage() {
  const vorteile = [
    {
      icon: Smile,
      title: "Einfacher lernen",
      desc: "Keine Kupplung, kein Abwürgen – konzentriere dich voll auf den Verkehr",
    },
    {
      icon: Gauge,
      title: "Weniger Fahrstunden",
      desc: "Oft brauchst du weniger Übungsstunden als beim Schaltgetriebe",
    },
    {
      icon: Shield,
      title: "Entspannter fahren",
      desc: "Kein Stress beim Anfahren am Berg oder im Stadtverkehr",
    },
    {
      icon: Car,
      title: "Zukunftssicher",
      desc: "E-Autos haben kein Schaltgetriebe – Automatik ist die Zukunft",
    },
  ];

  const faqs = [
    {
      q: "Was ist der Unterschied zum normalen Führerschein?",
      a: "Der Automatik-Führerschein (Schlüsselzahl B197) erlaubt dir, auch Schaltwagen zu fahren. Du machst nur 10 Fahrstunden auf einem Schaltwagen und eine 15-minütige Testfahrt mit deinem Fahrlehrer.",
    },
    {
      q: "Ist Automatik einfacher zu lernen?",
      a: "Ja! Du musst dich nicht um Kupplung und Schalten kümmern und kannst dich voll auf den Verkehr konzentrieren. Viele Fahrschüler brauchen dadurch weniger Fahrstunden.",
    },
    {
      q: "Kann ich später auch Schaltwagen fahren?",
      a: "Mit dem B197-Führerschein darfst du auch Schaltwagen fahren. Der reine Automatik-Führerschein (B78) erlaubt nur Automatik-Fahrzeuge.",
    },
    {
      q: "Welche Fahrzeuge nutzt ihr für Automatik?",
      a: "Wir haben moderne Automatik-Fahrzeuge mit neuester Sicherheitstechnik. Die Fahrzeuge sind angenehm zu fahren und ideal zum Lernen.",
    },
  ];

  return (
    <main className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 canvas-aurora opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-yellow/30 text-primary text-sm font-medium mb-6">
            Entspannter fahren lernen
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6">
            <span className="text-gradient">Automatik</span>
            <br />
            Führerschein Düsseldorf
          </h1>
          <p className="text-xl md:text-2xl text-secondary-blue max-w-3xl mx-auto mb-10">
            Einfacher schalten, entspannter fahren. Mach deinen Führerschein auf
            Automatik.
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

      {/* Vorteile */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            Vorteile des Automatik-Führerscheins
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((vorteil, i) => (
              <div
                key={i}
                className="glass-premium rounded-2xl p-6 shadow-elevation-medium"
              >
                <vorteil.icon className="w-10 h-10 text-accent-brown mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {vorteil.title}
                </h3>
                <p className="text-secondary-blue text-sm">{vorteil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B197 Erklärung */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Die Schlüsselzahl B197
              </h2>
              <p className="text-secondary-blue mb-4">
                Seit 2021 gibt es die Schlüsselzahl B197. Damit darfst du auch
                Schaltwagen fahren, obwohl du auf Automatik gelernt hast.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3">
                Das brauchst du dafür:
              </h3>
              <ul className="space-y-3">
                {[
                  "Mindestens 10 Fahrstunden auf Schaltwagen",
                  "15-minütige Testfahrt mit Fahrlehrer",
                  "Keine zusätzliche Prüfung nötig",
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
                B197 vs. B78 – Was ist der Unterschied?
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <span className="font-bold text-green-700">B197</span>
                  <p className="text-sm text-green-600 mt-1">
                    Darfst Automatik UND Schaltwagen fahren
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <span className="font-bold text-yellow-700">B78</span>
                  <p className="text-sm text-yellow-600 mt-1">
                    Darfst NUR Automatik-Fahrzeuge fahren
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            Häufige Fragen zum Automatik-Führerschein
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-elevation-low">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-secondary-blue">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Automatik-Führerschein bei Abdels Fahrschule
          </h2>
          <p className="text-xl text-secondary-blue mb-8">
            Entspannt fahren lernen mit unseren modernen Automatik-Fahrzeugen.
            Jetzt anmelden!
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
  );
}
