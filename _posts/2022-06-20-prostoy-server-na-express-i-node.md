---
title: Как сделать простой сервер на Node.js и Express
author: Иванчай
date: 2022-06-20 15:26:00 +0300
categories: [гайды]
tags: [javascript, программирование, сервер, backend]
uploads: "/uploads/2022-06-20-prostoy-server-na-express-i-node"
image:
    path: /uploads/2022-06-20-prostoy-server-na-express-i-node/preview.jpg
    width: 800
    height: 500
    alt: Превью
---

Express - фреймворк для разработки серверов на Node.js.

В этой статье я покажу, как сделвать простейший сервер, раздающий json файл.

У вас должна быть установлена Node.js (с NPM).

В этой статье большинство операций будет производиться через терминал Linux. [Если вы на Windows, можете использовать Git bash, CygWin и т.д](https://stackoverflow.com/questions/6413377/is-there-a-way-to-run-bash-scripts-on-windows).

Без лишних слов, сразу к делу!

## Создание проекта

Первым делом нужно создать директорию для проекта.
Это можно сделать как в файловом менеджере, так и в терминале.

Создадим директорию проекта:

```console
mkdir express-server
```

Перейдём в директорию проекта:

```console
cd express-server
```

Затем нужно инициализировать проект. Для этого выполняем команду:

```console
npm init -y
```

Ключ `-y` означает оставить все опции по умолчанию.

После данной команды в директории появится файл `package.json` со следующим содержимым:

```json
{
    "name": "express-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

## Установка Express

Далее нужно установить Express:

```console
npm install express
```

После установки Express содержимое файла `package.json` будет выглядеть так:

```json
{
    "name": "express-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.1"
    }
}
```

> В блок `dependencies` добавляются все зависимости проекта, за исключением тех, что нужны при разработке. Они устанавливаются командой `npm install --save-dev <название-пакета>`. Подробно об этом можно почитать [здесь](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).
{: .prompt-tip }

## Написание сервера

Необходимо создать JS файл, в котором будет находиться наш код.

Выполните в терминале следующую команду:

```console
touch index.js
```

Теперь откройте этот файл любым удобным для вас редактором.

Добавьте в файл `index.js` следующий код:

```js
const express = require("express");
const app = express();
```

Что делают эти строки?

1. Импортирует и сохраняет Express в переменную `express`;
2. Создаёт экземпляр Express и сохраняет его в меременную `app`.

### Слушатель запросов

Далее, нужно добавить обработчик GET запроса к серверу:

```js
app.get("/", (req, res) => {
    res.send("Привет из Express!");
});
```

Данный код добавляет обработчик, который при GET запросе (например из браузера) отправляет в ответ текст `Привет из Express!`.

### Заключительный код

Теперь добавим заключительную часть, которая говорит Express, какой порт использовать для запуска сервера:

```js
app.listen(3000);
```

Также можно добавить функцию, которая будет выводить в консоль сообщение о запуске:

```js
app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000!");
});
```

### Итоговый код

Так должен выглядеть итоговый код:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Привет из Express!");
});

app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000!");
});
```

### Тест сервера

Теперь запустим сервер:

```console
node index.js
```

В консоли появится сообщение об успешном запуске сервера:
![Сервер запущен]({{ page.uploads }}/zapushen.webp){: .shadow :}
_Сервер запущен_

Далее, нужно перейти по адресу [http://localhost:3000/](http://localhost:3000/), и проверить сервер:
![Все работает!]({{ page.uploads }}/vse-rabotaet.webp){: .shadow :}
_Все работает!_

## Раздача сайта с файлами

С помощью Express все делается очень просто. Несколькими строчками кода. Буквально.

### Подготовка сайта

Для начала создадим папку с сайтом:

```console
mkdir public
```

Создаём файл `index.html`:

```console
touch public/index.html
```

Создаём папку `css`:

```console
mkdir public/css
```

Создаём файл `index.css`:

```console
touch public/css/index.css
```

Должна получиться такая структура:

```text
public
├── css
│   └── index.css
└── index.html
```

Теперь добавьте в файл `index.html` такой код:

```html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Тест</title>
        <link rel="stylesheet" href="./css/index.css" />
    </head>
    <body>
        <p>Привет!</p>
    </body>
</html>
```

А в файл css/index.css такой:

```css
body {
    background-color: #cacaca;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
}

p {
    color: #00004d;
    font-size: 48px;
}
```

### Написание кода

После импорта Express нужно добавить импорт модуля `path`, который позволит работать с путями файлов:

```js
const path = require("path");
```

Затем добавим следующую строку перед слушателем запросов:

```js
app.use(express.static(path.join(__dirname, "public")));
```

Этот код говорит Express использовать статичные файлы из папки `public`

> `__dirname` - директория, в которой работает скрипт
{: .prompt-tip }

`path.join` объединяет 2 пути. Он получает два аргумента:

- Текущую рабочую директорию (cwd).
- Вторую директорию, которую нужно объединить с cwd.

> Попробуйте выполнить код `console.log(path.join(__dirname, 'public'))` и посмотрите, что получится.
{: .prompt-tip }

Все почти готово. Осталось заменить слушатель запросов этим кодом:

```js
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
```

Этот код будет отправлять файл `index.html` клиенту.

### Итоговый код

Так должен выглядеть итоговый код:

```js
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000!");
});
```

### Тест сервера

Теперь запустим сервер:

```console
node index.js
```

При переходе по адресу [http://localhost:3000/](http://localhost:3000/) отобразится наш сайт:
![Все готово!]({{ page.uploads }}/vse-gotovo.webp){: .shadow :}
_Все готово!_

## Обработка POST Запросов

Помимо GET запросов, существуют POST запросы. Их Express тоже может обрабатывать.

### Установка зависимостей

Чтобы работать с телом POST запроса, нам нужно установить специальный NPM пакет.

Делается это командой:

```console
npm install body-parser
```

После выполнения данной команды, файл `package.json` будет иметь следующее содержание:

```json
{
    "name": "express-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "body-parser": "^1.20.0",
        "express": "^4.18.1"
    }
}
```

### Написание кода

Для начала импортируем `body-parser`:

```js
const bodyParser = require("body-parser");
```

Затем добавим эти настройки после `app.use(...)`:

```js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

Осталось только написать обработчик POST запроса:

```js
app.post("/post", (req, res) => {
    console.log(req.body);
    res.status(200);
    res.end();
});
```

Данный код слушает POST запросы на `/post`. При поступлении запроса, код выводит его тело, затем отправляет код 200 и завершает соединение.

### Итоговый код

Должен получиться следующий код:

```js
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.status(200);
    res.end();
});

app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000!");
});
```

### Тест сервера

Запустим сервер:

```console
node index.js
```

Отправим POST запрос с телом в виде JSON (Для этих целей я использую [Hoppscotch](https://hoppscotch.io/ru/) вместе с установленным расширением, чтобы он мог работать с localhost):
![]({{ page.uploads }}/test-post-zaprosa.webp){: .shadow :}
_POST запрос успешно отправился и обработался!_

## Итог

Вот и все, наш простенький сервер на Express и Node.js готов.

Подробнее об Express можно почитать [в официальной документации](http://expressjs.com/en/starter/installing.html).

Надеюсь, читая эту статью, вы узнали что-то новое.

Пишите комментарии. Критика приветствуется.
