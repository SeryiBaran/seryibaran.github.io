/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// TODO: пофиксить (или заменить на astro image)
// https://github.com/RafidMuhymin/astro-imagetools/issues/131
declare module "astro-imagetools/components";
declare module "astro-imagetools";

// TODO: постараться пофиксить
// Плохие тайпинги плагина.
// Type 'Plugin<[(RemarkEmojiOptions | undefined)?]>' is not assignable to type 'string'. ts(2322)
// Решение - заменить Plugin из пакета 'unified' на RemarkPlugin из пакета '@astrojs/markdown-remark'

declare module "remark-emoji" {
  // TypeScript Version: 4.8

  import { RemarkPlugin } from "@astrojs/markdown-remark";

  export interface RemarkEmojiOptions {
    /**
     * Makes converted emoji and emoticon texts accessible by wrapping them with
     * `span` element setting `role` and `aria-label` attributes.
     *
     * @defaultValue false
     */
    accessible?: boolean;
    /**
     * Adds an extra whitespace after emoji.
     * Useful when browser handle emojis with half character length and
     * the following character is hidden.
     *
     * @defaultValue false
     */
    padSpaceAfter?: boolean;
    /**
     * Whether to support emoticon shortcodes (e.g. :-) will be replaced by 😃)
     *
     * @defaultValue false
     */
    emoticon?: boolean;
  }

  const plugin: RemarkPlugin<[RemarkEmojiOptions?]>;
  export default plugin;
}
