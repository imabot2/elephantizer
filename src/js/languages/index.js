import languages from './model.js';


class Languages {
  constructor() {    
  }


  /**
   * Return the current language detected (URL first, then browser)
   * @returns {string} The current language ('en', 'fr' ...)
   */
  current() {
    return languages.current;
  }

}


export default new Languages();