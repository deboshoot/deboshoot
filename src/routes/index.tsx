import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, Users, Instagram, Mail, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";
import work9 from "@/assets/work-9.jpg";
import work10 from "@/assets/work-10.jpg";
import work11 from "@/assets/work-11.jpg";
import aboutImg from "@/assets/about-photographer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEBOSHOOT — Fotografo Professionista" },
      { name: "description", content: "Shooting cinematografici, collaborazioni e ritratti d'autore. Scopri DEBOSHOOT." },
    ],
  }),
  component: Index,
});

type Work = {
  img: string;
  name: string;
  story: string;
  instagram?: string;
};

const works: Work[] = [
  { img: work11, name: "villabanks", story: "", instagram: "https://www.instagram.com/villabanks" },
  { img: work1, name: "arixnnq", story: "", instagram: "https://www.instagram.com/arixnnq__" },
  { img: work2, name: "nabi", story: "", instagram: "https://www.instagram.com/nabi.kichta?igsh=dWdsbjcwcDhrMzNm" },
  { img: work3, name: "foxa", story: "", instagram: "https://www.instagram.com/foxaofficial" },
  { img: work4, name: "ashanti", story: "", instagram: "https://www.instagram.com/ashanti.cellamaro" },
  { img: work5, name: "yamme", story: "", instagram: "https://www.instagram.com/lil_yamme" },
  { img: work6, name: "fares alassi", story: "", instagram: "https://www.instagram.com/fares.alassi" },
  { img: work7, name: "alim", story: "", instagram: "https://www.instagram.com/wespnalim" },
  { img: work8, name: "wendy", story: "", instagram: "https://www.instagram.com/wendytra_" },
  { img: work9, name: "abby6ix", story: "", instagram: "https://www.instagram.com/abby6ix" },
  { img: work10, name: "jessjonns", story: "", instagram: "https://www.instagram.com/jessjonns" },
];

const brands = [
  { name: "ritratti" },
  { name: "fashion" },
  { name: "eventi" },
  { name: "brand" },
  { name: "social" },
  { name: "artisti" },
  { name: "creator" },
];

// SVG of a film strip ribbon, used as repeating background image
const filmStripSVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='120' viewBox='0 0 240 120'>
    <rect width='240' height='120' fill='black'/>
    <g fill='white'>
      ${Array.from({ length: 8 }).map((_, i) => `<rect x='${i * 30 + 6}' y='6' width='18' height='14' rx='2'/><rect x='${i * 30 + 6}' y='100' width='18' height='14' rx='2'/>`).join("")}
    </g>
    <rect x='10' y='28' width='100' height='64' fill='#1a1a1a' stroke='white' stroke-width='1'/>
    <rect x='128' y='28' width='100' height='64' fill='#1a1a1a' stroke='white' stroke-width='1'/>
  </svg>`,
);
const filmStripUrl = `url("data:image/svg+xml;utf8,${filmStripSVG}")`;

function FilmRibbon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute film-pan ${className ?? ""}`}
      style={{
        backgroundImage: filmStripUrl,
        backgroundRepeat: "repeat-x",
        backgroundSize: "240px 120px",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
        ...style,
      }}
    />
  );
}

