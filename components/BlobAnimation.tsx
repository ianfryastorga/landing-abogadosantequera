'use client';

import React, { useEffect, useRef } from "react";
import { Gradient } from "./gradient";
import "./BlobAnimation.css";

const BlobAnimation = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Asegurarse de que el código solo se ejecute en el cliente
    if (typeof window === 'undefined') return;
    
    // Initialize gradient
    const gradient = new Gradient();
    gradientRef.current = gradient;

    // Custom config - optimizado para colores negro y rojo
    gradient.amp = 500;
    gradient.seed = 8;
    gradient.freqX = 4e-5;
    gradient.freqY = 6e-5;
    gradient.freqDelta = 0.5e-5;
    gradient.activeColors = [1, 1, 1, 1];

    // Initialize the gradient
    gradient.initGradient("#gradient-canvas");

    // Cleanup
    return () => {
      if (gradientRef.current) {
        gradientRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="fade-overlay" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <canvas
        ref={canvasRef}
        id="gradient-canvas"
        className="gradient-bg"
        data-js-darken-top
        data-transition-in
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default BlobAnimation; 