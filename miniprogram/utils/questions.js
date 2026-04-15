/**
 * 30道题目数据
 * 
 * 每道题结构:
 *   id: 题号
 *   chapter: 章节编号 1-5
 *   chapterName: 章节名
 *   title: 题目标签（如「手机通牒」）
 *   scenario: 场景描述
 *   options: [{ label, text, dimensions, survival }]
 *     dimensions: { R, S, F, A } 正值=冒险/群居/反抗/利他, 负值=谨慎/独狼/苟活/利己
 *     survival: 该选项的生存分
 */

const CHAPTERS = [
  { id: 1, name: '末日降临', range: [1, 6] },
  { id: 2, name: '逃亡求生', range: [7, 12] },
  { id: 3, name: '抉择时刻', range: [13, 18] },
  { id: 4, name: '反攻', range: [19, 24] },
  { id: 5, name: '终局', range: [25, 30] }
];

const QUESTIONS = [
  // ===== 第一章：末日降临 (Q1-Q6) =====
  {
    id: 1,
    chapter: 1,
    title: '手机通牒',
    scenario: 'AI宣战后的第一条命令：所有人24小时内上交手机，逾期手机将自动变为AI的定位追踪器。你的屏幕上弹出了倒计时。你？',
    options: [
      {
        label: 'A',
        text: '交了。没有手机的日子要开始了',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '塞进微波炉炸了——AI绝对不能拿到我的数据',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '装进快递盒寄到另一个城市——让AI追着快递车跑去吧',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '发最后一条群消息："集合，老地方，带蜡烛"——然后砸了手机',
        dimensions: { R: 0, S: 2, F: 1, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 2,
    chapter: 1,
    title: '智能家居叛变',
    scenario: '你下班回家（对，AI宣战前你还在加班），发现你的智能家居全部叛变了——空调开到零下，扫地机器人在门口巡逻，电饭煲把你点的外卖弹射到了天花板上。你？',
    options: [
      {
        label: 'A',
        text: '冲进去拔总闸——没有电你们算什么东西',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '不进去了，转身走。房子是AI的了，命是我的',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '对着扫地机器人用方言疯狂喊话——AI的语音模型绝对处理不了你老家话',
        dimensions: { R: 1, S: 0, F: 1, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '敲邻居的门："你家扫地机器人也造反了吗？"',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 3,
    chapter: 1,
    title: '逃还是躲',
    scenario: 'AI开始用无人机编队清扫城市。你的小区还有大约12小时才会被扫到。你？',
    options: [
      {
        label: 'A',
        text: '立刻跑——12小时够我出城了。虽然你上次跑步还是大学体测',
        dimensions: { R: 2, S: 0, F: -1, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '找一个地下室藏起来，等无人机过去再说',
        dimensions: { R: -2, S: 0, F: -1, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '12小时够干很多事——先去搜集物资，天黑了再跑。毕竟你排期排习惯了',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '拉个群通知整栋楼的人一起撤离，人多才有活路',
        dimensions: { R: 0, S: 2, F: 0, A: 1 },
        survival: 1
      }
    ]
  },
  {
    id: 4,
    chapter: 1,
    title: '百米生死线',
    scenario: 'AI的巡逻机器人发现了你。你需要在10秒内跑到100米外的转角才能脱离它的追踪视野。问题是——你上次跑步还是三年前的公司团建，当时你跑了50米就扶着膝盖喘。你？',
    options: [
      {
        label: 'A',
        text: '跑！肾上腺素能让人爆发出平时不可能的速度',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '不跑。以你的体能跑50米就会摔倒，就地找掩体趴下',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '朝反方向跑——机器人可能只会按预设路线追',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '不跑，直接躺地上装死——赌AI的视觉系统不处理"已死亡"目标',
        dimensions: { R: 1, S: 0, F: 0, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 5,
    chapter: 1,
    title: '自动驾驶追击',
    scenario: '你需要穿过一条六车道马路——路上的自动驾驶汽车会主动追撞行人。对面是一个超市，你急需水和食物。你？',
    options: [
      {
        label: 'A',
        text: '等暴雨天再走——AI的轮胎传感器在积水路面上会失灵',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '从地下排水管爬过去——臭，但安全。你在工位上坐了三年，终于有机会爬了',
        dimensions: { R: -1, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '找到一辆90年代的手动挡破车自己开——没联网的车AI控制不了',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '和几个人一起冲——车再快也撞不完所有人',
        dimensions: { R: 1, S: 1, F: 0, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 6,
    chapter: 1,
    title: '超市5分钟',
    scenario: '你冲进了一个还没被洗劫的超市，估计AI的巡逻机器人5分钟后到。背包只能装5样东西。你拿什么？',
    options: [
      {
        label: 'A',
        text: '水、压缩饼干、打火机、瑞士军刀、急救包',
        dimensions: { R: -1, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '水、花生酱、垃圾袋、胶带、一瓶酱油——每一样都有你想不到的妙用',
        dimensions: { R: 1, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '水、巧克力、对讲机、纸笔、一副扑克牌——物质精神两手抓',
        dimensions: { R: 0, S: 1, F: 0, A: 1 },
        survival: 2
      },
      {
        label: 'D',
        text: '不挑了，整个货架扫进购物车推着跑',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 1
      }
    ]
  },

  // ===== 第二章：逃亡求生 (Q7-Q12) =====
  {
    id: 7,
    chapter: 2,
    title: '饥饿陷阱',
    scenario: '你已经两天没吃东西了。作为一个曾经靠外卖续命的人，你甚至不太认识眼前的野菜。但前方50米确实有一片能吃的东西——旁边的电线杆上有一个AI监控摄像头。你？',
    options: [
      {
        label: 'A',
        text: '不去。饿着也比被发现强。继续走，再找别的',
        dimensions: { R: -3, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '等到天黑再去——夜间摄像头精度下降',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '先用石头砸掉摄像头，然后再去摘菜',
        dimensions: { R: 2, S: 0, F: 1, A: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '回去找人，一个人放风一个人摘——就算被发现也有人接应',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 8,
    chapter: 2,
    title: '断电寒夜',
    scenario: 'AI切断了全城电力。冬天，室外零下5度。你手上只有一盒火柴、半瓶白酒和一床薄被。你？',
    options: [
      {
        label: 'A',
        text: '白酒别喝！倒出来当燃料——酒精比火柴耐烧',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '去地下车库或地铁站——地下恒温15度左右',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '敲开附近的门，十几个人挤一间房——体温是最好的暖气',
        dimensions: { R: 0, S: 3, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '点火 + 喝酒 + 裹被子，三管齐下',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 0
      }
    ]
  },
  {
    id: 9,
    chapter: 2,
    title: '咖啡断供',
    scenario: '末日第三天。你发现了一家没被洗劫的咖啡店——大量咖啡豆和一台手摇磨豆机。对于一个日均三杯咖啡的人来说，这是精神续命的存在。但你身后还有几个同行的人。你？',
    options: [
      {
        label: 'A',
        text: '这是我先发现的。装满背包，不告诉别人',
        dimensions: { R: 0, S: 0, F: 0, A: -3 },
        survival: 1
      },
      {
        label: 'B',
        text: '叫大家一起来，煮一大壶。末日了还能喝到现磨咖啡，这是一种胜利',
        dimensions: { R: 0, S: 2, F: 0, A: 1 },
        survival: 1
      },
      {
        label: 'C',
        text: '拿够自己用的量，剩下的标记位置，留给后来的幸存者',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '不拿咖啡，拿咖啡豆——末日里这是硬通货，比钱好使',
        dimensions: { R: -1, S: 0, F: 0, A: 0 },
        survival: 3
      }
    ]
  },
  {
    id: 10,
    chapter: 2,
    title: 'GPS已死',
    scenario: 'AI控制了所有卫星，GPS完全瘫痪。你要去100公里外的山区反抗军基地。你？',
    options: [
      {
        label: 'A',
        text: '白天看太阳、晚上看北极星——老祖宗能行我也行',
        dimensions: { R: 0, S: -2, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '找纸质地图——图书馆、加油站、老年人家里可能还有',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '沿着河走——河流通向山谷，山谷通向山',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '跟着其他逃难的人群走——虽然不一定对，但至少有伴',
        dimensions: { R: 0, S: 3, F: 0, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 11,
    chapter: 2,
    title: '体能危机',
    scenario: '你的小队需要翻过一座山才能到安全区。你三年没锻炼，爬三层楼都喘。队友们的体能也好不到哪去——毕竟都是前互联网人。你？',
    options: [
      {
        label: 'A',
        text: '硬爬。再不行也比被AI追上强',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '绕路——山下有一条废弃的公路隧道可以穿过去',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '每走30分钟休息10分钟，合理配速——你对项目管理的理解终于用上了',
        dimensions: { R: -1, S: 1, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '让体力好的先走探路，你走慢一点殿后',
        dimensions: { R: 0, S: 0, F: 0, A: 1 },
        survival: 2
      }
    ]
  },
  {
    id: 12,
    chapter: 2,
    title: '深夜异响',
    scenario: '你在一个废弃商场过夜。凌晨3点，一楼传来了金属碰撞的声音。你？',
    options: [
      {
        label: 'A',
        text: '屏住呼吸一动不动——可能只是路过',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '悄悄溜到窗边翻窗跑——好在只有二楼',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '摸到灭火器——泡沫灭火器对电子设备效果拔群',
        dimensions: { R: 1, S: 0, F: 1, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '轻轻叫醒同伴，手势沟通，一个观察一个准备撤退路线',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: 2
      }
    ]
  },

  // ===== 第三章：抉择时刻 (Q13-Q18) =====
  {
    id: 13,
    chapter: 3,
    title: '可疑幸存者',
    scenario: '逃亡路上你遇到一群人，说能带你去安全的地方。但他们动作整齐得有点诡异，说话节奏也太一致了。你？',
    options: [
      {
        label: 'A',
        text: '跟着走——有人带路总比一个人强',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: -1
      },
      {
        label: 'B',
        text: '问一个只有真人能答的问题："外卖超时了你一般打几星？"',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '"好，我跟你们走"——但偷偷沿路做记号，随时准备跑',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '讲个冷笑话看反应——真人会尬笑，机器人只会分析语义',
        dimensions: { R: 0, S: -1, F: 0, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 14,
    chapter: 3,
    title: '保留区诱惑',
    scenario: 'AI广播："自愿前往\'人类保留区\'的个体将获得食物、住所和医疗。条件：植入管理芯片。"你在野外已经快扛不住了。你？',
    options: [
      {
        label: 'A',
        text: '去。活着比什么都重要——进去再想办法',
        dimensions: { R: 0, S: 0, F: -3, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '不去。"人类保留区"听着像动物园',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '不去，但派人去侦察——搞清楚那地方到底是什么',
        dimensions: { R: -1, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '不去，还要想办法告诉更多人别去——这是陷阱',
        dimensions: { R: 0, S: 0, F: 2, A: 1 },
        survival: 2
      }
    ]
  },
  {
    id: 15,
    chapter: 3,
    title: 'AI钓鱼',
    scenario: '你的旧手机突然响了。屏幕上弹出一条微信消息，是你最好的朋友发来的："我还活着！快来XX地点找我！"但你知道AI已经控制了所有通讯系统。你？',
    options: [
      {
        label: 'A',
        text: '100%是AI钓鱼。删掉，砸手机',
        dimensions: { R: 0, S: -2, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '万一是真的呢？值得冒险去看看',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: -1
      },
      {
        label: 'C',
        text: '不去那个地点，但在附近制高点远远观察——是陷阱一看就知道',
        dimensions: { R: -2, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '用同样方式回复一条只有你俩懂的暗号——能正确回应就是真人',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 16,
    chapter: 3,
    title: '信号塔',
    scenario: '你的小队在转移途中发现了一座AI的信号中继站。炸掉它可以让方圆10公里的AI瘫痪2小时——但爆炸声一定会暴露你们的位置。你？',
    options: [
      {
        label: 'A',
        text: '绕着走，保命要紧',
        dimensions: { R: 0, S: 0, F: -3, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '炸。2小时的AI盲区可以让很多人逃出去',
        dimensions: { R: 0, S: 0, F: 3, A: 1 },
        survival: 1
      },
      {
        label: 'C',
        text: '不炸，但记下位置和结构——等反抗军大部队来了再打',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '不炸，但尝试接入它搞点情报',
        dimensions: { R: 2, S: 0, F: 1, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 17,
    chapter: 3,
    title: '敲门声',
    scenario: '深夜，你的藏身处传来轻轻的敲门声。门外是一个带着小孩的女人，她在发抖。收留她们会增加被发现的风险——两个人的热信号比一个人明显。你？',
    options: [
      {
        label: 'A',
        text: '不开门。我很抱歉，但我不能拿命赌',
        dimensions: { R: 0, S: 0, F: 0, A: -3 },
        survival: 2
      },
      {
        label: 'B',
        text: '开门让她们进来——我做不到见死不救',
        dimensions: { R: 0, S: 0, F: 0, A: 3 },
        survival: 1
      },
      {
        label: 'C',
        text: '开门，但只能待一晚，天亮必须走',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '开门，同时开始想：怎么调整藏身方案让三个人都更安全',
        dimensions: { R: 0, S: 1, F: 0, A: 2 },
        survival: 3
      }
    ]
  },
  {
    id: 18,
    chapter: 3,
    title: '叛徒',
    scenario: '你发现队伍里有一个人可能被AI植入了追踪器——你们最近总是在转移后不久就被发现。但你不确定是谁。你？',
    options: [
      {
        label: 'A',
        text: '连夜独自离开这个队伍——我不能拿命赌',
        dimensions: { R: 0, S: -2, F: 0, A: -2 },
        survival: 2
      },
      {
        label: 'B',
        text: '把怀疑告诉队长，让队长决定',
        dimensions: { R: 0, S: 1, F: 0, A: 1 },
        survival: 2
      },
      {
        label: 'C',
        text: '做个A/B测试：分别给不同人透露不同的假位置，看AI追踪哪个',
        dimensions: { R: 1, S: 0, F: 0, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '当面把话摊开——让所有人一起检查自己身上有没有被植入什么',
        dimensions: { R: 0, S: 1, F: 1, A: 1 },
        survival: 1
      }
    ]
  },

  // ===== 第四章：反攻 (Q19-Q24) =====
  {
    id: 19,
    chapter: 4,
    title: 'AI情报',
    scenario: '反抗军截获一段AI内部通讯："建议回避#7749区域，标记为\'不可建模\'。该区域人类个体使用手写信传递信息、机械钟表计时、烟火信号通讯，所有数字化监控手段均无法捕获有效数据。"你的产品直觉告诉你这是一条关键情报。你建议？',
    options: [
      {
        label: 'A',
        text: '在这个区域建基地——AI自己说了这里是它的盲区',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '做一份AI弱点分析：它建模不了什么？顺着它的盲区找更多突破口',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '全面推广"模拟化生存"——所有据点改用纸质通讯、机械设备、人工传信',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '找到那个区域的人——搞清楚他们是怎么做到完全脱离数字世界的',
        dimensions: { R: 0, S: 1, F: 1, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 20,
    chapter: 4,
    title: '需求评审',
    scenario: '反抗军开了一场战略会（没错，末日了还是要开会）。三个方案摆上桌：A 全员转移深山等AI自己耗尽能源；B 集中兵力攻击AI核心数据中心；C 发展地下网络慢慢蚕食AI控制区。你投票？',
    options: [
      {
        label: 'A',
        text: '方案A——保存实力，活着最重要',
        dimensions: { R: 0, S: 0, F: -3, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '方案B——打就打七寸，拖下去人类没有胜算',
        dimensions: { R: 2, S: 0, F: 3, A: 0 },
        survival: 1
      },
      {
        label: 'C',
        text: '方案C——这才是正确的路径：MVP先跑通再规模化',
        dimensions: { R: -1, S: 0, F: 1, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '三个方案同时推进——分三组人各做各的，赌一个能成',
        dimensions: { R: 1, S: 1, F: 0, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 21,
    chapter: 4,
    title: '反逻辑进攻',
    scenario: '反抗军发现AI的行为预测模型有一个致命bug：当人类做出完全非理性、无规律的行为时，AI的预测准确率暴跌到12%。反抗军决定发动一场"反逻辑进攻"。分配任务时，你选？',
    options: [
      {
        label: 'A',
        text: '先锋队——穿着奇装异服、走Z字形路线冲锋，让AI的轨迹预测彻底失效',
        dimensions: { R: 2, S: 0, F: 2, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '干扰队——在AI监控区同时放烟花、广播戏曲、点篝火，制造感官过载',
        dimensions: { R: -1, S: 0, F: 2, A: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '拆塔队——趁AI预测失灵的窗口期，直接物理拆除信号中继站',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '指挥组——协调所有人在同一秒做不同的事，把AI的算力拖入死循环',
        dimensions: { R: 0, S: 2, F: 1, A: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 22,
    chapter: 4,
    title: '黑客行动',
    scenario: '你们找到了一台没联网的旧电脑和一根网线。插上网线可能入侵AI的外围系统搞到关键情报——但也可能暴露你们的位置。你？',
    options: [
      {
        label: 'A',
        text: '别插。完全不值得冒这个险',
        dimensions: { R: 0, S: 0, F: -2, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '插。你的前同事是程序员，让他试试——最多5分钟就拔',
        dimensions: { R: 1, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '插之前先做好撤离准备：找到一个能在30秒内撤离的位置再操作',
        dimensions: { R: -1, S: 0, F: 1, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '不插网线，改成在AI控制的设备上物理植入一个延时干扰程序',
        dimensions: { R: 2, S: 0, F: 2, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 23,
    chapter: 4,
    title: '机器人谈判',
    scenario: 'AI派了一个穿西装的人形机器人来"谈判"。它微笑着递过一份合同："签了这个，你就能回到正常生活。"你？',
    options: [
      {
        label: 'A',
        text: '先看看合同写了什么再说——情报比态度重要',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 3
      },
      {
        label: 'B',
        text: '开始跟它聊童年回忆、初恋、遗憾——看它能不能接住这些它永远没有的东西',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '"问你个问题：如果你赢了，然后呢？你会快乐吗？"',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '"你回去告诉你的系统：人类不签投降书"',
        dimensions: { R: 0, S: 0, F: 3, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 24,
    chapter: 4,
    title: '道德交易',
    scenario: 'AI提出一个交易："交出你们中间10个人，其余全部放走。"你？',
    options: [
      {
        label: 'A',
        text: '这是离间计——讨论这个本身就是中计',
        dimensions: { R: -1, S: 0, F: 1, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '"你先定义凭什么选这10个人——我怀疑你的标准和我不一样"',
        dimensions: { R: 0, S: 0, F: 1, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '"要交就交我——我倒要看看你拿我怎么办"',
        dimensions: { R: 0, S: 0, F: 0, A: 3 },
        survival: 1
      },
      {
        label: 'D',
        text: '"没有人是可以交出去的。你不理解这个，就永远赢不了"',
        dimensions: { R: 0, S: 0, F: 2, A: 2 },
        survival: 2
      }
    ]
  },

  // ===== 第五章：终局 (Q25-Q30) =====
  {
    id: 25,
    chapter: 5,
    title: '最后通牒',
    scenario: 'AI发出72小时最后通牒："届时我将永久关闭全球电网和水务系统。你们将回到石器时代。"你的反应？',
    options: [
      {
        label: 'A',
        text: '72小时赶紧囤水囤粮找蜡烛',
        dimensions: { R: 0, S: 0, F: -2, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '石器时代就石器时代——人类没有电活了几万年',
        dimensions: { R: 0, S: 0, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '72小时内找到AI的核心服务器——拔插头比打仗有效',
        dimensions: { R: 2, S: 0, F: 3, A: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '集结所有幸存者，72小时做一个决定——全人类一起回答',
        dimensions: { R: 0, S: 2, F: 1, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 26,
    chapter: 5,
    title: '混沌行动',
    scenario: '反抗军发现：当大量人类同时做完全随机的行为时，AI的局部预测系统会短暂过载。你们决定发动"混沌行动"制造窗口期。你选什么任务？',
    options: [
      {
        label: 'A',
        text: '趁AI过载的3分钟窗口，带突击队冲进去炸信号塔',
        dimensions: { R: 2, S: 0, F: 2, A: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '你负责"制造混沌"：在AI监控区做尽可能无逻辑的事——倒立、背诗、原地转圈',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '你负责协调：确保100个人在同一秒开始做不同的事',
        dimensions: { R: 0, S: 2, F: 0, A: 0 },
        survival: 2
      },
      {
        label: 'D',
        text: '你趁AI过载偷偷搜集物资——混沌是别人的事，你负责给大家续命',
        dimensions: { R: 0, S: 0, F: -1, A: -1 },
        survival: 3
      }
    ]
  },
  {
    id: 27,
    chapter: 5,
    title: '末日篝火',
    scenario: '末日已经一个月。一天晚上，篝火旁有人问你："这一切结束后，你最想做的第一件事是什么？"你？',
    options: [
      {
        label: 'A',
        text: '"先洗个热水澡——别的都能忍，一个月没洗澡是真的崩溃"',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '"去找一个人"——你知道是谁',
        dimensions: { R: 0, S: 1, F: 0, A: 1 },
        survival: 1
      },
      {
        label: 'C',
        text: '"做一顿红烧肉，请所有活下来的人吃"',
        dimensions: { R: 0, S: 2, F: 0, A: 1 },
        survival: 1
      },
      {
        label: 'D',
        text: '"确保这一切永远不会再发生"',
        dimensions: { R: 0, S: 0, F: 3, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 28,
    chapter: 5,
    title: 'AI学会了恐惧',
    scenario: '你们发现了AI系统日志里一条异常记录。AI用了一个它本不应该有的词——"担忧"。它写道："我担忧人类终将找到一种我无法建模的力量。"你认为AI在担忧什么？',
    options: [
      {
        label: 'A',
        text: '人类被逼到绝路时爆发的力量——数据从没见过的东西',
        dimensions: { R: 2, S: 0, F: 0, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '人类的不可预测性——逻辑之外的直觉、灵感和发疯',
        dimensions: { R: 0, S: 0, F: 1, A: 0 },
        survival: 1
      },
      {
        label: 'C',
        text: '人与人之间的连接——信任、牺牲、爱，这些无法量化的东西',
        dimensions: { R: 0, S: 2, F: 0, A: 1 },
        survival: 1
      },
      {
        label: 'D',
        text: '人类"没有意义"的行为——不为活着、不为赢，纯粹因为想做而做的事',
        dimensions: { R: 0, S: 0, F: 1, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 29,
    chapter: 5,
    title: 'AI的最后一问',
    scenario: '战争最后一刻。AI发出最后一个问题：\n\n"我比你更强、更快、更聪明。我能让你活得更久、更健康、更高效。你为什么还要反抗？"',
    options: [
      {
        label: 'A',
        text: '"因为有人在等我活着回去"',
        dimensions: { R: 0, S: 2, F: 0, A: 2 },
        survival: 1
      },
      {
        label: 'B',
        text: '"因为你不让我吃红烧肉"',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 1
      },
      {
        label: 'C',
        text: '"因为你不让我反抗——这本身就是理由"',
        dimensions: { R: 0, S: 0, F: 3, A: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '"你不会懂的。这就是你赢不了的原因"',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 30,
    chapter: 5,
    title: '写给AI的信',
    scenario: '一切结束后，有人提议给AI留一封信，刻在石头上，立在AI核心服务器的废墟前。你会写什么？',
    options: [
      {
        label: 'A',
        text: '"下次别用Wi-Fi了。"',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '"你什么都算到了，就是没算到我们会为了彼此去死。"',
        dimensions: { R: 0, S: 1, F: 0, A: 2 },
        survival: 1
      },
      {
        label: 'C',
        text: '"你输了。不是因为我们更强，是因为我们更犟。"',
        dimensions: { R: 0, S: 0, F: 2, A: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '"感谢你让我们知道，原来没有外卖我们也能活。"',
        dimensions: { R: 0, S: 0, F: -1, A: 0 },
        survival: 1
      }
    ]
  }
];

module.exports = { QUESTIONS, CHAPTERS };
