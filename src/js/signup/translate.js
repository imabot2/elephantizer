import languages from "Js/languages/index.js";

/**
 * List of translation for the authentification module
 */
const translations = {

  en: {
    usernamePlaceholder: "Username",
    emailPlaceholder: "Email address",
    passwordPlaceholder: "Password",
    signUpSubmitBtn: "Create Account",
    existingAccountFooter: "Already have an account?",
    login: "Log In",

    error1001: "Error #1001",
    error1001Message: "An error has occurred during account creation",
    existingAccountTitle: "Existing Account",
    existingAccountMessage: 'An account with email <strong><%=email%></strong> already exists.',
    accountCreatedTitle: "Account created",
    accountCreatedMessage: "Your account has been succesfully created.",
    usernameTooShort: "Username must be at least 4 characters long",
    usernameTooLong: "Username must not exceed 20 characters",
    usernameNotEnoughLetters: "Username must contain at least 3 letters.",
    invalidCharacters: "Allowed characters: [a-z] [A-Z] [0-9] [_.-&] accented letters and spaces."
  },

  fr: {
    usernamePlaceholder: "Nom d'utilisateur",
    emailPlaceholder: "Adresse email",
    passwordPlaceholder: "Mot de passe",
    signUpSubmitBtn: "Créer un compte",
    existingAccountFooter: "Vous avez déja un compte ?",
    login: "Se connecter",
    error1001: "Erreur 1001",
    error1001Message: "Une erreur est survenue pendant la création du compte.",   
    existingAccount: "Compte déjà existant",
    existingAccountMessage: "Un compte avec l'adresse email <strong><%=email%></strong> existe déjà.",
    accountCreatedTitle: "Compte créé",
    accountCreatedMessage: "Votre compte a été créé avec succès.",
    usernameTooShort: "Le nom d'utilisateur doit comporter au moins 4 caractères.",
    usernameTooLong: "Le nom d'utilisateur ne doit pas dépasser 20 caractères",
    usernameNotEnoughLetters: "Le nom d'utilisateur doit comporter au moins 3 lettres.",
    invalidCharacters: "Caractères autorisés : [a-z] [A-Z] [0-9] [_.-&] les lettres accentuées et les espaces."
  },

}


export default translations[languages.current()];

