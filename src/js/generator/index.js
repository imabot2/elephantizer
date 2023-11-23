import model from "./model.js";


class Generator  {

  constructor() {

  }


  reset() { model.reset(); }

  
  getNextQuestion() { return model.getNextQuestion(); }
}




export default new Generator();