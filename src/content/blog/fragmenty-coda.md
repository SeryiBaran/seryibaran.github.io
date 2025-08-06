---
authors: ['seryibaran']
title: 'Фрагменты кода'
description: 'Здесь я собрал разные полезные (или нет) куски кода, команды и программы.'
date: 2023-04-19
tags: ["notes"]
---



Разные куски кода, команды и программы.

Эта статья будет обновляться!

## Нормальное форматирование C/C++ в VSCode

Создайте в папке проекта файл .vscode/settings.json со следующим содержимым:

```json
{
  "C_Cpp.clang_format_fallbackStyle": "{ BasedOnStyle: Google }"
}
```

## Генерация "ёлочки" из звездочек на TypeScript

````ts
/**
 *
 * @param linesNumber number of lines
 * @param symbol symbol to create pyramid
 * @returns symbols pyramid
 *
 * @example
 * ```ts
 * console.log(generatePyramid(10))
 * //           *
 * //          ***
 * //         *****
 * //        *******
 * //       *********
 * //      ***********
 * //     *************
 * //    ***************
 * //   *****************
 * //  *******************
 * ```
 */
function generatePyramid(linesNumber: number, symbol = '*') {
  let lines: string[] = []

  for (let i = 1; i <= linesNumber; i++) {
    let line = ''

    line += ' '.repeat(linesNumber - i)

    line += symbol.repeat(i * 2 - 1)

    lines.push(line)
  }
  return lines.join('\n')
}

console.log(generatePyramid(10))

//           *
//          ***
//         *****
//        *******
//       *********
//      ***********
//     *************
//    ***************
//   *****************
//  *******************
````

## `launch.json` VSCode для дебага Vite+Vue в Яндекс Браузере

<p>Перед отладкой нужно запустить `npm run dev`</p>

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "runtimeExecutable": "C:\\Users\\ivan\\AppData\\Local\\Yandex\\YandexBrowser\\Application\\browser.exe",
      "name": "vuejs: yandex",
      "url": "http://localhost:5173",
      "skipFiles": ["**/node_modules/**/*"],
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

## Счетчик на разных стейт менеджерах не привязанных к UI фреймах

### Nanostores - микроскопический стейт менеджер размером ~0.3-1 килобайт

