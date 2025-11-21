import { Metadata } from "next";
import Link from "next/link";
import { Zap, Calendar, Clock, CheckCircle, ArrowRight, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Intensivkurs Fahrschule Düsseldorf | Führerschein in 2-4 Wochen",
  description:
    "Führerschein Intensivkurs in Düsseldorf. In nur 2-4 Wochen zum Führerschein. Tägliche Fahrstunden, kompakter Theorieblock. Jetzt anmelden!",
  keywords: [
    "Intensivkurs Fahrschule Düsseldorf",
    "Führerschein Schnellkurs Düsseldorf",
    "Crashkurs Führerschein",
    "Führerschein 2 Wochen",
    "Ferienkurs Fahrschule",
  ],
  openGraph: {
    title: "Intensivkurs Fahrschule Düsseldorf | Abdels Fahrschule",
    description: "Führerschein in 2-4 Wochen. Intensivkurs bei Abdels Fahrschule Düsseldorf.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://abdelsfahrschule.de/intensivkurs-fahrschule-duesseldorf",
  },
};

export default function IntensivkursPage() {
  const ablauf = [
    {
      week: "Woche 1",
      title: "Theorie-Intensiv",
      items: ["Täglicher Theorieunterricht", "Lernsoftware-Zugang", "Erste Fahrstunden"],
    },
    {
      week: "Woche 2",
      title: "Praxis-Start",
      items: ["2-3 Fahrstunden täglich", "Grundfahraufgaben", "Stadtverkehr"],
    },
    {
      week: "Woche 3",
      title: "Sonderfahrten",
      items: ["Überlandfahrten", "Autobahnfahrten", "Nachtfahrten"],
    },
    {
      week: "Woche 4",
      title: "Prüfungsvorbereitung",
      items: ["Theorieprüfung", "Praktische Prüfung", "Führerschein!"],
    },
  ];

  const vorteile = [
    {
      icon: Zap,
      title: "Schnell zum Ziel",
      desc: "In nur 2-4 Wochen zum Führerschein",
    },
    {
      icon: Target,
      title: "Konzentriert lernen",
      desc: "Tägliches Üben für schnellen Fortschritt",
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      desc: "Fester Fahrlehrer während des gesamten Kurses",
    },
    {
      icon: Calendar,
      title: "Flexible Termine",
      desc: "Ideal für Ferien oder Urlaubszeit",
    },
  ];

  return (
    <main className="min-h-screen bg-creme">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 canvas-aurora opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-yellow/30 text-primary text-sm font-medium mb-6">
            Schnell zum Führerschein
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6">
            <span className="text-gradient">Intensivkurs</span>
            <br />
            Fahrschule Düsseldorf
          </h1>
          <p className="text-xl md:text-2xl text-secondary-blue max-w-3xl mx-auto mb-10">
            Du brauchst den Führerschein schnell? Mit unserem Intensivkurs in
            nur 2-4 Wochen zum Ziel.
          </p>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-creme rounded-xl font-semibold text-lg shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1"
          >
            Intensivkurs anfragen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            Für wen ist der Intensivkurs geeignet?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Schüler in den Ferien",
              "Studenten zwischen Semestern",
              "Berufstätige im Urlaub",
              "Alle, die schnell den Führerschein brauchen",
            ].map((item, i) => (
              <div
                key={i}
                className="glass-premium rounded-2xl p-6 shadow-elevation-medium text-center"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="text-secondary-blue font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            Vorteile des Intensivkurses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((vorteil, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-elevation-medium">
                <vorteil.icon className="w-10 h-10 text-accent-brown mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{vorteil.title}</h3>
                <p className="text-secondary-blue text-sm">{vorteil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            So läuft der Intensivkurs ab
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ablauf.map((phase, i) => (
              <div key={i} className="relative">
                <div className="glass-premium rounded-2xl p-6 shadow-elevation-medium h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-brown text-white text-sm font-medium mb-4">
                    {phase.week}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-secondary-blue">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voraussetzungen */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
            Voraussetzungen für den Intensivkurs
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-elevation-medium">
            <ul className="space-y-4">
              {[
                "Mindestalter 17 Jahre (BF17) oder 18 Jahre",
                "2-4 Wochen Zeit am Stück",
                "Tägliche Verfügbarkeit für Fahrstunden",
                "Sehtest & Erste-Hilfe-Kurs (können wir organisieren)",
                "Motivation und Lernbereitschaft",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-secondary-blue">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Bereit für den Intensivkurs?
          </h2>
          <p className="text-xl text-secondary-blue mb-8">
            Kontaktiere uns für ein unverbindliches Beratungsgespräch und sichere
            dir deinen Platz.
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
