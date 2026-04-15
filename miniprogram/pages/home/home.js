Page({
  data: {
    participantCount: '25,314'
  },

  onLoad: function() {
    var base = 25000;
    var daysSinceEpoch = Math.floor(Date.now() / 86400000);
    var fakeCount = base + (daysSinceEpoch % 800) * 41;
    this.setData({
      participantCount: fakeCount.toLocaleString()
    });
  },

  onGoQuiz1: function() {
    wx.navigateTo({ url: '/pages/index/index' });
  },

  onGoQuiz2: function() {
    wx.navigateTo({ url: '/pages/quiz2-intro/quiz2-intro' });
  },

  onShareAppMessage: function() {
    return {
      title: 'AI测试站 — 你能扛住AI吗？',
      path: '/pages/home/home'
    };
  },

  onShareTimeline: function() {
    return {
      title: 'AI测试站 — 测测你的AI存活概率'
    };
  }
});
