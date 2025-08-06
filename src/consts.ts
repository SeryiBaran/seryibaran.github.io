import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'SeryiBaran',
  description:
    'Сайт SeryiBaran',
  href: 'https://seryibaran.github.io',
  author: 'SeryiBaran',
  locale: 'ru-RU',
  featuredPostCount: 2*999,
  postsPerPage: 3*999,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'Блог',
  },
  {
    href: '/about',
    label: 'Обо мне',
  },
  {
    href: '/contacts',
    label: 'Контакты',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/SeryiBaran/seryibaran.github.io',
    label: 'GitHub',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
