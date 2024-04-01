const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "个人" },
  { id: 2, title: "建站" },
  { id: 3, title: "常用" },
  { id: 4, title: "工具" },
  { id: 5, title: "学习" },
  { id: 6, title: "VPN" },
  { id: 7, title: "OpenAI" },
  { id: 8, title: "AI" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "Space",
    description: "个人空间",
    url: "http://space.camelitol.com/",
    icon: "https://img.camelitol.com/file/f7df8ad7a638127e1afd7.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "Chatbot",
    description: "基于GPT-3.5的聊天机器人",
    url: "http://chat.xylitol.cc/",
    icon: "https://img.camelitol.com/file/6d621c798aae456aa3234.png",
    color: "#0171CD",
  },
  {
    sortId: 1,
    title: "Nextchat",
    description: "基于GPT-4.0的ChatGPT镜像网站",
    url: "http://gpt.xylitol.cc/",
    icon: "https://img.camelitol.com/file/71488fd48e160cb4e1d43.png",
    color: "#0171CD",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: " ",
  ICP_URL: " ",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
