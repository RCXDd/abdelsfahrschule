"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, Shield, Smile, Phone, MapPin, Euro } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Marquee from "@/components/ui/Marquee";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [showRuuuhig, setShowRuuuhig] = useState(false);
  const containerRef = useRef(null);

  // "RUUUHIG" nach 2 Sekunden einblenden
  useEffect(() => {
    const timer = setTimeout(() => setShowRuuuhig(true), 800);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <SmoothScroll>
      <div ref={containerRef} className="min-h-screen flex flex-col font-sans selection:bg-accent-yellow selection:text-primary bg-creme">
        <div className="bg-noise fixed inset-0 z-50 pointer-events-none" />


        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="z-10 text-center relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] font-black text-primary tracking-tighter mb-6">
                BLEIB{" "}
                <span className="text-accent-brown cursor-default inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={showRuuuhig ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    R
                  </motion.span>
                  {"UUU".split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30, scale: 0.5 }}
                      animate={showRuuuhig ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.5 }}
                      transition={{
                        delay: showRuuuhig ? 0.2 + i * 0.15 : 0,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={showRuuuhig ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: showRuuuhig ? 0.65 : 0, duration: 0.3 }}
                  >
                    HIG.
                  </motion.span>
                </span>
                <br />
                MACH DEINEN FÜHRERSCHEIN.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-secondary-blue max-w-xl mx-auto font-medium"
            >
              Führerschein in Düsseldorf – auch wenn du Prüfungsangst hast oder dein Deutsch noch nicht perfekt ist. <br />
              Klare Struktur, geduldige Fahrlehrer, keine versteckten Kosten.
            </motion.p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="mt-12"
            >
              <Link href="#kontakt" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-primary font-display rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-premium hover:bg-accent-brown hover:-translate-y-1 shadow-elevation-high hover:shadow-glow shine">
                <span className="mr-3 text-lg">Kostenlosen Rückruf sichern</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Background with Depth */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Main glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-gradient-radial from-accent-yellow/25 via-accent-yellow/10 to-transparent rounded-full blur-[100px]" />

            {/* Floating orbs for depth */}
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
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[60%] right-[20%] w-24 h-24 bg-secondary-blue/10 rounded-full blur-[50px]"
            />

            {/* Decorative lines */}
            <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100" stroke="#C78356" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
              <path d="M100 0 C 80 100 50 100 0 0" stroke="#4D6A78" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </section>

        <Marquee items={["Düsseldorf", "Gerresheim", "Flingern", "Grafenberg", "Pempelfort", "Derendorf"]} />

        {/* Intro / Philosophy - Bento Grid Style */}
        <section id="philosophie" className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-creme to-accent-yellow/15" />
          <div className="absolute -left-10 top-10 w-80 h-80 orb" />
          <div className="absolute right-[-10%] bottom-[-5%] w-[420px] h-[420px] spotlight" />
          <div className="absolute inset-10 rounded-[48px] border border-primary/5 pointer-events-none" />

          <div className="container mx-auto relative z-10">
            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]"
            >

              {/* Main Card */}
              <motion.div
                variants={gridItemVariants}
                className="md:col-span-2 md:row-span-2 bg-primary rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white group shadow-elevation-high min-h-[400px] md:min-h-0 border-ambient"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/10" />
                <div className="absolute inset-0 opacity-25 grid-overlay" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 shadow-glow-yellow">
                      <Heart className="text-accent-yellow w-7 h-7" />
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      Führerschein ohne Stress <br />
                      <span className="text-gradient-gold">auch wenn du Angst hast.</span>
                    </h2>
                  </div>
                  <p className="text-xl text-white/80 max-w-md leading-relaxed">
                    Viele unserer Schüler haben schon Prüfungen versemmelt oder sprechen kein perfektes Deutsch.
                    Deshalb ist unsere oberste Regel: Geduld. Wir schreien nicht, wir erklären – Schritt für Schritt, in einfachem Deutsch und bei Bedarf mehrsprachig.
                  </p>
                </div>
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-accent-brown/30 rounded-full blur-[120px] group-hover:bg-accent-brown/40 transition-all duration-1000" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-[80px]" />
              </motion.div>

              {/* Secondary Card 1 */}
              <motion.div
                variants={gridItemVariants}
                className="bg-gradient-to-br from-white to-creme/50 rounded-[2rem] p-8 border border-primary/5 flex flex-col justify-between group shadow-elevation-medium hover:shadow-elevation-high transition-premium hover:-translate-y-2 min-h-[200px] md:min-h-0 border-ambient"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Sicherheit</h3>
                  <p className="text-secondary-blue leading-relaxed">
                    Du lernst auf modernen Fahrzeugen, wir zeigen dir typische Prüfersituationen und die
                    häufigsten Fehler – damit du in der Prüfung nicht überrascht wirst.
                  </p>
                </div>
              </motion.div>

              {/* Secondary Card 2 */}
              <motion.div
                variants={gridItemVariants}
                className="bg-gradient-to-br from-accent-yellow/50 to-accent-brown/20 rounded-[2rem] p-8 flex flex-col justify-between group transition-premium hover:-translate-y-2 shadow-elevation-medium hover:shadow-glow-yellow min-h-[200px] md:min-h-0 border-ambient"
              >
                <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Smile className="w-6 h-6 text-accent-brown group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Good Vibes Only</h3>
                  <p className="text-primary/80 leading-relaxed">
                    Keiner schreit, keiner lacht dich aus. Wir behandeln dich mit Respekt – egal, wie alt du bist,
                    woher du kommst oder wie gut dein Deutsch ist.
                  </p>
                </div>
              </motion.div>

              {/* Image Card / Abdel */}
              <motion.div
                variants={gridItemVariants}
                className="md:col-span-3 md:row-span-2 bg-white rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-elevation-high border-ambient"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 via-transparent to-accent-brown/5" />
                <div className="absolute inset-4 rounded-[2rem] border border-primary/5" />
                <div className="flex-1 relative z-10">
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">"Hi, ich bin Abdel."</h3>
                  <p className="text-lg text-secondary-blue mb-8 leading-relaxed">
                    Ich bin nicht der typische strenge Fahrlehrer, den du vielleicht aus Erzählungen kennst.
                    Viele meiner Schüler kommen aus verschiedenen Ländern, sprechen nicht perfekt Deutsch oder sind schon 1–2 Mal durchgefallen.
                    Meine Aufgabe ist es, dich sicher durch Theorie und Praxis zu bringen – mit Respekt, Humor, einem klaren Plan und Erklärungen, die du wirklich verstehst.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-gradient-to-r from-accent-yellow/60 to-accent-yellow/30 px-5 py-2.5 rounded-full font-bold text-primary text-sm shadow-elevation-low border border-accent-yellow/20">#DüsseldorfOriginal</div>
                    <div className="bg-gradient-to-r from-accent-brown/20 to-accent-brown/10 px-5 py-2.5 rounded-full font-bold text-accent-brown text-sm shadow-elevation-low border border-accent-brown/20">#GeduldsprobeBestanden</div>
                  </div>
                </div>
                <div className="flex-1 relative h-full min-h-[300px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/30 to-accent-brown/20 rounded-full blur-[80px] animate-float-enhanced" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-72 h-72 bg-primary rounded-full border-[10px] border-white overflow-hidden relative shadow-elevation-high">
                      <Image src="/logo.png" alt="Abdel" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Process Section - The "Roadmap" */}
        <section id="ablauf" className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0f2740] to-primary" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            <div className="absolute left-[-10%] top-[10%] w-[420px] h-[420px] spotlight" />
            <div className="absolute right-[-8%] bottom-[-5%] w-[360px] h-[360px] orb" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">Dein Weg zum Führerschein</h2>
              <p className="text-xl text-blue-200">
                In 3 klaren Schritten – von der Anmeldung bis zur bestandenen Prüfung.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-yellow via-accent-brown to-accent-yellow -translate-x-1/2" />

              <ProcessItem
                step="01"
                title="Anmeldung & Basics"
                desc="Wir klären gemeinsam deine Situation, helfen dir beim Papierkram und richten deine Lern-App ein – damit du sofort weißt, was als Nächstes kommt."
                align="left"
              />
              <ProcessItem
                step="02"
                title="Theorie & Praxis – verständlich"
                desc="Du lernst mit App und im Unterricht – in einfachem Deutsch und bei Bedarf mehrsprachig. In der Praxis fahren wir die typischen Prüfungsstrecken und üben genau die Situationen, die dir Angst machen."
                align="right"
              />
              <ProcessItem
                step="03"
                title="Prüfung & Freiheit"
                desc="Wenn du bereit bist, sagen wir es dir ehrlich. Wir gehen mit dir alle Prüfpunkte durch, bis du dich sicher fühlst – damit du mit einem guten Gefühl in die Prüfung gehst und mit Führerschein wieder rauskommst."
                align="left"
              />
            </div>
          </div>
        </section>

        {/* Preise Section */}
        <section id="preise" className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-creme via-white to-accent-yellow/20" />
          <div className="absolute top-[-5%] right-[5%] w-[420px] h-[420px] spotlight" />
          <div className="absolute left-[-5%] bottom-[10%] w-[360px] h-[360px] orb" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6">
                Unsere <span className="text-gradient-gold">Preise</span>
              </h2>
              <p className="text-xl text-secondary-blue">
                Transparent und fair – keine versteckten Kosten.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-12 shadow-elevation-high border-ambient"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-accent-brown/20 rounded-2xl flex items-center justify-center">
                  <Euro className="w-7 h-7 text-accent-brown" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Führerschein Klasse B
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Fahrstunde (45 min)", price: "62€" },
                  { label: "Sonderfahrten", price: "62€" },
                  { label: "Vorstellung zur Theorieprüfung", price: "0€" },
                  { label: "Vorstellung zur praktischen Prüfung", price: "199€" },
                  { label: "Lehrmaterial", price: "55€" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-secondary-blue">{item.label}</span>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-secondary-blue mt-8 p-4 bg-accent-yellow/10 rounded-xl">
                Die Gesamtkosten hängen von der Anzahl der benötigten Fahrstunden ab.
                Kontaktiere uns für eine persönliche Beratung!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-creme via-white to-accent-yellow/20" />
          <div className="absolute top-[-5%] right-[5%] w-[420px] h-[420px] spotlight" />
          <div className="absolute left-[2%] bottom-[-5%] w-[360px] h-[360px] orb" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-xl rounded-[3rem] overflow-hidden grid md:grid-cols-2 min-h-[620px] shadow-elevation-high border-ambient relative"
            >
              <div className="p-12 md:p-20 bg-gradient-to-br from-creme to-accent-yellow/20 flex flex-col justify-center relative">
                <div className="absolute top-10 left-10 w-32 h-32 bg-accent-yellow rounded-full blur-[60px] opacity-40" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent-brown rounded-full blur-[50px] opacity-20" />
                <h2 className="font-display text-5xl font-bold text-primary mb-8 relative z-10">
                  Bereit für deinen <br />
                  <span className="text-gradient-gold italic">Next Step zum Führerschein?</span>
                </h2>
                <div className="space-y-6 relative z-10">
                  <a href="tel:+49123456789" className="flex items-center gap-5 text-xl font-bold text-primary hover:text-accent-brown transition-premium group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-elevation-medium group-hover:shadow-glow group-hover:scale-105 transition-premium">
                      <Phone size={22} />
                    </div>
                    0123 456 789
                  </a>
                  <div className="flex items-center gap-5 text-xl font-bold text-primary">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-elevation-medium">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p>Musterstraße 1</p>
                      <p className="text-base font-normal text-secondary-blue">40210 Düsseldorf</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 md:p-20 bg-white flex flex-col justify-center relative">
                <div className="absolute inset-0 opacity-20 grid-overlay pointer-events-none" />
                <div className="relative z-10">
                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Name</label>
                    <input
                      type="text"
                      className="w-full bg-off-white/70 border-2 border-transparent rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-premium text-lg font-medium shadow-elevation-low"
                      placeholder="Wie dürfen wir dich anrufen?"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Telefon</label>
                    <input
                      type="tel"
                      className="w-full bg-off-white/70 border-2 border-transparent rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-premium text-lg font-medium shadow-elevation-low"
                      placeholder="Deine Nummer für den Rückruf"
                    />
                  </div>
                  <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl transition-premium hover:bg-accent-brown hover:-translate-y-1 shadow-elevation-high hover:shadow-glow mt-4 text-lg flex items-center justify-center gap-3 shine">
                    Kostenlosen Rückruf anfordern <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </SmoothScroll>
  );
}


function ProcessItem({ step, title, desc, align }: { step: string, title: string, desc: string, align: "left" | "right" }) {
  return (
    <div className={cn("flex md:items-center gap-8 mb-16 relative", align === "right" ? "md:flex-row-reverse text-right" : "md:flex-row text-left")}>
      <div className="hidden md:block w-1/2">
        <span className={cn("font-display text-9xl font-bold text-white/5 select-none", align === "right" ? "text-left" : "text-right")}>{step}</span>
      </div>

      <div className="absolute left-[18px] md:left-1/2 top-0 w-4 h-4 bg-accent-yellow rounded-full border-4 border-primary -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(252,227,171,0.5)]" />

      <div className="flex-1 pl-16 md:pl-0 md:w-1/2">
        <div className={cn("glass-dark p-8 rounded-2xl border border-white/10 overflow-hidden relative shadow-elevation-medium hover:shadow-elevation-high transition-premium", align === "right" ? "md:mr-12" : "md:ml-12")}>
          <div className="absolute inset-0 opacity-20 grid-overlay" />
          <div className="absolute -right-10 -top-10 w-32 h-32 orb" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-accent-yellow mb-3">{title}</h3>
            <p className="text-blue-100 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
