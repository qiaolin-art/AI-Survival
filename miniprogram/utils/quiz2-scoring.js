var results = require('./quiz2-results');

/**
 * Quiz2 评分引擎
 *
 * 输入: answers[] - 31个选项对象
 * 输出: {
 *   dimensions: { J, D, V, I },
 *   survivalScore: Number,
 *   probability: Number (5~99),
 *   tier: Object,
 *   role: Object,
 *   roleKey: String (如 'J+D-V+I-')
 * }
 */
function calculate(answers) {
  var dimensions = { J: 0, D: 0, V: 0, I: 0 };
  var survivalScore = 0;

  for (var i = 0; i < answers.length; i++) {
    var opt = answers[i];
    if (!opt) continue;

    var dim = opt.dimensions || {};
    dimensions.J += dim.J || 0;
    dimensions.D += dim.D || 0;
    dimensions.V += dim.V || 0;
    dimensions.I += dim.I || 0;

    survivalScore += opt.survival || 0;
  }

  // 31题, survival per option 1~3
  // 理论区间: 31 ~ 93, 实际合理区间约 40 ~ 80
  var minScore = 35;
  var maxScore = 80;
  var clamped = Math.max(minScore, Math.min(maxScore, survivalScore));
  var normalized = (clamped - minScore) / (maxScore - minScore);
  var probability = Math.round(5 + normalized * 94);
  probability = Math.max(5, Math.min(99, probability));

  var tier = results.getTier(probability);
  var role = results.getRole(dimensions.J, dimensions.D, dimensions.V, dimensions.I);

  var roleKey = (dimensions.J >= 0 ? 'J+' : 'J-') +
                (dimensions.D >= 0 ? 'D+' : 'D-') +
                (dimensions.V >= 0 ? 'V+' : 'V-') +
                (dimensions.I >= 0 ? 'I+' : 'I-');

  return {
    dimensions: dimensions,
    survivalScore: survivalScore,
    probability: probability,
    tier: tier,
    role: role,
    roleKey: roleKey
  };
}

/**
 * 将维度净值归一化到 0~100 用于雷达图
 * 正值 → 51~100
 * 负值 → 0~49
 * 零   → 50
 */
function normalizeForRadar(dimensions) {
  var maxAbsJ = 20;
  var maxAbsD = 20;
  var maxAbsV = 20;
  var maxAbsI = 20;

  function norm(val, maxAbs) {
    var clamped = Math.max(-maxAbs, Math.min(maxAbs, val));
    return Math.round(50 + (clamped / maxAbs) * 50);
  }

  return {
    J: norm(dimensions.J, maxAbsJ),
    D: norm(dimensions.D, maxAbsD),
    V: norm(dimensions.V, maxAbsV),
    I: norm(dimensions.I, maxAbsI)
  };
}

module.exports = { calculate: calculate, normalizeForRadar: normalizeForRadar };
