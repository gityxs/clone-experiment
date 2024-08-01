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
    "rocks": "岩石",
    "Rocks:": "岩石:",
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
    "Sharp Rocks": "锋利的岩石",
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
    "game": "游戏",
    "Game:": "游戏:",
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
    "𓊖𓀩 Gather Rocks": "𓊖𓀩 收集岩石",
    "𓌏 Chop Wood": "𓌏 砍木头",
    "𓍯 Gather Vines": "𓍯 收集藤蔓",
    "𓉸 Mine Ore": "𓉸 开采矿石",
    "Music Volume:": "音乐音量",
    "Paper Processing": "纸张加工",
    "Organized Storage": "组织存储",
    "Notice Improvement": "通知改善",
    "Production": "生产",
    "Sharprocks:": "锋利的岩石:",
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
    "Careful": "小心",
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
    "Isekai": "Isekai",
    "Leader": "领袖",
    "Leather": "皮革",
    "Leather:": "皮革:",
    "Level up! carpentry → 10": "水平了!木工→10",
    "Look, up in the sky! It's a star!": "看，在天上!它是一颗星星!",
    "Melt, mold, and make marvelous metals.": "熔化，模压，制造神奇的金属。",
    "mine": "矿井",
    "Not a single window to throw them through.": "没有一扇窗户可以扔出去。",
    "shed": "棚子",
    "shelter": "避难所",
    "Some vines are rubbery, others are gummy.": "有些藤蔓是橡胶状的，有些是粘性的。",
    "stockpile": "储备",
    "telescope": "望远镜",
    "The ultimate storage solution for the pack rat in you.": "终极存储解决方案，为你的背包鼠。",
    "vineyard": "葡萄园",
    "violence": "暴力",
    "Where stories are told and marshmallows are toasted.": "在那里讲故事，烤棉花糖。",
    "workshop": "车间",
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
    "": "",
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
    "皿 Animal pen (": "皿 围栏 (",
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
    "𓆇 Rock role (": "𓆇 岩石角色 (",
    "𓆭𓆭 Grove (": "𓆭𓆭 丛林 (",
    "𓆷 Garden (": "𓆷 花园 (",
    "𓇦 Warehouse (": "𓇦 仓库 (",
    "𓈗 Irrigation (": "𓈗 灌溉 (",
    "𓈞 Reservoir (": "𓈞 水库 (",
    "𓊍 Mine (": "𓊍 矿井 (",
    "𓊎 Stone quarry (": "𓊎 采石场 (",
    "𓊢 Tower (": "𓊢 塔 (",
    "𓊫 Forge (": "𓊫 锻造 (",
    "𓊬 Desk (": "𓊬 桌子 (",
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
    /^\-([\d\.]+) \/ ([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
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
    [/^([\d\.]+) vines$/, '$1 藤蔓'],
    [/^([\d\.]+) clay$/, '$1 粘土'],
    [/^([\d\.]+) ore$/, '$1 矿石'],
    [/^([\d\.]+) glass$/, '$1 玻璃'],
    [/^([\d\.]+) herbs$/, '$1 草药'],
    [/^([\d\.]+) rocks$/, '$1 石头'],
    [/^([\d\.]+) wood$/, '$1 木头'],
    [/^([\d\.]+) fish$/, '$1 鱼'],
    [/^([\d\.]+) ponder$/, '$1 思考'],
    [/^\+(.+) max clones$/, '\+$1 克隆上限'],
    [/^\+(.+) rocks production$/, '\+$1 石头 产量'],
    [/^\+(.+) ponder production$/, '\+$1 思考 产量'],
    [/^\+(.+) herbs production$/, '\+$1 草药 产量'],
    [/^\+(.+) ore production$/, '\+$1 矿石 产量'],
    [/^\+(.+) all production$/, '\+$1 所有 产量'],
    [/^\+(.+) sticks production$/, '\+$1 木棍 产量'],
    [/^\+(.+) vines production$/, '\+$1 藤蔓 产量'],
    [/^\+(.+) max rocks$/, '\+$1 石头 上限'],
    [/^\+(.+) max clay$/, '\+$1 粘土 上限'],
    [/^\+(.+) max sticks$/, '\+$1 矿石 木棍'],
    [/^\+(.+) max ore$/, '\+$1 矿石 上限'],
    [/^\+(.+) max ponder$/, '\+$1 思考 上限'],
    [/^\+(.+) max fish$/, '\+$1 鱼 上限'],
    [/^\+(.+) max herbs$/, '\+$1 草药 上限'],
    [/^\+(.+) max vines$/, '\+$1 藤蔓 上限'],
    [/^\+(.+) max wood$/, '\+$1 木头 上限'],
    [/^\+(.+) max sand$/, '\+$1 沙子 上限'],
    [/^\(([\d\.]+) seconds\)$/, '\($1 秒\)'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);