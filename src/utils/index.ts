import dayjs from 'dayjs'
import { SITE_TITLE } from '@/consts'
import 'dayjs/locale/ru'

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`
}

export function formatPostDate(date: Date, isShowTime: boolean = false) {
  return dayjs(date.toISOString()).utc().locale('ru').format(isShowTime ? 'DD.MM.YYYY HH:mm UTC' : 'DD.MM.YYYY')
}
