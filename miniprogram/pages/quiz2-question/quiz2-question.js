var app = getApp();
var questionData = require('../../utils/quiz2-questions');
var scoring = require('../../utils/quiz2-scoring');

var QUESTIONS = questionData.QUESTIONS;
var CHAPTERS = questionData.CHAPTERS;

Page({
  data: {
    currentIndex: 0,
    question: null,
    chapterName: '',
    total: 31,
    transitioning: false,
    fadeIn: true,
    selectedIndex: -1
  },

  onLoad: function() {
    app.globalData.quiz2Answers = [];
    this._loadQuestion(0);
  },

  _loadQuestion: function(index) {
    var q = QUESTIONS[index];
    if (!q) return;

    var chapterName = '';
    for (var i = 0; i < CHAPTERS.length; i++) {
      if (q.chapter === CHAPTERS[i].id) {
        chapterName = CHAPTERS[i].name;
        break;
      }
    }

    this.setData({
      currentIndex: index,
      question: q,
      chapterName: chapterName,
      selectedIndex: -1,
      fadeIn: true
    });
  },

  onOptionSelect: function(e) {
    if (this.data.transitioning) return;

    var optIndex = e.detail.index;
    var question = this.data.question;
    var selectedOption = question.options[optIndex];

    this.setData({
      selectedIndex: optIndex,
      transitioning: true
    });

    app.globalData.quiz2Answers[this.data.currentIndex] = selectedOption;

    var self = this;
    var nextIndex = this.data.currentIndex + 1;

    setTimeout(function() {
      if (nextIndex >= QUESTIONS.length) {
        var result = scoring.calculate(app.globalData.quiz2Answers);
        var radarData = scoring.normalizeForRadar(result.dimensions);

        wx.navigateTo({
          url: '/pages/quiz2-result/quiz2-result?probability=' + result.probability +
            '&roleKey=' + encodeURIComponent(result.roleKey) +
            '&J=' + radarData.J +
            '&D=' + radarData.D +
            '&V=' + radarData.V +
            '&I=' + radarData.I
        });
      } else {
        self.setData({ fadeIn: false });
        setTimeout(function() {
          self._loadQuestion(nextIndex);
          self.setData({ transitioning: false });
        }, 200);
      }
    }, 500);
  },

  onGoBack: function() {
    if (this.data.transitioning) return;
    if (this.data.currentIndex <= 0) return;

    var prevIndex = this.data.currentIndex - 1;
    app.globalData.quiz2Answers[this.data.currentIndex] = null;
    this.setData({ fadeIn: false });
    var self = this;
    setTimeout(function() {
      self._loadQuestion(prevIndex);
    }, 150);
  },

  onShareAppMessage: function() {
    return {
      title: 'AI来了，你的工作还能保得住吗？',
      path: '/pages/quiz2-intro/quiz2-intro'
    };
  }
});
