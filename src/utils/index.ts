import { SITE_TITLE } from '@/consts'

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`
}
