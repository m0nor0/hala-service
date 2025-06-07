import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'tr'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: require('./locales/en/common.json'),
        services: require('./locales/en/services.json'),
        booking: require('./locales/en/booking.json'),
        errors: require('./locales/en/errors.json'),
        contact: require('./locales/en/contact.json'),
      },
      ar: {
        common: require('./locales/ar/common.json'),
        services: require('./locales/ar/services.json'),
        booking: require('./locales/ar/booking.json'),
        errors: require('./locales/ar/errors.json'),
        contact: require('./locales/ar/contact.json'),
      },
      tr: {
        common: require('./locales/tr/common.json'),
        services: require('./locales/tr/services.json'),
        booking: require('./locales/tr/booking.json'),
        errors: require('./locales/tr/errors.json'),
        contact: require('./locales/tr/contact.json'),
      },
    },
  });

export default i18n;