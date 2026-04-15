App({
  globalData: {
    answers: [],
    quiz2Answers: [],
    startTime: null
  },

  onLaunch() {
    this.globalData.answers = [];
    this.globalData.quiz2Answers = [];
  },

  resetQuiz(quizId) {
    if (quizId === 2) {
      this.globalData.quiz2Answers = [];
    } else {
      this.globalData.answers = [];
    }
    this.globalData.startTime = Date.now();
  }
});
