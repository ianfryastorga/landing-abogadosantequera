'use client';

import { OneTimeTokenProvider } from '@/app/components/OneTimeTokenContext';
import { SnackbarProvider } from '@/app/global/SnackbarContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/app/styles/institution/subdomains/antequera-abogados.scss';

import { FamiliaHero } from './components/FamiliaHero';
import { FamiliaProblems } from './components/FamiliaProblems';
import { FamiliaErrors } from './components/FamiliaErrors';
import { FamiliaSolution } from './components/FamiliaSolution';
import { FamiliaTestimonials } from './components/FamiliaTestimonials';
import { FamiliaClosing } from './components/FamiliaClosing';

export default function FamiliaPage() {
  return (
    <OneTimeTokenProvider>
      <SnackbarProvider>
        <LanguageProvider>
          <div className="antequera-site" style={{ background: '#1A1A1A', margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
            <Header />
            <FamiliaHero />
            <FamiliaProblems />
            <FamiliaErrors />
            <FamiliaSolution />
            <FamiliaTestimonials />
            <FamiliaClosing />
            <Footer />
          </div>
        </LanguageProvider>
      </SnackbarProvider>
    </OneTimeTokenProvider>
  );
}