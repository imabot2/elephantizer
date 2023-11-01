import * as bootstrap from "bootstrap";
import "./button.css"
import htmlButton from "./button.html";
import str2dom from "doma";
import translate from "./translate.js";
import model from "./model.js";



class View {

  /**
   * Constructor
   * - Call the parent constructor
   * - Get DOM elements
   * - Change the loading image according to the user language
   */
  constructor() {

    // Get the template
    this.buttonEl = str2dom.one(htmlButton);
    document.body.append(this.buttonEl);

    // Get the button image element
    this.buttonImageEl = this.buttonEl.querySelector('img');

    // Initialize tooltip
    this.buttonTooltip = new bootstrap.Tooltip(this.buttonImageEl, { html: true });


    // Add event listener when the user click the auth button
    this.buttonEl.addEventListener('click', () => { this.onButtonClick() });
  }


  onButtonClick() {
    // If the user is already logged, log out when the button is clicked
    // Otherwise, if the user is not logged, open the login modal
    if (model.isLoggedIn) model.signOut(); else this.showSignInForm();
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
  showUserLoggedButton(name, email, photo) {

    // Set the new image
    this.buttonImageEl.src = photo ?? "/static/icons/user.png";
    console.log(name, email)

    // Update tooltip content
    this.buttonTooltip.setContent({ ".tooltip-inner": "vous êtes connecté" });
  }

  updateButton(imageSrc, tooltipContent) {
    // Set the new image
    this.buttonImageEl.src = imageSrc;

    // Update tooltip content
    this.buttonTooltip.setContent({ ".tooltip-inner": tooltipContent });
  }



}


export default new View();