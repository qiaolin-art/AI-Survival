function countUp(from, to, duration, callback) {
  const startTime = Date.now();
  const diff = to - from;

  function step() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + diff * eased);
    callback(current);
    if (progress < 1) {
      setTimeout(step, 16);
    }
  }

  step();
}

module.exports = { countUp };
