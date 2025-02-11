/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Buy": "购买",
    "Buy New Factory": "购买新公司",
    "Chance to Win": "获胜几率",
    "Clone Experiment": "克隆实验",
    "Clones:": "克隆:",
    "Combat": "战斗",
    "Continue": "继续",
    "Thinking Job": "思考工作",
    "Tooltip Cost:": "提示成本：",
    "Tooltip Description:": "提示说明：",
    "Two-story houses": "两层楼房",
    "Understand Cloning": "了解克隆",
    "wood": "木头",
    "Wood": "木头",
    "Wood:": "木头:",
    "wheat": "小麦",
    "Wheat": "小麦",
    "Wheat:": "小麦:",
    "Violence:": "暴力:",
    "Vines:": "藤蔓:",
    "Your City": "你的城市",
    "Your Skills:": "你的技能:",
    "Your Might": "你的力量",
    "Quantity/Max": "数量/上限",
    "rocks": "石头",
    "Rocks:": "石头:",
    "resource": "资源",
    "Resource": "资源",
    "Resources": "资源",
    "Resource Name:": "资源名称:",
    "Rate": "速率",
    "sand": "沙子",
    "Sand": "沙子",
    "Sand:": "沙子:",
    "Silver": "银",
    "Silver:": "银:",
    "Skills": "技能",
    "Spear": "矛",
    "Spear:": "矛:",
    "Iron:": "铁:",
    "Iron": "铁",
    "Pickaxe": "镐子",
    "Pickaxe:": "镐子:",
    "Steel:": "钢:",
    "Steel": "钢",
    "Jobs": "工作",
    "Level up!": "升级了！",
    "Lumberjack": "伐木工人",
    "Miner": "矿工",
    "ore": "矿石",
    "Ore:": "矿石:",
    "Paper": "纸",
    "Paper:": "纸:",
    "Perks": "特权",
    "Potential Loot:": "潜在战利品:",
    "Price": "价格",
    "Sharp Rocks": "锋利的石头",
    "Rope:": "绳子:",
    "Rope": "绳子",
    "You find yourself\n": "你发现自己\n",
    "\tGold:": "\t黄金:",
    "Action": "动作",
    "Add Resource": "增加资源",
    "Aggressive": "侵略性",
    "alone": "独自",
    "in a forest": "在森林里面",
    "Hunting": "狩猎",
    "Hides:": "皮毛:",
    "hides": "皮毛",
    "Gold": "黄金",
    "herbs": "草药",
    "Gold:": "黄金:",
    "Herbs:": "草药:",
    "Glass Blowing": "玻璃吹制",
    "Glass": "玻璃",
    "game": "猎物",
    "Game:": "猎物:",
    "Go Back": "返回",
    "Bread:": "面包:",
    "Bread": "面包",
    "Bricks": "砖块",
    "Bricks:": "砖块:",
    "Botanist": "植物学家",
    "Beams": "横梁",
    "Beams:": "横梁:",
    "Berries:": "浆果:",
    "Click to clone yourself.": "点击克隆你自己。",
    "You feel peckish for some seafood.": "你有点想吃海鲜了。",
    "𓀝 Gather Sticks": "𓀝 收集木棍",
    "𓆝 𓆟 𓆞 Go Fish": "𓆝 𓆟 𓆞 去钓鱼",
    "𓊖𓀩 Gather Rocks": "𓊖𓀩 收集石头",
    "𓌏 Chop Wood": "𓌏 砍木头",
    "𓍯 Gather Vines": "𓍯 收集藤蔓",
    "𓉸 Mine Ore": "𓉸 开采矿石",
    "Music Volume:": "音乐音量",
    "Paper Processing": "纸张加工",
    "Organized Storage": "组织存储",
    "Notice Improvement": "通知改善",
    "Production": "生产",
    "Sharprocks:": "锋利的石头:",
    "with yourself": "独自一人",
    "You are": "你",
    "Staff": "长杖",
    "Staff:": "长杖:",
    "Slabs": "板材",
    "Slabs:": "板材:",
    "vines": "藤蔓",
    "sticks": "木棍",
    "Sticks": "木棍",
    "Sticks:": "木棍:",
    "SFX Volume:": "音效音量:",
    "Sell": "出售",
    "ponder": "思考",
    "Ponder": "思考",
    "Ponder:": "思考:",
    "Metal Working": "金属加工",
    "Nails": "钉子",
    "Nails:": "钉子:",
    "Medicine:": "药品:",
    "Medicine": "药品",
    "Might": "力量",
    "Architect": "建筑师",
    "Agriculture": "农业",
    "Auto Clone": "自动克隆",
    "Axe": "斧子",
    "Axe:": "斧子:",
    "Balanced": "平衡",
    "Default Text:": "默认文本:",
    "Button Text:": "按钮文本:",
    "clay": "粘土",
    "Concrete": "混凝土",
    "Concrete:": "混凝土:",
    "Clay:": "粘土:",
    "Careful": "谨慎",
    "clones": "克隆",
    "Crates": "板条箱",
    "Crates:": "板条箱:",
    "Delete Save Data": "删除存档",
    "Double Tepees": "双圆锥形帐篷",
    "Each ball is ~": "每个球都是~",
    "Eat Bread": "吃面包",
    "Eat fish": "吃鱼",
    "Expand Hut": "扩大小屋",
    "Enemy Might": "敌人力量",
    "Expand Shelter": "扩大庇护所",
    "Expand Shelter Again": "再次扩大庇护所",
    "Factories": "工厂",
    "fish": "鱼",
    "Fish:": "鱼:",
    "Fight": "战斗",
    "Fishing Job": "捕鱼工作",
    "Fishing Rod": "钓鱼竿",
    "Fishingrod:": "钓鱼竿:",
    "Five, Six, Pick up sticks.": "五，六，捡起木棍。",
    "freshwater": "淡水",
    "Freshwater:": "淡水:",
    "Glass:": "玻璃:",
    "husks": "外壳",
    "Husks:": "外壳:",
    "Handle:": "把手:",
    "Handle": "把手",
    "in a forest.": "在森林里。",
    "A cozy, idyllic chunk of wood.": "一块舒适的、田园诗般的木头。",
    "A nice grove of trees to find wood faster.": "一个很好的树林，可以更快地找到木材。",
    "A place for brewing and stewing.": "酿造和炖煮的地方",
    "A writer's block is no match for armor-piercing pencils!": "作家的写作能力根本比不上穿甲铅笔!",
    "Active Text:": "活动文本:",
    "Air drying: Nature's way of preserving food.": "风干:自然保存食物的方式。",
    "campfire": "营火",
    "Chuck a bunch of logs in a pile, what could happen?": "把一堆木头堆成一堆，会发生什么?",
    "desk": "办公桌",
    "Dig deep and find your inner ore.": "深挖，找到你内心的矿石。",
    "Diggy Diggy Hole": "挖，挖，挖",
    "DIY's dream destination.": "DIY的梦想之地。",
    "drying_rack": "干燥架",
    "Every clone's dream. Minus the white picket fence.": "每个克隆人的梦想。除了白色的尖桩栅栏。",
    "Experiment": "实验",
    "Feedback": "反馈",
    "For the finest vines. What else would it grow?": "为了最好的藤蔓。它还能生长什么?",
    "Free": "免费",
    "Got any tuna?": "有金枪鱼吗?",
    "grove": "树林",
    "herbalist_hut": "草药小屋",
    "house": "房子",
    "hut": "小屋",
    "Isekai": "转生",
    "Leader": "领袖",
    "Leather": "皮革",
    "Leather:": "皮革:",
    "Level up! carpentry → 10": "水平了!木工→10",
    "Look, up in the sky! It's a star!": "看，在天上!它是一颗星星!",
    "Melt, mold, and make marvelous metals.": "熔化，模压，制造神奇的金属。",
    "mine": "矿井",
    "Not a single window to throw them through.": "没有一扇窗户可以扔出去。",
    "shed": "棚屋",
    "shelter": "庇护所",
    "Some vines are rubbery, others are gummy.": "有些藤蔓是橡胶状的，有些是粘性的。",
    "stockpile": "储备",
    "telescope": "望远镜",
    "The ultimate storage solution for the pack rat in you.": "终极存储解决方案，为你的背包鼠。",
    "vineyard": "葡萄园",
    "violence": "暴力",
    "Where stories are told and marshmallows are toasted.": "在那里讲故事，烤棉花糖。",
    "workshop": "作坊",
    "A long and pointy stick": "长而尖的棍子",
    "A weapon feared by underwater life (+ fish production)": "水下生物所畏惧的武器(+鱼类产量)",
    "At least there are animals": "至少还有动物",
    "Automatically produce clones": "自动产生克隆",
    "Craft a rock using nothing but rocks!": "只用石头制作一块石头!",
    "Find some seeds from all those plants": "从所有这些植物中找一些种子",
    "For when you need a home away from home.": "当你需要一个家的时候。",
    "Increase building effects by a small amount": "小幅提升建筑效果",
    "Is there anyone to spar with besides you?": "除了你，还有人可以和你决斗吗?",
    "Just work harder. Bonus to resource gain": "努力工作吧。获得资源的奖励",
    "Leave some clay by the fire": "在火旁留下一些粘土",
    "Let your clones start thinking for themselves.": "让你的克隆开始自己思考。",
    "Organize your storage by groups": "按组组织存储",
    "Put a rock straight through that handle (+ wood production)": "用石头直接穿过手柄(+木材产量)",
    "Sadly not made of diamonds (+ ore production)": "很遗憾不是钻石制造的(+矿石产量)",
    "Shear off that bark to hold it better": "把树皮剪掉，让它更牢固",
    "Small boost to pondering speed": "小幅度提升思考速度",
    "Smash down some wood into paper": "把一些木头捣成纸",
    "Stick some sheared sticks together (+ stick production)": "将剪下来的木棍粘在一起(+木棍产量)",
    "The basis of attaching things to other things.": "将一个事物连接到另一个事物的基础。",
    "There's some shiny gray bits in this ore": "这矿石里有一些发亮的灰色小块",
    "There's some sturdy-looking bits in this ore": "这矿石里有些东西看起来很结实",
    "Time": "时间",
    "What if... your clones could go fishing?": "如果……你的克隆人可以去钓鱼?",
    "Wrap your head around the great mysteries": "把你的头脑集中在那些伟大的谜团上",
    "You can see right through it!": "你可以看穿它!",
    "Thanks for playing Clone Experiment!": "感谢你玩 克隆实验!",
    "That fish didn't taste too good, hopefully you won't need to pilot any airplanes. Who's that standing there?": "那鱼不太好吃，希望你不用开飞机了。站在那儿的是谁?",
    "Why are there two of you?": "为什么会有两个你?",
    "Max Clones": "克隆已经达到上限了",
    "Huff and puff and make a cool vase": "吹一吹，做一个很酷的花瓶",
    "Start processing that ore": "开始处理矿石",
    "Think Smarter. 5% bonus to skill exp": "更聪明地思考:技能经验增加 5%",
    "You're starting to learn things, right?": "你开始学东西了，对吧?",
    "Eating some bread will help you work faster": "吃点面包可以帮助你工作得更快",
    "Maybe you as the original should specialize": "也许你作为始作俑者应该专攻",
    "Fresh water on demand!": "淡水随时供应!",
    "Hay, what's in that building?": "嘿，那栋楼里有什么?",
    "A big stack of rocks.": "一大堆石头。",
    "Grind grains efficiently with wind power.": "利用风力高效研磨谷物。",
    "I'm gonna grind your wheat to make my bread!": "我要把你的小麦磨碎做我的面包!",
    "There's some yellow bits in this ore": "这矿石里有些黄色的小块",
    "Freshly baked bread, hot and ready.": "刚出炉的热面包，准备好了。",
    "ADVANCED": "高级",
    "CONSTRUCTION": "建筑",
    "FOOD": "食物",
    "MATERIALS": "材料",
    "METAL": "金属",
    "SPECIAL": "特殊",
    "TOOLS": "工具",
    "Ascend to the next level of economy": "提升到经济的下一个层次",
    "Shelters can house 1 more clone each": "每个庇护所可以多容纳1个克隆",
    "barn": "谷仓",
    "Outsource your memory (+ ponder production)": "外包你的记忆(+思考生产)",
    "A bustling hub of trade and barter.": "一个繁忙的贸易和物物交换中心。",
    "Wood you like some more wood?": "你想要更多的木头吗?",
    "Fish are friends. And food.": "鱼是朋友。和食物。",
    "Huts can house 1 more clone each": "每个小屋可以多住1个克隆人",
    "Rock on with your bad self!": "和坏自己一起摇滚吧!",
    "A balanced stance": "一个平衡的立场",
    "Arraign your enemies before the bar of violence": "在暴力的铁栏前传讯你的敌人",
    "Might comes from violence, spears, and medicine": "力量来自暴力、长矛和药物",
    "More Loot, Less Might": "更多战利品，更少力量",
    "More Might, Less Loot": "更多力量，更少战利品",
    "The Enemy won!": "敌人赢了!",
    "Mutually Exclusive!": "相互排斥!",
    "Violence & Spears": "暴力 & 长矛",
    "bakery": "面包店",
    "lumber_yard": "伐木场",
    "stone_depot": "石料库",
    "Wrap some hides around some wood and call it a home.": "把一些皮包在一些木头上，把它叫做家。",
    "Treat hides to make quality leather.": "处理兽皮以制作优质皮革。",
    "A place to put those lesser than you.": "一个安置不如你的人的地方。",
    "Wetten your wheat with water.": "用水湿润你的小麦。",
    "Houses can house 2 more clones each": "每栋房子可以多容纳2个克隆人",
    "tepee": "帐篷",
    "Made by Epic_Doughnut": "由Epic_Doughnut制作",
    "Chopped": "切碎的",
    "Cramped": "拥挤的",
    "Handyman": "杂工",
    "Hooked": "钩状的",
    "Picker": "选取器",
    "Pruned": "削减",
    "Stuffed": "塞满",
    "Tracker": "跟踪器",
    "Wizened": "干瘪的",
    "You step through to another world.": "你踏入了另一个世界。",
    "isekai": "转生",
    "Rocker": "摇滚",
    "another": "另一个",
    "world.": "世界。",
    "You are in": "你现在位于",
    "A mysterious building with untold benefits.": "一座有着无数好处的神秘建筑。",
    "/s": "/秒",
    "marketplace": "市场",
    "Radiant_Cathedral": "光辉大教堂",
    "forge": "锻造",
    "irrigation": "灌溉",
    "tannery": "制革厂",
    "water_pump": "水泵",
    "windmill": "风车",
    "In order to gather the rock you must become the rock.": "为了收集石头，你必须成为石头。",
    "You won!": "你赢了！",
    "Teepees can house 4 more clones each": "圆锥形帐篷每个可以容纳4个克隆人",
    "Keep yourself safe.": "保证自己的安全。",
    "Knowledge is power. And a fire hazard if not stored properly.": "知识就是力量。如果储存不当，也会引发火灾。",
    "Learn the art of hurting others.": "学会伤害别人的艺术。",
    "Nice nature, carefully cultivated.": "美好的自然，精心培育。",
    "Put stuff in a box inside a larger box.": "把东西放在一个更大的箱子里。",
    "See things from afar.": "远观事物。",
    "Watch your step!": "小心脚下!",
    "beams": "横梁",
    "bricks": "砖块",
    "concrete": "混凝土",
    "crates": "板条箱",
    "glass": "玻璃",
    "gold": "黄金",
    "handle": "把手",
    "iron": "铁",
    "leather": "皮革",
    "medicine": "药品",
    "nails": "钉子",
    "paper": "纸",
    "rope": "绳子",
    "Select a Resource": "选择一种资源",
    "sharprocks": "锋利的石头",
    "silver": "银",
    "slabs": "板材",
    "spear": "矛",
    "staff": "长杖",
    "steel": "钢",
    "A hall of raucous soldiers.": "喧闹的士兵大厅",
    "animal_pen": "动物笔",
    "Can only be crafted with a factory": "只能在工厂里制作吗",
    "library": "图书馆",
    "Peaceful_Palace": "太平宫",
    "rock_role": "石头角色",
    "Stargazing has never been so... productive?": "观星从未如此…高效?",
    "Scoop the sand from the shore? Sure!": "从岸上挖沙子?当然!",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "rocks, sticks, rope": "石头、木棍和绳子",
    "sticks, herbs, axe": "木棍、草药和斧头",
    "+sharprocks": "+锋利的石头",
    "+fishingrod": "+钓鱼竿",
    "+speed": "+速度",
    "+pickaxe": "+镐子",
    "+bread": "+面包",
    "+bricks": "+砖块",
    "+silver": "+银",
    "+paper": "+纸",
    "+gold": "+黄金",
    "+iron": "+铁",
    "+axe": "+斧子",
    "+glass": "+玻璃",
    "+max": "+上限",
    "+spear": "+矛",
    "+staff": "+长杖",
    "+rope": "+绳子",
    "+handle": "+把手",
    "𓍯𓀪 Gathering Vines": "𓍯𓀪 收集藤蔓",
    "𓊖𓀩 Gathering Rocks": "收集石头",
    "𓉸𓁄 Mining Ore": "𓉸𓁄 开采矿石",
    "𓆱𓀜 Gathering Sticks": "𓆱𓀜 收集木棍",
    "𓀨 Chopping Wood": "𓀨 砍木头",
    "𓆝𓆟𓆞 𓁃 Gone Fishing": "𓆝𓆟𓆞 𓁃 钓鱼去了",
    "𓀁 Ponder": "𓀁 思考",
    "𓀁 Pondering": "𓀁 思考中",
    "𓆝𓆟𓆞 Go Fish": "𓆝𓆟𓆞 去钓鱼",
    "𓊖 Gather Rocks": "𓊖 收集石头",
    "𓆱 Gather Sticks": "𓆱 收集木棍",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Buildings ": "建筑 ",
    "Carpentry: ": "木头加工: ",
    "Think Harder ": "更努力地思考 ",
    "Thinking: ": "思考: ",
    "𓇬 Windmill (": "𓇬 风车 (",
    "𓇻 Military school (": "𓇻 军事学校 (",
    "𓈏 Barracks (": "𓈏 军营 (",
    "𓈓 Stone depot (": "𓈓 石料库 (",
    "Productivity ": "生产效率 ",
    "Skills ": "技能 ",
    "+ Hospital (": "+ 医院 (",
    "☆ Observatory (": "☆ 天文台 (",
    "🕮 Library (": "🕮 图书馆 (",
    "₿ Marketplace (": "₿ 市场 (",
    "🜌 Vineyard (": "🜌 葡萄园 (",
    "八 Shelter (": "八 庇护所 (",
    "个 Shed (": "个 棚屋 (",
    "介 House (": "介 房屋 (",
    "火 Campfire (": "火 营火 (",
    "皿 Animal pen (": "皿 动物笔 (",
    "品 Stockpile (": "品 储备 (",
    "四 Drying rack (": "四 干燥架 (",
    "穴 Tepee (": "穴 帐篷 (",
    "Hunting: ": "狩猎: ",
    "Gathering: ": "收集: ",
    "冂 Hut (": "冂 小屋 (",
    "井 Fish trap (": "井 鱼笼 (",
    "𓃔 Tannery (": "𓃔 制革厂 (",
    "𓄛 Sand scoop (": "𓄛 挖沙斗 (",
    "𓄦 Traps (": "𓄦 陷阱 (",
    "𓆇 Rock role (": "𓆇 石头角色 (",
    "𓆭𓆭 Grove (": "𓆭𓆭 丛林 (",
    "𓆷 Garden (": "𓆷 花园 (",
    "𓇦 Warehouse (": "𓇦 仓库 (",
    "𓈗 Irrigation (": "𓈗 灌溉 (",
    "𓈞 Reservoir (": "𓈞 水库 (",
    "𓊍 Mine (": "𓊍 矿井 (",
    "𓊎 Stone quarry (": "𓊎 采石场 (",
    "𓊢 Tower (": "𓊢 塔 (",
    "𓊫 Forge (": "𓊫 锻造 (",
    "𓊬 Desk (": "𓊬 书桌 (",
    "𓌏 Lumber yard (": "𓌏 木材场 (",
    "𓌤 Fishery (": "𓌤 渔业 (",
    "𓌩 Telescope (": "𓌩 望远镜 (",
    "𓎰 Workshop (": "𓎰 作坊 (",
    "𓏂 Water pump (": "𓏂 水泵 (",
    "𓏃 Herbalist hut (": "𓏃 草药小屋 (",
    "𓏆 Barn (": "𓏆 谷仓 (",
    "𓏖 Bakery (": "𓏖 面包店 (",
    "Masonry: ": "石头加工: ",
    "[level ": "[等级 ",
    "Assigned Clones:": "分配克隆:",
    "Farming: ": "耕作: ",
    "Combat: ": "战斗: ",
    "Fishing: ": "捕鱼: ",
    "Level up! masonry → ": "升级了! 石头加工 → ",
    "Level up! thinking → ": "升级了! 思考 → ",
    "Level up! fishing → ": "升级了! 捕鱼 → ",
    "Level up! hunting → ": "升级了! 狩猎 → ",
    "Level up! farming → ": "升级了! 耕作 → ",
    "Level up! carpentry → ": "升级了! 木头加工 → ",
    "Level up! combat → ": "升级了! 战斗 → ",
    "Level up! gathering → ": "升级了! 收集 → ",
    "spear (": "矛 (",
    "beams (": "横梁 (",
    "axe (": "斧子 (",
    "Husks:": "外壳:",
    "Level: ": "等级: ",
    "Max Clones (": "克隆 上限 (",
    "Farming Efficiency (": "耕作 效率 (",
    "Hunting Efficiency (": "狩猎 效率 (",
    "Thinking Efficiency (": "思考 效率 (",
    "Gathering Efficiency (": "收集 效率 (",
    "Fishing Efficiency (": "捕鱼 效率 (",
    "Masonry Efficiency (": "石头加工 效率 (",
    "Carpentry Efficiency (": "木头加工 效率 (",
    "Clone Productivity (": "克隆 生产力 (",
    "Storage Space (": "存储空间 (",
    "𓄴 Luminous Gallery (": "𓄴 夜光长廊 (",
    "𓄵 Radiant Cathedral (": "𓄵 光辉大教堂 (",
    "𓄼 Majestic Sanctuary (": "𓄼 雄伟圣殿 (",
    "𓇲 Whispering Museum (": "𓇲 低语博物馆 (",
    "slabs (": "板材 (",
    "iron (": "铁 (",
    "nails (": "钉子 (",
    "𓄝 Whispering Temple (": "𓄝 低语庙 (",
    "𓄨 Peaceful Palace (": "𓄨 太平宫 (",
    "𓄼 Celestial Sanctuary (": "𓄼 天宫 (",
    "𓈛 Bustling Manor (": "𓈛 繁华庄园 (",
    "You feel a strange, constructive urge to acquire ": "你感到一种奇怪的、有建设性的冲动，想要获得 ",
    "bricks (": "砖块 (",
    "gold (": "黄金 (",
    "Bread(": "面包(",
    "Fishing Rod(": "鱼竿(",
    "Crates(": "板条箱(",
    "Glass(": "玻璃(",
    "Iron(": "铁(",
    "Handle(": "把手(",
    "Gold(": "黄金(",
    "Concrete(": "混凝土(",
    "Bricks(": "砖块(",
    "Beams(": "横梁(",
    "Axe(": "斧子(",
    "Wood(": "木头(",
    "silver (": "银 (",
    "Silver(": "银(",
    "Leather(": "皮革(",
    "Medicine(": "药品(",
    "Nails(": "钉子(",
    "Paper(": "纸(",
    "Slabs(": "板材(",
    "Sharp Rocks(": "锋利的石头(",
    "Pickaxe(": "镐(",
    "Rope(": "绳子(",
    "Spear(": "矛(",
    "Staff(": "长杖(",
    "Steel(": "钢(",
    "Sticks(": "木棍(",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ")   combat": ")   战斗",
    ")   farming": ")   耕作",
    ")   hunting": ")   狩猎",
    ")   fishing": ")   钓鱼",
    ")   gathering": ")   收集",
    ")   thinking": ")   思考",
    ")   carpentry": ")   木头加工",
    ")   masonry": ")   石头加工",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+) \/ ∞$/,
    /^([\d\.]+) \/ ([\d\.]+)K$/,
    /^([\d\.]+)K \/ ([\d\.]+)K$/,
    /^\-([\d\.]+) \/ ([\d\.]+)$/,
    /^ ([\d\.]+) \/ ([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^LI(.+)$/,
    /^LX(.+)$/,
    /^XL(.+)$/,
    /^XC(.+)$/,
    /^XX(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\] \(([\d\.]+)\%$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You will receive (.+) randomly generated new buildings, unique to this new world.$/, '您将收到 $1 随机生成的新建筑，这是这个新世界独有的。'],
    [/^You will get (.+) Husks post-isekai.$/, '你将获得 $1 外壳在转生后。'],
    [/^(.+) violence \+ (.+) spears \+ (.+) medicine$/, '$1 暴力 \+ $2 长矛 \+ $3 药物'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+) sticks$/, '$1 木棍'],
    [/^([\d\.]+)K sticks$/, '$1K 木棍'],
    [/^([\d\.]+) vines$/, '$1 藤蔓'],
    [/^([\d\.]+)K vines$/, '$1K 藤蔓'],
    [/^([\d\.]+) iron$/, '$1 铁'],
    [/^([\d\.]+) clay$/, '$1 粘土'],
    [/^([\d\.]+)K clay$/, '$1K 粘土'],
    [/^([\d\.]+) staff$/, '$1 长杖'],
    [/^([\d\.]+) spear$/, '$1 矛'],
    [/^([\d\.]+) game$/, '$1 猎物'],
    [/^([\d\.]+) freshwater$/, '$1 淡水'],
    [/^([\d\.]+) handle$/, '$1 把手'],
    [/^([\d\.]+) sand$/, '$1 沙子'],
    [/^([\d\.]+)K sand$/, '$1K 沙子'],
    [/^([\d\.]+) slabs$/, '$1 板材'],
    [/^([\d\.]+) rope$/, '$1 绳子'],
    [/^([\d\.]+) sharprocks$/, '$1 锋利的石头'],
    [/^([\d\.]+) gold$/, '$1 黄金'],
    [/^([\d\.]+) clones$/, '$1 克隆'],
    [/^([\d\.]+) axe$/, '$1 斧子'],
    [/^([\d\.]+) bread$/, '$1 面包'],
    [/^([\d\.]+) wheat$/, '$1 小麦'],
    [/^([\d\.]+)K hides$/, '$1K 皮毛'],
    [/^([\d\.]+)K wheat$/, '$1K 小麦'],
    [/^([\d\.]+) ore$/, '$1 矿石'],
    [/^([\d\.]+) glass$/, '$1 玻璃'],
    [/^([\d\.]+) herbs$/, '$1 草药'],
    [/^([\d\.]+)K herbs$/, '$1K 草药'],
    [/^([\d\.]+) beams$/, '$1 横梁'],
    [/^([\d\.]+) paper$/, '$1 纸'],
    [/^([\d\.]+) medicine$/, '$1 药品'],
    [/^([\d\.]+) bricks$/, '$1 砖块'],
    [/^([\d\.]+) hides$/, '$1 皮毛'],
    [/^([\d\.]+) violence$/, '$1 暴力'],
    [/^([\d\.]+) nails$/, '$1 钉子'],
    [/^([\d\.]+) crates$/, '$1 板条箱'],
    [/^([\d\.]+) concrete$/, '$1 混凝土'],
    [/^([\d\.]+) rocks$/, '$1 石头'],
    [/^([\d\.]+)K rocks$/, '$1K 石头'],
    [/^([\d\.]+) wood$/, '$1 木头'],
    [/^([\d\.]+)K wood$/, '$1K 木头'],
    [/^([\d\.]+) fish$/, '$1 鱼'],
    [/^([\d\.]+)K fish$/, '$1K 鱼'],
    [/^([\d\.]+) ponder$/, '$1 思考'],
    [/^([\d\.]+)K ponder$/, '$1K 思考'],
    [/^\-(.+) building cost$/, '\-$1 建筑成本'],
    [/^\+(.+) clones productivity$/, '\+$1 克隆效率'],
    [/^\+(.+) max clones$/, '\+$1 克隆上限'],
    [/^\+(.+) rocks production$/, '\+$1 石头 产量'],
    [/^\+(.+) ponder production$/, '\+$1 思考 产量'],
    [/^\+(.+) game production$/, '\+$1 猎物 产量'],
    [/^\+(.+) hides production$/, '\+$1 皮毛 产量'],
    [/^\+(.+) herbs production$/, '\+$1 草药 产量'],
    [/^\+(.+) freshwater production$/, '\+$1 淡水 产量'],
    [/^\+(.+) stone \& ore production$/, '\+$1 石头 和 矿石 产量'],
    [/^\+(.+) ore production$/, '\+$1 矿石 产量'],
    [/^\+(.+) sand production$/, '\+$1 沙子 产量'],
    [/^\+(.+) all production$/, '\+$1 所有 产量'],
    [/^\+(.+) vines \& herbs \& wheat production$/, '\+$1 藤蔓 和 草药 和 小麦 产量'],
    [/^\+(.+) wheat production$/, '\+$1 小麦 产量'],
    [/^\+(.+) violence production$/, '\+$1 暴力 产量'],
    [/^\+(.+) wood production$/, '\+$1 木头 产量'],
    [/^\+(.+) wood \& sticks production$/, '\+$1 木头 和 木棍 产量'],
    [/^\+(.+) sticks production$/, '\+$1 木棍 产量'],
    [/^\+(.+) vines production$/, '\+$1 藤蔓 产量'],
    [/^\+(.+) max rocks$/, '\+$1 石头 上限'],
    [/^\+(.+) max game$/, '\+$1 猎物 上限'],
    [/^\+(.+) max hides$/, '\+$1 皮毛 上限'],
    [/^\+(.+) max violence$/, '\+$1 暴力 上限'],
    [/^\+(.+) max wheat$/, '\+$1 小麦 上限'],
    [/^\+(.+) max freshwater$/, '\+$1 淡水 上限'],
    [/^\+(.+) max clay$/, '\+$1 粘土 上限'],
    [/^\+(.+) max sticks$/, '\+$1 木棍 上限'],
    [/^\+(.+) max ore$/, '\+$1 矿石 上限'],
    [/^\+(.+) max ponder$/, '\+$1 思考 上限'],
    [/^\+(.+) max fish$/, '\+$1 鱼 上限'],
    [/^\+(.+) max herbs$/, '\+$1 草药 上限'],
    [/^\+(.+) max vines$/, '\+$1 藤蔓 上限'],
    [/^\+(.+) max wood$/, '\+$1 木头 上限'],
    [/^\+(.+) max sand$/, '\+$1 沙子 上限'],
    [/^\(([\d\.]+) seconds\)$/, '\($1 秒\)'],
    [/^\-([\d\.,]+) worker$/, '\-$1 工人'],
    [/^\+([\d\.,]+) Drying rack$/, '\+$1 干燥架'],
    [/^\+([\d\.,]+) Stockpile$/, '\+$1 储备'],
    [/^\+([\d\.,]+) Workshop$/, '\+$1 作坊'],
    [/^\+([\d\.,]+) Lumber yard$/, '\+$1 伐木场'],
    [/^\+([\d\.,]+) Mine$/, '\+$1 矿井'],
    [/^\+([\d\.,]+) Hut$/, '\+$1 小屋'],
    [/^\+([\d\.,]+) Grove$/, '\+$1 树林'],
    [/^\+([\d\.,]+) Shed$/, '\+$1 棚屋'],
    [/^\+([\d\.,]+) Campfire$/, '\+$1 营火'],
    [/^\+([\d\.,]+) Desk$/, '\+$1 书桌'],
    [/^\+([\d\.,]+) Rock role$/, '\+$1 石头角色'],
    [/^\+([\d\.,]+) slabs$/, '\+$1 板材'],
    [/^\+([\d\.,]+) spear$/, '\+$1 矛'],
    [/^\+([\d\.,]+) Forge$/, '\+$1 锻造'],
    [/^\+([\d\.,]+) Vineyard$/, '\+$1 葡萄园'],
    [/^\+([\d\.,]+) Telescope$/, '\+$1 望远镜'],
    [/^\+([\d\.,]+) Water pump$/, '\+$1 水泵'],
    [/^\+([\d\.,]+) Windmill$/, '\+$1 风车'],
    [/^\+([\d\.,]+) House$/, '\+$1 房屋'],
    [/^\+([\d\.,]+) Fishery$/, '\+$1 渔业'],
    [/^\+([\d\.,]+) Bakery$/, '\+$1 面包店'],
    [/^\+([\d\.,]+) Barn$/, '\+$1 谷仓'],
    [/^\+([\d\.,]+) Stone depot$/, '\+$1 石料库'],
    [/^\+([\d\.,]+) Marketplace$/, '\+$1 市场'],
    [/^\+([\d\.,]+) Military school$/, '\+$1 军事学校'],
    [/^\+([\d\.,]+) Warehouse$/, '\+$1 仓库'],
    [/^\+([\d\.,]+) Traps$/, '\+$1 陷阱'],
    [/^\+([\d\.,]+) nails$/, '\+$1 钉子'],
    [/^\+([\d\.,]+) Library$/, '\+$1 图书馆'],
    [/^\+([\d\.,]+) Hospital$/, '\+$1 医院'],
    [/^\+([\d\.,]+) Garden$/, '\+$1 花园'],
    [/^\+([\d\.,]+) Towe$/, '\+$1 塔'],
    [/^\+([\d\.,]+) silver$/, '\+$1 银'],
    [/^\+([\d\.,]+) iron$/, '\+$1 铁'],
    [/^\+([\d\.,]+) Tepee$/, '\+$1 双圆锥形帐篷'],
    [/^\+([\d\.,]+) Peaceful Palace$/, '\+$1 太平宫'],
    [/^\+([\d\.,]+) Irrigation$/, '\+$1 灌溉'],
    [/^\+([\d\.,]+) Radiant Cathedral$/, '\+$1 光辉大教堂'],
    [/^\+([\d\.,]+) gold$/, '\+$1 黄金'],
    [/^\+([\d\.,]+) bricks$/, '\+$1 砖块'],
    [/^\+([\d\.,]+) Sand scoop$/, '\+$1 挖沙斗'],
    [/^\+([\d\.,]+) Whispering Temple$/, '\+$1 低语庙'],
    [/^\+([\d\.,]+) Tannery$/, '\+$1 制革厂'],
    [/^\+([\d\.,]+) Animal pen$/, '\+$1 动物笔'],
    [/^\+([\d\.,]+) Barracks$/, '\+$1 军营'],
    [/^\+([\d\.,]+) Celestial Sanctuary$/, '\+$1 天宫'],
    [/^\+([\d\.,]+) Tower$/, '\+$1 塔'],
    [/^\+([\d\.,]+) Clone$/, '\+$1 克隆'],
    [/^\+([\d\.,]+) Herbalist hut$/, '\+$1 草药小屋'],
    [/^\+([\d\.,]+) Shelter$/, '\+$1 庇护所'],
    [/^\+([\d\.,]+) worker$/, '\+$1 工人'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+)$/, '成本：$1'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);