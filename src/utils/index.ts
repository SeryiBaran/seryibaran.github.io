import { SITE_TITLE } from "src/consts";

export function getPageTitle(title: string) {
  return `${title} - ${SITE_TITLE}`;
}
