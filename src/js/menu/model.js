import menu from "./view.js";
import settings from "Js/settings";
import menuLanguages from "Js/menuLanguages";
import menuCategories from "Js/menuCategories";
import menuSeries from "Js/menuSeries";
import selection from "Js/selection";

class Model {

  /**
   * Constructor Initialize current menu
   */
  constructor() {
    this.currentMenu = 'main';
  }


  /**
   * The back button is clicked
   */
  onBackBtnClicked() {

    switch (this.currentMenu) {
      case 'main': menu.close(); break;
      case 'settings': this.navigate('main'); break;
      case 'languages': this.navigate('main'); break;
      case 'categories': this.navigate('languages'); break;
      case 'series': this.navigate('categories'); break;
    }
  }


  /**
   * Navigate to the requested menu
   * @param {string} target Name of the target menu
   */
  navigate(target, path = '') {

    // Collapse all menus
    /*
    menu.collapse();
    settings.collapse();
    menuLanguages.collapse();
    menuCategories.collapse();
    menuSeries.collapse();
    */

    // Expand the requested menu
    switch (target) {
      case 'main': 
        menu.expand(); 
        selection.collapse(500);
        break;
      case 'settings': 
        settings.expand(); 
        selection.collapse(500);
        break;
      case 'languages':
        menuLanguages.expand();
        selection.expand(500);
        break;
      case 'categories':
        menuCategories.expand(path);
        selection.expand(500);
        break;
      case 'series':
        menuSeries.expand(path);
        selection.expand(500);
        break;
    }

    // Update the current menu
    this.currentMenu = target;
  }

}



export default new Model();