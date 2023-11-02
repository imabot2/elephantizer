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

    wrongCredentialsTitle: 'Wrong Credentials',
    wrongCredentialsMessage: 'Invalid email and/or password.',

    invalidEmailTitle: 'Invalid Email',
    invalidEmailMessage: 'Please check your email address.',

    error4001Title: 'Error #4001',
    error4001Message: 'An unexpected error occured during login. Please retry later.',
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

    wrongCredentialsTitle: 'Identifiants incorrects',
    wrongCredentialsMessage: 'Email et/ou mot de passe invalide.',

    invalidEmailTitle: 'Email non valide',
    invalidEmailMessage: 'Vérifiez votre adresse email.',


    error4001Title : 'Erreur #4001',
    error4001Message : "Une erreur inattendue s'est produite lors de la connexion. Veuillez réessayer plus tard",
  },

}


export default translations[languages.current()];