<p>
  [Репозиторий Nanostores](https://github.com/nanostores/nanostores/)
</p>
<p>1 килобайт это **в ~70 раз меньше** Jquery</p>

```ts
import { atom } from 'nanostores'

const count = atom(0)

function increment() {
  count.set(count.get() + 1)
}

count.subscribe(() => {
  console.log(`count is ${count.get()}`)
}) // count is 0 (полезно для первичного рендера)

increment() // count is 1
increment() // count is 2
```

### Reatom - стейт менеджер здорового человека ценою в ~6 килобайт

<p>[Официальный сайт Reatom](https://www.reatom.dev/)</p>
<p>6 килобайт это **в ~11 раз меньше** Jquery</p>

```ts
import { createCtx, action, atom } from '@reatom/core'

const ctx = createCtx()

const countAtom = atom(0)

const increment = action((ctx) => {
  countAtom(ctx, (count) => count + 1)
}, 'increment')

ctx.subscribe(countAtom, (count) => {
  console.log(`count is ${count}`)
}) // count is 0 (полезно для первичного рендера)

increment(ctx) // count is 1
increment(ctx) // count is 2
```

### Effector - звезда Telegram чатов по React.js

<p>[Официальный сайт Effector](https://effector.dev/)</p>

```ts
import { createEvent, createStore } from 'effector'

const $count = createStore(0)

const increment = createEvent('increment')

$count.on(increment, (count) => count + 1)

$count.watch((count) => {
  console.log(`count is ${count}`)
}) // count is 0 (полезно для первичного рендера)

increment() // count is 1
increment() // count is 2
```

## Генерация случаяного около-пастельного цвета

[Песочница](https://codepen.io/SeryiBaran/pen/ZEqbqQR)

```html
<button id="rdm">Random pastel color!</button>
```

```js
function randomHSLPastelColor() {
  return `hsl(${Math.round(360 * Math.random())}, 70%,  80%)`
}

rdm.onclick = () => (document.body.style.background = randomHSLPastelColor())
rdm.click()
```

## Фикс юникода в CMD в Windows

```cpp
/*
* Фикс юникода в CMD
* Просто импортируйте этот файл.
* https://t.me/supapro/1129630
*/
#if defined(_WIN32) || defined(_WIN64)
#pragma execution_character_set("utf-8")
#include<windows.h>
const auto _dummy_ = []() {
    SetConsoleCP(65001);
    SetConsoleOutputCP(65001);
    return 0;
}();
#endif
```

## Разрешение доступа к 80 порту программе (в данном случае Node.js) в Linux

```bash
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
```

## Настройка переключения языка в tty (например по Shift+Alt) в Linux

```bash
sudo dpkg-reconfigure keyboard-configuration
```

## Вставка HTML файлов по URL в страницу в рантайме с помощью кастомных тегов

```html
<sb-include data-src="/path/to/file.html" />
```

```js
class SbInclude extends HTMLElement {
  connectedCallback() {
    fetch(this.dataset.src)
      .then((res) => res.text())
      .then((data) => {
        this.outerHTML = data
      })
  }
}

customElements.define('sb-include', SbInclude)
```

## Генерация массива чисел при помощи магии

```js
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i < this; i++) yield i + 1
}

console.log([...5]) // [1, 2, 3, 4, 5]
```

## Генерация массива `[1, 2, 3, ..., 999, 1000]`

```js
console.log(Array.from(Array(1000)).map((_, index) => index + 1)) // [1, 2, 3, ..., 999, 1000]
```

## Реализация фильтра в JS

```js
Array.prototype.likeFilter = function (f) {
  let re = []
  this.forEach((e) => {
    if (f(e)) {
      re.push(e)
    }
  })
  return re
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.likeFilter((value) => value % 2 == 0)) // [2, 4, 6]
```

## Счетчик положительных чисел в массиве

```js
const countOfPositive = (arr) =>
  arr.reduce((store, current) => (current > 0 ? store + 1 : store), 0)
```

## Конвертация высоты дисплеев 16x9 в ширину

```js
const listOf16x9Height = [1080, 720, 360]

const listOf16x9Width = listOf16x9Height.map((height) => (height / 9) * 16)

console.log(listOf16x9Width)
```

## `forEach` у объекта

```js
Object.prototype.forEach = Array.prototype.forEach

Object.defineProperty(Object.prototype, 'length', {
  get: () => Object.keys(this).length,
})

let a = {
  0: 123,
  1: 'test',
}

a.forEach((e) => console.log(e))

console.log(a.forEach) // forEach() { [native code] }
```

## Ошибка в VSCode на Kubuntu (при входе в Github)

```
Не удалось записать сведения о входе в цепочку ключей. Ошибка: \"GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.secrets was not provided by any .service files\".
```

Решение:

```bash
sudo apt install gnome-keyring
```

## Контролируемый цикл `setTimeout`'ов на JS

```js
const createLoop = (onStep, timeout) => {
  let running = false

  const iteration = () => {
    onStep()
    if (running) setTimeout(iteration, timeout)
  }

  const start = () => {
    running = true
    iteration()
  }

  const stop = () => {
    running = false
  }

  return { start, stop }
}

const mainLoop = createLoop(() => {
  console.log('test')
}, 100)
```

## Удаление уведомлений ВКонтакте

<p type="warning">
  Удаляются только те, что показаны в меню уведомлений
</p>

```js
document
  .querySelectorAll('.top_notify_cont .ui_actions_menu')
  .forEach((elem) => {
    elem.childNodes[0].click()
  })
```

## ~~Простая~~ тупая реализация переключения темной темы

```js
function switchTheme() {
  wrapper.classList.toggle('dark-theme')
  wrapper.classList.toggle('light-theme')

  if (wrapper.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}

if (localStorage.getItem('theme') == 'dark') {
  themeSwitcher.setAttribute('checked', '')
  switchTheme()
} else {
  themeSwitcher.removeAttribute('checked')
}

themeSwitcher.addEventListener('click', switchTheme)
```

## Фикс тени над соседними элементами

[Песочница](https://jsbin.com/muyazupuko/edit?html,css,output)
![Скриншот](/uploads/fragmenty-coda/shadows-without-bugs.webp)

```html
<div class="wrap">
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
</div>
```

```css
.wrap {
  filter: drop-shadow(0 0 10px gray);
}

.element {
  display: inline-block;
  width: 111px;
  height: 111px;
  background-color: #fff;
  border-radius: 2em;
}
```

## Анимации из Jquery

```js
export const SlideAnimations = {
  slideUp: function (element, duration = 500) {
    return new Promise(function (resolve, reject) {
      element.style.height = element.offsetHeight + 'px'
      element.style.transitionProperty = `height, margin, padding`
      element.style.transitionDuration = duration + 'ms'
      element.offsetHeight
      element.style.overflow = 'hidden'
      element.style.height = 0
      element.style.paddingTop = 0
      element.style.paddingBottom = 0
      element.style.marginTop = 0
      element.style.marginBottom = 0
      window.setTimeout(function () {
        element.style.display = 'none'
        element.style.removeProperty('height')
        element.style.removeProperty('padding-top')
        element.style.removeProperty('padding-bottom')
        element.style.removeProperty('margin-top')
        element.style.removeProperty('margin-bottom')
        element.style.removeProperty('overflow')
        element.style.removeProperty('transition-duration')
        element.style.removeProperty('transition-property')
        resolve(false)
      }, duration)
    })
  },
  slideDown: function (element, duration = 500) {
    return new Promise(function (resolve, reject) {
      element.style.removeProperty('display')
      let display = window.getComputedStyle(element).display
      if (display === 'none') display = 'block'
      element.style.display = display
      let height = element.offsetHeight
      element.style.overflow = 'hidden'
      element.style.height = 0
      element.style.paddingTop = 0
      element.style.paddingBottom = 0
      element.style.marginTop = 0
      element.style.marginBottom = 0
      element.offsetHeight
      element.style.transitionProperty = `height, margin, padding`
      element.style.transitionDuration = duration + 'ms'
      element.style.height = height + 'px'
      element.style.removeProperty('padding-top')
      element.style.removeProperty('padding-bottom')
      element.style.removeProperty('margin-top')
      element.style.removeProperty('margin-bottom')
      window.setTimeout(function () {
        element.style.removeProperty('height')
        element.style.removeProperty('overflow')
        element.style.removeProperty('transition-duration')
        element.style.removeProperty('transition-property')
      }, duration)
    })
  },
  slideToggle: function (element, duration = 500) {
    if (window.getComputedStyle(element).display === 'none') {
      return this.slideDown(element, duration)
    } else {
      return this.slideUp(element, duration)
    }
  },
}
```

## Простой рендер таблицы на JS

```js
let data = [
  [1, 2, 3, 4, 5],
  ['a', 'b', 'c', 'd', 'i'],
]
console.log(
  data.map((row) => {
    return `<tr>${row
      .map((col) => {
        return `<td>${col}</td>`
      })
      .join('')}</tr>`
  }),
)
```

## Запуск web-ext с firefox developer

```bash
web-ext run --firefox=firefoxdeveloperedition
```

## Node.js CLI для вычисления среднего арифметического

```js
function prompt(question, callback) {
  let stdin = process.stdin,
    stdout = process.stdout

  stdin.resume()
  stdout.write(question)

  stdin.once('data', function (data) {
    callback(data.toString().trim())
  })
}

prompt(
  'Введите числа через запятую, например "3.9, 6, 7.8, 6", без кавычек: ',
  function (input) {
    let a = input.split(',')
    console.log('Введено:', a)
    let b = 0

    a.forEach((num) => {
      b += parseFloat(num)
    })
    console.log('Среднее арифметическое данных чисел:', b / a.length)
    prompt('Нажмите Enter, чтобы выйти: ', function (input) {
      process.exit()
    })
  },
)
```

## Готовые Docker образы для создания git сервера с ssh и Cgit

![Скриншот CGit](/uploads/fragmenty-coda/docker-git-cgit.png)

Использованные Docker образы:

- [Git сервер](https://github.com/rockstorm101/git-server-docker)
- [CGit сервер](https://gitlab.com/ankit-docker/cgit/-/tree/master/debian-nginx?ref_type=heads)

docker-compose.yml:

```yaml
version: '3'

services:
  git-server:
    image: rockstorm/git-server
    container_name: git-server
    restart: unless-stopped

    environment:
      # Password for the git user
      GIT_PASSWORD: 'LoLoLo123LoLoLo123'

      # Path where the file with the password for the git user will be
      # mounted in the container in order to replace the default one
      # GIT_PASSWORD_FILE: /run/secrets/git_password

      # Setting this variable creates a link in the git user directory
      # to access repositories without absolute paths
      # REPOSITORIES_HOME_LINK: /srv/git

      # Path where the SSH host keys will be mounted in the container
      # in order to replace the default keys
      # SSH_HOST_KEYS_PATH: /tmp/host-keys

      # Set specific UID and GID for the git user
      # GIT_USER_UID: 1001
      # GIT_USER_GID: 1001

    volumes:
      # Folder with git repositories
      - git-repositories:/srv/git

      # File containing the SSH keys of clients that will be allowed
      # to use this service through a public key
      - ./.ssh/authorized_keys:/home/git/.ssh/authorized_keys

      # Configuration file for the OpenSSH daemon to use instead of
      # the one that is generated by default
      - ./sshd_config:/etc/ssh/sshd_config:ro

      # Disable interactive SSH login for the git user
      # - /executable/file:/home/git/git-shell-commands/no-interactive-login

    ports:
      - '2222:22'

  cgit:
    image: 'ankitrgadiya/cgit:debian-nginx'
    container_name: cgit
    volumes:
      - git-repositories:/git
    ports:
      - '80:80'

volumes:
  git-repositories:
```