function Index() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [expandedCard, setExpandedCard] = useState<'individual' | 'business' | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ====== HERO ====== */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden grain">
        {/* 3D animated film ribbons fullscreen */}
        <div
          className="absolute inset-0 z-0"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          <div className="absolute inset-0 ribbon-float">
            <FilmRibbon
              className="left-[-20%] top-[20%] w-[220%] h-[100px] opacity-45"
            />
          </div>
          <div className="absolute inset-0 ribbon-float-2">
            <FilmRibbon
              className="left-[-30%] top-[55%] w-[230%] h-[90px] opacity-35"
            />
          </div>
          <div className="absolute inset-0 ribbon-float" style={{ animationDuration: "22s", animationDelay: "-7s" }}>
            <FilmRibbon
              className="left-[-15%] top-[78%] w-[210%] h-[70px] opacity-25"
            />
          </div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center px-6 float-up">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Deboshoot
          </h1>
          <div className="mt-5 mx-auto w-16 h-px bg-foreground/40" />
          <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Framing The Unseen
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-5 h-5 text-foreground/60" />
        </div>
      </section>

      {/* ====== BRANDS MARQUEE ====== */}
      <section className="py-8 border-t border-border bg-white fade-in-up">
        <div className="overflow-hidden">
          <div className="brand-marquee flex gap-12 md:gap-20 w-max">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WORKS MARQUEE ====== */}
      <section className="py-20 md:py-28 relative border-t border-border bg-white fade-in-up stagger-1">
        <div className="text-center mb-12 px-6">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            I miei lavori
          </h2>
        </div>

        <div className="overflow-x-auto pb-4 px-6 scrollbar-hide">
          <div className="flex gap-4 md:gap-6 w-max">
            {works.map((w, i) => (
              <figure key={i} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 cursor-pointer group card-lift" onClick={() => setSelectedWork(w)}>
                <div className="relative overflow-hidden bg-card border border-border group-hover:border-foreground/60 transition-colors rounded-lg">
                  <img
                    src={w.img}
                    alt={w.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="vintage w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="mt-2 text-center">
                  <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                    {w.name}
                  </div>
                  {w.instagram && (
                    <a
                      href={w.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[9px] md:text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-3 h-3" />
                      <span>Instagram</span>
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-white fade-in-up stagger-2">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Servizi</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Inizia il tuo progetto
          </h2>
        </div>

        {/* Hourly Rates Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-stone-50 to-white rounded-3xl shadow-lg p-8 md:p-12 border border-border/50">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Tariffe Orarie: Massima Flessibilità</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Hai un progetto particolare in mente, ti serve un servizio veloce o vuoi semplicemente fare una prova? Puoi prenotarmi a ore. Nessun pacchetto fisso, decidi tu il tempo necessario. Più ore passiamo a scattare insieme, più la tariffa si abbassa:
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <button 
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative cursor-pointer overflow-hidden bg-white rounded-xl p-4 border border-border hover:border-black transition-all duration-300 hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-display font-bold text-foreground">1 Ora</div>
                <div className="text-lg font-bold text-black group-hover:scale-110 transition-transform duration-300">€80</div>
              </div>
            </button>
            <button 
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative cursor-pointer overflow-hidden bg-white rounded-xl p-4 border border-border hover:border-black transition-all duration-300 hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-display font-bold text-foreground">2 Ore</div>
                <div className="text-lg font-bold text-black group-hover:scale-110 transition-transform duration-300">€150</div>
              </div>
            </button>
            <button 
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative cursor-pointer overflow-hidden bg-white rounded-xl p-4 border border-border hover:border-black transition-all duration-300 hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-display font-bold text-foreground">3 Ore</div>
                <div className="text-lg font-bold text-black group-hover:scale-110 transition-transform duration-300">€210</div>
              </div>
            </button>
            <button 
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative cursor-pointer overflow-hidden bg-white rounded-xl p-4 border border-border hover:border-black transition-all duration-300 hover:shadow-md text-left"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-display font-bold text-foreground">4 Ore</div>
                <div className="text-lg font-bold text-black group-hover:scale-110 transition-transform duration-300">€290</div>
              </div>
            </button>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hai bisogno di me per mezza giornata, una giornata intera o per un progetto speciale? Scrivimi e creiamo un preventivo su misura per te.
          </p>
        </div>

        {/* Two Main Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <div 
            className={`bg-white rounded-2xl shadow-sm border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${expandedCard === 'individual' ? 'ring-2 ring-black' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 'individual' ? null : 'individual')}
          >
            <div className="p-8 md:p-10">
              <div className="relative inline-block mb-6">
                <div className={`w-16 h-16 bg-black rounded-xl flex items-center justify-center ${expandedCard === 'individual' ? 'animate-pulse' : ''}`}>
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Per i Singoli</h3>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Artisti, Modelli & Creator</p>
              {expandedCard === 'individual' ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicato a ragazzi emergenti, modelli, musicisti e chiunque voglia migliorare la propria immagine.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Se vuoi aggiornare il tuo portfolio, ti servono foto fresche per i social o devi lanciare il tuo prossimo singolo con una copertina pazzesca, questa è la tua area. Lavoriamo in totale tranquillità: non serve essere modelli professionisti, ti guiderò io in ogni posa e in ogni scelta di luce.
                  </p>
                  <p className="text-sm font-semibold">Cosa possiamo fare insieme:</p>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Book & Ritratti:</span> Foto personali con un taglio cinematico e moderno, perfette per farti notare.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Copertine & Grafica:</span> Progettiamo la cover per il tuo brano (pronta per Spotify) curando sia lo scatto che la parte grafica.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Abbonamento Mensile:</span> Hai bisogno di contenuti continui per i tuoi social? Creiamo un appuntamento fisso ogni mese a un prezzo bloccato e super conveniente.
                      </div>
                    </li>
                  </ul>
                  <div className="p-4 bg-stone-50 rounded-lg">
                    <p className="text-xs font-semibold text-foreground mb-1">Nota sulle Collaborazioni</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Credo molto nello scambio artistico. Se hai una fanbase attiva o un progetto davvero forte e originale, proponimelo: se il valore è reciproco, la collaborazione può essere gratuita.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="animate-pulse">Clicca per scoprire di più</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          <div 
            className={`bg-white rounded-2xl shadow-sm border border-border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${expandedCard === 'business' ? 'ring-2 ring-black' : ''}`}
            onClick={() => setExpandedCard(expandedCard === 'business' ? null : 'business')}
          >
            <div className="p-8 md:p-10">
              <div className="relative inline-block mb-6">
                <div className={`w-16 h-16 bg-black rounded-xl flex items-center justify-center ${expandedCard === 'business' ? 'animate-pulse' : ''}`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Per le Attività</h3>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Negozi, Brand & Local Business</p>
              {expandedCard === 'business' ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicato a negozi, attività locali, professionisti e brand che vogliono vendere di più grazie ai social.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Oggi un profilo Instagram o TikTok curato è il vero biglietto da visita di ogni attività. Se non hai tempo di fare foto di qualità, di pensare a cosa scrivere o di pubblicare con costanza, ci pensiamo noi. Portiamo il tuo negozio online con un'estetica professionale e coerente che attira nuovi clienti.
                  </p>
                  <p className="text-sm font-semibold">Cosa possiamo fare insieme:</p>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Foto per Prodotti & Locali:</span> Creiamo contenuti visivi di alta qualità dei tuoi prodotti, dei tuoi piatti o del tuo negozio, pronti per il sito web o per le tue pagine social.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Gestione Social Completa:</span> Non ti dovrai più preoccupare di nulla. Veniamo a scattare regolarmente, prepariamo i post e li pubblichiamo secondo un calendario regolare e preciso.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">Abbonamenti su Misura:</span> Niente contratti infiniti o sorprese. Scegliamo insieme un budget mensile fisso in base alle tue reali esigenze per far crescere la tua attività passo dopo passo.
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="animate-pulse">Clicca per scoprire di più</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACTS ====== */}
      <section id="contacts" className="py-24 md:py-32 px-6 border-t border-border relative bg-white fade-in-up stagger-3">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="text-left">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Contatti</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Parliamo <br /> del tuo <span className="text-primary">progetto</span>.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              Scegli il canale che preferisci. Rispondo entro 24h a tutte le richieste.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <ContactLink
              href="https://wa.me/393485411083"
              icon={<MessageCircle className="w-5 h-5" />}
              title="WhatsApp"
              contact="+39 348 541 1083"
              desc="Risposta entro 24h, prenotazioni e info veloci."
            />
            <ContactLink
              href="https://instagram.com/deboshoot"
              icon={<Instagram className="w-5 h-5" />}
              title="Instagram"
              contact="@deboshoot"
              desc="Guarda i lavori più recenti e scrivimi in DM."
            />
            <ContactLink
              href="mailto:deboshoot@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              title="Email"
              contact="deboshoot@gmail.com"
              desc="Per progetti, preventivi e collaborazioni brand."
            />
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-white fade-in-up stagger-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group">
            <img
              src={aboutImg}
              alt="Il fotografo DEBOSHOOT"
              loading="lazy"
              width={1024}
              height={1280}
              className="vintage relative w-full object-cover border border-border rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Chi siamo</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Dietro l'obiettivo
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Sono Matteo De Bellis, fotografo e visual creator basato a Milano.
              </p>
              <p>
                La mia transizione verso il mondo della fotografia professionale nasce da una ricerca costante sull'immagine d'autore e sul taglio cinematografico. Ho iniziato sperimentando in modo autodidatta con i primi dispositivi digitali, per poi evolvere la mia tecnica attraverso l'utilizzo di macchine analogiche e reflex, focalizzandomi sullo studio della luce e della composizione.
              </p>
              <p>
                Il vero salto di qualità è arrivato con l'esperienza sul campo: lavorando come assistente di studio e su set strutturati, ho appreso la gestione tecnica e logistica del flusso di lavoro fotografico. Questo percorso mi ha permesso di inserirmi rapidamente nel panorama creativo milanese, avviando collaborazioni di rilievo con tiktoker, artisti della scena musicale, modelli e realtà commerciali.
              </p>
              <p>
                Oggi offro servizi visivi per singoli e aziende, unendo la freschezza dei trend digitali alla solidità di un'estetica curata e professionale.
              </p>
            </div>
            <p className="text-xs font-bold text-foreground tracking-widest uppercase">
              Framing The Unseen
            </p>
            <div className="mt-8 flex gap-2 flex-wrap">
              {["Cinematic", "Editorial", "Brand", "Wedding"].map((t) => (
                <span key={t} className="px-3 py-1 border border-foreground/30 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-10 px-6 border-t border-border text-center bg-white fade-in-up stagger-5">
        <div className="font-display font-bold text-lg tracking-tight">
          Deboshoot
        </div>
        <p className="text-muted-foreground text-xs mt-2 tracking-widest uppercase">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </footer>

      {/* Image Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 fade-in-up"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border border-border p-6 md:p-8 relative rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWork(null);
              }}
              className="absolute -top-3 -right-3 md:top-4 md:right-4 z-10 w-12 h-12 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg border-2 border-white"
              aria-label="Chiudi"
            >
              <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedWork.img}
              alt={selectedWork.name}
              className="w-full h-auto max-h-[60vh] object-contain mb-6 vintage"
            />
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
              {selectedWork.name}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactLink({
  href, icon, title, contact, desc,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  contact: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 card-lift btn-shine"
    >
      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold uppercase text-sm tracking-wide">{title}</h3>
          <span className="text-muted-foreground text-sm">{contact}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform shrink-0" />
    </a>
  );
}
