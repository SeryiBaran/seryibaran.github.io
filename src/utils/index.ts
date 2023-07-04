import { SITE_TITLE } from '@/consts'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`
}

export function formatPostDate(date: Date) {
  return dayjs(date.toISOString()).locale('ru').format('DD.MM.YYYY')
}
