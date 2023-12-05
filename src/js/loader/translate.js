import languages from "Js/languages/index.js";

/**
 * List of translation for the account module
 */
const translations = {

  en: {
    loaderImage: "/static/loader/loader-en.png",
  },

  fr: {
    loaderImage: "/static/loader/loader-fr.png",
  },

}


export default translations[languages.current()];

