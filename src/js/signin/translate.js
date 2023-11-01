import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    signInWithGoogle: "Sign In With Google",
    orSeparator: "OR",
    forgotPassword: "Forgot Password?",
    loginBtn: "Login",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
    emailPlaceholder: "Email address",
    passwordPlaceholder: "Password",
    signUpSubmitBtn: "Create Account",
    existingAccount: "Already have an account?",
    login: "Log In",
  },

  fr: {
    signInWithGoogle: "Connexion avec Google",
    orSeparator: "OU",
    forgotPassword: "Mot de passe oublié ?",
    loginBtn: "Connexion",
    noAccount: "Pas encore de compte ?",
    signUp: "Enregistrez-vous",
    emailPlaceholder: "Adresse email",
    passwordPlaceholder: "Mot de passe",
    signUpSubmitBtn: "Créer un compte",
    existingAccount: "Vous avez déja un compte ?",
    login: "Se connecter",
  },

}


export default translations[languages.current()];

