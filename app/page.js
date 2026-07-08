import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, ShieldCheck, Landmark } from "lucide-react";
import CTA from "../components/CTA";
const services = [
  [
    "01",
    "Diritto civile",
    "Famiglia, successioni, contratti e tutela del patrimonio.",
    Scale,
  ],
  [
    "02",
    "Diritto penale",
    "Difesa tecnica, assistenza nelle indagini e nel processo.",
    ShieldCheck,
  ],
  [
    "03",
    "Diritto amministrativo",
    "Rapporti con enti pubblici, sanzioni e procedimenti.",
    Landmark,
  ],
];
export default function Home() {
  return (
    <main>
      <section className="grain overflow-hidden">
        <div className="container grid min-h-[690px] items-center gap-12 py-14 md:grid-cols-[1.08fr_.92fr] md:py-20">
          <div>
            <div className="eyebrow">Studio legale · Dolo, Venezia</div>
            <h1 className="mt-7 text-[50px] leading-[.98] tracking-[-.035em] md:text-[82px]">
              Il diritto,
              <br />
              <span className="italic text-[#173b63]">dalla tua parte.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-7 text-[#5f5b54]">
              Ascolto, strategia e presenza. L’Avv. Emanuele Compagno affianca
              privati e imprese nelle questioni civili, penali e amministrative.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contattami" className="btn btn-dark">
                Espormi il tuo caso <ArrowRight size={16} />
              </Link>
              <Link href="/servizi" className="btn">
                Scopri i servizi
              </Link>
            </div>
            <div className="mt-14 flex gap-10 border-t border-black/15 pt-6 text-xs text-[#716b62]">
              <span>
                <b className="block text-2xl text-[#20201e] serif">3</b>Sedi
                operative
              </span>
              <span>
                <b className="block text-2xl text-[#20201e] serif">15+</b>Anni
                di esperienza
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#173b63]" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd5ca]">
              <Image
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 470px"
                src="/images/studio-legale-generico.png"
                alt="Interno generico di uno studio legale"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-[#20201e] px-6 py-5 text-white">
              <div className="text-[10px] uppercase tracking-[.18em] text-white/50">
                Metodo
              </div>
              <div className="mt-1 serif text-xl italic">
                Competenza. Concretezza.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container">
          <div className="eyebrow">Aree di attività</div>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-tight md:text-6xl">
              Ogni questione merita una strategia precisa.
            </h2>
            <Link
              href="/servizi"
              className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              Tutti i servizi <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14 grid border-t border-[#d8d0c2] md:grid-cols-3">
            {services.map(([n, t, d, I], i) => (
              <article
                key={t}
                className={`group py-8 md:px-8 ${i ? "border-t md:border-l md:border-t-0 border-[#d8d0c2]" : ""}`}
              >
                <div className="flex justify-between">
                  <span className="text-xs text-[#173b63]">{n}</span>
                  <I strokeWidth={1.3} />
                </div>
                <h3 className="mt-16 text-3xl">{t}</h3>
                <p className="mt-4 text-sm leading-6 text-[#6a655d]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div className="eyebrow self-start">Un rapporto diretto</div>
          <div>
            <blockquote className="serif text-3xl leading-snug md:text-5xl">
              “Capire prima di agire. Spiegare prima di decidere.”
            </blockquote>
            <p className="mt-7 max-w-xl leading-7 text-[#656057]">
              Ogni incarico parte dall’ascolto e da una valutazione trasparente:
              obiettivi, strumenti, tempi e possibili scenari vengono condivisi
              con il cliente.
            </p>
            <Link
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173b63]"
              href="/chi-sono"
            >
              Conosci l’avvocato <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
