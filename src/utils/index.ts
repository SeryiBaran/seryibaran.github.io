export { getFormattedDate } from "./date";
export { elementHasClass, toggleClass, rootInDarkMode } from "./domElement";
export { generateToc, type TocItem } from "./generateToc";
export { getWebmentionsForUrl } from "./webmentions";

export type Keys<T> = Array<keyof T>
export type Value<T> = T[keyof T]
export type Values<T> = Array<Value<T>>
export type Entries<T> = Array<[keyof T, T[keyof T]]>
