import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata={title:'Avv. Emanuele Compagno | Studio Legale',description:'Assistenza legale civile, penale e amministrativa a Dolo, Camponogara e Adria.'};
export default function RootLayout({children}){return <html lang="it"><body><Header/>{children}<Footer/></body></html>}
