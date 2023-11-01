
/**
 * Return an array of supported languages
 * @returns An array of supported languages
 */
export const supportedLanguages = ['en', 'fr'];


/**
 * Get the requested language from the URL (/fr/, /en/ ...)
 * @returns The language from the URL path
 */
export function languageFromUrl() {
  
  // Get language from URL
  const lang = window.location.pathname.split('/')[1];

  // If the language is supported, return the language
  if (supportedLanguages.includes(lang)) return lang;

  // Return english as default
  return 'en';
}

