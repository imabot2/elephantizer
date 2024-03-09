import getUserLocale from 'get-user-locale';


class Languages {


  /**
   * Constructor Detect the current langauge
   */
  constructor() {

    // List of supported languages
    this.supported = ['en', 'fr'];

    // If the URL language is supported, URL is prioritary
    this.current = this.languageFromUrl();

    // If the URL language is not supported
    if (!this.supported.includes(this.current)) {
      // Get the language from browser client
      this.current = this.languageFromUserLocal();
    }

    // If the URL language is not supported, set english by default
    if (!this.supported.includes(this.current)) {
      // Get the language from browser client
      this.current = 'en';
    }
  }


  /**
   * Get the requested language from the URL ('fr', 'en', ...)
   * @returns {string} The language from the URL path
   */
  languageFromUrl() {

    // Get language from URL
    return window.location.pathname.split('/')[1];
  }


  /**
   * Get the browser client language 
   * Default language is en
   * @returns The browser client language
   */
  languageFromUserLocal() {

    // Get the language from the browser configuration
    return getUserLocale({ useFallbackLocale: true }).split('-')[0];
  }


  /**
   * Render the template according to a given translation
   * @param {string} template A string (usualy an html file) with ejs delimiters <%= =>
   * @param {object} translation 
   * @returns The rendered template
   */
  populateTemplate(template, translation) {
    for (const [key, value] of Object.entries(translation)) {
      template = template.replaceAll(`<%=${key}%>`, value);
    }
    return template;
  }
  

}


export default new Languages();

