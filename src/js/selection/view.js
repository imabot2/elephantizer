import * as bootstrap from "bootstrap";
import model from "./model.js";
import htmlContainer from "./container.html";
import htmlItem from "./item.html";
import translate from "./translate.js";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";
import series from "Js/series";

/** 
 * View for the SELECTION module
 */
class View {

  /**
   * Constructor, prepare HTML elements
   */
  constructor() {
    // Append the settings to the menu
    this.containerEl = str2dom.one(parseEjs(htmlContainer, translate));

    // Get the unordered list
    this.listContainerEl = this.containerEl.querySelector('.selection');
    // Store the title to populate the list item
    this.listItemTitleEl = this.listContainerEl.querySelector('.list-group-item');   

  }


  /**
   * Populate the current selection in the menu
   */
  populate() {

    // Empty the list, but keep the title
    this.listContainerEl.replaceChildren(this.listItemTitleEl);
  
    // For each selected deck
    const list = model.orderedList();
    console.log ('For tracking the bug', list);
    list.forEach((meta) => {

      // Prepare the data to populate the item template
      const data = {
        language: meta.language.name,
        category: meta.category.shortName,
        categoryPath: meta.language.key,
        deck: meta.deck.shortName,
        deckPath: `${meta.language.key}/${meta.category.key}`,
      }

      // Populate the template and append to the list
      const newItemEl = str2dom.one(parseEjs(htmlItem, data));
      this.listContainerEl.append(newItemEl)
    })
  }


  /**
   * Append the settings to the provided parent
   * @param {object} parent Parent element
   */
  appendTo(parent) {
    // Append the element to the parent
    parent.append(this.containerEl);

    // Prepare the collapse
    this.containerCollapse = new bootstrap.Collapse(this.containerEl, { toggle: false });
  }

  /**
   * Collapse the selection after a given delay
   * @param {integer} delay Delay before collapsing in milliseconds
   */
  collapse(delay = 0) {
    // Collapse after the requested delay
    setTimeout(() => {
      this.containerCollapse.hide();
    }, delay);
  }

  /**
   * Expand the selection after a given delay
   * @param {integer} delay Delay before expanding in milliseconds
   */
  expand(delay = 0) {
    
    // Update the current selection if the selection is not empty
    if (model.selection.length) this.populate();

    // Expand after the timeout
    setTimeout(() => {
      this.containerCollapse.show();
    }, delay)
  }

}

export default new View();