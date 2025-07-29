'use client';

import { OneTimeTokenProvider } from '@/app/components/OneTimeTokenContext';
import { SnackbarProvider } from '@/app/global/SnackbarContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/app/styles/institution/subdomains/antequera-abogados.scss';

import { PymeHero } from './components/PymeHero';
import { PymeProblems } from './components/PymeProblems';
import { PymeErrors } from './components/PymeErrors';
import { PymeSolution } from './components/PymeSolution';
import { PymeTestimonials } from './components/PymeTestimonials';
import { PymeClosing } from './components/PymeClosing';

export default function PymePage() {
  return (
    <OneTimeTokenProvider>
      <SnackbarProvider>
        <LanguageProvider>
          <div className="antequera-site" style={{ background: '#1A1A1A', margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
            <Header />
            <PymeHero />
            <PymeProblems />
            <PymeErrors />
            <PymeSolution />
            <PymeTestimonials />
            <PymeClosing />
            <Footer />
          </div>
        </LanguageProvider>
      </SnackbarProvider>
    </OneTimeTokenProvider>
  );
}