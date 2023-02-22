// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Сайт SeryiBaran";
export const SITE_DESCRIPTION =
  "Сайт Иванчая. Блог и портфолио";
export const TWITTER_HANDLE = "";
export const MY_NAME = "SeryiBaran";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
