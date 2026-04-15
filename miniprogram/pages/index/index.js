var app = getApp();

Page({
  data: {
    participantCount: '12,847'
  },

  onLoad: function() {
    var base = 12000;
    var daysSinceEpoch = Math.floor(Date.now() / 86400000);
    var fakeCount = base + (daysSinceEpoch % 500) * 37;
    this.setData({
      participantCount: fakeCount.toLocaleString()
    });
  },

  onStart: function() {
    app.resetQuiz();
    wx.navigateTo({ url: '/pages/question/question' });
  },

  onBackToHub: function() {
    wx.reLaunch({ url: '/pages/home/home' });
  },

  onShareAppMessage: function() {
    return {
      title: 'AI控制世界后，你的存活概率是多少？',
      path: '/pages/index/index'
    };
  },

  onShareTimeline: function() {
    return {
      title: 'AI控制世界后，你的存活概率是多少？'
    };
  }
});
