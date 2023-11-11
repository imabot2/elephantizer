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

    error4000Title: 'Error #4000',
    error4000Message: 'An unexpected error occurred during login. Please retry later.',

    googlePopupClosedTitle: 'Pop-Up Closed',
    googlePopupClosedMessage: 'The Google authentification pop-up has been closed before the end of the process.',

    error4001: 'Error #4001',
    error4001Message: 'An error occurred during authentification with your Google account. Please retry later.',

    error4002: 'Error #4002',
    error4002Message: 'An error occurred when sending an email to reset the password.',

    tooManyRequestsTitle: "Too many request",
    tooManyRequestsMessage: "Too many server requests. Password reset email has not been sent. Please retry later.",

    resetPasswordEmailSentTitle: 'Reset Password',
    resetPasswordEmailSentMessage: "We've sent an email to <strong><%=email%></strong> (if this email address is correct).<br> Click on the link in the email to reset your password.",
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


    error4000Title : 'Erreur #4000',
    error4000Message : "Une erreur inattendue s'est produite lors de la connexion. Veuillez réessayer plus tard",

    googlePopupClosedTitle: 'Pop-Up Closed',
    googlePopupClosedMessage: "La fenêtre d'authentification avec Google a été fermée avant la fin de l'authentification.",

    error4001: 'Erreur #4001',
    error4001Message: "Une erreur s'est produite lors de l'authentification avec votre compte Google. Veuillez réessayer plus tard.",

    error4002: 'Erreur #4002',
    error4002Message: "Une erreur est survenue lors de l'envoi d'un email pour reinitialiser le mot de passe.",
   
    tooManyRequestsTitle: "Trop de requêtes",
    tooManyRequestsMessage: "Trop de demandes au serveur. L'email de réinitialisation du mot de passe n'a pas été envoyé. Veuillez réessayer plus tard.",

    resetPasswordEmailSentTitle: 'Réinitialisation du mot de passe',
    resetPasswordEmailSentMessage: "Nous venons d'envoyer un email à <strong><%=email%></strong> (si l'adresse est correct).<br> Cliquez sur le lien dans l'e-mail pour réinitialiser votre mot de passe.",

  },

}


export default translations[languages.current()];

