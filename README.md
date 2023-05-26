# Сайт Ивана Музыка

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

Хочу выразить гигантскую благодарность разработчикам Astro.

С Astro мне не пришлось учить доп. язык шаблонов - используется JSX-like синтаксис и JavaScript.

Страница этого сайта весит всего ~5 кб (вместе с CSS).

И да, этот сайт сделан без использования JavaScript.

## Технологии

- [Astro](https://astro.build/)
- [Typescript](https://www.typescriptlang.org/)

## P.S

Чтобы юзать оптимизированные картинки в .MDX страницах (не постах) юзайте этот код в начале файла (после Frontmatter)

```ts
import Img from "@/components/Img.astro";
export const components = { img: Img };`
```
