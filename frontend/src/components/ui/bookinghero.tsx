import React from 'react';
import { useTranslation } from 'react-i18next';

interface BookingHeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const BookingHero: React.FC<BookingHeroProps> = ({ 
  title, 
  subtitle, 
  imageUrl = '/images/booking.jpg', 
  imageAlt
}) => {
  const { t } = useTranslation(['booking', 'common']);

  return (
    <div className="relative bg-blue-700 overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={imageUrl}
        alt={imageAlt || t('common:booking.image_alt', 'Airport Transfer Service') || undefined}
        loading="eager"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
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

export default BookingHero;