import model from './model.js';


class Languages {
  constructor() {
  }


  /**
   * Return the current language detected (URL first, then browser)
   * @returns {string} The current language ('en', 'fr' ...)
   */
  current() { return model.current; }


  render(template, translation) { return model.populateTemplate(template, translation) };


}

// Create and export a singleton of the class
const singleton = new Languages();
export default singleton;

// Export the EJS parser
export const parseEjs = singleton.render;

