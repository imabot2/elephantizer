import series from "Js/series";
import statistics from "Js/statistics";
import settings from "Js/settings";
import selection from "Js/selection";


/**
 * Model of the generator module
 */
class Model {

  /**
   * Constructor, initialize global variables
   */
  constructor() {
    // Array containing the question in the series
    this.questions = [];

    // Store the last question ID to prevent asking the same question twice in a row
    // This is the index in the remaining array
    this.lastQuestionId = undefined;
  }


  /**
   * Reset the generator
   * 1. Get current mode (series or relevant)
   * 2. Populate the list of questions according to the current selection
   * 3. Populare the list of remaining questions (= indexes of all the questions)
   */
  reset() {

    // Fix the mode according to the settings 
    // - relevant mode will pick the most relevant question according to the statistics
    // - series mode will pick once each question of the series
    this.mode = (settings.get('timerMode') == 'series') ? 'series' : 'relevant';

    // Populate the list of questions
    this.populate();

    // Prepare the list of remaining questions with all the questions indexes
    this.remaining = [...Array(this.questions.length).keys()];

    // Reset the last question
    this.lastQuestionId = undefined;
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


  /**
   * Return the next question in Series mode
   * - path: path to the deck
   * - uid: UID of the next questions
   * - remaining: number of remaining questions in the series
   * @returns {object} The next questions
   */
  getNextQuestionSeries() {

    // If the list of question is empty, populate the list
    if (this.remaining.length == 0) this.remaining = [...Array(this.questions.length).keys()];

    // Pick a random index in the remaining list
    const indexRemaining = Math.floor(Math.random() * this.remaining.length);

    // Get the next question index
    const index = this.remaining.splice(indexRemaining, 1)[0];
    console.log (this.remaining)

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
   * Compute the next question in relevant mode
   * 1. Check if there are never asked questions
   * 2. If all questions has been asked, return the most relevant question
   * @returns The path and uid of the next questions
   */
  getNextQuestionRelevant() {

    // Remove the last question if defined
    if (this.lastQuestionId !== undefined) {
      this.remaining.splice(this.remaining.indexOf(this.lastQuestionId), 1);
    }

    // idNext is the index of the next question in this.questions
    let idNext = this.getNextUnaskedQuestionIndex();

    // If there is no unasked question, get next question by probalility
    if (idNext===null) idNext = this.getNextRelevantQuestionIndex();     


    // The last question has been removed to avoid picking the same question twice    
    // Put back the last question back 
    if (this.lastQuestionId != undefined) this.remaining.push(this.lastQuestionId);
    
    // Update the last question with the new one
    this.lastQuestionId = idNext;

    // Get path and uid of the next question
    const { path, uid } = this.questions[idNext];

    // Prepare and returns the next question
    return {
      'path': path,
      'uid': uid,
      'remaining': this.questions.length,
    }
  }


  /**
   * Compute the probability for each question
   * @returns {object} An object containing the probabilities, path and uid
   */
  computeProbabilities() {
    // Get beta coefficient
    let beta = settings.get("beta");

    // Prepare data
    let stats = this.questions.map((q, i) => { 
      return { 
        'score': statistics.get(q.path, q.uid).score,
        'index': i,
      };
    })

    // Remove the previous question from the array
    stats = stats.filter(q => q.index!=this.lastQuestionId);
      
    // ::: Normalize the score z(i) = 1-(score-min(score(i))) :::

    // Get the lowest score
    const min = Math.min(...stats.map(q => q.score))
    
    // Compute z and the exponential for each question
    // z=1 - (score - min)
    // exp = exp(beta * z)
    stats.forEach((q) => { q.z = 1 - (q.score - min); q.exp = Math.exp(beta * q.z); });

    
    // Compute the sum for the deniminator sum = Σ(exp(beta*z));
    const sum = stats.reduce((accumulator, q) => accumulator + Math.exp(beta * q.z), 0);

    // Compute probabilities P(i) = exp(beta*z(i))/sum;
    // And cumulated probability
    let cumSum = 0;
    stats.forEach((q) => { q.P = q.exp / sum; q.min = cumSum; cumSum = q.max = cumSum + q.P; });

    // Returns the computed probabilities
    return stats;
  }


  /**
   * Pick the most relevant question
   * @returns The index of the most relevant question picked
   */
  getNextRelevantQuestionIndex() {
   
    // Compute the statistics
    const stats = this.computeProbabilities();

    // Get the maximum probability (should be equal to 1)
    const max = stats[stats.length-1].max;

    // Pick a random number between 0 and max
    const random = max * Math.random();

    // Get the next question from the array
    const next = stats.find(q => (random >= q.min && random < q.max));

    return next.index;
  }


  /**
   * Get the index of the next question that has never been asked
   * @returns The index of the next question that has never been asked or null if there is no unasked question
   */
  getNextUnaskedQuestionIndex() {
    // Get the list of questions never asked
    const neverAsked = this.getNeverAskedList();

    // If there is no unasked questions, return null
    if (neverAsked.length === 0) return null;

    // There are unasked questions
    // Pick a random unasked questions
    let index = Math.floor(Math.random() * neverAsked.length);
    return this.remaining[index];
  }


  /**
   * Get the list of questions than have never been asked
   * @returns An array with all the question that has never been asked (counter=0)
   */
  getNeverAskedList() {
    return this.remaining.filter(i => statistics.get(this.questions[i].path, this.questions[i].uid).count == 0);
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