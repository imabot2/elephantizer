class View {
  constructor() {
    // Prevent draging and past in answer bar
    document.addEventListener('dragstart', event => { event.preventDefault(); });
  }
}

export default new View();