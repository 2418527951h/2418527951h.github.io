import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io',
  // base: '/CV_web',  // 如果仓库不是 username.github.io，取消此行注释
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
