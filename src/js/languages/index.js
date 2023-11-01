import getUserLocale from 'get-user-locale';
import { languageFromUrl } from './helper.js';


class Translation {
  constructor() {

    this.language = 'en-US';
    console.log (getUserLocale())
    
    console.log (window.location.pathname);
    console.log (languageFromUrl());
  }

  


}


export default new Translation();