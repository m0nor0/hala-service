import i18n from './config';

/**
 * Changes the current language
 * @param {string} language - Language code ('en', 'ar', 'tr')
 * @returns {Promise} Promise that resolves when language is changed
 */
export const changeLanguage = async (language) => {
  try {
    await i18n.changeLanguage(language);
    // Update document direction for RTL languages
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    // You might want to store the language preference
    localStorage.setItem('preferred_language', language);
    return true;
  } catch (error) {
    console.error('Error changing language:', error);
    return false;
  }
};

/**
 * Gets the current language
 * @returns {string} Current language code
 */
export const getCurrentLanguage = () => {
  return i18n.language;
};

/**
 * Checks if current language is RTL
 * @returns {boolean} True if current language is RTL
 */
export const isRTL = () => {
  return getCurrentLanguage() === 'ar';
};

/**
 * Gets the user's preferred language from localStorage or browser
 * @returns {string} Preferred language code
 */
export const getPreferredLanguage = () => {
  return (
    localStorage.getItem('preferred_language') ||
    navigator.language.split('-')[0] ||
    'en'
  );
};