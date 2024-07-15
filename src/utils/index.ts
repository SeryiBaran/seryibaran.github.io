import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { SITE_TITLE } from '@/consts'
import 'dayjs/locale/ru'

dayjs.extend(utc)

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`
}

export function formatPostDate(date: Date | Dayjs, isShowTime: boolean = false) {
  return dayjs(date.toISOString()).utc().locale('ru').format(isShowTime ? 'DD.MM.YYYY HH:mm UTC' : 'DD.MM.YYYY')
}
