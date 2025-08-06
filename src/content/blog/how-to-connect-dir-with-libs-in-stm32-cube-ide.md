---
authors: ['seryibaran']
title: Как подключить папку с библиотеками в STM32 Cube IDE
description: 'Я не нашел в интернете нормального полного гайда, поэтому вот.'
date: 2023-08-19T09:50:20.457Z
tags: ["c_or_cpp"]
---

## Чего?

Эта статья про подключение такой папки к проекту STM32 Cube IDE:

- libsDirectory
  - lib1
    - lib1.h
    - lib1.c
  - lib2
    - lib2.h
    - lib2.c
  - lib3
    - lib3.h
    - lib3.c

## Поехали

1. Заходим в настройки проекта (Project -> Properties)
2. Идем в C/C++ General -> Paths and Symbols и открываем вкладку Includes:
   ![C/C++ General -> Paths and Symbols -> Includes](/uploads/how-to-connect-dir-with-libs-in-stm32-cube-ide/project-properties-paths.png)
3. Добавляем папку с библиотеками с помощью кнопки "Add Folder":
   ![C/C++ General -> Paths and Symbols -> Includes -> Add Folder](/uploads/how-to-connect-dir-with-libs-in-stm32-cube-ide/project-properties-paths-add-lib.png)
4. Идем во вкладку Source Location:
   ![C/C++ General -> Paths and Symbols -> Source Location](/uploads/how-to-connect-dir-with-libs-in-stm32-cube-ide/project-properties-paths-source.png)
5. Нажимаем "Link Folder", ставил калочку "Link to folder in the file system" и выбираем папку с библиотеками:
   ![C/C++ General -> Paths and Symbols -> Source Location -> Link Folder](/uploads/how-to-connect-dir-with-libs-in-stm32-cube-ide/project-properties-paths-source-add-lib.png)

Всё! Теперь можем импортить либы вот так:

```c
#include <lib1/lib1.h>
```
