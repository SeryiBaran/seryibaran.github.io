// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { colors } from 'unocss/preset-mini'

export const SITE_DOMAIN = 'seryibaran.github.io'
export const SITE_TITLE = 'SeryiBaran'
export const SITE_DESCRIPTION = 'Сайт SeryiBaran'
export const AUTHOR_NAME = 'Иван'
export const AUTHOR_SURNAME = 'Музыка'
export const AUTHOR = `SeryiBaran (${AUTHOR_NAME} ${AUTHOR_SURNAME[0]}.)`
export const AUTHOR_BIRTHDAY = '2008-10-15T12:00:00.000Z'
export const SITE_START = '2021-08-17T12:00:00.000Z'

export const PRIMARY_COLOR = 'indigo'

export const POST_OG_COLOR = colors[PRIMARY_COLOR][500]

export const pagesDataForOGImagesGen = [{
  params: {
    slug: 'page__index',
  },
  props: {
    title: 'Главная',
    description: '',
  },
}, {
  params: {
    slug: 'page__contacts',
  },
  props: {
    title: 'Контакты',
    description: 'Мои контакты',
  },
}, {
  params: {
    slug: 'page__posts',
  },
  props: {
    title: 'Посты',
    description: 'Мои посты',
  },
}]
