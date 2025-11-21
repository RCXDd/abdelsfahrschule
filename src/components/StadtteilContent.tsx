"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stadtteil } from "@/data/stadtteile";
import { Phone, Clock, Car, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

interface StadtteilContentProps {
  data: Stadtteil;
  nearbyStadtteile: Stadtteil[];
}

export default function StadtteilContent({ data, nearbyStadtteile }: StadtteilContentProps) {
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

  const vorteile = [
    {
      icon: Car,
      title: "Moderne Fahrzeuge",
      desc: "Aktuelle VW & Mercedes mit neuester Sicherheitstechnik",
    },
    {
      icon: Users,
      title: "Entspannte Atmosphäre",
      desc: "Kein Stress, kein Druck – lerne in deinem Tempo",
    },
    {
      icon: Award,
      title: "Hohe Erfolgsquote",
      desc: "Über 90% bestehen beim ersten Versuch",
    },
    {
      icon: Clock,
      title: "Flexible Termine",
      desc: "Fahrstunden auch abends & am Wochenende",
    },
  ];

  const faqs = [
    {
      q: `Ich wohne in ${data.name} – wie läuft das ab?`,
      a: `Unser Standort ist in Ratingen, aber wir holen dich gerne direkt in ${data.name} für deine Fahrstunden ab. Theorie findet bei uns in Ratingen statt – gut erreichbar mit Auto oder ÖPNV.`,
    },
    {
      q: `Was kostet der Führerschein?`,
      a: `Die Kosten für den Führerschein Klasse B liegen bei uns im normalen Rahmen. Kontaktiere uns für ein individuelles Angebot!`,
    },
    {
      q: "Wie lange dauert die Führerscheinausbildung?",
      a: "In der Regel 3-4 Monate. Mit Intensivkurs auch schneller möglich. Wir passen uns deinem Zeitplan an.",
    },
  ];

  return (
    <div className="min-h-screen bg-creme selection:bg-accent-yellow selection:text-primary">
      <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />

      {/* Hero Section */}
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
            Fahrschule in {data.name}
          </motion.span>

          <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-black text-primary tracking-tighter mb-8">
            DEIN FÜHRERSCHEIN
            <br />
            <span className="text-accent-brown">FÜR {data.name.toUpperCase()}.</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-blue max-w-2xl mx-auto font-medium mb-12">
            Entspannt, erfolgreich und ohne Stress zum Lappen.
            <br />
            Abdels Fahrschule – von Ratingen aus für {data.name}.
          </p>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#kontakt"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-primary font-display rounded-full transition-premium hover:bg-accent-brown hover:-translate-y-1 shadow-elevation-high hover:shadow-glow shine"
            >
              <span className="mr-3 text-lg">Jetzt anmelden</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+49211XXXXXXX"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 glass-premium text-primary rounded-full font-bold text-lg shadow-elevation-medium hover:shadow-elevation-high transition-premium"
            >
              <Phone className="w-5 h-5" />
              Anrufen
            </a>
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

      {/* Vorteile Section - Bento Grid */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-creme to-accent-yellow/15" />
        <div className="absolute -left-10 top-10 w-80 h-80 orb" />
        <div className="absolute right-[-10%] bottom-[-5%] w-[420px] h-[420px] spotlight" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4">
              Das spricht für uns
              <br />
              <span className="text-gradient">– auch aus {data.name}</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {vorteile.map((vorteil, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="bg-gradient-to-br from-white to-creme/50 rounded-[2rem] p-8 border border-primary/5 flex flex-col group shadow-elevation-medium hover:shadow-elevation-high transition-premium hover:-translate-y-2 border-ambient"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-brown/20 transition-all duration-300">
                  <vorteil.icon className="w-7 h-7 text-primary group-hover:text-accent-brown transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {vorteil.title}
                </h3>
                <p className="text-secondary-blue leading-relaxed text-sm">
                  {vorteil.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leistungen Section */}
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
              Unsere Leistungen
            </h2>
            <p className="text-xl text-blue-200">
              Alles, was du für deinen Führerschein brauchst – auch wenn du aus {data.name} kommst.
            </p>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={gridItemVariants}
              className="glass-dark p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 grid-overlay" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-accent-yellow mb-6">
                  Führerschein Klasse B
                </h3>
                <ul className="space-y-4">
                  {[
                    "Theoretischer Unterricht",
                    "Praktische Fahrstunden",
                    "Prüfungsvorbereitung",
                    "Erste-Hilfe-Kurs Organisation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={gridItemVariants}
              className="glass-dark p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 grid-overlay" />
              <div className="absolute -right-10 -top-10 w-32 h-32 orb" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-accent-yellow mb-6">
                  Intensivkurse
                </h3>
                <p className="text-blue-100 mb-4">
                  In nur 2-4 Wochen zum Führerschein.
                </p>
                <ul className="space-y-4">
                  {[
                    "Tägliche Fahrstunden möglich",
                    "Kompakter Theorieblock",
                    "Schnelle Prüfungstermine",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Häufige Fragen
              <br />
              <span className="text-gradient-gold">zu {data.name}</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-elevation-medium border-ambient"
              >
                <h3 className="text-lg font-bold text-primary mb-3 font-display">
                  {faq.q}
                </h3>
                <p className="text-secondary-blue leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nearby Stadtteile */}
      {nearbyStadtteile.length > 0 && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-8">
              Auch erreichbar aus der Nähe
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyStadtteile.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/fahrschule-duesseldorf-${nearby.slug}`}
                  className="px-5 py-3 bg-white rounded-xl text-primary font-medium hover:bg-accent-yellow/30 transition-premium shadow-elevation-low hover:shadow-elevation-medium hover:-translate-y-1"
                >
                  Fahrschule {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
                Bereit für deinen
                <br />
                <span className="text-gradient-gold">Führerschein?</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Du kommst aus {data.name}? Perfekt – wir holen dich ab!
                <br />
                Melde dich jetzt an.
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
