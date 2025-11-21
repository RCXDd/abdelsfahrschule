"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Clock, Euro, CheckCircle, ArrowRight, BookOpen, Award, Users } from "lucide-react";

export default function FuehrerscheinKlasseBPage() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

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
    { label: "Fahrstunde (45 min)", range: "62€" },
    { label: "Sonderfahrten", range: "62€" },
    { label: "Vorstellung zur Theorieprüfung", range: "0€" },
    { label: "Vorstellung zur praktischen Prüfung", range: "199€" },
    { label: "Lehrmaterial", range: "55€" },
  ];

  const vorteile = [
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
  ];

  return (
    <div className="min-h-screen bg-creme selection:bg-accent-yellow selection:text-primary">
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 text-center relative max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-accent-yellow/40 text-primary text-sm font-bold mb-8 shadow-elevation-low"
          >
            PKW Führerschein
          </motion.span>

          <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-black text-primary tracking-tighter mb-8">
            FÜHRERSCHEIN
            <br />
            <span className="text-accent-brown">KLASSE B DÜSSELDORF.</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-blue max-w-2xl mx-auto font-medium mb-12">
            Der klassische PKW-Führerschein.
            <br />
            Mit uns entspannt und erfolgreich zum Ziel.
          </p>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Link
              href="/#kontakt"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-primary font-display rounded-full transition-premium hover:bg-accent-brown hover:-translate-y-1 shadow-elevation-high hover:shadow-glow shine"
            >
              <span className="mr-3 text-lg">Jetzt anmelden</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Premium Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-gradient-radial from-accent-yellow/25 via-accent-yellow/10 to-transparent rounded-full blur-[100px]" />
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-32 h-32 bg-accent-brown/20 rounded-full blur-[60px]"
          />
          <motion.div
            animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[25%] left-[10%] w-40 h-40 bg-accent-yellow/30 rounded-full blur-[80px]"
          />
        </div>
      </section>

      {/* Was ist Klasse B */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-creme to-accent-yellow/15" />
        <div className="absolute -left-10 top-10 w-80 h-80 orb" />
        <div className="absolute right-[-10%] bottom-[-5%] w-[420px] h-[420px] spotlight" />

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Was ist der
                <br />
                <span className="text-gradient">Führerschein Klasse B?</span>
              </h2>
              <p className="text-secondary-blue mb-6 text-lg">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="bg-gradient-to-br from-white to-creme/50 rounded-[2rem] p-8 border border-primary/5 shadow-elevation-high border-ambient"
            >
              <h3 className="font-display text-xl font-bold text-primary mb-6">
                Voraussetzungen
              </h3>
              <ul className="space-y-4 text-secondary-blue">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Mindestalter: 17 Jahre (BF17) oder 18 Jahre
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Sehtest
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Erste-Hilfe-Kurs (9 Stunden)
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Biometrisches Passfoto
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Antrag bei der Führerscheinstelle
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ausbildungsinhalte */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0f2740] to-primary" />
          <div className="absolute left-[-10%] top-[10%] w-[420px] h-[420px] spotlight" />
          <div className="absolute right-[-8%] bottom-[-5%] w-[360px] h-[360px] orb" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Deine Ausbildung bei uns
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {ausbildungsinhalte.map((inhalt, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="glass-dark p-8 rounded-[2rem] border border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 grid-overlay" />
                <div className="relative z-10">
                  <inhalt.icon className="w-12 h-12 text-accent-yellow mb-6" />
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{inhalt.title}</h3>
                  <ul className="space-y-3">
                    {inhalt.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-accent-yellow flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kosten */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-creme via-white to-accent-yellow/20" />
        <div className="absolute top-[-5%] right-[5%] w-[420px] h-[420px] spotlight" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Kosten Führerschein
              <br />
              <span className="text-gradient-gold">Klasse B</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 shadow-elevation-high border-ambient"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-accent-brown/20 rounded-2xl flex items-center justify-center">
                <Euro className="w-7 h-7 text-accent-brown" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">
                Unsere Preise
              </h3>
            </div>
            <div className="space-y-4">
              {kosten.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0"
                >
                  <span className="text-secondary-blue">{item.label}</span>
                  <span className="font-bold text-primary">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary-blue mt-8 p-4 bg-accent-yellow/10 rounded-xl">
              Die Gesamtkosten hängen von der Anzahl der benötigten
              Fahrstunden ab. Kontaktiere uns für eine persönliche Beratung!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute left-[-5%] top-[10%] w-[360px] h-[360px] orb" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Deine Vorteile bei
              <br />
              <span className="text-gradient">Abdels Fahrschule</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {vorteile.map((vorteil, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="bg-gradient-to-br from-white to-creme/50 rounded-[2rem] p-8 border border-primary/5 text-center shadow-elevation-medium hover:shadow-elevation-high transition-premium hover:-translate-y-2 border-ambient"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent-brown/20 transition-all duration-300">
                  <vorteil.icon className="w-7 h-7 text-accent-brown" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {vorteil.title}
                </h3>
                <p className="text-secondary-blue text-sm leading-relaxed">{vorteil.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-creme" />
        <div className="absolute left-[2%] bottom-[-5%] w-[360px] h-[360px] orb" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-elevation-high"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/10" />
            <div className="absolute inset-0 opacity-20 grid-overlay" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-accent-brown/30 rounded-full blur-[120px]" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Starte jetzt mit dem
                <br />
                <span className="text-gradient-gold">Führerschein Klasse B</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Melde dich an und beginne deine Ausbildung bei Abdels Fahrschule.
              </p>
              <Link
                href="/#kontakt"
                className="group inline-flex items-center justify-center px-10 py-5 font-bold text-primary bg-white font-display rounded-full transition-premium hover:bg-accent-yellow hover:-translate-y-1 shadow-elevation-high hover:shadow-glow-yellow shine"
              >
                <span className="mr-3 text-lg">Kostenlos anfragen</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
