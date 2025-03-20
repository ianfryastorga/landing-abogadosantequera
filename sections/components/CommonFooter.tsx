'use client';

import React from 'react';

export function CommonFooter() {
  return (
    <div className="common-footer">
      <div className="common-footer__content">
        <div className="common-footer__copyright">
          © {new Date().getFullYear()} Antequera Abogados. Todos los derechos reservados.
        </div>
        <div className="common-footer__privacy">
          <a href="/privacy-policy" className="common-footer__link">Política de Privacidad</a>
          <a href="/terms" className="common-footer__link">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  );
} 