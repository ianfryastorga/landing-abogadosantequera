'use client';

import React from 'react';

export function CommonFooter() {
  return (
    <div className="common-footer">
      <div className="common-footer__content">
        <div className="common-footer__logo">A</div>
        <div className="common-footer__copyright">
          © {new Date().getFullYear()} Antequera Abogados
        </div>
      </div>
    </div>
  );
} 