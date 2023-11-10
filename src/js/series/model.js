class Model {
  constructor() {
    this.series = [];
  }

  /**
   * Load a deck, if not yet in memory
   * @param {string} path Path to load, example: 'en/countries-on-the-map/europe'
   */
  load(path) {
    // Import the required typing test
    import('../../catalog/' + path + '/index.js')
      .then((deck) => {
        console.log (deck.metaData);
        return;

        // Check of the quiz has not been deleted in the meantime
        if (this.metaData[quizPath] === undefined) { resolve(); return; }

        // Update the quiz meta data 
        this.metaData[quizPath] = quiz.metaData;

        // Add the path to each question (path is also the reference to the meta data index)
        quiz.questions.map((q) => {
          q.path = quizPath;
          q.rawAnswer = q.answer;
        });

        // Append the questions to the list
        this.questions = this.questions.concat(quiz.questions);

        // Resolve and return the new questions
        resolve(quiz.questions);
      })
      .catch((error) => {
        console.error (error);
        // The quiz has not been loaded, delete the meta data related to the current quiz
        delete this.metaData[quizPath];

        // Reject the promise
        reject(error);
      })

  }

}


export default new Model();