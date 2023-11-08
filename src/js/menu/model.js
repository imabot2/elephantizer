import menu from "./view.js";
import settings from "Js/settings";
import menuLanguages from "Js/menuLanguages";
import menuCategories from "Js/menuCategories";
import menuSeries from "Js/menuSeries";


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
      case 'memory-tests': this.navigate('categories'); break;
    }
  }


  /**
   * Navigate to the requested menu
   * @param {string} target Name of the target menu
   */
  navigate(target, path='') {

    switch (target) {
      case 'main': menu.expand(); break;
      case 'settings': settings.expand(); break;
      case 'languages': menuLanguages.expand(); break;
      case 'categories': menuCategories.expand(path); break;
      case 'series': menuSeries.expand(path); break;
    }
    this.currentMenu = target;
  }

}



export default new Model();