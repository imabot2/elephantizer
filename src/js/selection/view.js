import * as bootstrap from "bootstrap";
import model from "./model.js";
import htmlContainer from "./container.html";
import htmlItem from "./item.html";
import translate from "./translate.js";
import str2dom from "doma";
import { parseEjs } from "Js/languages/";


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


    this.listContainerEl.addEventListener('click', (event) => { this.onSelectionClicked(event) }) 
  }


  /**
   * Populate the current selection in the menu
   */
  populate() {

    // Empty the list, but keep the title
    this.listContainerEl.replaceChildren(this.listItemTitleEl);

    // For each selected deck
    const list = model.orderedList();

    list.forEach((meta) => {
      // If the test is not loaded yet, return
      if (meta === undefined) return;


      // Prepare the data to populate the item template
      const data = {
        language: meta.language.shortName,
        category: meta.category.shortName,
        categoryPath: meta.language.key,
        theme: meta.theme.shortName,
        themePath: `${meta.language.key}/${meta.category.key}`,
        series: meta.deck.shortName,
        seriesPath: `${meta.language.key}/${meta.category.key}/${meta.theme.key}`,
        path: `${meta.language.key}/${meta.category.key}/${meta.theme.key}/${meta.deck.key}`,
      }

      // Populate the template and append to the list and activate the tooltip
      const newItemEl = str2dom.one(parseEjs(parseEjs(htmlItem, translate), data));
      new bootstrap.Tooltip(newItemEl.querySelector('[data-bs-toggle="tooltip"]'));

      this.listContainerEl.append(newItemEl)
    })
  }


  /**
   * Callback function called when the user click in the selection
   * Used to catch the event when the user remove a dech from the selection
   * @param {object} event The event that triggered the call
   */
  onSelectionClicked(event) {

    // Get the element to remove deck, and propagate there is no element found
    let element = event.target.closest("[remove-from-selection]");
    if (element === null) return;
    
    // Remove tooltip
    bootstrap.Tooltip.getInstance(element).dispose();
    
    // Remove the element from the current selection
    model.remove(element.getAttribute('remove-from-selection'));
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