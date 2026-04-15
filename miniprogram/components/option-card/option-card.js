Component({
  properties: {
    label: { type: String, value: '' },
    text: { type: String, value: '' },
    index: { type: Number, value: 0 },
    selected: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false }
  },

  data: {
    tapped: false
  },

  methods: {
    onTap: function() {
      if (this.data.disabled) return;
      this.setData({ tapped: true });
      var self = this;
      setTimeout(function() {
        self.setData({ tapped: false });
        self.triggerEvent('select', { index: self.data.index });
      }, 200);
    }
  }
});
