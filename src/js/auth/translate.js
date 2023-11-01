import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    loginButtonTooltip: 'Click here to log in or sign up.',
    userButtonTooltip: "You are connected "
  },

  fr: {
    loginButtonTooltip: 'Cliquez ici pour vous connecter ou créer un compte.',    
  },

}


export default translations[languages.current()];

