import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, Users, ChevronDown, ArrowRight, Instagram } from "lucide-react";
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
import instagramIcon from "@/assets/Instagram_icon.png";
import gmailIcon from "@/assets/Gmail_Icon.png";

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

// Realistic Instagram Icon
function InstagramIcon() {
  return (
    <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
  );
}

// Realistic Email Icon
function EmailIcon() {
  return (
    <img src={gmailIcon} alt="Gmail" className="w-12 h-12" />
  );
}

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
      <section
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#FFFFFF]"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 3D animated film ribbons fullscreen */}
        <div
          className="absolute inset-0 z-0"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          <div className="absolute inset-0 ribbon-float">
            <FilmRibbon
              className="left-[-20%] top-[20%] w-[220%] h-[100px]"
              style={{ opacity: 0.08 }}
            />
          </div>
          <div className="absolute inset-0 ribbon-float-2">
            <FilmRibbon
              className="left-[-30%] top-[55%] w-[230%] h-[90px]"
              style={{ opacity: 0.06 }}
            />
          </div>
          <div className="absolute inset-0 ribbon-float" style={{ animationDuration: "22s", animationDelay: "-7s" }}>
            <FilmRibbon
              className="left-[-15%] top-[78%] w-[210%] h-[70px]"
              style={{ opacity: 0.04 }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="relative z-10 text-center px-6 float-up" style={{ marginTop: '-27rem' }}>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-foreground">
            Deboshoot
          </h1>
          <div className="mt-5 mx-auto w-16 h-px bg-purple-400/40" />
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
        <div className="overflow-hidden relative z-10">
          <div className="brand-marquee flex gap-12 md:gap-20 w-max">
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="font-display font-bold text-xl md:text-2xl text-black tracking-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WORKS MARQUEE ====== */}
      <section className="py-20 md:py-28 relative border-t border-border bg-[#000000] fade-in-up stagger-1">
        <div className="text-center mb-12 px-6 relative z-10">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-gray-400">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            I miei lavori
          </h2>
        </div>

        <div className="overflow-x-auto pb-4 px-6 scrollbar-hide relative z-10">
          <div className="flex gap-4 md:gap-6 w-max">
            {works.map((w, i) => (
              <figure key={i} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 cursor-pointer group" onClick={() => setSelectedWork(w)}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-black/10 border border-black/5 bg-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/15 group-hover:scale-[1.02]">
                  <img
                    src={w.img}
                    alt={w.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="vintage w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-white tracking-tight text-center px-4 drop-shadow-lg">
                      {w.name}
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-2 tracking-wide">Clicca per vedere la foto</p>
                {w.instagram && (
                  <div className="flex justify-center mt-2">
                    <a
                      href={w.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>

      </section>

      {/* ====== SERVICES ====== */}
      <section className="py-24 md:py-32 px-6 bg-[#000000] fade-in-up stagger-2">
        <div className="text-center mb-14 relative z-10">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-gray-400">Servizi</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            Inizia il tuo progetto
          </h2>
        </div>

        {/* Pricing Information */}
        <div className="max-w-4xl mx-auto mb-16 glass-card rounded-3xl p-8 md:p-12 relative z-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">Quali sono i prezzi?</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Concordiamo tutto insieme in base a quello che vuoi fare, al tempo che ci serve e al risultato che vuoi ottenere. Tu ci metti l'idea, al budget ci pensiamo insieme.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Vuoi parlare con noi? Vai nella sezione contatti qui sotto, scrivici e iniziamo il tuo progetto insieme.
          </p>
          <button 
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Vai ai contatti
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="max-w-2xl mx-auto mb-6 relative z-10">
          <div className="flex gap-2">
            <button
              onClick={() => setExpandedCard(expandedCard === 'individual' ? null : 'individual')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                expandedCard === 'individual' 
                  ? 'bg-indigo-600 text-white' 
                  : 'glass-card text-gray-300 hover:bg-white/10'
              }`}
            >
              <Camera className="w-5 h-5" />
              Per i Singoli
            </button>
            <button
              onClick={() => setExpandedCard(expandedCard === 'business' ? null : 'business')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                expandedCard === 'business' 
                  ? 'bg-indigo-600 text-white' 
                  : 'glass-card text-gray-300 hover:bg-white/10'
              }`}
            >
              <Users className="w-5 h-5" />
              Per le Attività
            </button>
          </div>
        </div>

        {/* Expandable Content */}
        {expandedCard === 'individual' && (
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 md:p-8 relative z-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Artisti, Modelli & Creator</p>
            <div className="space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                Dedicato a ragazzi emergenti, modelli, musicisti e chiunque voglia migliorare la propria immagine.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Se vuoi aggiornare il tuo portfolio, ti servono foto fresche per i social o devi lanciare il tuo prossimo singolo con una copertina pazzesca, questa è la tua area. Lavoriamo in totale tranquillità: non serve essere modelli professionisti, ti guiderò io in ogni posa e in ogni scelta di luce.
              </p>
              <p className="text-sm font-semibold text-white">Cosa possiamo fare insieme:</p>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Book & Ritratti:</span> Foto personali con un taglio cinematico e moderno, perfette per farti notare.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Copertine & Grafica:</span> Progettiamo la cover per il tuo brano (pronta per Spotify) curando sia lo scatto che la parte grafica.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Abbonamento Mensile:</span> Hai bisogno di contenuti continui per i tuoi social? Creiamo un appuntamento fisso ogni mese a un prezzo bloccato e super conveniente.
                  </div>
                </li>
              </ul>
              <div className="p-4 glass-card rounded-lg">
                <p className="text-xs font-semibold text-white mb-1">Nota sulle Collaborazioni</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Credo molto nello scambio artistico. Se hai una fanbase attiva o un progetto davvero forte e originale, proponimelo: se il valore è reciproco, la collaborazione può essere gratuita.
                </p>
              </div>
            </div>
          </div>
        )}

        {expandedCard === 'business' && (
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 md:p-8 relative z-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Negozi, Brand & Local Business</p>
            <div className="space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                Dedicato a negozi, attività locali, professionisti e brand che vogliono vendere di più grazie ai social.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Oggi un profilo Instagram o TikTok curato è il vero biglietto da visita di ogni attività. Se non hai tempo di fare foto di qualità, di pensare a cosa scrivere o di pubblicare con costanza, ci pensiamo noi. Portiamo il tuo negozio online con un'estetica professionale e coerente che attira nuovi clienti.
              </p>
              <p className="text-sm font-semibold text-white">Cosa possiamo fare insieme:</p>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Foto per Prodotti & Locali:</span> Creiamo contenuti visivi di alta qualità dei tuoi prodotti, dei tuoi piatti o del tuo negozio, pronti per il sito web o per le tue pagine social.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Gestione Social Completa:</span> Non ti dovrai più preoccupare di nulla. Veniamo a scattare regolarmente, prepariamo i post e li pubblichiamo secondo un calendario regolare e preciso.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <span className="font-semibold text-white">Abbonamenti su Misura:</span> Niente contratti infiniti o sorprese. Scegliamo insieme un budget mensile fisso in base alle tue reali esigenze per far crescere la tua attività passo dopo passo.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* ====== CONTACTS ====== */}
      <section id="contacts" className="py-24 md:py-32 px-6 border-t border-border relative bg-white fade-in-up stagger-3">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 z-10">
          <div className="text-left">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Contatti</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
              Parliamo <br /> del tuo <span className="text-primary">progetto</span>.
            </h2>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              Scegli il canale che preferisci. Rispondo entro 24h a tutte le richieste.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <ContactLink
              href="https://instagram.com/deboshoot"
              icon={<InstagramIcon />}
              title="Instagram"
              contact="@deboshoot"
              desc="Guarda i lavori più recenti e scrivimi in DM."
              color="instagram"
            />
            <ContactLink
              href="mailto:deboshoot@gmail.com"
              icon={<EmailIcon />}
              title="Email"
              contact="deboshoot@gmail.com"
              desc="Per progetti, preventivi e collaborazioni brand."
              color="email"
            />
          </div>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Per una comunicazione più rapida:</strong> scrivimi prima via email o su Instagram. Successivamente potremo spostarci su WhatsApp per coordinare i dettagli del progetto.
            </p>
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <section className="py-24 md:py-32 px-6 border-t border-border bg-white fade-in-up stagger-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center z-10">
          <div className="relative group">
            <img
              src={aboutImg}
              alt="Il fotografo DEBOSHOOT"
              loading="lazy"
              width={1024}
              height={1280}
              className="vintage relative w-full object-cover border border-white/20 rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-3 text-muted-foreground">Chi siamo</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
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
                <span key={t} className="px-3 py-1 border border-border text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-10 px-6 border-t border-border text-center bg-white fade-in-up stagger-5">
        <div className="font-display font-bold text-lg tracking-tight text-foreground">
          Deboshoot
        </div>
        <p className="text-muted-foreground text-xs mt-2 tracking-widest uppercase">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </footer>

      {/* Image Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 fade-in-up"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="max-w-5xl w-full max-h-[85vh] relative rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWork(null);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-white/20"
              aria-label="Chiudi"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedWork.img}
              alt={selectedWork.name}
              className="w-full h-full object-cover vintage"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white drop-shadow-lg">
                {selectedWork.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactLink({
  href, icon, title, contact, desc, color = 'default',
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  contact: string;
  desc: string;
  color?: 'whatsapp' | 'instagram' | 'email' | 'default';
}) {
  const colorClasses = {
    whatsapp: 'bg-green-500',
    instagram: 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500',
    email: 'bg-red-500',
    default: 'bg-indigo-600',
  };

  const isInstagram = color === 'instagram';
  const isEmail = color === 'email';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-5 bg-gray-100 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 card-lift btn-shine"
    >
      {isInstagram || isEmail ? (
        <div className="w-12 h-12 shrink-0 transition-transform group-hover:scale-110">
          {icon}
        </div>
      ) : (
        <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold uppercase text-sm tracking-wide text-foreground">{title}</h3>
          <span className="text-muted-foreground text-sm">{contact}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform shrink-0" />
    </a>
  );
}
