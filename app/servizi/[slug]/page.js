import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, ArrowRight, Check} from 'lucide-react';
import CTA from '../../../components/CTA';
import {getService, services} from '../../../data/services';

export function generateStaticParams(){return services.map(({slug})=>({slug}));}
export async function generateMetadata({params}){const {slug}=await params; const service=getService(slug); return service?{title:`${service.title} | Avv. Emanuele Compagno`,description:service.intro}:{};}

export default async function ServiceDetail({params}){
  const {slug}=await params;
  const service=getService(slug);
  if(!service) notFound();
  const currentIndex=services.findIndex(item=>item.slug===slug);
  const previous=services[(currentIndex-1+services.length)%services.length];
  const next=services[(currentIndex+1)%services.length];
  return <main>
    <section className="grain border-b border-black/10 py-16 md:py-24"><div className="container"><Link href="/servizi" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.15em] text-[#736d64] hover:text-[#173b63]"><ArrowLeft size={14}/> Tutti i servizi</Link><div className="eyebrow mt-12">Area di attività</div><h1 className="mt-6 max-w-4xl text-5xl leading-[1.03] md:text-8xl">{service.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#625e57]">{service.intro}</p></div></section>
    <nav className="border-b border-black/10 bg-[#173b63]" aria-label="Navigazione servizi"><div className="container flex gap-1 overflow-x-auto py-3">{services.map((item,i)=><Link key={item.slug} href={`/servizi/${item.slug}`} aria-current={item.slug===slug?'page':undefined} className="service-tab shrink-0 border px-4 py-3 text-[10px] font-bold uppercase tracking-[.12em] transition-colors">0{i+1} · {item.title}</Link>)}</div></nav>
    <section className="bg-white py-20 md:py-28"><div className="container grid gap-14 md:grid-cols-[1.2fr_.8fr]"><div><div className="eyebrow">Come posso assisterti</div><h2 className="mt-5 text-3xl leading-tight md:text-5xl">Un percorso costruito sul caso concreto.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-[#625e57]">{service.description}</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{service.help.map(item=><div key={item} className="flex items-start gap-3 border-b border-[#d8d0c2] py-3 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-[#173b63]"/>{item}</div>)}</div></div><aside className="h-fit bg-[#f4f0e8] p-7 md:p-10"><div className="text-[11px] font-bold uppercase tracking-[.18em] text-[#173b63]">Hai bisogno di orientamento?</div><h3 className="mt-4 text-3xl leading-tight">Valutiamo insieme la situazione.</h3><p className="mt-4 text-sm leading-6 text-[#68635b]">Un primo confronto permette di chiarire il problema, i documenti utili e i possibili passi successivi.</p><Link href="/contattami" className="btn btn-dark mt-7 w-full">Richiedi un colloquio <ArrowRight size={15}/></Link></aside></div></section>
    <section className="py-20"><div className="container"><div className="eyebrow">Il metodo</div><h2 className="mt-5 text-3xl md:text-5xl">Tre passaggi, una direzione chiara.</h2><div className="mt-12 grid border-t border-[#d8d0c2] md:grid-cols-3">{service.process.map((step,i)=><div key={step} className={`py-8 md:px-8 ${i?'border-t border-[#d8d0c2] md:border-l md:border-t-0':''}`}><span className="text-xs font-bold text-[#173b63]">0{i+1}</span><h3 className="mt-10 text-2xl leading-snug">{step}</h3></div>)}</div><p className="mt-8 max-w-2xl text-xs leading-5 text-[#777168]">Le informazioni hanno carattere generale. Tempi, strumenti e strategia dipendono sempre dalle circostanze e dalla documentazione del singolo caso.</p></div></section>
    <section className="border-t border-black/10 bg-white"><div className="container grid md:grid-cols-2"><Link href={`/servizi/${previous.slug}`} className="group py-9 md:pr-10"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#173b63]"><ArrowLeft size={14}/> Servizio precedente</span><h3 className="mt-3 text-2xl transition-transform group-hover:-translate-x-1">{previous.title}</h3></Link><Link href={`/servizi/${next.slug}`} className="group border-t border-black/10 py-9 text-right md:border-l md:border-t-0 md:pl-10"><span className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#173b63]">Servizio successivo <ArrowRight size={14}/></span><h3 className="mt-3 text-2xl transition-transform group-hover:translate-x-1">{next.title}</h3></Link></div></section>
    <CTA/>
  </main>
}
