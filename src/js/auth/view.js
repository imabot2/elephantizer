import ViewSignIn from "./viewSignin.js"
import * as bootstrap from "bootstrap";
import "./button.css"
import htmlButton from "./templateButton.html";
import str2dom from "doma";
import translate from "./translate.js";



class View extends ViewSignIn {

  /**
   * Constructor
   * - Call the parent constructor
   * - Get DOM elements
   * - Change the loading image according to the user language
   */
  constructor() {
    
    // Call the parent constructor
    super();

    // Get the template
    this.buttonEl = str2dom.one(htmlButton);
    document.body.append(this.buttonEl);

    // Get the button image element
    this.buttonImageEl = this.buttonEl.querySelector('img');

    // Initialize tooltip
    this.buttonTooltip = new bootstrap.Tooltip(this.buttonImageEl, { html: true });
  }


  /**
   * Show the logout icon at top right
   */
  showLogOutButton() {
    this.updateButton("/static/icons/logout.png", translate.logoutButtonTooltip);
  }


  /**
   * Show the logout icon at top right
   */
  showLogInButton() {
    this.updateButton("/static/icons/login.png", translate.loginButtonTooltip);
  }


  /**
   * Set a custom image and tooltip text in the top right icon 
   * @param {string} imagePath URL or path to the image to display
   * @param {strnig} tooltip Text to display in the tooltip
   */
  updateButton(imagePath, tooltipContent) {

    // Set the new image
    this.buttonImageEl.src = imagePath;

    // Update tooltip content
    this.buttonTooltip.setContent({ ".tooltip-inner": tooltipContent });
  }

}


export default new View();