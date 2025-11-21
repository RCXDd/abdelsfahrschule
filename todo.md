# Programmatic SEO - TODO Liste

## Kritisch (Indexierung)

### Fehlende Metadata
- [ ] `/fuehrerschein-klasse-b-duesseldorf` - Metadata fehlt (Client Component)
- [ ] `/intensivkurs-fahrschule-duesseldorf` - Metadata fehlt (Client Component)
- [ ] `/automatik-fuehrerschein-duesseldorf` - Metadata fehlt (Client Component)
- **Fix**: Erstelle `layout.tsx` oder separates `metadata.ts` für jede Seite

### Fehlende Seiten
- [ ] `/impressum` - Seite existiert nicht (404)
- [ ] `/datenschutz` - Seite existiert nicht (404)

### Google Search Console
- [ ] Property verifizieren
- [ ] Sitemap einreichen (`/sitemap.xml`)
- [ ] Indexierung für wichtige Seiten anfordern
- [ ] Mobile Usability prüfen

---

## Hoch (CTR & Rankings)

### Schema Markup (JSON-LD)
- [ ] Homepage: `LocalBusiness` + `DrivingSchool` Schema
- [ ] Preise-Sektion: `PriceSpecification` Schema
- [ ] FAQ-Sektionen: `FAQPage` Schema für alle Seiten
- [ ] Reviews: `AggregateRating` Schema (wenn Bewertungen vorhanden)

### Meta Descriptions optimieren
- [ ] Alle Stadtteil-Seiten: Unique, CTR-optimierte Descriptions
- [ ] Keyword-Seiten: Call-to-Action in Description
- [ ] Max 155 Zeichen, inkl. Emoji-Test für Aufmerksamkeit

### Title Tags
- [ ] Format: `Primäres Keyword | Sekundäres Keyword | Brand`
- [ ] Unter 60 Zeichen halten
- [ ] Zahlen/Jahr einbauen wo sinnvoll (z.B. "Führerschein 2024")

---

## Mittel (Content & UX)

### Unique Content pro Stadtteil
- [ ] Jede Stadtteil-Seite braucht mehr unique Content
- [ ] Lokale Landmarks/Besonderheiten erwähnen
- [ ] Spezifische Anfahrtsbeschreibung von jedem Stadtteil
- [ ] Typische Prüfungsstrecken in der Nähe

### Interne Verlinkung
- [ ] Von Stadtteil-Seiten zu Nachbar-Stadtteilen verlinken
- [ ] Von allen Seiten zur Preise-Sektion verlinken
- [ ] Breadcrumb-Navigation implementieren
- [ ] "Ähnliche Angebote" Sektion

### Bilder & Media
- [ ] Echte Fotos von Fahrschule/Fahrzeugen
- [ ] Alt-Texte mit Keywords
- [ ] WebP Format für bessere Performance
- [ ] Open Graph Images für Social Sharing

---

## Nice-to-Have (Langfristig)

### Rich Snippets
- [ ] Google Business Profile erstellen/optimieren
- [ ] Bewertungen sammeln (Google, ProvenExpert)
- [ ] FAQ-Snippets in SERPs

### Performance
- [ ] Core Web Vitals optimieren (LCP, FID, CLS)
- [ ] Lighthouse Score > 90
- [ ] Lazy Loading für Bilder
- [ ] Font-Optimierung (font-display: swap)

### Tracking
- [ ] Google Analytics 4 einrichten
- [ ] Conversion Tracking (Kontaktformular, Anrufe)
- [ ] Search Console mit Analytics verknüpfen
- [ ] Heatmaps (Hotjar/Microsoft Clarity)

### Erweiterte SEO
- [ ] Blog/Ratgeber-Sektion für Long-Tail Keywords
- [ ] "Führerschein Kosten Düsseldorf 2024"
- [ ] "Wie lange dauert Führerschein"
- [ ] "Durchfallquote Fahrprüfung Düsseldorf"
- [ ] Backlink-Aufbau (lokale Verzeichnisse, Partner)

---

## Quick Wins (Sofort umsetzbar)

1. **Metadata für Keyword-Seiten** - 30 Min
   - Layout.tsx Dateien erstellen mit generateMetadata

2. **Impressum & Datenschutz** - 1 Std
   - Rechtlich notwendig!
   - Vorlage verwenden und anpassen

3. **Google Search Console** - 15 Min
   - Property anlegen
   - Sitemap einreichen

4. **Schema für Homepage** - 30 Min
   - LocalBusiness Schema hinzufügen
   - Preise als PriceSpecification

---

## Technische Schulden

- `as any` in gridItemVariants (page.tsx:52) sollte `as const` sein
- Adresse ist noch Platzhalter (Musterstraße 1)
- Telefonnummer ist noch Platzhalter
- Logo zeigt aktuell `/logo.png` - echtes Logo einbinden
