import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata={title:'Avv. Emanuele Compagno | Studio Legale',description:'Assistenza legale civile, penale e amministrativa a Dolo, Camponogara e Adria.'};
export default function RootLayout({children}){return <html lang="it"><body><div className="demo-banner" role="status">DEMO NON UFFICIALE — Proposta grafica realizzata a scopo dimostrativo</div><Header/>{children}<Footer/></body></html>}
