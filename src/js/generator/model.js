import series from "Js/series";
import statistics from "Js/statistics";
import settings from "Js/settings";
import selection from "Js/selection";

class Model {
  constructor() {
    this.questions = [];
  }


  reset() {

    // Fix the mode according to the settings 
    // - relevant mode will pick the most relevant question according to the statistics
    // - series mode will pick once each question of the series
    this.mode = (settings.get('timerMode') == 'series') ? 'series' : 'relevant';
    console.log(this.mode);
    
    this.populate();

    // Prepare the list of remaining questions with all the questions indexes
    this.remaining = [...Array(this.questions.length).keys()];
    console.log (this.questions);
    console.log (this.remaining);
  }


  /**
   * Return the next question according to the current mode
   */
  getNextQuestion() {
    if (this.mode === 'series') 
      return this.getNextQuestionSeries(); 
    else
      return this.getNextQuestionRelevant();
  }

  getNextQuestionRelevant() {
    
  }



  /**
   * Return the next question in Series mode
   * - path: path to the deck
   * - uid: UID of the next questions
   * - remaining: number of remaining questions in the series
   * @returns {object} The next questions
   */
  getNextQuestionSeries() {
    // Pick a random index in the remaining list
    const indexRemaining = Math.floor(Math.random()*this.remaining.length);

    // Get the next question index
    const index = this.remaining.splice(indexRemaining,1)[0];

    // Get path and uid of the next question
    const { path, uid } = this.questions[index];
    
    // Prepare and returns the next question
    return {
      'path': path, 
      'uid': uid, 
      'remaining': this.remaining.length,
    }    
  }


  /**
   * Populate the list of questions according to the current selection
   */
  populate() {
    // Empty the question array
    this.questions = [];

    // For each path and uid
    selection.current().forEach((path) => {
      series.getUids(path).forEach((uid) => {

        // Append the question in the array
        this.questions.push({
          'path': path,
          'uid': uid,
        });
      })
    })
  }


}

export default new Model();