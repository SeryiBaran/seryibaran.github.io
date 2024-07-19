import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { SITE_TITLE } from '@/consts'
import 'dayjs/locale/ru'

dayjs.extend(utc)

/**
 * Expand nominal types to their substructures for better intellisense
 */
export type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends any ? { [K in keyof T]: Expand<T[K]> } : never

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`
}

export function formatPostDate(date: Date | Dayjs | string, isShowTime: boolean = false) {
  return dayjs(date).utc().locale('ru').format(isShowTime ? 'DD.MM.YYYY HH:mm UTC' : 'DD.MM.YYYY')
}
