'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const LazyImage = ({ src, alt, width, height, className, priority = false }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div 
      className={`lazy-image-container ${isLoaded ? 'loaded' : 'loading'} ${className || ''}`}
      style={{ 
        position: 'relative',
        width: width || '100%', 
        height: height || 'auto',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease'
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
      />
      
      {!isLoaded && (
        <div 
          className="skeleton-loader"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
            backgroundSize: '200% 100%',
            animation: 'skeletonLoading 1.5s infinite'
          }}
        />
      )}
    </div>
  );
};

interface LazyComponentProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
}

export const LazyComponent = ({ children, placeholder }: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const div = document.createElement('div');
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            setHasBeenVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(div);
      
      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true);
      setHasBeenVisible(true);
    }
  }, []);
  
  // Once the component has been visible, it stays rendered to avoid
  // unmounting/remounting animations and components with state
  return hasBeenVisible ? children : placeholder || <div style={{ height: '200px', background: 'rgba(0,0,0,0.05)' }} />;
};

export const imageLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
  const params = [`w=${width}`];
  
  if (quality) {
    params.push(`q=${quality}`);
  }
  
  return `${src}?${params.join('&')}`;
};

// Add global CSS to your document
export const LazyLoadStyles = () => {
  return (
    <style jsx global>{`
      @keyframes skeletonLoading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
      
      .lazy-image-container.loading {
        animation: pulse 1.5s infinite;
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
    `}</style>
  );
}; 