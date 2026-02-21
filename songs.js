const songs = [
  {
    id: 1,
    title: "小兔子乖乖",
    lang: "zh",
    color: "#FFE4E1",
    emoji: "🐰",
    lyrics: [
      "小兔子乖乖",
      "把门儿开开",
      "快点儿开开",
      "我要进来",
      "",
      "不开不开我不开",
      "妈妈没回来",
      "谁来也不开",
      "",
      "小兔子乖乖",
      "把门儿开开",
      "快点儿开开",
      "我要进来",
      "",
      "就开就开我就开",
      "妈妈回来了",
      "快点把门开"
    ]
  },
  {
    id: 2,
    title: "两只老虎",
    lang: "zh",
    color: "#FFF3E0",
    emoji: "🐯",
    lyrics: [
      "两只老虎，两只老虎",
      "跑得快，跑得快",
      "一只没有眼睛",
      "一只没有尾巴",
      "真奇怪，真奇怪",
      "",
      "两只老虎，两只老虎",
      "跑得快，跑得快",
      "一只没有眼睛",
      "一只没有尾巴",
      "真奇怪，真奇怪"
    ]
  },
  {
    id: 3,
    title: "小星星",
    lang: "zh",
    color: "#E8EAF6",
    emoji: "⭐",
    lyrics: [
      "一闪一闪亮晶晶",
      "满天都是小星星",
      "挂在天上放光明",
      "好像许多小眼睛",
      "",
      "一闪一闪亮晶晶",
      "满天都是小星星"
    ]
  },
  {
    id: 4,
    title: "数鸭子",
    lang: "zh",
    color: "#E0F7FA",
    emoji: "🦆",
    lyrics: [
      "门前大桥下",
      "游过一群鸭",
      "快来快来数一数",
      "二四六七八",
      "",
      "嘎嘎嘎嘎真呀真多呀",
      "数不清到底多少鸭",
      "数不清到底多少鸭",
      "",
      "赶鸭老爷爷",
      "胡子白花花",
      "唱呀唱着家乡戏",
      "还会说笑话",
      "",
      "小孩小孩快快上学校",
      "别考个鸭蛋抱回家",
      "别考个鸭蛋抱回家"
    ]
  },
  {
    id: 5,
    title: "拔萝卜",
    lang: "zh",
    color: "#FFF8E1",
    emoji: "🥕",
    lyrics: [
      "拔萝卜，拔萝卜",
      "嘿哟嘿哟拔萝卜",
      "嘿哟嘿哟拔不动",
      "",
      "老太婆，快快来",
      "快来帮我们拔萝卜",
      "",
      "拔萝卜，拔萝卜",
      "嘿哟嘿哟拔萝卜",
      "嘿哟嘿哟拔不动",
      "",
      "小姑娘，快快来",
      "快来帮我们拔萝卜",
      "",
      "拔萝卜，拔萝卜",
      "嘿哟嘿哟拔萝卜",
      "嘿哟嘿哟拔不动",
      "",
      "小黄狗，快快来",
      "快来帮我们拔萝卜",
      "",
      "拔萝卜，拔萝卜",
      "嘿哟嘿哟拔萝卜",
      "嘿哟嘿哟拔不动",
      "",
      "小花猫，快快来",
      "快来帮我们拔萝卜"
    ]
  },
  {
    id: 6,
    title: "世上只有妈妈好",
    lang: "zh",
    color: "#FCE4EC",
    emoji: "💝",
    lyrics: [
      "世上只有妈妈好",
      "有妈的孩子像块宝",
      "投进妈妈的怀抱",
      "幸福享不了",
      "",
      "世上只有妈妈好",
      "没妈的孩子像根草",
      "离开妈妈的怀抱",
      "幸福哪里找"
    ]
  },
  {
    id: 7,
    title: "小燕子",
    lang: "zh",
    color: "#E8F5E9",
    emoji: "🐦",
    lyrics: [
      "小燕子，穿花衣",
      "年年春天来这里",
      "我问燕子你为啥来",
      "燕子说，这里的春天最美丽",
      "",
      "小燕子，告诉你",
      "今年这里更美丽",
      "我们盖起了大工厂",
      "装上了新机器",
      "欢迎你，长期住在这里"
    ]
  },
  {
    id: 8,
    title: "找朋友",
    lang: "zh",
    color: "#F3E5F5",
    emoji: "🤝",
    lyrics: [
      "找呀找呀找朋友",
      "找到一个好朋友",
      "敬个礼，握握手",
      "你是我的好朋友",
      "",
      "找呀找呀找朋友",
      "找到一个好朋友",
      "敬个礼，握握手",
      "你是我的好朋友"
    ]
  },
  {
    id: 9,
    title: "四是四十是十",
    lang: "zh",
    color: "#FFEBEE",
    emoji: "🔢",
    lyrics: [
      "四是四，十是十",
      "十四是十四",
      "四十是四十",
      "",
      "莫把四字说成十",
      "休将十字说成四",
      "",
      "若要分清四十和十四",
      "经常练说十和四"
    ]
  },
  {
    id: 10,
    title: "吃葡萄不吐葡萄皮",
    lang: "zh",
    color: "#EDE7F6",
    emoji: "🍇",
    lyrics: [
      "吃葡萄不吐葡萄皮",
      "不吃葡萄倒吐葡萄皮"
    ]
  },
  {
    id: 11,
    title: "八百标兵奔北坡",
    lang: "zh",
    color: "#E0F2F1",
    emoji: "🏔️",
    lyrics: [
      "八百标兵奔北坡",
      "炮兵并排北边跑",
      "炮兵怕把标兵碰",
      "标兵怕碰炮兵炮"
    ]
  },
  {
    id: 12,
    title: "红凤凰粉凤凰",
    lang: "zh",
    color: "#FBE9E7",
    emoji: "🦚",
    lyrics: [
      "红凤凰，粉凤凰",
      "红粉凤凰花凤凰"
    ]
  },
  {
    id: 13,
    title: "虫虫飞",
    lang: "zh",
    color: "#F1F8E9",
    emoji: "🦋",
    lyrics: [
      "虫虫飞，虫虫飞",
      "飞到南山吃露水",
      "露水吃不到",
      "回来吃青草"
    ]
  },
  {
    id: 14,
    title: "小白兔白又白",
    lang: "zh",
    color: "#E3F2FD",
    emoji: "🐇",
    lyrics: [
      "小白兔，白又白",
      "两只耳朵竖起来",
      "爱吃萝卜爱吃菜",
      "蹦蹦跳跳真可爱"
    ]
  },
  {
    id: 15,
    title: "Twinkle Twinkle Little Star",
    lang: "en",
    color: "#E8EAF6",
    emoji: "⭐",
    lyrics: [
      "Twinkle, twinkle, little star",
      "How I wonder what you are",
      "Up above the world so high",
      "Like a diamond in the sky",
      "Twinkle, twinkle, little star",
      "How I wonder what you are"
    ]
  },
  {
    id: 16,
    title: "Old MacDonald Had a Farm",
    lang: "en",
    color: "#FFF3E0",
    emoji: "🐄",
    lyrics: [
      "Old MacDonald had a farm, E-I-E-I-O",
      "And on his farm he had a cow, E-I-E-I-O",
      "With a moo moo here and a moo moo there",
      "Here a moo, there a moo, everywhere a moo moo",
      "Old MacDonald had a farm, E-I-E-I-O",
      "",
      "Old MacDonald had a farm, E-I-E-I-O",
      "And on his farm he had a pig, E-I-E-I-O",
      "With an oink oink here and an oink oink there",
      "Here an oink, there an oink, everywhere an oink oink",
      "Old MacDonald had a farm, E-I-E-I-O",
      "",
      "Old MacDonald had a farm, E-I-E-I-O",
      "And on his farm he had a duck, E-I-E-I-O",
      "With a quack quack here and a quack quack there",
      "Here a quack, there a quack, everywhere a quack quack",
      "Old MacDonald had a farm, E-I-E-I-O"
    ]
  },
  {
    id: 17,
    title: "Baa Baa Black Sheep",
    lang: "en",
    color: "#EFEBE9",
    emoji: "🐑",
    lyrics: [
      "Baa, baa, black sheep, have you any wool?",
      "Yes sir, yes sir, three bags full",
      "One for the master, one for the dame",
      "And one for the little boy who lives down the lane",
      "",
      "Baa, baa, black sheep, have you any wool?",
      "Yes sir, yes sir, three bags full"
    ]
  },
  {
    id: 18,
    title: "Row Row Row Your Boat",
    lang: "en",
    color: "#E0F7FA",
    emoji: "⛵",
    lyrics: [
      "Row, row, row your boat",
      "Gently down the stream",
      "Merrily, merrily, merrily, merrily",
      "Life is but a dream"
    ]
  },
  {
    id: 19,
    title: "Itsy Bitsy Spider",
    lang: "en",
    color: "#F3E5F5",
    emoji: "🕷️",
    lyrics: [
      "The itsy bitsy spider",
      "Climbed up the waterspout",
      "Down came the rain",
      "And washed the spider out",
      "Out came the sun",
      "And dried up all the rain",
      "And the itsy bitsy spider",
      "Climbed up the spout again"
    ]
  },
  {
    id: 20,
    title: "Head Shoulders Knees and Toes",
    lang: "en",
    color: "#FCE4EC",
    emoji: "🧒",
    lyrics: [
      "Head, shoulders, knees and toes",
      "Knees and toes",
      "Head, shoulders, knees and toes",
      "Knees and toes",
      "And eyes and ears and mouth and nose",
      "Head, shoulders, knees and toes",
      "Knees and toes"
    ]
  }
];
