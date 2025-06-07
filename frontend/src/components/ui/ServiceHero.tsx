import React from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceHeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  title, 
  subtitle, 
  imageUrl = '/images/airport-services.jpg', 
  imageAlt = 'Airport Services' 
}) => {
  const { t } = useTranslation('services');

  return (
    <div className="relative bg-blue-700 overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={imageUrl}
        alt={imageAlt}
        loading="eager"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
          {title || t('hero.title')}
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl mx-auto font-medium drop-shadow-md">
          {subtitle || t('hero.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;