import model from "./model.js";


class Generator  {

  constructor() {

  }


  reset() { model.reset(); }


  mode() { return model.mode; }

  
  getNextQuestion() { return model.getNextQuestion(); }
}




export default new Generator();