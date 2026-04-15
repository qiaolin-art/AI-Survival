var app = getApp();

Page({
  onStart: function() {
    app.resetQuiz(2);
    wx.navigateTo({ url: '/pages/quiz2-question/quiz2-question' });
  },

  onBack: function() {
    wx.reLaunch({ url: '/pages/home/home' });
  },

  onShareAppMessage: function() {
    return {
      title: 'AI来了，你的工作还能保得住吗？',
      path: '/pages/quiz2-intro/quiz2-intro'
    };
  },

  onShareTimeline: function() {
    return {
      title: 'AI来了，你的工作还能保得住吗？'
    };
  }
});
