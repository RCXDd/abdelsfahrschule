import Link from "next/link";
import { MessageCircle, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { stadtteile } from "@/data/stadtteile";

export default function Footer() {
  // Group stadtteile by bezirk for organized display
  const popularStadtteile = [
    "bilk",
    "pempelfort",
    "flingern-nord",
    "duesseltal",
    "oberkassel",
    "derendorf",
    "unterbilk",
    "friedrichstadt",
    "golzheim",
    "gerresheim",
    "benrath",
    "eller",
  ];

  const popularData = popularStadtteile
    .map((slug) => stadtteile.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <footer className="bg-primary text-creme">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/4917670714319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent-yellow transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+49 176 70714319</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abdelsfahrschule.de"
                  className="flex items-center gap-3 hover:text-accent-yellow transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@abdelsfahrschule.de</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Berliner Platz 12
                  <br />
                  40880 Ratingen
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/abdelsfahrschule"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/abdelsfahrschule"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Angebote */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Angebote</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fuehrerschein-klasse-b-duesseldorf"
                  className="hover:text-accent-yellow transition-colors"
                >
                  Führerschein Klasse B
                </Link>
              </li>
              <li>
                <Link
                  href="/intensivkurs-fahrschule-duesseldorf"
                  className="hover:text-accent-yellow transition-colors"
                >
                  Intensivkurs
                </Link>
              </li>
              <li>
                <Link
                  href="/automatik-fuehrerschein-duesseldorf"
                  className="hover:text-accent-yellow transition-colors"
                >
                  Automatik-Führerschein
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
                  className="hover:text-accent-yellow transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Beliebte Stadtteile */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-display font-bold mb-6">
              Fahrschule in deinem Stadtteil
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {popularData.map(
                (stadtteil) =>
                  stadtteil && (
                    <Link
                      key={stadtteil.slug}
                      href={`/fahrschule-duesseldorf-${stadtteil.slug}`}
                      className="text-sm hover:text-accent-yellow transition-colors"
                    >
                      {stadtteil.name}
                    </Link>
                  )
              )}
            </div>
            <Link
              href="/stadtteile"
              className="inline-block mt-4 text-sm text-accent-yellow hover:text-accent-yellow/80 transition-colors"
            >
              Alle {stadtteile.length} Stadtteile anzeigen →
            </Link>
          </div>
        </div>
      </div>

      {/* All Stadtteile Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h4 className="text-sm font-semibold mb-4 text-white/70">
            Fahrschule in allen Düsseldorfer Stadtteilen
          </h4>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/50">
            {stadtteile.map((s, i) => (
              <span key={s.slug}>
                <Link
                  href={`/fahrschule-duesseldorf-${s.slug}`}
                  className="hover:text-accent-yellow transition-colors"
                >
                  {s.name}
                </Link>
                {i < stadtteile.length - 1 && (
                  <span className="ml-3">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Abdels Fahrschule. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
