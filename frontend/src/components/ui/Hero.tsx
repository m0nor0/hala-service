import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  showButtons?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl = '/images/airport-home.jpg', imageAlt = 'Airport Services Hero Image', showButtons = true }) => {

  const { t } = useTranslation('common');

  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={imageAlt}
          loading="eager"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
          {title}
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl font-medium drop-shadow-md">
          {subtitle}
        </p>
        {showButtons && (
          <div className="mt-10 flex space-x-4">
            <Link
              to="/services"
              className="inline-block bg-white py-3 px-6 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              {t('navigation.services')}
            </Link>
            <Link
              to="/book"
              className="inline-block bg-blue-500 py-3 px-6 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-400"
            >
              {t('navigation.booking')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;