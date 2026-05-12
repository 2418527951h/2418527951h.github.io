export const languages = {
  zh: '中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.research': '研究',
    'nav.projects': '项目',
    'nav.notes': '笔记',

    // Home
    'home.subtitle': '计算机视觉 | 多模态学习',
    'home.intro': '研究方向包括行人重识别（ReID）、数据集质量评估与优化，以及多模态学习。',
    'home.recent': '最新文章',
    'home.view_all': '查看全部',

    // About
    'about.title': '关于我',
    'about.education': '教育经历',
    'about.skills': '技能',
    'about.contact': '联系方式',

    // Research
    'research.title': '研究',
    'research.directions': '研究方向',
    'research.publications': '发表论文',

    // Projects & Notes
    'projects.title': '项目',
    'notes.title': '笔记',
    'post.back': '返回列表',
    'post.toc': '目录',
    'post.published': '发布于',
    'post.tags': '标签',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.notes': 'Notes',

    'home.subtitle': 'Computer Vision | Multimodal Learning',
    'home.intro': 'My research interests include Person Re-Identification (ReID), dataset quality assessment and optimization, and multimodal learning.',
    'home.recent': 'Recent Posts',
    'home.view_all': 'View All',

    'about.title': 'About Me',
    'about.education': 'Education',
    'about.skills': 'Skills',
    'about.contact': 'Contact',

    'research.title': 'Research',
    'research.directions': 'Research Interests',
    'research.publications': 'Publications',

    'projects.title': 'Projects',
    'notes.title': 'Notes',
    'post.back': 'Back to list',
    'post.toc': 'Table of Contents',
    'post.published': 'Published on',
    'post.tags': 'Tags',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];
