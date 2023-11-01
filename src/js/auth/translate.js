import languages from "Js/languages/index.js";

/**
 * List of translation for the bootloader module
 */
const translations = {

  en: {
    loginButtonTooltip: 'Click here to log in or sign up.',
  },

  fr: {
    loginButtonTooltip: 'Cliquez ici pour vous connecter ou vous inscrire.',    
  },

}

export default translations[languages.current()];

