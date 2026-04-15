var app = getApp();
var questionData = require('../../utils/questions');
var scoring = require('../../utils/scoring');

var QUESTIONS = questionData.QUESTIONS;
var CHAPTERS = questionData.CHAPTERS;

Page({
  data: {
    currentIndex: 0,
    question: null,
    chapterName: '',
    total: 30,
    transitioning: false,
    fadeIn: true,
    selectedIndex: -1
  },

  onLoad: function() {
    app.globalData.answers = [];
    this._loadQuestion(0);
  },

  _loadQuestion: function(index) {
    var q = QUESTIONS[index];
    if (!q) return;

    var chapterName = '';
    for (var i = 0; i < CHAPTERS.length; i++) {
      var ch = CHAPTERS[i];
      if (q.chapter === ch.id) {
        chapterName = ch.name;
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

    app.globalData.answers[this.data.currentIndex] = selectedOption;

    var self = this;
    var nextIndex = this.data.currentIndex + 1;

    setTimeout(function() {
      if (nextIndex >= QUESTIONS.length) {
        var result = scoring.calculate(app.globalData.answers);
        var radarData = scoring.normalizeForRadar(result.dimensions);

        wx.navigateTo({
          url: '/pages/result/result?probability=' + result.probability +
            '&roleKey=' + encodeURIComponent(result.roleKey) +
            '&R=' + radarData.R +
            '&S=' + radarData.S +
            '&F=' + radarData.F +
            '&A=' + radarData.A
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
    app.globalData.answers[this.data.currentIndex] = null;
    this.setData({ fadeIn: false });
    var self = this;
    setTimeout(function() {
      self._loadQuestion(prevIndex);
    }, 150);
  },

  onShareAppMessage: function() {
    return {
      title: 'AI控制世界后，你的存活概率是多少？',
      path: '/pages/index/index'
    };
  }
});
