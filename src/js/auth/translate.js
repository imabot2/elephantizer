import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    loginButtonTooltip: 'Click here to log in or sign up.',
    logoutButtonTooltip: '',
    userLoggedButtonTooltip: '<span class="badge text-bg-danger fs-6"><%=username%></span><br><span class="badge text-bg-primary"><%=email%></span><br>Click to log out.'
  },

  fr: {
    loginButtonTooltip: 'Cliquez ici pour vous connecter ou créer un compte.',    
    userLoggedButtonTooltip: '<span class="badge text-bg-danger"><%=username%></span><br><span class="badge text-bg-primary"><%=email%></span><br>Cliquez pour vous déconnecter.'
  },

}


export default translations[languages.current()];

