import * as bootstrap from "bootstrap";
import "./button.css"
import htmlButton from "./button.html";
import str2dom from "doma";
import translate from "./translate.js";
import model from "./model.js";
import signIn from "Js/signin"



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
    this.buttonTooltip = new bootstrap.Tooltip(this.buttonImageEl, { trigger : 'hover', html: true, maxWidth: "300px" });


    // Add event listener when the user click the auth button
    this.buttonEl.addEventListener('click', () => { this.onButtonClick() });
  }

  /**
   * Callback function called when the user click on the auth button
   */
  onButtonClick() {
    // If the user is already logged, log out when the button is clicked
    // Otherwise, if the user is not logged, open the login modal
    if (model.isLoggedIn) model.signOut(); else signIn.showModal();
    
    // Disable temporary the tooltip to prevent strange behavior on mobile devices
    this.buttonTooltip.disable();
    setTimeout(() => { this.buttonTooltip.enable(); }, 100)
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
  showUserLoggedButton(username, email, picture) {

    // Set the new image
    const image = picture ?? "/static/icons/user-default-picture.png";
    const tooltip = translate.userLoggedButtonTooltip.replace("<%=username%>", username ).replace('<%=email%>', email);

    this.updateButton(image, tooltip);   
    
  }

  updateButton(imageSrc, tooltipContent) {
    // Set the new image
    this.buttonImageEl.src = imageSrc;

    // Update tooltip content
    this.buttonTooltip.setContent({ ".tooltip-inner": tooltipContent });  
  }



}


export default new View();