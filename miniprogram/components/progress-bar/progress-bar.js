Component({
  properties: {
    current: { type: Number, value: 0 },
    total: { type: Number, value: 30 },
    chapterName: { type: String, value: '' }
  },

  observers: {
    'current, total': function(current, total) {
      var pct = total > 0 ? Math.round((current / total) * 100) : 0;
      this.setData({ percent: pct });
    }
  },

  data: {
    percent: 0
  }
});
