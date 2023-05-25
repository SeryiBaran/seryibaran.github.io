# 📝 Сайт Ивана Музыка

## 🚀 Как запустить

1. Установите зависимости:

   ```bash
   npm install
   ```

2. Запустите сервер:

   ```bash
   npm run dev
   ```

## P.S

Чтобы юзать оптимизированные картинки в .MDX страницах (не постах) юзайте этот код в начале файла (после Frontmatter)

```ts
import Img from "@/components/Img.astro";
export const components = { img: Img };`
```
