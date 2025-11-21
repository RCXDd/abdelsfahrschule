"use client";

import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Calendar, Clock, CheckCircle, ArrowRight, Target, Users } from "lucide-react";

export default function IntensivkursPage() {
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
            Schnell zum Führerschein
          </motion.span>

          <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-black text-primary tracking-tighter mb-8">
            INTENSIVKURS
            <br />
            <span className="text-accent-brown">FAHRSCHULE DÜSSELDORF.</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-blue max-w-2xl mx-auto font-medium mb-12">
            Du brauchst den Führerschein schnell?
            <br />
            Mit unserem Intensivkurs in nur 2-4 Wochen zum Ziel.
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
              <span className="mr-3 text-lg">Intensivkurs anfragen</span>
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

      {/* Für wen */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-creme to-accent-yellow/15" />
        <div className="absolute -left-10 top-10 w-80 h-80 orb" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4">
              Für wen ist der
              <br />
              <span className="text-gradient">Intensivkurs geeignet?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "Schüler in den Ferien",
              "Studenten zwischen Semestern",
              "Berufstätige im Urlaub",
              "Alle, die schnell den Führerschein brauchen",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="bg-gradient-to-br from-white to-creme/50 rounded-[2rem] p-8 border border-primary/5 text-center shadow-elevation-medium hover:shadow-elevation-high transition-premium hover:-translate-y-2 border-ambient"
              >
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <p className="text-secondary-blue font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vorteile */}
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
              Vorteile des Intensivkurses
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {vorteile.map((vorteil, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="glass-dark p-8 rounded-[2rem] border border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 grid-overlay" />
                <div className="relative z-10">
                  <vorteil.icon className="w-10 h-10 text-accent-yellow mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">{vorteil.title}</h3>
                  <p className="text-blue-100 text-sm">{vorteil.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-creme via-white to-accent-yellow/20" />
        <div className="absolute top-[-5%] right-[5%] w-[420px] h-[420px] spotlight" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              So läuft der
              <br />
              <span className="text-gradient-gold">Intensivkurs ab</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ablauf.map((phase, i) => (
              <motion.div
                key={i}
                variants={gridItemVariants}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-elevation-medium border-ambient"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-accent-brown text-white text-sm font-bold mb-4">
                  {phase.week}
                </span>
                <h3 className="font-display text-xl font-bold text-primary mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-secondary-blue">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Voraussetzungen */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              Voraussetzungen
            </h2>
            <div className="bg-white rounded-[2rem] p-10 shadow-elevation-medium border-ambient">
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
                Bereit für den
                <br />
                <span className="text-gradient-gold">Intensivkurs?</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Kontaktiere uns für ein unverbindliches Beratungsgespräch und sichere dir deinen Platz.
              </p>
              <Link
                href="/#kontakt"
                className="group inline-flex items-center justify-center px-10 py-5 font-bold text-primary bg-white font-display rounded-full transition-premium hover:bg-accent-yellow hover:-translate-y-1 shadow-elevation-high hover:shadow-glow-yellow shine"
              >
                <span className="mr-3 text-lg">Jetzt anfragen</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
