var results = require('./results');

/**
 * 双重评分引擎
 * 
 * 输入: answers[] - 30个选项对象 (来自 questions.js 的 option)
 * 输出: {
 *   dimensions: { R, S, F, A },     // 各维度净值
 *   survivalScore: Number,           // 生存总分
 *   probability: Number,             // 存活概率 5~99
 *   tier: Object,                    // 6档称号之一
 *   role: Object,                    // 16型角色之一
 *   roleKey: String                  // 角色key如 'R+S-F+A-'
 * }
 */
function calculate(answers) {
  var dimensions = { R: 0, S: 0, F: 0, A: 0 };
  var survivalScore = 0;

  for (var i = 0; i < answers.length; i++) {
    var opt = answers[i];
    if (!opt) continue;

    var dim = opt.dimensions || {};
    dimensions.R += dim.R || 0;
    dimensions.S += dim.S || 0;
    dimensions.F += dim.F || 0;
    dimensions.A += dim.A || 0;

    survivalScore += opt.survival || 0;
  }

  // 生存总分区间: 理论最低 ~-2 (有些选项-1), 理论最高 ~90 (30*3)
  // 实际合理区间约 15 ~ 75
  // 映射到 5% ~ 99%
  var minScore = 10;
  var maxScore = 70;
  var clamped = Math.max(minScore, Math.min(maxScore, survivalScore));
  var normalized = (clamped - minScore) / (maxScore - minScore);
  var probability = Math.round(5 + normalized * 94);
  probability = Math.max(5, Math.min(99, probability));

  var tier = results.getTier(probability);
  var role = results.getRole(dimensions.R, dimensions.S, dimensions.F, dimensions.A);

  var roleKey = (dimensions.R >= 0 ? 'R+' : 'R-') +
                (dimensions.S >= 0 ? 'S+' : 'S-') +
                (dimensions.F >= 0 ? 'F+' : 'F-') +
                (dimensions.A >= 0 ? 'A+' : 'A-');

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
 * 将维度净值归一化到 0~100 用于雷达图展示
 * 正值 → 51~100 (偏向冒险/群居/反抗/利他)
 * 负值 → 0~49  (偏向谨慎/独狼/苟活/利己)
 * 零   → 50
 */
function normalizeForRadar(dimensions) {
  var maxAbsR = 15;
  var maxAbsS = 15;
  var maxAbsF = 20;
  var maxAbsA = 15;

  function norm(val, maxAbs) {
    var clamped = Math.max(-maxAbs, Math.min(maxAbs, val));
    return Math.round(50 + (clamped / maxAbs) * 50);
  }

  return {
    R: norm(dimensions.R, maxAbsR),
    S: norm(dimensions.S, maxAbsS),
    F: norm(dimensions.F, maxAbsF),
    A: norm(dimensions.A, maxAbsA)
  };
}

module.exports = { calculate, normalizeForRadar };
