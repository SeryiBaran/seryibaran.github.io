---
title: "Как сделать обводку текста/выделения в GIMP"
author: Иванчай
date: 2022-08-01 10:27:16 +0300
categories: [гайды]
tags: [gimp, графика]
uploads: "/uploads/2022-08-01-kak-sdelat-obvodku-teksta-videleniya-v-gimp"
image:
  path: /uploads/2022-08-01-kak-sdelat-obvodku-teksta-videleniya-v-gimp/preview.jpg
  width: 800
  height: 500
  alt: Превью
---

В этой статье я покажу, как сделать обводку текста/выделения в GIMP. Без лишних слов, погнали!

Для начала нужно сохранить написанный текст/выделение в контур.

В случае с текстом:

![Сохранение текста в контур]({{ page.uploads }}/text-to-contour.jpg)

В случае с выделением:

![Сохранение текста в контур]({{ page.uploads }}/selection-to-contour.jpg)

Затем выбираем инструмент и настраиваем цвет, толщину и т.д.

> Обратите внимание. Центр линии обводки будет на краю выделения/контура. Расчитывайте толщину инструмента учитывая это. Например сли вы хотите обводку 5px, то толщина инструмента должна быть 10px (в 2 раза больше).
{: .prompt-warning }

Создаем новый слой (под текстом/выделением), на котором будет обводиться контур, и выбираем его. В списке слоев должно получиться похожее на это:

![Новый слой]({{ page.uploads }}/new-layer.jpg)

Затем переходим на вкладку **Контуры**, щелкаем <kbd>ПКМ</kbd> по контуру и нажимаем **Обвести контур**:

![Скриншот контекстного меню]({{ page.uploads }}/contour-ctx-menu.jpg)

Теперь выбираем тут **Обвести рисующим инструментом** и нажимаем **Обвести**:

![Скриншот окна настроек обводки]({{ page.uploads }}/settings-window.jpg)

Готово!

![Готово]({{ page.uploads }}/done.jpg)