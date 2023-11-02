import languages from "Js/languages/index.js";

/**
 * List of translation for the verification module
 */
const translations = {

  en: {
    modalTitle: "Validate your email",
    weVeSentEmail: "We've sent you a verification email at",
    spamChecking: "You may need to check your spam folder.",
    confirmationLink: "Clicking the confirmation link in that email lets us know the email address is both valid and yours.",
    fewMinutes: "The email may take a few minutes to arrive. If you did not received an email, click the button below to send a new mail.",
    resendEmail: "Resend Verification Email",
    retryIn: "Retry in ",

    emailSentTitle: "Verify your email!",
    emailSentMessage: "We've send an email to <strong><%=email%></strong>.<br> Open it up to activate your account.",

    tooManyRequestsTitle: "Too many request",
    tooManyRequestsMessage: "Too many server requests. Verification email has not been sent. Please retry later.",

    error3001: "Error #3001",
    error3001Message: "An unexpected error occurred while sending verification email to <%=email%>.",

  },

  fr: {
    modalTitle: "Validation de votre email",
    weVeSentEmail: "Nous vous avons envoyé un email de vérification à l'adresse ",
    spamChecking: "Il vous faudra peut-être vérifier vos courriers indésirables (spam).",
    confirmationLink: "Cliquer sur le lien de confirmation dans cet e-mail nous permet de savoir que l'adresse e-mail est valide et qu'elle vous appartient.",
    fewMinutes: "Le courrier électronique peut prendre quelques minutes pour arriver. Si vous n'avez rien reçu, cliquez sur le bouton ci-dessous pour envoyer un nouveau message.",
    resendEmail: "Renvoyer un email de vérification",
    retryIn: "Réessayer dans ",

    emailSentTitle: "Vérfier votre boite mail!",
    emailSentMessage: "Nous avons envoyé un e-mail à <strong><%=email%></strong>.<br> Ouvrez-le pour activer votre compte.",

    tooManyRequestsTitle: "Trop de requêtes",
    tooManyRequestsMessage: "Trop de demandes au serveur. L'email de vérification n'a pas été envoyé. Veuillez réessayer plus tard.",

    error3001: "Erreur 3001",
    error3001Message: "Erreur lors de l'envoi de l'email de vérification à <%=email%>.",
  },

}


export default translations[languages.current()];

