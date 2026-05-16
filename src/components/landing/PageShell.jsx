import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollProgress from '@/components/landing/ScrollProgress';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { useMediaQuery } from "react-responsive";


export default function PageShell({ children }) {

    const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden" style={{ background: '#1A1B1E', color: '#FFFFFF' }}>
        {isDesktop &&      <ScrollProgress />}
   

        <Navbar />
        <div className="pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}