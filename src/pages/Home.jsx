import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollProgress from '@/components/landing/ScrollProgress';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import WhyChoose from '@/components/landing/WhyChoose';
import Testimonials from '@/components/landing/Testimonials';
import Process from '@/components/landing/Process';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden" style={{ background: '#1A1B1E', color: '#FFFFFF' }}>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <Process />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}