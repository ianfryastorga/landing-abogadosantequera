'use client';

import { motion } from 'framer-motion';
import { antequeraConfig } from '@/config';

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  className?: string;
}

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.488"/>
  </svg>
);

export const WhatsAppButton = ({
  text = 'WhatsApp',
  message = 'Hola, me gustaría obtener más información.',
  size = 'medium',
  variant = 'primary',
  className = ''
}: WhatsAppButtonProps) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const cleanPhone = antequeraConfig.contactInfo.whatsapp.replace(/\s+/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          padding: '10px 20px',
          fontSize: '0.85rem',
          iconSize: 16
        };
      case 'large':
        return {
          padding: '18px 36px',
          fontSize: '1.1rem',
          iconSize: 24
        };
      default: // medium
        return {
          padding: '14px 28px',
          fontSize: '1rem',
          iconSize: 20
        };
    }
  };

  const getVariantStyles = () => {
    const base = {
      background: '#25D366',
      hoverBackground: '#128C7E'
    };

    switch (variant) {
      case 'secondary':
        return {
          ...base,
          background: 'rgba(37, 211, 102, 0.1)',
          color: '#25D366',
          border: '2px solid #25D366',
          hoverBackground: '#25D366',
          hoverColor: '#fff'
        };
      default: // primary
        return {
          ...base,
          color: '#fff',
          border: 'none',
          hoverColor: '#fff'
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: 'inline-block' }}
    >
      <button
        onClick={openWhatsApp}
        className={className}
        style={{
          background: variantStyles.background,
          color: variantStyles.color,
          border: variantStyles.border || 'none',
          padding: sizeStyles.padding,
          borderRadius: '25px',
          fontSize: sizeStyles.fontSize,
          fontWeight: 600,
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: variant === 'primary' 
            ? '0 8px 25px rgba(37, 211, 102, 0.3)' 
            : '0 4px 15px rgba(37, 211, 102, 0.2)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          margin: '0 auto'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = variantStyles.hoverBackground;
          e.currentTarget.style.color = variantStyles.hoverColor || variantStyles.color;
          e.currentTarget.style.boxShadow = variant === 'primary'
            ? '0 12px 35px rgba(37, 211, 102, 0.4)'
            : '0 8px 25px rgba(37, 211, 102, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = variantStyles.background;
          e.currentTarget.style.color = variantStyles.color;
          e.currentTarget.style.boxShadow = variant === 'primary'
            ? '0 8px 25px rgba(37, 211, 102, 0.3)'
            : '0 4px 15px rgba(37, 211, 102, 0.2)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <WhatsAppIcon size={sizeStyles.iconSize} />
        {text}
      </button>
    </motion.div>
  );
};