---
title: 'Инструкция по обработке картинок от frozenshift'
description: 'Взято из Telegram чата - не моё.'
date: 2024-07-17T12:32:35.386+03
---

Автор - [@frozenshift](https://t.me/frozenshift).

- Короче, я решил задвинуть спич про картинки. Про public vs src/assets Про пайплайны обработки, и очистку от говна, на vite.

- Воды лить не буду, просто покажу хорошую практику.

- По пути src/assets создаем каталог images чтобы получилось следующее:

  ```
  - src
    - assets
      - images
        - crop-img
        - img
  ```

- В каталоге img мы храним оригиналы, тяжелые, не обрезанные, в уебанских форматах.

- Глобально подтягиваем `npm i -g @ipp/cli` пайплайн

- В корне проекта создаем конфиг пайплайна: `.ipprc.yml`

- Этого достаточно для большенства проектов:

  ```yaml
  input: src/assets/images/img
  output: src/assets/images/crop-img

  pipeline:

  - pipe: convert
      options:
        format: webp
      then:
    - pipe: resize
          options:
            resizeOptions:
              height: 1280
            format: webp
          save: "[source.name]-[height].webp"
          then:
      - pipe: resize
              options:
                resizeOptions:
                  height: 720
                format: webp
              save: "[source.name]-[height].webp"
  ```

- Ну можно сказать и все. подключаем картинки в проекте `<img src="@/assets/crop-img/folder_name/image_name-1280.webp" />`

- Запустить обрезание можно одной командой в консоли: ipp

- Но это не наш путь, так как crop-img будет переполнятся мусором, ведь во время разработки картинки появляются, пропадают. По этому пишем на коленке скрипт

- Называем его `clear-image.js` и ложим в корень:

  ```js
  s = require('node:fs')
  const directory = 'src/assets/images/crop-img/'

  fs.rm(directory, { recursive: true }, (err) => {
    if (err) {
      console.error(err.message)
      return
    }
    console.log('Файлы удалены')
  })
  ```

- Чутка правим package.json:

  ```diff
    {
      ...
      "scripts": {
        ...
  +     "crop": "node clear-image.js && ipp",
        ...
      }
      ...
    }
  ```

- В оригиналах мы имеем это:

  ![Оригинал](/uploads/frozenshift_guide_to_web_images/original.jpg)

- А в crop-img это:

  ![Результат](/uploads/frozenshift_guide_to_web_images/result.jpg)
