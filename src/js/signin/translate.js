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

    googlePopupClosedTitle: 'Pop-Up Closed',
    googlePopupClosedMessage: 'The Google authentification pop-up has been closed before the end of the process.',

    error4002: 'Error #4002',
    error4002Message: 'An error occured during authentification with your Google account. Please retry later.',
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

    googlePopupClosedTitle: 'Pop-Up Closed',
    googlePopupClosedMessage: "La fenêtre d'authentification avec Google a été fermée avant la fin de l'authentification.",

    error4002: 'Erreur #4002',
    error4002Message: "Une erreur s'est produite lors de l'authentification avec votre compte Google. Veuillez réessayer plus tard.",
  },

}


export default translations[languages.current()];

