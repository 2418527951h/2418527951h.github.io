import { ui, defaultLang, type UIKey } from './ui';

export type Lang = 'zh' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang as Lang][key];
  };
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/en${path}`;
}

export function getLangSwitchUrl(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'zh') {
    return `/en${currentPath}`;
  }
  return currentPath.replace(/^\/en/, '') || '/';
}

export function getNavItems(lang: Lang) {
  const t = useTranslations(lang);
  const prefix = lang === 'zh' ? '' : '/en';
  return [
    { label: t('nav.home'), href: `${prefix}/` },
    { label: t('nav.about'), href: `${prefix}/about` },
    { label: t('nav.research'), href: `${prefix}/research` },
    { label: t('nav.blog'), href: `${prefix}/blog` },
    { label: t('nav.notes'), href: `${prefix}/notes` },
  ];
}
