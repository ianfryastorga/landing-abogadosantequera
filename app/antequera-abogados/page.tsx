'use client';

import { OneTimeTokenProvider } from '@/app/components/OneTimeTokenContext';
import { SnackbarProvider } from '@/app/global/SnackbarContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PracticeAreas } from '@/components/PracticeAreas';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommonFooter } from '@/sections/components/CommonFooter';
import ClientBootstrap from '@/app/ClientBootstrap';
import '@/app/styles/institution/subdomains/antequera-abogados.scss';

/**
 * Página personalizada para Antequera Abogados
 * 
 * Diseño minimalista inspirado en principios de Steve Jobs:
 * - Simplicidad en el diseño
 * - Enfoque en la función
 * - Elegancia y sofisticación
 */
export default function AntequeraAbogadosPage() {
  return (
    <OneTimeTokenProvider>
      <SnackbarProvider>
        <ClientBootstrap />
        <div className="antequera-site" style={{ background: '#1A1A1A', margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
          <Header />
          <Hero />
          <PracticeAreas />
          <Contact />
          <Footer />
          <CommonFooter />
        </div>
      </SnackbarProvider>
    </OneTimeTokenProvider>
  );
} 