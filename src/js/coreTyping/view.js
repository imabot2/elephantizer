import model from "./model.js";
import settings from "Js/settings";
import card from "Js/cardTyping";


class View {

  constructor() {

  }

  prepareNextQuestion(data) {
    card.prepareNextQuestion(data);
  }

  switchToNextQuestion() {
    card.switchToNextQuestion();
  }
}

export default new View();