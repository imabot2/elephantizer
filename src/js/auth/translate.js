import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    loginButtonTooltip: 'Click here to log in or sign up.',
    signInWithGoogle: "Sign In With Google",
    orSeparator: "OR",
    forgotPassword: "Forgot Password?",
    loginBtn: "Login",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
  },

  fr: {
    loginButtonTooltip: 'Cliquez ici pour vous connecter ou vous inscrire.',    
    signInWithGoogle: "Connexion avec Google",
    orSeparator: "OU",
    forgotPassword: "Mot de passe oublié ?",
    loginBtn: "Connexion",
    noAccount: "Pas encore de compte ?",
    signUp: "Enregistrez-vous",
  },

}


export default translations[languages.current()];

