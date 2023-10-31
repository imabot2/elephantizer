import htmlMessage from "./message.html";
import str2dom from "doma";


export class Console {

  /**
   * Constructor, 
   * - Get the DOM element
   * - Initialize the messages
   * - Prepare the 
   */
  constructor() {
    // Get the console container element
    this.consoleEl = document.querySelector("#bootloader .console");

    // No message at start up
    this.messages = {};
    this.index = 0;
    this.pending = 0;

    // Create the event when all the message are resolved
    this.lastMessageResolvedEvent = new Event("last-message-resolved");
  }


  /**
   * Clear the console (delete all the messages)
   */
  clearConsole() {
    // Delete the elements
    Object.values(this.messages).forEach(message => {
      message.element.remove();
    })

    // Reset the arrays
    this.messages = {};
    this.index = 0;
    this.pending = 0;
  }


  /**
   * Create and append a new message in the console
   * @param {string} message The message text
   * @returns {integer} The ID of the new message
   */
  createNewMessage(message) {

    // Get the template
    let element = str2dom.one(htmlMessage);
    // Set the message
    element.querySelector('.message').innerHTML = message;
    // Append to dom
    this.consoleEl.append(element);
    // Scroll to bottom
    this.consoleEl.scrollTo(0, this.consoleEl.scrollHeight);

    // Store the element and the message in the list
    this.messages[this.index] = {
      'element': element,
      'content': message
    }
    // Increase the number of pending messages
    this.pending++;
    // Return and increase the index
    return this.index++;
  }

  /**
   * Mark a message as failed and display a message in the console
   * @param {integer} id ID of the message
   */
  setError(id) {
    // Get element and set successful
    let statusEl = this.messages[id].element.querySelector(".status");
    statusEl.textContent = "[FAILED]";
    statusEl.classList.add("error");

    // Display message in the console
    console.log(`%cOK%c ${this.messages[id].content}`, "background-color: #dc3545; padding:0.3em; border-radius: 0.5em;", '');

    // Decrease pending messages and trigger event is this is the end
    this.pending--;
    if (this.pending == 0) this.consoleEl.dispatchEvent(this.lastMessageResolvedEvent);
  }


  /**
   * Mark a message as successfull and display the message in the console
   * @param {integer} id ID of the message
   */
  setSuccess(id) {
    // Get element and set successful
    let statusEl = this.messages[id].element.querySelector(".status");
    statusEl.textContent = "[OK]";
    statusEl.classList.add("success");

    // Display message in the console
    console.log(`%cOK%c ${this.messages[id].content}`, "background-color: #198754; padding:0.3em; border-radius: 0.5em;", '');

    // Decrease pending messages and trigger event is this is the end
    this.pending--;
    if (this.pending == 0) this.consoleEl.dispatchEvent(this.lastMessageResolvedEvent);
  }


  /**
   * Return a promise resolved when the last message is resolved (success or error)
   * @returns A promise resolve when the last message is resolved
   */
  onLastMessageResolved() {
    return new Promise((resolve) => {

      // If no message are pending, resolve and return
      if (this.pending == 0) { resolve(); return; }

      // Add an event listener to trigger the promise
      this.consoleEl.addEventListener("last-message-resolved", () => {
        resolve();
      }, {once : true})
    })
  }

}


