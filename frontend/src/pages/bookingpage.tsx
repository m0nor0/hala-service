import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingForm from '../components/forms/BookingForm';
import BookingHero from '../components/ui/bookinghero';

const BookingPage: React.FC = () => {
  const { t } = useTranslation(['booking', 'common']);

  return (
    <div className="min-h-screen bg-gray-100">
      <BookingHero
        title={t('common:booking.hero_title') || undefined}
        subtitle={t('common:booking.hero_subtitle') || undefined}
        imageUrl="/images/booking.jpg"
        imageAlt={t('common:booking.image_alt', 'Airport transfer service') || undefined}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t('title')}</h1>
        <p className="text-xl text-center text-gray-600 mb-12">{t('subtitle')}</p>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;