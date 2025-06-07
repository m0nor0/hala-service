import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import commonEN from './locales/en/common.json';
import servicesEN from './locales/en/services.json';
import bookingEN from './locales/en/booking.json';

i18n
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: commonEN,
        services: servicesEN,
        booking: bookingEN,
      },
      // Add more languages as needed
    },
  });

export default i18n;