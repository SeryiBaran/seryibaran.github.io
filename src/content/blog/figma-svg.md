---
authors: ['seryibaran']
title: 'Экспорт иконок из Figma в SVG'
description: ''
date: 2025-08-09T12:11:24.901+03
tags: ["frontend"]
---

1. Выделяем иконки в фигме
2. Запускаем плагин `SVG Export`
3. Импортируем пресеты из [этого файла](/uploads/figma-svg/figma_svg_export__presets.json)
4. Выбираем пресет `TOP`
5. Экспортим в .zip
6. Распаковываем .zip
7. С помощью меню замены божественного Notepad++ (Чтобы VSCode в SVG текст заменял, нужно шаманить) заменяем во всех SVG цвет заливки на `currentColor`:
  ![Скриншот из Notepad++](/uploads/figma-svg/npp.webp)
8. Пользуемся :smile:
