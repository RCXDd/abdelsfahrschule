"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, CheckCircle, ArrowRight, Gauge, Shield, Smile } from "lucide-react";

export default function AutomatikFuehrerscheinPage() {
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
            Entspannter fahren lernen
          </motion.span>

          <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-black text-primary tracking-tighter mb-8">
            AUTOMATIK
            <br />
            <span className="text-accent-brown">FÜHRERSCHEIN DÜSSELDORF.</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-blue max-w-2xl mx-auto font-medium mb-12">
            Einfacher schalten, entspannter fahren.
            <br />
            Mach deinen Führerschein auf Automatik.
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

      {/* Vorteile */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-creme to-accent-yellow/15" />
        <div className="absolute -left-10 top-10 w-80 h-80 orb" />
        <div className="absolute right-[-10%] bottom-[-5%] w-[420px] h-[420px] spotlight" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4">
              Vorteile des
              <br />
              <span className="text-gradient">Automatik-Führerscheins</span>
            </h2>
          </motion.div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* B197 Erklärung */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0f2740] to-primary" />
          <div className="absolute left-[-10%] top-[10%] w-[420px] h-[420px] spotlight" />
          <div className="absolute right-[-8%] bottom-[-5%] w-[360px] h-[360px] orb" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Die Schlüsselzahl
                <br />
                <span className="text-accent-yellow">B197</span>
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Seit 2021 gibt es die Schlüsselzahl B197. Damit darfst du auch
                Schaltwagen fahren, obwohl du auf Automatik gelernt hast.
              </p>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Das brauchst du dafür:
              </h3>
              <ul className="space-y-3">
                {[
                  "Mindestens 10 Fahrstunden auf Schaltwagen",
                  "15-minütige Testfahrt mit Fahrlehrer",
                  "Keine zusätzliche Prüfung nötig",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 grid-overlay" />
              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  B197 vs. B78 – Was ist der Unterschied?
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                    <span className="font-bold text-green-300">B197</span>
                    <p className="text-sm text-green-100 mt-1">
                      Darfst Automatik UND Schaltwagen fahren
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-500/20 rounded-xl border border-yellow-500/30">
                    <span className="font-bold text-yellow-300">B78</span>
                    <p className="text-sm text-yellow-100 mt-1">
                      Darfst NUR Automatik-Fahrzeuge fahren
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Häufige Fragen zum
              <br />
              <span className="text-gradient-gold">Automatik-Führerschein</span>
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
                Automatik-Führerschein
                <br />
                <span className="text-gradient-gold">bei Abdels Fahrschule</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Entspannt fahren lernen mit unseren modernen Automatik-Fahrzeugen.
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
