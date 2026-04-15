var resultsData = require('../../utils/quiz2-results');
var animation = require('../../utils/animation');

Page({
  data: {
    probability: 0,
    displayProbability: 0,
    tier: null,
    role: null,
    roleKey: '',
    radarData: { J: 50, D: 50, V: 50, I: 50 },
    radarLabels: [
      { key: 'J', labelPos: '卷', labelNeg: '润' },
      { key: 'D', labelPos: '驯AI', labelNeg: '被AI驯' },
      { key: 'V', labelPos: '能见度高', labelNeg: '隐形' },
      { key: 'I', labelPos: '不可替代', labelNeg: '标准化' }
    ],
    showContent: false,
    showRole: false,
    showRadar: false,
    showTip: false
  },

  onLoad: function(options) {
    var probability = parseInt(options.probability) || 50;
    var roleKey = decodeURIComponent(options.roleKey || 'J-D-V-I-');
    var J = parseInt(options.J) || 50;
    var D = parseInt(options.D) || 50;
    var V = parseInt(options.V) || 50;
    var I = parseInt(options.I) || 50;

    var tier = resultsData.getTier(probability);
    var role = resultsData.getRole(
      J >= 50 ? 1 : -1,
      D >= 50 ? 1 : -1,
      V >= 50 ? 1 : -1,
      I >= 50 ? 1 : -1
    );

    this.setData({
      probability: probability,
      tier: tier,
      role: role,
      roleKey: roleKey,
      radarData: { J: J, D: D, V: V, I: I }
    });

    this._startRevealAnimation(probability);
  },

  _startRevealAnimation: function(target) {
    var self = this;

    animation.countUp(0, target, 2000, function(val) {
      self.setData({ displayProbability: val });
    });

    setTimeout(function() { self.setData({ showContent: true }); }, 1800);
    setTimeout(function() { self.setData({ showRole: true }); }, 2200);
    setTimeout(function() { self.setData({ showRadar: true }); }, 2600);
    setTimeout(function() { self.setData({ showTip: true }); }, 3000);
  },

  onRetry: function() {
    wx.reLaunch({ url: '/pages/quiz2-intro/quiz2-intro' });
  },

  onShareAppMessage: function() {
    return {
      title: '我的AI职场存活概率是 ' + this.data.probability + '%，你呢？',
      path: '/pages/quiz2-intro/quiz2-intro'
    };
  },

  onShareTimeline: function() {
    return {
      title: '我的AI职场存活概率是 ' + this.data.probability + '%，你的呢？'
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

    ctx.fillStyle = '#636eff';
    ctx.fillRect(0, 0, w, 4);

    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.fillText('AI来了，你的工作还能保得住吗？', w / 2, 50);

    ctx.font = 'bold 72px -apple-system, sans-serif';
    ctx.fillStyle = '#636eff';
    ctx.fillText(self.data.probability + '%', w / 2, 150);

    ctx.font = 'bold 20px -apple-system, sans-serif';
    ctx.fillStyle = '#e0e0e0';
    ctx.fillText(self.data.tier.title, w / 2, 200);

    ctx.font = '16px -apple-system, sans-serif';
    ctx.fillStyle = '#888';
    ctx.fillText('职场角色：' + self.data.role.name, w / 2, 250);

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
    ctx.fillText('31个职场场景 · 4大职场维度 · 16种职场角色', w / 2, 340);

    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillStyle = '#636eff';
    ctx.fillText('扫码测测你的职场存活概率', w / 2, 440);

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
