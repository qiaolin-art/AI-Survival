Component({
  properties: {
    data: {
      type: Object,
      value: { R: 50, S: 50, F: 50, A: 50 }
    },
    labels: {
      type: Array,
      value: null
    },
    accentColor: {
      type: String,
      value: '#e74c3c'
    }
  },

  observers: {
    'data': function() {
      this.drawRadar();
    }
  },

  lifetimes: {
    ready: function() {
      this.drawRadar();
    }
  },

  methods: {
    drawRadar: function() {
      var self = this;
      var query = this.createSelectorQuery();
      query.select('#radarCanvas')
        .fields({ node: true, size: true })
        .exec(function(res) {
          if (!res || !res[0] || !res[0].node) return;
          var canvas = res[0].node;
          var ctx = canvas.getContext('2d');
          var dpr = wx.getWindowInfo().pixelRatio;
          var width = res[0].width;
          var height = res[0].height;

          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.scale(dpr, dpr);

          self._draw(ctx, width, height);
        });
    },

    _draw: function(ctx, w, h) {
      var cx = w / 2;
      var cy = h / 2;
      var radius = Math.min(cx, cy) - 40;
      var data = this.data.data;
      var color = this.data.accentColor;

      var customLabels = this.data.labels;
      var axes;

      if (customLabels && customLabels.length === 4) {
        var keys = [];
        for (var k in data) {
          if (data.hasOwnProperty(k)) keys.push(k);
        }
        var angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
        axes = [];
        for (var i = 0; i < 4; i++) {
          axes.push({
            key: customLabels[i].key || keys[i],
            labelPos: customLabels[i].labelPos,
            labelNeg: customLabels[i].labelNeg,
            angle: angles[i]
          });
        }
      } else {
        axes = [
          { key: 'R', labelPos: '冒险', labelNeg: '谨慎', angle: -Math.PI / 2 },
          { key: 'S', labelPos: '群居', labelNeg: '独狼', angle: 0 },
          { key: 'F', labelPos: '反抗', labelNeg: '苟活', angle: Math.PI / 2 },
          { key: 'A', labelPos: '利他', labelNeg: '利己', angle: Math.PI }
        ];
      }

      ctx.clearRect(0, 0, w, h);

      // Grid rings
      var rings = [0.25, 0.5, 0.75, 1.0];
      for (var r = 0; r < rings.length; r++) {
        ctx.beginPath();
        for (var i = 0; i <= axes.length; i++) {
          var idx = i % axes.length;
          var x = cx + Math.cos(axes[idx].angle) * radius * rings[r];
          var y = cy + Math.sin(axes[idx].angle) * radius * rings[r];
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Axis lines
      for (var i = 0; i < axes.length; i++) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        var ex = cx + Math.cos(axes[i].angle) * radius;
        var ey = cy + Math.sin(axes[i].angle) * radius;
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Data polygon
      ctx.beginPath();
      for (var i = 0; i <= axes.length; i++) {
        var idx = i % axes.length;
        var val = (data[axes[idx].key] || 50) / 100;
        var x = cx + Math.cos(axes[idx].angle) * radius * val;
        var y = cy + Math.sin(axes[idx].angle) * radius * val;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      var r1 = parseInt(color.slice(1, 3), 16);
      var g1 = parseInt(color.slice(3, 5), 16);
      var b1 = parseInt(color.slice(5, 7), 16);
      ctx.fillStyle = 'rgba(' + r1 + ', ' + g1 + ', ' + b1 + ', 0.2)';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Data points
      for (var i = 0; i < axes.length; i++) {
        var val = (data[axes[i].key] || 50) / 100;
        var x = cx + Math.cos(axes[i].angle) * radius * val;
        var y = cy + Math.sin(axes[i].angle) * radius * val;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      // Labels
      ctx.font = '12px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (var i = 0; i < axes.length; i++) {
        var lx = cx + Math.cos(axes[i].angle) * (radius + 28);
        var ly = cy + Math.sin(axes[i].angle) * (radius + 28);
        var val = data[axes[i].key] || 50;
        var label = val >= 50 ? axes[i].labelPos : axes[i].labelNeg;
        ctx.fillStyle = color;
        ctx.fillText(label, lx, ly);
      }
    }
  }
});
