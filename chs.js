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
    "Join the Discord!": "加入 Discord!",
    "Progress:": "进度:",
    "Production:": "生产:",
    "Generated:": "生成:",
    "Bought:": "已购买:",
    "Idle Ant Farm": "放置蚂蚁农场",
    "Got it": "知道了",
    "Locked": "未解锁",
    "More": "更多",
    "Nursery": "苗圃",
    "Unlock Nursery": "解锁苗圃",
    "Worker Ant": "工蚁",
    "Worker Ants": "工蚁",
    "Your colony has been hibernating for": "您的蚁群已处于休眠状态",
    "What's New in Idle Ant Farm": "放置蚂蚁农场的新动向",
    "We use cookies and similar technologies to analyze traffic, enhance site functionality, and improve your experience. By clicking \"Accept\", you consent to the use of cookies for analytics purposes.": "我们使用cookie和类似的技术来分析流量、增强网站功能和改善您的体验。点击“接受”，即表示您同意将cookie用于分析目的。",
    "Accept": "接受",
    "Adventure": "冒险",
    "Changed": "变更",
    "Continue": "继续",
    "Decline": "拒绝",
    "Evolution": "进化",
    "Colony": "蚁群",
    "Base Production:": "基础生产:",
    "Base × Multiplier:": "基础 × 乘数:",
    "Ant Hierarchy": "蚂蚁等级制度",
    "Foraging Trip": "觅食之旅",
    "Gathers food and materials for the colony": "为蚁群收集食物和材料",
    "Inventory": "库存",
    "Produces worker ants": "产生工蚁",
    "Purchase 5 nurseries to unlock Evolution": "购买 5 个苗圃以解锁进化",
    "Unlock Adventure Mode from the Evolution tab (50 EP)": "从进化选项卡解锁冒险模式（50 进化点数）",
    ". We're calculating the progress made during this time.": "。我们正在计算这段时间的进度。",
    "Colony Hibernation Progress": "蚁群休眠进度",
    "Worker Ants Adaptations": "工蚁改造",
    "Worker Base": "工蚁基础",
    "Worker Training": "工蚁训练",
    "Worker Endurance": "工蚁耐力",
    "Worker Efficiency": "工蚁效率",
    "Upgrade Specialization": "专精升级",
    "Workers can carry more food per trip": "工蚁们每次可以携带更多的食物",
    "Workers find higher quality food sources": "工蚁们可以找到更高质量的食物来源",
    "Buy me a coffee": "请作者喝咖啡",
    "Colony Status": "蚁群状态",
    "Food": "食物",
    "Food/Trip": "食物/旅行",
    "Remember to export your save!": "记得导出您的存档！",
    "Report Issues": "报告问题",
    "Specialization:": "专精:",
    "Advanced Foraging": "高级觅食",
    "Available Adaptations": "可用的改造",
    "Available Points": "可用点数",
    "Current Level": "当前等级",
    "Decreases the cost of worker ants": "降低工蚁成本",
    "Effect:": "效果:",
    "Level:": "等级:",
    "Increases food production of worker ants": "增加工蚁的食物产量",
    "Levels up based on ticks in current evolution": "根据当前进化中的 Tick 来升级",
    "Next:": "下一个:",
    "Progress to Next Level": "到达下一级的进度",
    "Return to Dashboard": "返回仪表板",
    "Achievement Unlocked!": "成就已解锁！",
    "Dedicated": "专注",
    "First Snack": "第一道点心",
    "Food Stock": "粮食储备",
    "MAX LEVEL": "最大等级",
    "Maxed": "已满级",
    "Unlock Queen Chamber": "解锁蚁后室",
    "Worker Army": "工蚁部队",
    "Worker Legion": "工蚁军团",
    "Small Pantry": "小储藏室",
    "Queen Chamber": "蚁后室",
    "Nutritional Wealth": "营养财富",
    "Nurtures new queens": "培育新蚁后",
    "Food Hoarder": "食物囤积者",
    "Better nutrition leads to faster worker development": "更好的营养导致工蚁更快的发展",
    "Decreases the cost of nurseries": "降低苗圃的成本",
    "Increases base worker production of nurseries by 1": "使苗圃的基本工蚁产量提高1",
    "Increases worker ant production of nurseries": "增加苗圃的工蚁产量",
    "Larval Nutrition": "幼虫营养",
    "Levels up based on amount of food gained": "根据获得的食物数量提升等级",
    "Nurseries can care for more larvae simultaneously": "苗圃可以同时照顾更多的幼虫",
    "Nursery Adaptations": "苗圃改造",
    "Nursery Base": "苗圃基础",
    "Nursery Capacity": "苗圃容量",
    "Nursery Efficiency": "苗圃效率",
    "Nursery Expansion": "苗圃扩建",
    "General": "常规",
    "Colony Manager": "蚁群经理",
    "Ant Enthusiast": "蚂蚁爱好者",
    "Achievement Bonuses": "成就加成",
    "Complete more achievements to earn additional bonuses!": "完成更多的成就来获得额外的奖励！",
    "Complete tasks to earn rewards and recognition": "完成任务以获得奖励和认可",
    "Cosmic Consumables": "宇宙耗材",
    "Decillion Dinner": "千兆晚宴",
    "Duodecillion Delicacies": "Duodecillion美食",
    "Endless Buffet": "无尽的自助餐",
    "Food Empire": "美食帝国",
    "Food Mountain": "食物山",
    "Food Supply Chain": "食品供应链",
    "Googol Gastronomy": "Googol美食",
    "Hungry Beginnings": "饥饿的开端",
    "Hyperdimensional Hunger": "超次元饥饿",
    "Infinite Ingestion": "无限摄取",
    "Interdimensional Feast": "跨次元盛宴",
    "More Options": "更多选择",
    "Multiversal Meals": "多种膳食",
    "Nonillion Nourishment": "百万营养",
    "Nurseries": "苗圃",
    "Octillion Omelets": "八万亿煎蛋卷",
    "Octillion Overstock": "八万亿库存过剩",
    "Play for 1 day in total": "总共玩1天",
    "Play for 1 week in total": "总共玩1周",
    "Quantum Nutrients": "量子营养",
    "Quantum Realm Cuisine": "量子王国美食",
    "Quattuordecillion Quantities": "超位数量",
    "Quintillion Quotient": "百万亿系数",
    "Septillion Stores": "千万亿商店",
    "Septillion Supper": "千万亿晚餐",
    "Sextillion Snack": "千万亿零食",
    "Sextillion Surplus": "千万亿盈余",
    "Transcendent Treats": "超然的款待",
    "Tredecillion Treats": "十兆糖果",
    "Trigintillion Triumph": "千兆凯旋",
    "Undecillion Utopia": "不亿亿乌托邦",
    "Universal Eatery": "万能餐厅",
    "Unlimited Appetite": "食欲无限",
    "Workers": "工蚁",
    "Cycle Requirements": "周期要求",
    "cycles required": "周期要求",
    "Evolution Points": "进化点数",
    "Expands your ant empire": "扩张你的蚂蚁帝国",
    "Foraging Cycles Completed": "觅食周期完成",
    "Metamorphosis": "蜕变",
    "Metamorphosis Count": "蜕变次数",
    "Unlock Colony": "解锁蚁群",
    "View Evolutionary Adaptations": "查看进化改造",
    "What is Metamorphosis?": "什么是蜕变？",
    "Metamorphosis allows you to evolve your colony and gain powerful bonuses. Purchase ants and other generators to increase your Evolution Points (EP).": "蜕变允许你进化你的蚁群并获得强大的奖励。购买蚂蚁和其他生成器来增加你的进化点数（EP）。",
    "Click the": "点击",
    "Evolution Requirement": "进化要求",
    "food collected": "已收集食物",
    "Food Progress": "食物进度",
    "Food Progress towards Next Cycle": "朝向下一周期的食物进度",
    "Foraging Cycles": "觅食周期",
    "Metamorphose": "蜕变",
    "Metamorphosis Status": "蜕变状态",
    "Potential Gain": "潜在收益",
    "Shows how many foraging trips you've completed toward the next cycle.": "显示你在下一个周期中完成了多少次觅食。",
    "Shows how much food you've collected toward instantly completing a cycle.": "显示你已经收集了多少食物，以便立即完成一个周期。",
    "to evolve. Each cycle requires either:": "以进化。每个周期需要：",
    "Trip Progress": "旅行进度",
    "Trip Progress towards Next Cycle": "前往下一个周期的旅行进度",
    "trips": "旅行",
    "You need": "你需要",
    "You need to evolve to access the upgrades.": "你需要进化才能获得升级。",
    "Your ants automatically make trips over time. Upgrades can speed this up or allow more simultaneous trips.": "随着时间的推移，你的蚂蚁会自动旅行。升级可以加快速度或允许更多的同时旅行。",
    "Bonus from achievements with EP boost.": "来自成就与进化点数提升的加成。",
    "button above for more detailed information.": "上面的按钮查看更多详细信息。",
    "Collecting enough food is an alternative way to complete cycles, especially useful later in the game.": "收集足够的食物是完成周期的另一种方式，在游戏后期尤其有用。",
    "Confirm Metamorphosis": "确认蜕变",
    "Cancel": "取消",
    "You are about to metamorphose your colony. You will gain": "你即将使你的蚁群蜕变。你会得到",
    "Your equipped items are enhancing your evolution potential, providing a bonus to EP gain.": "你装备的物品增强了你的进化潜力，提供了额外的进化点数增益。",
    "蚁群Your progress will reset, but your evolutionary adaptations will remain.": "你的进度将会重置，但你的进化改造将会保留。",
    "Decreases the cost of queen chambers": "降低蚁后室的成本",
    "Increases base nursery production of queen chambers by 1": "增加蚁后室的基础育婴室产量1",
    "Increases nursery production of queen chambers": "增加蚁后室的产量",
    "Levels up based on total manual purchases": "基于手动购买总数升级",
    "Queen Chamber Adaptations": "蚁后室改造",
    "Queen Chamber Base": "蚁后室基础",
    "Queen chambers occasionally create new queens": "蚁后室偶尔会产生新的蚁后",
    "Queen Efficiency": "蚁后效率",
    "Queen Fertility": "蚁后生育",
    "Queen Longevity": "蚁后长寿",
    "Queens enhance evolution potential, increasing EP gain by 0.05% per level per manual purchase of queen chamber per evolution done": "蚁后增强进化潜力，每级每手动购买蚁后室每次进化增加0.05%的EP增益",
    "Royal Evolution": "皇家进化",
    "Royal Guards": "皇家卫队",
    "Royal Jelly": "蚁后浆",
    "Special food increases queen egg production": "特殊食物可以增加蚁后卵的产量",
    "Special guards protect the queen, increasing productivity": "特别警卫保护蚁后，提高生产力",
    "Advanced Nursery Techniques": "高级苗圃技术",
    "Adventure Mode": "冒险模式",
    "All production increases by 2% per level, compounding with other upgrades": "所有产量每升一级增加2%，与其他升级相结合",
    "Auto Merge": "自动合并",
    "Automatically purchases Colonies each tick. Each level increases purchases per tick.": "每Tick自动购买蚁群。每级都会增加每Tick的购买量。",
    "Automatically purchases Nurseries each tick. Each level increases purchases per tick.": "每Tick自动购买苗圃。每级都会增加每Tick的购买量。",
    "Automatically purchases Queen Chambers each tick. Each level increases purchases per tick.": "每Tick自动购买蚁后室。每级都会增加每Tick的购买量。",
    "Automatically purchases Worker Ants each tick. Each level increases purchases per tick.": "每Tick自动购买工蚁。每级都会增加每Tick的购买量。",
    "Automation": "自动化",
    "Boosts worker ants by 5%, nurseries by 2.5%, and EP gain by 10% per level": "每升一级增加工蚁5%，苗圃2.5%，进化点数增加10%",
    "Bulk Automation": "批量自动化",
    "Colony Automation": "蚁群自动化",
    "Compound Evolution": "复合进化",
    "Cost (High to Low)": "成本（从高到低）",
    "Cost (Low to High)": "成本（从低到高）",
    "Cycle Food Reduction": "循环减少食物",
    "Decreases cycle time by 0.2 seconds per level": "每级减少0.2秒循环时间",
    "Divides the cost of workers by 1500 per level": "将工蚁成本除以每层1500",
    "Double Food": "两倍的食物",
    "Doubles the amount of food produced per level": "每级生产的粮食翻倍",
    "Each evolution completed boosts production by 1% per level": "每完成一次进化，每级的产量都会提高1%",
    "Each generator type boosts all others by 2% per level": "每种类型的发电机每升一级能提升其他所有发电机2%",
    "Early Multi-Tier Enhancement": "早期多层增强",
    "Efficiency": "效率",
    "Evolution Mastery": "进化掌握",
    "Evolution Synergy": "协同进化",
    "Evolution Wealth": "进化的财富",
    "Faster Food Processing": "快速食品加工",
    "First Evolution": "第一次进化",
    "Generator Synergy": "发电机的协同作用",
    "Hide Maxed": "隐藏已达上限",
    "Increase maximum inventory slots by 5. Each level adds more slots, but costs increase rapidly.": "最大库存插槽增加5个。每个等级都会增加更多插槽，但成本也会迅速增加。",
    "Increases Evolution Points gained per cycle by 10% per level": "每升一级，每循环获得的进化点数增加10%",
    "Increases food production by 10% per level": "每升一级增加10%的粮食产量",
    "Increases overall colony efficiency by 5% per level": "每级增加蚁群整体效率5%",
    "Inventory Expansion": "库存扩张",
    "Level (High to Low)": "等级（从高到低）",
    "Level (Low to High)": "等级（从低到高）",
    "Multiplies the effectiveness of all automation upgrades": "增加所有自动化升级的有效性",
    "Mutated Worker Ants": "突变工蚁",
    "Name (A to Z)": "名称（从A到Z）",
    "Name (Z to A)": "名称（从Z到A）",
    "Nurseries have a 1% chance per level to reproduce themselves each tick (max 5%)": "苗圃每级有1%的机会繁殖自己（最多5%）",
    "Nurseries produce 25% more worker ants per level": "每一层托儿所生产的工蚁增加25%",
    "Nursery Automation": "苗圃自动化",
    "Nursery Self-Replication": "苗圃自我复制",
    "Perform 1 evolution": "进行1次进化",
    "Prestige": "声望",
    "Prestige Acceleration": "声望加速",
    "Production": "生产",
    "Queen Chamber Automation": "女王室自动化",
    "Reduces the food required for each cycle by 5% per level (max 75%)": "每级减少循环所需食物5%（最高75%）",
    "Reproduction": "繁殖",
    "Research": "研究",
    "Show Affordable": "显示可负担得起的",
    "Show Unlocked": "显示解锁",
    "Start with 10x more food per level after evolution": "进化后，每等级增加10倍的食物",
    "Start with more cycles completed after evolution": "从进化后完成的更多周期开始",
    "Starting Resources": "初始资源",
    "Stronger Soldier Ants": "更强壮的兵蚁",
    "Synergy": "协同作用",
    "Time Manipulation": "时间操纵",
    "Unlock Adventure mode and the Inventory system": "解锁冒险模式和背包系统",
    "Unlock automatic merging of items in your inventory": "解锁背包内物品自动合成功能",
    "Worker ants produce 20% more food per level": "工蚁每级能多生产20%的食物",
    "Worker Automation": "工蚁自动化",
    "Worker Cost Discount": "工蚁成本折扣",
    "Worker Self-Replication": "工蚁自我复制",
    "Workers have a 1% chance per level to reproduce themselves each tick (max 5%)": "工蚁每级有1%的机会复制自己（最多5%）",
    "Unlocked": "已解锁",
    "Max": "最大",
    "Small bonus based on total number of evolutions completed.": "根据累计进化次数获得少量奖励。",
    "Achievement Notifications": "成就通知",
    "Auto-Enable Auto Purchases After Evolution": "进化后自动启用汽车购买",
    "Automatically enable all auto-purchases after evolving": "进化后自动启用所有的自动购买",
    "Automatically save your colony progress every minute": "每分钟自动保存你的蚁群进度",
    "Calculate colony progress while you're away": "计算你离开时的蚁群进度",
    "Choose Save File": "选择“保存文件”",
    "Colony data exported successfully!": "蚁群数据导出成功！",
    "Colony Memory Management": "蚁群内存管理",
    "Colony saved successfully!": "成功保存蚁群！",
    "Colony Settings": "蚁群设置",
    "Copy this code to save your colony data:": "复制此代码以保存您的蚁群数据：",
    "Dark Mode": "深色模式",
    "Evolution Settings": "进化设置",
    "Export as Code": "代码导出",
    "Export as File": "导出为文件",
    "Export/Import Colony Data": "导出/导入群体数据",
    "Game Information": "游戏信息",
    "Game Version:": "游戏版本:",
    "Hibernation Progress": "休眠进度",
    "Import from Code": "从代码导入",
    "Import from File": "从文件导入",
    "Import your colony data:": "导入你的蚁群数据：",
    "Install Colony App": "安装蚁群App",
    "Install Idle Ant Farm as an app on your device for the best experience!": "在您的设备上安装放置蚂蚁农场作为应用程序，以获得最佳体验！",
    "Load Colony": "负载蚁群",
    "Paste code:": "粘贴代码:",
    "Pheromone Trail Preservation": "信息素轨迹保存",
    "Reset Colony": "重置蚁群",
    "Save Colony": "保存蚁群",
    "Select \"Add to Home Screen\" or \"Install\"": "选择“添加到主屏幕”或“安装”。",
    "Select file:": "选择文件:",
    "Show Installation Help": "显示安装帮助",
    "Show popup notifications when achievements are unlocked": "当成就解锁时显示弹出通知",
    "Show popup with details when the game is updated": "当游戏更新时显示弹出的详细信息",
    "Tap the share/menu button in your browser": "点击浏览器中的共享/菜单按钮",
    "This will completely reset your colony progress. This action cannot be undone.": "这将完全重置你的蚁群进度。此操作不能撤消。",
    "To install this app on your device:": "要在您的设备上安装此应用程序：",
    "Toggle between light and dark theme": "在浅色和深色主题之间切换",
    "Total Ticks:": "总Tick数：",
    "Update Announcements": "更新公告",
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
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

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
    'II': 'II',
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
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
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
    "Processing foraging trips: ": "处理觅食之旅: ",
    "Increases base food production of workers by ": "增加工蚁的基础食物产量 ",
    "Achievements Boost: ": "成就提升: ",
    "Item Bonus: ": "物品加成: ",
    "Effect: ": "效果: ",
    "Evolution Count: ": "进化数量: ",
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
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "% complete": "% 完成",
    "s/trip": "秒/旅行",
    "/trip": "秒/旅行",
    " auto)": " 自动)",
    " completed": " 已完成",
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
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^Added (.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^\(([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^\(([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) ×$/,
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
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
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
    [/^Earn (.+) evolution points in total$/, '总计获得 $1 进化点数'],
    [/^Buy for (.+) food$/, '购买花费 $1 食物'],
    [/^Updates from (.+) to (.+)$/, '版本更新从 $1 到 $2'],
    [/^Requires (.+) Queen Chamber$/, '需要 $1 蚁后室'],
    [/^Requires (.+) Nursery$/, '需要 $1 苗圃'],
    [/^Requires (.+) Worker Ant$/, '需要 $1 工蚁'],
    [/^Have (.+) worker ants$/, '拥有 $1 工蚁'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)\/trip$/, '$1\/旅行'],
    [/^([\d\.]+)\% faster worker development$/, '工蚁发展加快 $1\%'],
    [/^([\d\.]+)\% decreased queen chamber cost$/, '蚁后室成本降低 $1\%'],
    [/^([\d\.]+)\% decreased nursery cost$/, '苗圃成本降低 $1\%'],
    [/^([\d\.]+)\% decreased worker cost$/, '工蚁成本降低 $1\%'],
    [/^([\d\.]+)\% increased larvae capacity$/, '幼虫容量提升 $1\%'],
    [/^([\d\.]+)\% increased carrying capacity$/, '运载能力提升 $1\%'],
    [/^([\d\.]+)\% increased worker production$/, '工蚁生产提升 $1\%'],
    [/^([\d\.]+)\% increased nursery production$/, '苗圃产量提升 $1\%'],
    [/^([\d\.]+)\% increased productivity$/, '生产力提升 $1\%'],
    [/^([\d\.]+)\% increased egg production$/, '蚁卵产量提升 $1\%'],
    [/^([\d\.]+)\% increased food production$/, '食物产量提升 $1\%'],
    [/^([\d\.]+)\% increased food quality$/, '食物质量提升 $1\%'],
    [/^\+([\d\.]+) EP$/, '\+$1 进化点数'],
    [/^\+([\d\.]+)\% EP gain per queen chamber per evolution$/, '每次进化每个蚁后室 \+$1\% 进化点数增益'],
    [/^\+([\d\.]+)\% chance to generate a free queen chamber per tick$/, '每Tick生成一个蚁后室的几率 \+$1\%'],
    [/^([\d\.]+)\% chance to generate a free queen chamber per tick$/, '每Tick生成一个蚁后室的几率 \+$1\%'],
    [/^\+([\d\.]+)\% worker production$/, '工蚁生产 \+$1\%'],
    [/^\+([\d\.]+)\% nursery production$/, '苗圃生产 \+$1\%'],
    [/^\+([\d\.]+) base nursery production$/, '基础苗圃生产 \+$1'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^\+([\d\.,]+) base food production$/, '\+$1 基础食物生产'],
    [/^\+([\d\.,]+) base worker production$/, '\+$1 基础工蚁生产'],
    [/^Adapt \(([\d\.,]+) pts\)$/, '改造（$1 点数）'],
    [/^Current: ([\d\.,]+)$/, '当前: $1'],
    [/^([\d\.,]+) queen chamber$/, '$1 蚁后室'],
    [/^([\d\.,]+) nurserie$/, '$1 苗圃'],
    [/^([\d\.,]+) Cycles$/, '$1 周期'],
    [/^([\d\.,]+) cycles$/, '$1 周期'],
    [/^([\d\.,]+) EP$/, '$1 进化点数'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) minute$/, '$1 分钟'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) hours and ([\d\.,]+) minutes$/, '$1 小时 $2 分钟'],
    [/^([\d\.,]+) hour and ([\d\.,]+) minutes$/, '$1 小时 $2 分钟'],
    [/^([\d\.,]+) points$/, '$1 点数'],
    [/^Need ([\d\.,]+) Cycles$/, '需要 $1 周期'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
    [/^Lv. ([\d\.,]+)$/, '等级 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Collect (.+) food in total$/, '总计收集 $1 食物'],
    [/^Play for (.+) hour in total$/, '总计游戏 $1 小时'],
    [/^Play for (.+) hours in total$/, '总计游戏 $1 小时'],
    [/^Next: (.+) purchases$/, '下一个：$1 购买'],
    [/^Next: (.+) food$/, '下一个：$1 食物'],
    [/^Next: (.+) ticks$/, '下一个：$1 Tick'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^(.+) food\/trip$/, '$1 食物/旅行'],
    [/^(.+) worker ants\/trip$/, '$1 工蚁/旅行'],
    [/^(.+) worker ant$/, '$1 工蚁'],
    [/^(.+) food$/, '$1 食物'],
    [/^(.+) trips$/, '$1 旅行'],
    [/^(.+) Evolution Points$/, '$1 进化点数'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工蚁：$1\/'],

]);