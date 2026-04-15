/**
 * Quiz2: AI来了，你的工作还能保得住吗
 * 22道题 · 6章节 · 4维度(J/D/V/I)
 *
 * 维度说明:
 *   J: 卷(+) vs 润(-)     留下来卷 vs 趁早跑路
 *   D: 驯AI(+) vs 被AI驯(-)  主动掌握AI vs 被动跟随
 *   V: 能见度高(+) vs 隐形(-)  价值被看到 vs 默默干活
 *   I: 不可替代(+) vs 标准化(-)  判断/决策 vs 执行/重复
 *
 * survival: 职场生存分 (1-3)
 */

var CHAPTERS = [
  { id: 1, name: 'AI开始替你干活' },
  { id: 2, name: 'AI开始定义你有没有价值' },
  { id: 3, name: 'AI开始抬高所有人的工作基线' },
  { id: 4, name: 'AI开始让你的苦劳贬值' },
  { id: 5, name: 'AI开始改写组织里的权力分配' },
  { id: 6, name: 'AI开始让员工更透明，也更脆弱' }
];

var QUESTIONS = [
  // ===== 第一章: AI开始替你干活 (Q1-Q4) =====
  {
    id: 1,
    chapter: 1,
    title: 'AI代笔',
    scenario: '公司宣布：以后PRD初稿、周报、会议纪要全部由AI生成，你只需要最后确认。你第一反应是：',
    options: [
      {
        label: 'A',
        text: '先偷偷试一下AI写的PRD质量——如果真不错，以后只改关键几句话，剩下时间研究副业',
        dimensions: { J: -1, D: 1, V: -1, I: -1 },
        survival: 1
      },
      {
        label: 'B',
        text: '赶紧把提示词和模板摸透，让AI写出来的东西带上我的风格，领导根本看不出区别',
        dimensions: { J: 1, D: 2, V: 0, I: -1 },
        survival: 2
      },
      {
        label: 'C',
        text: '立刻去争取"AI产出终审官"的位置——AI写错了总得有人背锅，而背锅的人就是不可替代的人',
        dimensions: { J: 1, D: 0, V: 1, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '当天就更新了简历，虽然还没想好去哪，但先挂着总没错',
        dimensions: { J: -2, D: -1, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 2,
    chapter: 1,
    title: 'AI卷王同事',
    scenario: '组里有个同事把AI用得特别猛，原本三个人一天的活，他半天就能交。你的反应？',
    options: [
      {
        label: 'A',
        text: '在周会上委婉提出"效率提升的同时要注意质量"，暗示他产出可能有问题',
        dimensions: { J: 1, D: -1, V: 1, I: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '先把他的方法偷学过来，再看能不能比他用得更猛',
        dimensions: { J: 1, D: 2, V: 0, I: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '主动去接那些需要跟业务方吵架、跨部门扯皮的活——这些AI永远干不了',
        dimensions: { J: 1, D: 0, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '默默算了一下：如果3个人的活1个人就能干，那多出来的2个人会是谁？',
        dimensions: { J: -2, D: 0, V: -1, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 3,
    chapter: 1,
    title: '十分钟竞品报告',
    scenario: '老板让你用AI做竞品分析，AI十分钟出了一份看起来很专业的报告。你怎么处理？',
    options: [
      {
        label: 'A',
        text: '直接交上去，反正老板也不会细看',
        dimensions: { J: 0, D: 1, V: -1, I: -2 },
        survival: 1
      },
      {
        label: 'B',
        text: '在AI报告基础上加上自己的判断和洞察，让它从"资料汇编"变成"策略建议"',
        dimensions: { J: 1, D: 1, V: 1, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '花两小时人工核实关键数据，因为AI编造数据的本事你已经领教过了',
        dimensions: { J: 1, D: -1, V: 0, I: 1 },
        survival: 2
      },
      {
        label: 'D',
        text: '先把AI报告里的格式和措辞改成自己的风格，免得老板发现是AI写的',
        dimensions: { J: 1, D: 1, V: -1, I: -1 },
        survival: 1
      }
    ]
  },
  {
    id: 4,
    chapter: 1,
    title: '人只做AI做不好的',
    scenario: '部门开始流行一句话："以后人只做AI做不好的部分。"你最接近哪种想法？',
    options: [
      {
        label: 'A',
        text: '那我得先搞清楚AI到底做不好什么——然后假装自己一直在做那些事',
        dimensions: { J: 1, D: 0, V: 2, I: 0 },
        survival: 1
      },
      {
        label: 'B',
        text: '先把AI能做好的部分全自动化，省下来的时间用来刷存在感',
        dimensions: { J: 1, D: 2, V: 1, I: -1 },
        survival: 2
      },
      {
        label: 'C',
        text: '更要卡到需求判断、优先级排序、跨团队协调这些位置——这些活AI接不住',
        dimensions: { J: 1, D: 0, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '这句话翻译过来就是"你的大部分工作AI都能做了"，我得未雨绸缪',
        dimensions: { J: -2, D: 0, V: 0, I: 0 },
        survival: 2
      }
    ]
  },

  // ===== 第二章: AI开始定义你有没有价值 (Q5-Q8) =====
  {
    id: 5,
    chapter: 2,
    title: 'AI标签',
    scenario: 'AI绩效系统给你打了个标签："做事稳定，但价值不够突出。"你的反应？',
    options: [
      {
        label: 'A',
        text: '先研究这个系统的评估逻辑——如果它认"改需求次数少=质量高"，那我以后就少改',
        dimensions: { J: 1, D: 2, V: 0, I: -1 },
        survival: 2
      },
      {
        label: 'B',
        text: '把自己主导过的几个关键决策整理成案例，发到团队wiki，让系统有据可查',
        dimensions: { J: 1, D: 0, V: 2, I: 1 },
        survival: 3
      },
      {
        label: 'C',
        text: '找老板1on1："有些工作是AI看不见的，比如我花了多少时间说服业务方砍需求"',
        dimensions: { J: 1, D: -1, V: 1, I: 2 },
        survival: 2
      },
      {
        label: 'D',
        text: '暗自庆幸自己一直有维护外部人脉，万一这标签变成裁员依据呢',
        dimensions: { J: -2, D: 0, V: -1, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 6,
    chapter: 2,
    title: 'AI打绩效',
    scenario: 'AI直接给你写了绩效评语，打分3.25（满分5分），评语写着："该员工工作态度认真，但创新性不足，核心产出可被AI工具部分替代，建议加强AI协作能力。"你的反应？',
    options: [
      {
        label: 'A',
        text: '逐条反驳——把这半年主导的3个关键决策列出来，附上业务数据，要求HR复核',
        dimensions: { J: 1, D: -1, V: 2, I: 1 },
        survival: 3
      },
      {
        label: 'B',
        text: '先研究AI打分的权重逻辑，下个季度按它的标准针对性地刷分',
        dimensions: { J: 1, D: 2, V: 0, I: -1 },
        survival: 2
      },
      {
        label: 'C',
        text: '截图发到PM吐槽群："被AI打了3.25，它连需求评审会都没参加过，凭什么？"',
        dimensions: { J: 0, D: -2, V: 1, I: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '心想：连绩效都让AI打了，HR是不是也快被优化了？说不定我该去看看AI绩效产品的PM岗',
        dimensions: { J: -1, D: 1, V: 0, I: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 7,
    chapter: 2,
    title: '贡献度排名',
    scenario: '公司用AI算每个人的"贡献度排名"。你花了三个月救火的烂项目，排名倒数。你怎么做？',
    options: [
      {
        label: 'A',
        text: '写一份项目复盘，详细列出"如果没有我介入，这个项目会烂成什么样"',
        dimensions: { J: 1, D: 0, V: 2, I: 1 },
        survival: 2
      },
      {
        label: 'B',
        text: '研究贡献度算法到底认什么——如果看需求上线量，那我以后多拆小需求',
        dimensions: { J: 1, D: 2, V: 0, I: -1 },
        survival: 2
      },
      {
        label: 'C',
        text: '接受现实：救火不算贡献，以后只接看起来能出数据的项目',
        dimensions: { J: 1, D: 1, V: 0, I: -2 },
        survival: 1
      },
      {
        label: 'D',
        text: '跟老板说清楚：如果贡献度只看AI数据，那以后没人愿意救火了',
        dimensions: { J: 1, D: -1, V: 1, I: 2 },
        survival: 3
      }
    ]
  },
  {
    id: 8,
    chapter: 2,
    title: '培养名单',
    scenario: '领导参考AI名单决定谁重点培养。名单上没有你。你的做法？',
    options: [
      {
        label: 'A',
        text: '主动约老板聊，把自己今年做过的3件最有影响力的事讲清楚',
        dimensions: { J: 1, D: 0, V: 2, I: 1 },
        survival: 3
      },
      {
        label: 'B',
        text: '研究名单上那些人的工作方式，找到差异点，调整策略',
        dimensions: { J: 1, D: 1, V: 0, I: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '先稳住心态，同时悄悄开始在外面看机会——不把鸡蛋放一个篮子里',
        dimensions: { J: -2, D: 0, V: -1, I: 0 },
        survival: 1
      },
      {
        label: 'D',
        text: '跟老板表态：我愿意接更难、更有挑战的项目，给我一个证明的机会',
        dimensions: { J: 2, D: 0, V: 1, I: 2 },
        survival: 3
      }
    ]
  },

  // ===== 第三章: AI开始抬高所有人的工作基线 (Q9-Q12) =====
  {
    id: 9,
    chapter: 3,
    title: '默认更快',
    scenario: '自从大家都用AI，领导默认所有人都该更快了。你的状态？',
    options: [
      {
        label: 'A',
        text: '用AI把能自动化的全做了，效率提了50%，但从不主动告诉老板自己在用AI',
        dimensions: { J: 1, D: 2, V: -2, I: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '确实更快了，但我把省下的时间花在思考"做什么"而不是"怎么做得更快"',
        dimensions: { J: 1, D: 1, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '老板觉得我快了，其实我只是学会了看起来很快——边用AI边开着三个文档装忙',
        dimensions: { J: 0, D: 1, V: -1, I: -2 },
        survival: 1
      },
      {
        label: 'D',
        text: '我意识到这不是"快不快"的问题，而是岗位正在被重新定义的信号',
        dimensions: { J: -1, D: 0, V: 0, I: 1 },
        survival: 2
      }
    ]
  },
  {
    id: 10,
    chapter: 3,
    title: '标准被拉高',
    scenario: '组里最会用AI的人已经把标准拉高了，你的做法？',
    options: [
      {
        label: 'A',
        text: '学他的方法，但在汇报时重点讲"我比AI多做了什么"',
        dimensions: { J: 1, D: 1, V: 2, I: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '不跟他卷速度，去做他不愿意做的脏活累活——跨部门协调、客诉处理',
        dimensions: { J: 1, D: 0, V: -1, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '默认评价方式已经变了，把精力从"做得多"转向"做得对"',
        dimensions: { J: 1, D: 0, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '私下问他愿不愿意一起出去创业——与其被公司压榨AI效率，不如自己干',
        dimensions: { J: -2, D: 1, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 11,
    chapter: 3,
    title: '不难吧？',
    scenario: '老板说："AI都帮你了，这点事应该不难吧？"你怎么回应？',
    options: [
      {
        label: 'A',
        text: '微笑点头，心里想：你试试让AI去说服你老板改需求？',
        dimensions: { J: 1, D: 0, V: -1, I: 1 },
        survival: 1
      },
      {
        label: 'B',
        text: '当面解释清楚：AI帮我省了30%的时间，但难点在剩下那70%',
        dimensions: { J: 1, D: 0, V: 2, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '说"好的"，然后用AI以极快速度交付，让老板觉得你确实很行',
        dimensions: { J: 1, D: 2, V: 1, I: -1 },
        survival: 2
      },
      {
        label: 'D',
        text: '什么都不说，但开始认真想：当老板觉得"什么都不难"时，你的价值还剩多少？',
        dimensions: { J: -1, D: 0, V: -1, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 12,
    chapter: 3,
    title: '永远做更多',
    scenario: 'AI没让你轻松，反而让所有人觉得你应该做更多。你怎么应对？',
    options: [
      {
        label: 'A',
        text: '把工作边界厘清楚，该拒就拒——不然"多做"永远没上限',
        dimensions: { J: 1, D: 0, V: 1, I: 1 },
        survival: 2
      },
      {
        label: 'B',
        text: '默默接住所有额外工作，但每一件都记录好、汇报好，年底谈薪有底气',
        dimensions: { J: 1, D: 0, V: 2, I: -1 },
        survival: 2
      },
      {
        label: 'C',
        text: '用AI快速消化多出来的工作，保持"游刃有余"的形象',
        dimensions: { J: 1, D: 2, V: 1, I: 0 },
        survival: 3
      },
      {
        label: 'D',
        text: '与其在一个不断膨胀的岗位上被压榨，不如趁现在跳到一个被AI影响更小的行业',
        dimensions: { J: -2, D: -1, V: 0, I: 0 },
        survival: 1
      }
    ]
  },

  // ===== 第四章: AI开始让你的苦劳贬值 (Q13-Q15) =====
  {
    id: 13,
    chapter: 4,
    title: '细稳不值钱了',
    scenario: '你以前最擅长"细、稳、能熬"，但AI来了，这些突然不值钱了。你会？',
    options: [
      {
        label: 'A',
        text: '把"细和稳"包装成"风控能力"和"质量管控经验"——换个说法，价值就回来了',
        dimensions: { J: 1, D: 0, V: 2, I: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '接受旧优势在掉价，赶紧学AI，从"苦劳型"升级成"巧劳型"',
        dimensions: { J: 1, D: 2, V: 0, I: 0 },
        survival: 3
      },
      {
        label: 'C',
        text: '转去做更需要经验判断的活：比如识别哪些需求是老板拍脑袋、哪些是真用户痛点',
        dimensions: { J: 1, D: 0, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '如果一个岗位只奖励苦劳，那AI来了只是让真相暴露更快——早该走了',
        dimensions: { J: -2, D: 0, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 14,
    chapter: 4,
    title: 'AI也能写吧',
    scenario: '你做了一份很用心的方案，老板看了一眼说："这个AI也能写吧？"你怎么办？',
    options: [
      {
        label: 'A',
        text: '当场反问："要不您让AI写一版，我们对比看看？"',
        dimensions: { J: 1, D: -1, V: 2, I: 1 },
        survival: 2
      },
      {
        label: 'B',
        text: '下次交方案时，重点讲你做了哪些"AI做不了的"判断和取舍',
        dimensions: { J: 1, D: 0, V: 1, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '之后所有方案都让AI先出一版，你只改关键部分，但表现得像全是自己写的',
        dimensions: { J: 1, D: 2, V: -1, I: -1 },
        survival: 1
      },
      {
        label: 'D',
        text: '气是气的，但冷静想想：如果连老板都这么觉得，市场上其他老板估计也这么觉得',
        dimensions: { J: -1, D: 0, V: 0, I: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 15,
    chapter: 4,
    title: '80分和100分',
    scenario: '你最怕的不是AI做得不好，而是AI做得"差不多"。80分的活谁都能交，你的优势在那20分——但没人在乎了。你会：',
    options: [
      {
        label: 'A',
        text: '写一份"80分到100分差异报告"，让所有人知道那20分值多少钱',
        dimensions: { J: 1, D: -1, V: 2, I: 1 },
        survival: 2
      },
      {
        label: 'B',
        text: '接受80分就是新及格线，把精力放在寻找"新的20分"在哪里',
        dimensions: { J: 1, D: 0, V: 0, I: 1 },
        survival: 3
      },
      {
        label: 'C',
        text: '用AI快速拿到80分，省下的时间全花在那20分上——让别人没法复制你',
        dimensions: { J: 1, D: 2, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '在一个只看80分的公司待着，就像在不评优的学校当学霸——没意思',
        dimensions: { J: -2, D: 0, V: 0, I: 0 },
        survival: 1
      }
    ]
  },

  // ===== 第五章: AI开始改写组织里的权力分配 (Q16-Q19) =====
  {
    id: 16,
    chapter: 5,
    title: '定方向的人',
    scenario: 'AI来了以后，最值钱的人不是最会干活的，而是最会定方向的。你的做法？',
    options: [
      {
        label: 'A',
        text: '每次会议主动发表对方向的看法——哪怕被怼，至少让人知道"我有判断力"',
        dimensions: { J: 1, D: 0, V: 2, I: 1 },
        survival: 2
      },
      {
        label: 'B',
        text: '学会把AI当成团队来管——给它分任务、做验收，让自己从"执行者"变成"管理者"',
        dimensions: { J: 1, D: 2, V: 0, I: 1 },
        survival: 3
      },
      {
        label: 'C',
        text: '去找老板说：我想负责一个从0到1的项目，哪怕小一点也行',
        dimensions: { J: 2, D: 0, V: 1, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '如果在这个团队永远只能做执行，那我要去一个让我定方向的地方',
        dimensions: { J: -2, D: 0, V: 0, I: 1 },
        survival: 1
      }
    ]
  },
  {
    id: 17,
    chapter: 5,
    title: '话语权转移',
    scenario: '会用AI的人在组织里话语权越来越大。你的策略？',
    options: [
      {
        label: 'A',
        text: '先把AI能力补到不拖后腿，然后用它来放大自己原有的判断力优势',
        dimensions: { J: 1, D: 2, V: 0, I: 1 },
        survival: 3
      },
      {
        label: 'B',
        text: '不跟他们比AI技能，而是卡住"最终拍板"和"背锅"的位置——永远需要人',
        dimensions: { J: 1, D: -1, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '向老板提议：由我来制定团队的AI使用规范——制定规则的人比遵守规则的人更值钱',
        dimensions: { J: 1, D: 1, V: 2, I: 1 },
        survival: 2
      },
      {
        label: 'D',
        text: '开始在外面找更看重业务判断力而不是AI技能的团队',
        dimensions: { J: -2, D: -1, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 18,
    chapter: 5,
    title: '新分工',
    scenario: '部门出现新分工：有人让AI干活，有人给AI收尾。你往哪边靠？',
    options: [
      {
        label: 'A',
        text: '往"让AI干活"那边——效率杠杆大，容易出成绩',
        dimensions: { J: 1, D: 2, V: 1, I: -1 },
        survival: 2
      },
      {
        label: 'B',
        text: '往"收尾、兜底、背责任"那边——短期更难被替代',
        dimensions: { J: 1, D: -1, V: 0, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '两边都不选，我要往上走到"决定让AI干什么活"的位置',
        dimensions: { J: 2, D: 1, V: 1, I: 2 },
        survival: 3
      },
      {
        label: 'D',
        text: '先看两边各站什么人，选竞争小、空间大的那边',
        dimensions: { J: 0, D: 0, V: -1, I: 0 },
        survival: 2
      }
    ]
  },
  {
    id: 19,
    chapter: 5,
    title: '最危险的人',
    scenario: '最危险的是既不会用AI、也没有判断力的人。你的策略？',
    options: [
      {
        label: 'A',
        text: '两手都抓：上午学AI工具，下午刷业务sense',
        dimensions: { J: 2, D: 1, V: 0, I: 1 },
        survival: 3
      },
      {
        label: 'B',
        text: '先补AI——至少在工具层面不被淘汰，判断力是长期积累急不来',
        dimensions: { J: 1, D: 2, V: 0, I: 0 },
        survival: 2
      },
      {
        label: 'C',
        text: '先补判断力——AI工具人人都能学，但判断力才是真正的护城河',
        dimensions: { J: 1, D: -1, V: 0, I: 2 },
        survival: 2
      },
      {
        label: 'D',
        text: '承认自己可能两边都不够强，趁还来得及，认真考虑转行',
        dimensions: { J: -2, D: -1, V: 0, I: -1 },
        survival: 1
      }
    ]
  },

  // ===== 第六章: AI开始让员工更透明，也更脆弱 (Q20-Q22) =====
  {
    id: 20,
    chapter: 6,
    title: 'AI监工',
    scenario: 'AI根据在线时长、回复速度、文档产出来判断谁在"认真工作"。你的反应？',
    options: [
      {
        label: 'A',
        text: '研究它的判断逻辑，然后精准地在对的时间、对的渠道留下对的痕迹',
        dimensions: { J: 1, D: 2, V: 1, I: -1 },
        survival: 2
      },
      {
        label: 'B',
        text: '该怎么工作怎么工作，但关键决策和重要沟通一定要留下文字记录',
        dimensions: { J: 1, D: 0, V: 1, I: 1 },
        survival: 3
      },
      {
        label: 'C',
        text: '写一个脚本让鼠标每5分钟自动动一下——用AI对付AI，天经地义',
        dimensions: { J: 0, D: 1, V: -2, I: -2 },
        survival: 1
      },
      {
        label: 'D',
        text: '如果公司已经靠这种方式管人了，说明信任没了——该走了',
        dimensions: { J: -2, D: 0, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 21,
    chapter: 6,
    title: '低价值曝光',
    scenario: 'AI报表一拉，谁在做低价值工作一目了然。你的做法？',
    options: [
      {
        label: 'A',
        text: '赶紧把低价值工作交给AI，让报表上的自己看起来"高价值"',
        dimensions: { J: 1, D: 2, V: 1, I: 0 },
        survival: 2
      },
      {
        label: 'B',
        text: '去做AI报表看不懂但公司很需要的工作——比如安抚一个暴怒的VIP客户',
        dimensions: { J: 1, D: 0, V: -1, I: 2 },
        survival: 3
      },
      {
        label: 'C',
        text: '跟老板建议：报表应该加"隐性贡献"维度，不然大家都去挑好看的活干',
        dimensions: { J: 1, D: -1, V: 1, I: 1 },
        survival: 2
      },
      {
        label: 'D',
        text: '报表爱怎么说怎么说——如果老板看不到我的价值，那我需要换一个能看到的老板',
        dimensions: { J: -2, D: 0, V: 0, I: 0 },
        survival: 1
      }
    ]
  },
  {
    id: 22,
    chapter: 6,
    title: '最后的照妖镜',
    scenario: '如果AI把你这份工作的每个环节都照得清清楚楚，你最担心暴露出来的是什么？',
    options: [
      {
        label: 'A',
        text: '我做了很多事，但大部分时间其实花在了开会和回消息上',
        dimensions: { J: 0, D: -1, V: 1, I: -1 },
        survival: 1
      },
      {
        label: 'B',
        text: '我到现在还没真正把AI用进核心工作里，还只是拿它写周报和翻译',
        dimensions: { J: 0, D: -2, V: 0, I: 0 },
        survival: 1
      },
      {
        label: 'C',
        text: '我做的大部分还是执行层面的活，离"不可替代"还有很远',
        dimensions: { J: 0, D: 0, V: -1, I: -2 },
        survival: 2
      },
      {
        label: 'D',
        text: '我其实已经知道该改变了，但一直在拖——因为改变比现状更可怕',
        dimensions: { J: -1, D: -1, V: 0, I: 0 },
        survival: 1
      }
    ]
  }
];

module.exports = { QUESTIONS: QUESTIONS, CHAPTERS: CHAPTERS };
