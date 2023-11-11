import "./card.css";
import htmlCard from "./card.html";
import str2dom from "doma";



import img0 from "Catalog/en/countries-on-the-map/europe/img/albania.png"
import img1 from "Catalog/en/chess/stockfish-starting-position/img/starting-position.png"

class View {
  constructor() {
    // Append the button to the DOM
    this.containerEl = str2dom.one(htmlCard);
    document.body.append(this.containerEl);

    this.image = [];
    this.image[0] = this.containerEl.querySelector('.image-0>img');
    this.image[1] = this.containerEl.querySelector('.image-1>img');

    this.image[0].src = img0;
    this.image[1].src = img1;

    // On resize, resize the main container     
    window.visualViewport.addEventListener('resize', () => { this.onResize(); });

    // Call the onResize function for first rendering
    this.onResize();
  }



  /**
  * Resize the card container to the current height / width
  */
  onResize() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.containerEl.style.width = `${window.visualViewport.width}px`;
    this.containerEl.style.height = `${window.visualViewport.height}px`;
  }
}


export default new View();