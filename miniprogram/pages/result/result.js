var resultsData = require('../../utils/results');
var animation = require('../../utils/animation');

Page({
  data: {
    probability: 0,
    displayProbability: 0,
    tier: null,
    role: null,
    roleKey: '',
    radarData: { R: 50, S: 50, F: 50, A: 50 },
    showContent: false,
    showRole: false,
    showRadar: false,
    showTip: false
  },

  onLoad: function(options) {
    var probability = parseInt(options.probability) || 50;
    var roleKey = decodeURIComponent(options.roleKey || 'R-S-F-A-');
    var R = parseInt(options.R) || 50;
    var S = parseInt(options.S) || 50;
    var F = parseInt(options.F) || 50;
    var A = parseInt(options.A) || 50;

    var tier = resultsData.getTier(probability);
    var role = resultsData.getRole(
      R >= 50 ? 1 : -1,
      S >= 50 ? 1 : -1,
      F >= 50 ? 1 : -1,
      A >= 50 ? 1 : -1
    );

    this.setData({
      probability: probability,
      tier: tier,
      role: role,
      roleKey: roleKey,
      radarData: { R: R, S: S, F: F, A: A }
    });

    this._startRevealAnimation(probability);
  },

  _startRevealAnimation: function(target) {
    var self = this;

    animation.countUp(0, target, 2000, function(val) {
      self.setData({ displayProbability: val });
    });

    setTimeout(function() {
      self.setData({ showContent: true });
    }, 1800);

    setTimeout(function() {
      self.setData({ showRole: true });
    }, 2200);

    setTimeout(function() {
      self.setData({ showRadar: true });
    }, 2600);

    setTimeout(function() {
      self.setData({ showTip: true });
    }, 3000);
  },

  onRetry: function() {
    wx.reLaunch({ url: '/pages/index/index' });
  },

  onShareAppMessage: function() {
    return {
      title: '我的AI末日存活概率是 ' + this.data.probability + '%，你呢？',
      path: '/pages/index/index'
    };
  },

  onShareTimeline: function() {
    return {
      title: '我的AI末日存活概率是 ' + this.data.probability + '%，你的呢？'
    };
  },

  onGeneratePoster: function() {
    var self = this;
    var query = this.createSelectorQuery();
    query.select('#posterCanvas')
      .fields({ node: true, size: true })
      .exec(function(res) {
        if (!res || !res[0] || !res[0].node) {
          wx.showToast({ title: '生成失败', icon: 'none' });
          return;
        }
        var canvas = res[0].node;
        var ctx = canvas.getContext('2d');
        var dpr = wx.getWindowInfo().pixelRatio;
        var w = 375;
        var h = 500;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);

        self._drawPoster(ctx, w, h, canvas);
      });
  },

  _drawPoster: function(ctx, w, h, canvas) {
    var self = this;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(0, 0, w, 4);

    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.fillText('AI控制世界后，你的存活概率', w / 2, 50);

    ctx.font = 'bold 72px -apple-system, sans-serif';
    ctx.fillStyle = '#e74c3c';
    ctx.fillText(self.data.probability + '%', w / 2, 150);

    ctx.font = 'bold 20px -apple-system, sans-serif';
    ctx.fillStyle = '#e0e0e0';
    ctx.fillText(self.data.tier.title, w / 2, 200);

    ctx.font = '16px -apple-system, sans-serif';
    ctx.fillStyle = '#888';
    ctx.fillText('末日角色：' + self.data.role.name, w / 2, 250);

    ctx.font = '12px -apple-system, sans-serif';
    ctx.fillStyle = '#444';
    ctx.fillText(self.data.roleKey, w / 2, 280);

    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 310);
    ctx.lineTo(w - 40, 310);
    ctx.stroke();

    ctx.font = '13px -apple-system, sans-serif';
    ctx.fillStyle = '#555';
    ctx.fillText('30个末日场景 · 4大生存维度 · 16种末日角色', w / 2, 340);

    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillStyle = '#e74c3c';
    ctx.fillText('扫码测测你的存活概率', w / 2, 440);

    wx.canvasToTempFilePath({
      canvas: canvas,
      success: function(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function() {
            wx.showToast({ title: '已保存到相册', icon: 'success' });
          },
          fail: function() {
            wx.showToast({ title: '保存失败', icon: 'none' });
          }
        });
      }
    });
  }
});
