---
title: Фрагменты кода (Эта статья будет обновляться)
author: Иванчай
date: 2022-06-19 11:57:00 +0300
categories: [всякое]
tags: [javascript, python, код, программирование]
uploads: "/uploads/2022-06-19-fragmenty-coda"
---

Здесь я собрал полезные куски кода и небольшие программы.

---

Получение данных с API и их отображение

```js
fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json()).then(data => {
    document.querySelector("body").innerHTML = data.map(e => `<p ${e.completed ? "style=\"color: green;\"" : ""}>${e.title}</p>`).join("")
})
```

---

Код мистера обфускатора

```js
eval(
  "eval(eval(eval(`eval(eval(eval(eval(eval(eval('eval(eval(eval(eval(eval(eval(eval(\"eval(eval((()=>(()=>(()=>(()=>(()=>(()=>(()=>(function(){return (()=>{let i=Number(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Number(!!!!!!!!!!!!!!!!!!!!false)),a=Math.random(),Fjoi=window;Fjoi[a]=[];do{Fjoi[a].push(i);i++;} while (i < 1000);return Fjoi[a];})()})())())())())())())())()))\")))))))'))))))`)))"
);
```

---

Счетчик положительных чисел в массиве

```js
const countOfPositive = (arr) => arr.reduce((p, c) => (c > 0 ? p + 1 : p), 0);
```

---

Валидация PIN

```js
const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);
```

---

Разные способы Fetch

```js
// Промисы
fetch("https://disease.sh/v3/covid-19/all")
  .then((res) => res.json())
  .then((data) => console.log(data));

// ИЛИ

// Async/await
console.log(
  await (async function () {
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    return await res.json();
  })()
);
```

---

```js
const listOf16x9Height = [1080, 720, 360];

const listOf16x9Width = listOf16x9Height.map((height) => (height / 9) * 16);

console.log(listOf16x9Width);
```

---

Вывод четных чисел с помощью самописного фильтра

```js
function filter(arr, f) {
  let re = [];
  arr.forEach((e, i) => {
    if (f(e)) {
      re.push(e);
    }
  });
  return re;
}

const arr = [1, 2, 3, 4, 5, 6];

const rodd = (array) => filter(array, (value) => value % 2 == 0);

rodd(arr);
```

---

Вывод четных чисел

```js
const arr = [1, 2, 3, 4, 5, 6];

const rodd = (array) => array.filter((value) => value % 2 == 0);

rodd(arr);
```

---

Скрипт для Telegram Web Z

```js
const MessageBox = document.querySelector("#editable-message-text"); // Ищем инпут
const text = "aboba"; // Текст
const len = 15; // Кол-во раз

for (let _ = 0; _ < len; _++) {
  MessageBox.innerText += text; // Вставляем текст в инпут
}

// OR

for (let _ = 0; _ < 15; _++)
  document.querySelector("#editable-message-text").innerText += "aboba";
```

---

```js
Object.prototype.forEach = Array.prototype.forEach;

Object.defineProperty(Object.prototype, "length", {
  get: () => Object.keys(this).length,
});

let a = {
  0: 123,
  1: "test",
};

a.forEach((e) => console.log(e));

console.log(a.forEach);
```

---

Ошибка в VSCode на Kubuntu:

```
Не удалось записать сведения о входе в цепочку ключей. Ошибка: \"GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.secrets was not provided by any .service files\".
```

Решение:

```bash
sudo apt install gnome-keyring
```

---

https://tproger.ru/articles/html5-notifications-is-easy/

```js
Notification.requestPermission((permission) => {
  if (permission === "granted") {
    let notification = new Notification("Уведомление с сайта", {
      body: "Описание",
      dir: "auto",
      icon: "https://seryibaran.github.io/assets/favicon.f1ac8f49.ico",
    });
  }
});
```

---

```js
const createLoop = (onStep, timeout) => {
  let running = false;

  const iteration = () => {
    onStep();
    if (running) setTimeout(iteration, timeout);
  };

  const start = () => {
    running = true;
    iteration();
  };

  const stop = () => {
    running = false;
  };

  return { start, stop };
};

const mainLoop = createLoop(() => {
  console.log("test");
}, 100);
```

---

VKontakte удаление уведомлений (не всех, а только тех, что показаны в меню уведомлений)

```js
document
  .querySelectorAll(".top_notify_cont .ui_actions_menu")
  .forEach((elem) => {
    elem.childNodes[0].click();
  });
```

---

```js
function switchTheme() {
  wrapper.classList.toggle("dark-theme");
  wrapper.classList.toggle("light-theme");

  if (wrapper.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") == "dark") {
  themeSwitcher.setAttribute("checked", "");
  switchTheme();
} else {
  themeSwitcher.removeAttribute("checked");
}

themeSwitcher.addEventListener("click", switchTheme);
```

---

```html
<button id="activate">Активировать</button>
```

```js
const activateBtn = document.getElementById("activate");

function promptInt(message = "", placeholder = "") {
  return parseInt(prompt(message, placeholder));
}

function main() {
  const [a, b, x, y] = [
    promptInt("Введите a:"),
    promptInt("Введите b:"),
    promptInt("Введите x:"),
    promptInt("Введите y:"),
  ];

  console.log("2 кг\n13 17");
  console.log("---");
  console.log(`${a} 1\n19 ${b}`);
  console.log("---");
  console.log(`${x} ${y}\n5 ${y}`);
}

activateBtn.onclick = main;
```

---

```js
const col = 4;

let nums = [];
let result = [];
let error = false;

for (let i = 0; i < col; i++) {
  const _ = parseInt(prompt(`Введите число №${i + 1}`));
  if (!isNaN(_)) {
    nums.push(_);
  } else {
    alert(new Error("Вы ввели не число!"));
    error = true;
    break;
  }
}

if (!error) {
  nums.forEach((elem) => {
    result.push(`${elem}`);
  });
  alert(result.join(" "));
}
```

---

```js
const num = parseInt(prompt("Введите число"));

if (!isNaN(num)) {
  console.log(
    `Следующее за числом ${num} число - ${
      num + 1
    }.\nДля числа ${num} предыдущее число - ${num - 1}.`
  );
} else {
  console.error(new Error("Вы ввели не число!"));
}
```

---

[Песочница](https://jsbin.com/muyazupuko/edit?html,css,output)
![Скриншот]({{ page.uploads }}/shadows-without-bugs.webp){: .shadow }

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

---

```js
const Pageres = require("pageres");

(async () => {
  await new Pageres({ delay: 2 })
    .src(
      "https://github.com/SeryiBaran/seryibaran.github.io",
      ["480x320", "1024x768", "iphone 5s", "1920x1080"],
      { crop: true }
    )
    .src(
      "https://seryibaran.github.io",
      ["480x320", "1024x768", "iphone 5s", "1920x1080"],
      { crop: true }
    )
    .dest(__dirname)
    .run();

  console.log("Finished generating screenshots!");
})();
```

---

```js
Object.defineProperty(window, "x", {
  get() {
    return i++;
  },
});

console.log(x);
console.log(x);
console.log(x);
console.log(x);
console.log(x);
```

---

```jsx
import { useState } from "react";

export const useCounter = (initialValue = 0, step = 1) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => {
    setCounter((counter) => counter + step);
  };
  const decrement = () => {
    setCounter((counter) => counter - step);
  };
  return { counter, increment, decrement };
};
```

---

```tsx
import { useState } from "react";

interface ReturnTypes {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (
  initialValue: number = 0,
  step: number = 1
): ReturnTypes => {
  const [counter, setCounter] = useState<number>(initialValue);
  const increment = () => {
    setCounter((counter: number) => counter + step);
  };
  const decrement = () => {
    setCounter((counter: number) => counter - step);
  };
  return { counter, increment, decrement };
};
```

---

```js
document.querySelectorAll("*").forEach((e) => (e.style.display = "inline"));
```

---

```js
try {
  let ___laga;
  document.querySelectorAll("body *:not(script):not(style)").forEach((elem) => {
    ___laga = document.createElement("img");
    ___laga.src =
      "https://yt3.ggpht.com/ytc/AKedOLR7CLQ4RqzhFA74xKCdpzDmemcsZSrKvDsq9Mt_=s88-c-k-c0x00ffffff-no-rj";
    elem.appendChild(___laga);
  });
} catch (e) {
  console.log(e);
}
```

---

```js
export const SlideAnimations = {
  slideUp: function (element, duration = 500) {
    return new Promise(function (resolve, reject) {
      element.style.height = element.offsetHeight + "px";
      element.style.transitionProperty = `height, margin, padding`;
      element.style.transitionDuration = duration + "ms";
      element.offsetHeight;
      element.style.overflow = "hidden";
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      window.setTimeout(function () {
        element.style.display = "none";
        element.style.removeProperty("height");
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition-duration");
        element.style.removeProperty("transition-property");
        resolve(false);
      }, duration);
    });
  },
  slideDown: function (element, duration = 500) {
    return new Promise(function (resolve, reject) {
      element.style.removeProperty("display");
      let display = window.getComputedStyle(element).display;
      if (display === "none") display = "block";
      element.style.display = display;
      let height = element.offsetHeight;
      element.style.overflow = "hidden";
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;
      element.offsetHeight;
      element.style.transitionProperty = `height, margin, padding`;
      element.style.transitionDuration = duration + "ms";
      element.style.height = height + "px";
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      window.setTimeout(function () {
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
        element.style.removeProperty("transition-duration");
        element.style.removeProperty("transition-property");
      }, duration);
    });
  },
  slideToggle: function (element, duration = 500) {
    if (window.getComputedStyle(element).display === "none") {
      return this.slideDown(element, duration);
    } else {
      return this.slideUp(element, duration);
    }
  },
};
```

---

```js
let data = [
  [1, 2, 3, 4, 5],
  ["a", "b", "c", "d", "i"],
];
console.log(
  data.map((row) => {
    return `<tr>${row
      .map((col) => {
        return `<td>${col}</td>`;
      })
      .join("")}</tr>`;
  })
);
```

---

```js
export const Events = {
  add: (element, event, handler) => {
    const tech_event = new CustomEvent(event);
    element[`EVENTS__EVENT___${event}`] = tech_event;
    element.addEventListener(event, handler);
    console.log(element[`EVENTS__EVENT___${event}`]);
  },
  run: (element, event) => {
    element.dispatchEvent(element[`EVENTS__EVENT___${event}`]);
  },
};
```

---

```js
let i = 0;

function count() {
  do {
    i++;
    console.log(i);
  } while (i % 100 != 0);

  if (i == 10000) {
    console.log("Программа успешно завершила работу!");
  } else {
    setTimeout(count);
  }
}

count();
```

---

```js
let result = [];
for (let i = 1000; i >= 0; i = i - 7) {
  result.push(i);
}
console.log(result);
```

---

```js
Object.defineProperty(window, "x", {
  get() {
    return i++;
  },
});

console.log(x);
console.log(x);
console.log(x);
console.log(x);
console.log(x);
```

---

```bash
web-ext run --firefox=firefoxdeveloperedition
```

---

```js
let proxy = "111.111.151.111:8080";
let proxyIp = proxy.match(
  /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]){3}/gm
);
let proxyPort = proxy.match(
  /:(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/gm
);
```

---

```js
if (proxyIp) {
  console.log(proxyIp[0]); // Выведется 111.111.151.111
}
```

---

```js
if (proxyPort) {
  console.log(proxyPort[0].replace(":", "")); // Выведется 8080
}
```

---

```js
let ipAndPort = `${proxyIp}:${proxyPort}`; // Получится 111.111.151.111:8080, но уже проверенный на правильность
```

---

```
|
|ᅠᅠᅠ __________
|_O)ᅠ< Ватафак?
|/ᅠᅠ   -----------------
|
```

---

```js
document.querySelectorAll("*").forEach((e) => (e.style.display = "inline"));
```

---

```js
document
  .querySelectorAll(
    "span, p, h1, h2, h3, h4, h5, h6, i, b, yt-formatted-string, a"
  )
  .forEach((element) => {
    element.innerText = element.innerText.toUpperCase();
    element.setAttribute("style", "color: white;");
  });
```

---

```js
if (
  document.getElementById("inputPhone").value.indexOf("_") > -1 ||
  document.getElementById("inputPhone").value.isEmpty
) {
  console.log("NOT VALID");
} else {
  console.log("VALID");
}
```

---

```js
const rewiewsBorderBox = document.querySelectorAll(".reviews > .border-box");

function rewiewsBorderBoxResize(arg) {
  arg.classList.toggle("reviewsBorderBoxResized");
}

rewiewsBorderBox.forEach(function callback(currentValue) {
  currentValue.onclick = function () {
    rewiewsBorderBoxResize(currentValue);
  };
});
```

---

```js
let numDone = 0;
let num = prompt("ДАЙ ЧИСЛО ЖМОТ! Я сложу!");
num.split("").forEach((elem) => {
  numDone += parseInt(elem, 10);
});
console.log(numDone);
```

---

```js
function prompt(question, callback) {
  let stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once("data", function (data) {
    callback(data.toString().trim());
  });
}

prompt(
  'Введите числа через запятую, например "3.9, 6, 7.8, 6", без кавычек: ',
  function (input) {
    let a = input.split(",");
    console.log("Введено:", a);
    let b = 0;

    a.forEach((num) => {
      b += parseFloat(num);
    });
    console.log("Среднее арифметическое данных чисел:", b / a.length);
    prompt("Нажмите Enter, чтобы выйти: ", function (input) {
      process.exit();
    });
  }
);
```

---

```python
name = input("Введите своё имя: ")
age = input("Укажите свой возраст: ")
print("Привет, " + name + "!")
print("Тебе уже " + age + "? Я рад! :)")
```

---

```python
# Авторизация
login_input = input("Введите логин: ")
pass_input = input("Введите пароль: ")
if login_input == "!" and pass_input == "88005553535":
    print("Добро пожаловать!")
else:
    print("Ага, фигушки! Пароль или логин неверные!")
```

---

```python
# Мой первый калькулятор

from colorama import init
from colorama import Fore, Back, Style

init()

continue_calc = None

while True and continue_calc != "нет":
    print(Fore.BLACK)

    print(Back.RED)

    print("Что сделать?")

    print(Back.GREEN)

    what = input("""+(Сложение)
-(Вычитание)
/(Деление)
*(Умножение)
**(Степень)
%(Вычисление остатка)
//(Сколько раз первое число поместится во второе): """)
    print(Back.CYAN)

    a = float(input("Введите первое число: "))
    b = float(input("Введите второе число: "))

    print(Back.YELLOW)

    if what == "+":
        c = a + b
        print("Результат: " + str(c))
    elif what == "-":
        c = a - b
        print("Результат: " + str(c))
    elif what == "/":
        c = a / b
        print("Результат: " + str(c))
    elif what == "*":
        c = a * b
        print("Результат: " + str(c))
    elif what == "**":
        c = a ** b
        print("Результат: " + str(c))
    elif what == "%":
        c = a % b
        print("Результат: " + str(c))
    elif what == "//":
        c = a // b
        print("Результат: " + str(c))
    else:
        print("Выбрана неверная операция!")

    while continue_calc != "да" and continue_calc != "нет":
        continue_calc = input("Продолжить?(да, нет): ")
```

---

```python
# Текстовый редактор
file_direct = input("В какой папке создать файл(\"C:/папка/папка2\" например): ")
print("\n")
file_content = input("Введите текст файла:\n")
file_save = None
while file_save != "да" and file_save != "нет":
    print("\n")
    file_save = input("Сохранить файл?(да, нет): ")
if file_save == "да":
    file_name = input("Введите название файла: ")
    file_expansion = input("Введите расширение файла: ")
    file_full_address = file_direct + "/" + file_name + "." + file_expansion
    file = open(file_full_address, "w")
    file.write(file_content)
    file.close()
    print("Файл успешно сохранён!")
```

---

```python
# Программа для копирования файлов
filename1 = input("Какой скопировать файл(C:/папка/папка2/файл.расширение): ")
filename2 = input("В какой скопировать файл(C:/папка/папка2/файл.расширение): ")

file1 = open(filename1, "r")
file2 = open(filename2, "w")

file2.write(file1.read())

file1.close()
file2.close()

print("Копирование успешно завершено!")
```

---

```python
# Программа для создания резервных копий
file1_direct = input("Директория файла(C:/папка/папка2): ")
file1_name = input("Название файла(файл.расширение): ")

file1_full = file1_direct + "/" + file1_name

file2 = file1_direct + "/" + "backup_" + file1_name

file1_open = open(file1_full, "r")
file2_open = open(file2, "w")

file2_open.write(file1_open.read())

file1_open.close()
file2_open.close()

print("Резервное копирование успешно завершено!")
```

---

```python
# Программа для создания резервных копий 2.0
filename1 = input("Введите название файла: ")
filename2 = "backup_" + filename1

file1 = open(filename1, "r")
file2 = open(filename2, "w")

file2.write(file1.read())

file1.close()
file2.close()

print("Резервное копирование успешно завершено!")
```

---

```python
# Создание резервной копии медиа-файла
filename1 = input("Введите название файла: ")
filename2 = "backup_" + filename1

file1 = open(filename1, "rb")
file2 = open(filename2, "wb")

file2.write(file1.read())

file1.close()
file2.close()

print("Резервное копирование успешно завершено!")
```

---

```python
# Создание резервной копии медиа-файла указанное количество раз
filename1 = input("Введите название файла: ")
size = int(input("Сколько раз скопировать файл: "))
name = 1
for i in range(size):
    filename2 = "copy{}_".format(name) + filename1
    file1 = open(filename1, "rb")
    file2 = open(filename2, "wb")
    file2.write(file1.read())
    file1.close()
    file2.close()
    size += 1
    name += 1
print("Резервное копирование успешно завершено!")
```

---

```python
# Черепашка в питоне!!!
import turtle
t = turtle.Turtle()
t.reset()
for i in range(3):
    t.reset()
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.forward(100)
    t.right(45)
    t.clear()
turtle.done()
```

---

```python
# Просто АфИгЕтЬ!!!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(100)


def sq(a):
    for _i in range(4):
        t.forward(a)
        t.left(90)


dlina = 40
for _i in range(36):
    sq(dlina)
    t.right(10)
    dlina += 5

turtle.done()
```

---

```python
# Улучшенное "Офигеть"
import turtle
t = turtle.Turtle()
t.reset()
t.speed(100)

colors = ["red", "brown", "green", "blue"]


def sq(a):
    for _i in range(4):
        t.forward(a)
        t.left(90)


dlina = 40
for _i in range(36):
    t.color(colors[_i % 4])
    sq(dlina)
    t.right(10)
    dlina += 5

turtle.done()
```

---

```python
# Тоже прикольнА!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(100)

colors = ["red", "brown", "green", "blue"]


def sq(a):
    for _i in range(4):
        t.color(colors[_i % 4])
        t.forward(a)
        t.left(90)


dlina = 40
for _i in range(36):
    sq(dlina)
    t.right(10)
    dlina += 5

turtle.done()
```

---

```python
# Тоже красиво!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(100)

colors = ["red", "brown", "green", "blue"]


def sq(a):
    for _i in range(4):
        t.color(colors[_i % 4])
        t.forward(a)
        t.left(90)


dlina = 30
for _i in range(60):
    sq(dlina)
    t.right(10)
    dlina += 4

turtle.done()
```

---

```python
# Красивые кружки!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(100)


dlina = 30
for _i in range(60):
    t.circle(dlina)
    t.right(10)
    dlina += 4

turtle.done()
```

---

```python
# Узорина!!!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(1000000)


def sq(a):
    for _i in range(4):
        t.forward(a)
        t.left(90)


dlina = 10
for _i in range(1000000):
    sq(dlina)
    t.right(1)
    dlina += 1

turtle.done()
```

---

```python
# База данных
import os.path
baza_file_path = "C:\\Scr\\txt.txt"
true_false_baza_file = os.path.exists(baza_file_path)
if true_false_baza_file == False:
    baza_dannyh_new = open(baza_file_path, "w")
    baza_dannyh_new.close()
input_name = input("Введите ваше имя: ")
print("Привет, " + input_name + "! Я записал тебя!!")
baza_dannyh = open(baza_file_path, "r+")
baza_dannyh.write(input_name + "\n")
lines = sum(1 for _ in baza_dannyh)
baza_dannyh.close()
if lines >= 9:
    print()
    clear_no_yes = input(
        "В Базе уже более 10 имён. Очистить список? (Да - 1, Нет - любой символ): ")
    if clear_no_yes == "1":
        baza_dannyh_clear = open(baza_file_path, "w")
        baza_dannyh_clear.close()
```

---

```python
# Компилятор
# -*- coding: utf-8 -*-
write_txt = open("write.txt", "r", encoding="utf-8")
code = write_txt.read()
write_txt.close()
exec(code)
```

---

```python
# Бросание монетки
import random

monetka = ["Орёл", "Решка"]

broshennaya_monetka = random.choice(monetka)
print(broshennaya_monetka)
```

---

```python
# Бросание монетки пока не будет "Орёл"
monetka = ["Орёл", "Решка"]
broshennaya_monetka = random.choice(monetka)
print(broshennaya_monetka)
time.sleep(1)
while broshennaya_monetka != "Орёл":
    broshennaya_monetka = random.choice(monetka)
    print(broshennaya_monetka)
    time.sleep(1)
```

---

```python
# Бросание монетки пока не будет "Орёл" полегче
monetka = ["Орёл", "Решка"]

while True:
    broshennaya_monetka = random.choice(monetka)
    print(broshennaya_monetka)
    time.sleep(1)
    if broshennaya_monetka == "Орёл":
        break
```

---

```python
# Генератор паролей
import random
import string


def buildblock(size):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(size))


print(buildblock(10))
```

---

```python
# Генератор паролей с эффектом "ДуМаНиЯ компьютера"
import random
import string
import time


def buildblock(size):
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(size))


for i in range(10):
    random_simvol = buildblock(1)
    print(random_simvol, end="", flush=True)
    random_time = random.random()
    time.sleep(random_time)
```

---

```python
# Матрица
def matritsa(peredyh, kol_za_raz):
    import time
    import random
    import string

    def buildblock(size):
        return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(size))
    while True:
        print(buildblock(kol_za_raz), end="", flush=True)
        time.sleep(peredyh)


matritsa(1, 1)
```

---

```python
# Мой первый калькулятор 2.0 (С исправлением бага!!!)

from colorama import Fore, Back, Style
from colorama import init
init()

continue_calc = None

while True and continue_calc != "нет":
    continue_calc = None  # В этом заключается баг
    print(Fore.BLACK)

    print(Back.RED)

    print("Что сделать?")

    print(Back.GREEN)

    what = input("""+(Сложение)
-(Вычитание)
/(Деление)
*(Умножение)
**(Степень)
%(Вычисление остатка)
//(Сколько раз первое число поместится во второе): """)
    print(Back.CYAN)

    a = float(input("Введите первое число: "))
    b = float(input("Введите второе число: "))

    print(Back.YELLOW)

    if what == "+":
        c = a + b
        print("Результат: " + str(c))
    elif what == "-":
        c = a - b
        print("Результат: " + str(c))
    elif what == "/":
        c = a / b
        print("Результат: " + str(c))
    elif what == "*":
        c = a * b
        print("Результат: " + str(c))
    elif what == "**":
        c = a ** b
        print("Результат: " + str(c))
    elif what == "%":
        c = a % b
        print("Результат: " + str(c))
    elif what == "//":
        c = a // b
        print("Результат: " + str(c))
    else:
        print("Выбрана неверная операция!")

    while continue_calc != "да" and continue_calc != "нет":
        continue_calc = input("Продолжить?(да, нет): ")
```

---

```python
# Мой первый калькулятор 3.0 (С исправлением!!!)

from colorama import Fore, Back, Style
from colorama import init
init()

continue_calc = None

while True and continue_calc != "нет":
    continue_calc = None
    print(Fore.BLACK)

    print(Back.RED)

    print("Что сделать?")

    print(Back.GREEN)

    what = input("""+(Сложение)
-(Вычитание)
/(Деление)
*(Умножение)
**(Степень)
%(Вычисление остатка)
//(Сколько раз первое число поместится во второе): """)
    print(Back.CYAN)

    a = float(input("Введите первое число: "))
    b = float(input("Введите второе число: "))

    print(Back.YELLOW)

    if what == "+":
        c = a + b
        print("Результат: " + str(c))
    elif what == "-":
        c = a - b
        print("Результат: " + str(c))
    elif what == "/":
        c = a / b
        print("Результат: " + str(c))
    elif what == "*":
        c = a * b
        print("Результат: " + str(c))
    elif what == "**":
        c = a ** b
        print("Результат: " + str(c))
    elif what == "%":
        c = a % b
        print("Результат: " + str(c))
    elif what == "//":
        c = a // b
        print("Результат: " + str(c))
    else:
        print("Выбрана неверная операция!")

    while continue_calc not in ('да', 'нет'):  # В этом заключается исправление
        continue_calc = input("Продолжить?(да, нет): ")
```

---

```python
# Мой первый калькулятор 4.0 (С исправлением!!!)

from colorama import Fore, Back, Style
from colorama import init
init()

continue_calc = None

while continue_calc != "нет":  # В этом заключается исправление
    continue_calc = None
    print(Fore.BLACK)

    print(Back.RED)

    print("Что сделать?")

    print(Back.GREEN)

    what = input("""+(Сложение)
-(Вычитание)
/(Деление)
*(Умножение)
**(Степень)
%(Вычисление остатка)
//(Сколько раз первое число поместится во второе): """)
    print(Back.CYAN)

    a = float(input("Введите первое число: "))
    b = float(input("Введите второе число: "))

    print(Back.YELLOW)

    if what == "+":
        c = a + b
        print("Результат: " + str(c))
    elif what == "-":
        c = a - b
        print("Результат: " + str(c))
    elif what == "/":
        c = a / b
        print("Результат: " + str(c))
    elif what == "*":
        c = a * b
        print("Результат: " + str(c))
    elif what == "**":
        c = a ** b
        print("Результат: " + str(c))
    elif what == "%":
        c = a % b
        print("Результат: " + str(c))
    elif what == "//":
        c = a // b
        print("Результат: " + str(c))
    else:
        print("Выбрана неверная операция!")

    while continue_calc not in ('да', 'нет'):
        continue_calc = input("Продолжить?(да, нет): ")
```

---

```python
# Узорина 2!!!
import turtle
t = turtle.Turtle()
t.reset()
t.speed(1000000)


def sq(a):
    for _i in range(4):
        t.forward(a)
        t.left(90)


dlina = 100
for _i in range(1000000):
    sq(dlina)
    t.right(1)

turtle.done()
```

---

```python
# Авто-Перемещалка
import glob
import os
import time
while True:
    fil = glob.glob("C:\\Users\\Иван\\Desktop\\*.qwe")
    print(fil)
    for i in range(len(fil)):
        os.replace(fil[i], "C:\\Users\\Иван\\Desktop\\qwe\\" +
                   os.path.basename(fil[i]))
    time.sleep(1)
```

---

```python
# Авто-Перемещалка 2.0
import glob
import os
import time
while True:
    fil = glob.glob("C:\\Users\\Иван\\Desktop\\*.jar")
    print(fil)
    for i in range(len(fil)):
        try:
            os.replace(fil[i], "C:\\Users\\Иван\\Desktop\\jar\\" +
                       os.path.basename(fil[i]))
        except:
            print("Не могу переместить!")
    time.sleep(1)
    os.system("cls")
```

---

```python
# Авто-Перемещалка 3.0
import glob
import os
import time
while True:
    fil = (glob.glob("C:\\Users\\Иван\\Desktop\\*.jar") +
           glob.glob("C:\\Users\\Иван\\Desktop\\*.zip") +
           glob.glob("C:\\Users\\Иван\\Desktop\\*.rar") +
           glob.glob("C:\\Users\\Иван\\Desktop\\*.7z") +
           glob.glob("C:\\Users\\Иван\\Desktop\\*.bat"))
    print(fil)
    for i in range(len(fil)):
        try:
            os.replace(fil[i], "C:\\Users\\Иван\\Desktop\\jar\\" +
                       os.path.basename(fil[i]))
        except:
            print("Не могу переместить!")
    time.sleep(1)
    os.system("cls")
```

---

```python
# Авто-Перемещалка 4.0
import glob
import os
import time


def sor(type_of_file, directory):
    """
    Аргументы:
    type_of_file - передать путь поиска (например "C:\\Users\\Иван\\Desktop\\*.jar")
    directory - передать путь перемещения (например "C:\\Users\\Иван\\Desktop\\jar\\")
    """
    fil = glob.glob(type_of_file)
    print(fil)
    for i in range(len(fil)):
        try:
            os.replace(fil[i], directory + os.path.basename(fil[i]))
        except:
            print("Не могу переместить!")
    time.sleep(1)
    os.system("cls")


while True:
    sor("C:\\Users\\Иван\\Desktop\\test\\*.7z",
        "C:\\Users\\Иван\\Desktop\\test\\7z\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.bat",
        "C:\\Users\\Иван\\Desktop\\test\\bat\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.exe",
        "C:\\Users\\Иван\\Desktop\\test\\exe\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.jar",
        "C:\\Users\\Иван\\Desktop\\test\\jar\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.msi",
        "C:\\Users\\Иван\\Desktop\\test\\msi\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.rar",
        "C:\\Users\\Иван\\Desktop\\test\\rar\\")
    sor("C:\\Users\\Иван\\Desktop\\test\\*.zip",
        "C:\\Users\\Иван\\Desktop\\test\\zip\\")
```

---

```python
# Авто-Перемещалка 5.0
import glob
import os
import time


def sor(type_of_file, directory):
    '''
    Аргументы:
    type_of_file - передать путь поиска (например 'C:\\Users\\Иван\\Desktop\\*.jar')
    directory - передать путь перемещения (например 'C:\\Users\\Иван\\Desktop\\jar\\')
    '''
    fil = glob.glob(type_of_file)
    print(fil)
    for i in range(len(fil)):
        try:
            os.replace(fil[i], directory + os.path.basename(fil[i]))
        except:
            print('Не могу переместить!')
    time.sleep(1)
    os.system('cls')


while True:
    sor('C:\\Users\\Иван\\Desktop\\test\\*.7z',
        'C:\\Users\\Иван\\Desktop\\test\\7z\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.bat',
        'C:\\Users\\Иван\\Desktop\\test\\bat\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.exe',
        'C:\\Users\\Иван\\Desktop\\test\\exe\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.jar',
        'C:\\Users\\Иван\\Desktop\\test\\jar\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.msi',
        'C:\\Users\\Иван\\Desktop\\test\\msi\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.rar',
        'C:\\Users\\Иван\\Desktop\\test\\rar\\')
    sor('C:\\Users\\Иван\\Desktop\\test\\*.zip',
        'C:\\Users\\Иван\\Desktop\\test\\zip\\')
```

---

```python
# Авто-Перемещалка 6.0
import glob
import os
import time
from pathlib import Path
import shutil


def sor(type_of_file, directory):
    '''
    Аргументы:
    type_of_file -  (например '.jar')
    directory - (например 'C:\\Users\\Иван\\Desktop\\')
    '''
    fil = [os.path.join(directory, _) for _ in os.listdir(
        directory) if _.endswith(type_of_file)]
    print(fil)
    for i in range(len(fil)):
        rasshirenie = Path(fil[i]).suffix
        dir_save = (directory + rasshirenie.replace(".", "") + '\\')
        if os.path.exists(dir_save) != True:
            os.mkdir(dir_save)
        try:
            shutil.move(fil[i], (dir_save + os.path.basename(fil[i])))
        except:
            print('Не могу переместить!')
    time.sleep(1)
    os.system('cls')


while True:
    sor('.7z',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.bat',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.exe',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.jar',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.msi',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.rar',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.zip',
        'C:\\Users\\Иван\\Desktop\\test\\')
    sor('.123',
        'C:\\Users\\Иван\\Desktop\\test\\')
```

---

```python
# Авто-Перемещалка 7.0 Sortirovshick
import glob
import os
import time
from pathlib import Path
import shutil
while True:
    directory = 'C:\\Users\\Иван\\Desktop\\test'
    fil = []
    for i in range(len(glob.glob(f'{directory}\\*.*'))):
        fil.append(Path(glob.glob(f'{directory}\\*.*')
                        [i]).suffix.replace(".", ""))
    print(fil)
    for i in range(len(fil)):
        pil = []
        pil = glob.glob(f'{directory}\\*.{fil[i]}')
        print(pil)
        dir_save = (directory + '\\' + fil[i] + '\\')
        if not os.path.exists(dir_save):
            os.mkdir(dir_save)
        try:
            shutil.move(pil[i], (dir_save + os.path.basename(pil[i])))
        except:
            print('Не могу переместить!')
    time.sleep(1)
    os.system('cls')
```

---

```python
# Релиз
import shutil
from pathlib import Path
import time
import os
import glob
import tkinter as tk
import tkinter.filedialog as fd
from tkinter import *

directory = None


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        btn_dir = tk.Button(self, text="Выбрать папку",
                            command=self.choose_directory)
        btn_dir.pack(padx=60, pady=10)
        l1 = Label(text="Как только выберешь папку, закрой это окно.\nПредупреждение! Переместите куда-нибудь вложенные папки!\nПример: Вы выбрали папку, в которой есть ещё папки, но их программа посчитает ФАЙЛАМИ!!!",
                   font="Arial 20")
        l1.config(bd=20, bg='#ffaaaa')
        l1.pack()

    def choose_directory(self):
        dyyyrectory = fd.askdirectory(title="Открыть папку", initialdir="/")
        if dyyyrectory:
            global directory
            directory = dyyyrectory


app = App()
app.mainloop()


while True:
    fil = []
    for i in range(len(glob.glob(f'{directory}\\*.*'))):
        fil.append(Path(glob.glob(f'{directory}\\*.*')
                        [i]).suffix.replace(".", ""))
    print(fil)
    for i in range(len(fil)):
        pil = []
        pil = glob.glob(f'{directory}\\*.{fil[i]}')
        print(pil)
        dir_save = (directory + '\\' + fil[i] + '\\')
        if not os.path.exists(dir_save):
            os.mkdir(dir_save)
        try:
            shutil.move(pil[i], (dir_save + os.path.basename(pil[i])))
        except:
            print('Не могу переместить!')
    time.sleep(1)
    os.system('cls')
    if len(fil) == 0:
        break
```

---

```python
# Рандомайзер
import random
import time

while True:
    def randomizer():
        number = 0
        a = []
        print("-------------" + str(number) + "-------------")
        for _ in range(30):
            operation = random.choice(["+", "-"])
            change_in_number = random.randint(1, 5)
            if operation == "+":
                numberb = number
                numberb += change_in_number
                print(f"{numberb} = {number} {operation} {change_in_number} ")
                number = numberb
            else:
                numberb = number
                numberb -= change_in_number
                print(f"{numberb} = {number} {operation} {change_in_number} ")
                number = numberb
            a.append(number)
            time.sleep(0.1)
        print(f"-------------{number}-------------")
        a.sort()
        for _ in a:
            print(_)

    if input("Привет! Запустить? (1-да, другое-нет)") == "1":
        randomizer()
    else:
        quit()
```

---

```python
# Симулятор Доллара
import random
import time

while True:
    def randomizer():
        number = 70
        a = []
        print("-------------" + str(number) + "-------------")
        for _ in range(30):
            operation = random.choice(["+", "-"])
            change_in_number = round(random.random(), 3)
            if operation == "+":
                numberr = round(number, 3)
                numberb = numberr
                numberb += change_in_number
                print(
                    f"{round(numberb, 3)} = {numberr} {operation} {change_in_number} ")
                number = round(numberb, 3)
            else:
                numberr = round(number, 3)
                numberb = numberr
                numberb -= change_in_number
                print(
                    f"{round(numberb, 3)} = {numberr} {operation} {change_in_number} ")
                number = round(numberb, 3)
            a.append(number)
            time.sleep(0.1)
        print(f"-------------{number}-------------")
        a.sort()
        for _ in a:
            print(_)
            time.sleep(0.1)
    if input("Привет! Запустить? (1-да, другое-нет)") == "1":
        randomizer()
    else:
        quit()
```

---

```python
# Змея-спираль-черепашка
import turtle

t = turtle.Turtle()
t.reset()
# t.speed(1000000)
turtle.tracer(False)


def sq(a):
    for _i in range(4):
        t.forward(a)
        t.left(90)


dlina = 10
for _i in range(10000):
    sq(dlina)
    t.right(1)
    dlina += 1

turtle.done()
```

---

```python
# Черепаха
import turtle

t = turtle.Turtle()
t.reset()
# t.speed(100)
t.shape("turtle")


def sq(a):
    for i in range(4):
        t.forward(a)
        t.left(90)
        # t.circle(a)


dlina = 40
for _i in range(36):
    sq(dlina)
    t.right(10)
    dlina += 5

turtle.done()
```

---

```python
# Рандомизатор

import random

perezapustit_otvet = None
kol = 1000000
while perezapustit_otvet != 'нет':
    def randomisator(skolko):
        def randomis(skolko_raz):
            nastya1 = 0
            vanya2 = 0
            for i in range(skolko_raz):
                rand = random.randint(1, 2)
                print(rand)
                if rand == 1:
                    nastya1 += 1
                if rand == 2:
                    vanya2 += 1
            return nastya1, vanya2

        nas1, van2 = randomis(skolko)
        return nas1, van2


    nas, van = randomisator(kol)
    print('Счёт соперников:')
    print('Настя - набрала', nas, 'очков;')
    print('Ваня - набрал', van, 'очков;')
    if nas > van:
        print('Настя выиграла!')
        perezapustit_otvet = input('Начать заново? (да, нет)')
    elif nas == van:
        perezapustit_otvet = input('Мда, ничья. Начать заново? (да, нет)')
    else:
        print('Ваня выиграл!')
        perezapustit_otvet = input('Начать заново? (да, нет)')
```

---

```python
# Нажималка на картинку
import pyautogui as pg
from time import sleep
pg.PAUSE = 1.5
pg.FAILSAFE = True

pat = 'BUT/TEST1.png'
pap = 'BUT/TEST2.png'
butt = pg.locateOnScreen(pat)
butt2 = pg.locateOnScreen(pap)
if butt != None:
    pg.moveTo(butt)
    pg.click(butt)
elif butt2 != None:
    pg.moveTo(butt2)
    pg.click(butt2)
else:
    print('Я ничего не нашел(((')
```

---

```python
# Автооткрывалка LightShot
import webbrowser
import random
import string


def buildblock(size):
    return ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(size))

def open():
    url = f"https://prnt.sc/{buildblock(6)}"
    print(url)
    webbrowser.open_new_tab(url)
    print(url)
    webbrowser.open_new_tab(url)
    print(url)
    webbrowser.open_new_tab(url)

off = input()
while off == "":
    open()
    off = input()
```

---

```python
# В дверь постучали один раз.
# - Ага, 0.125 осьминога! - подумал Штирлиц.
# В дверь постучали ещё раз.
# - Ага, 0.25 осьминога! - подумал Штирлиц.
# В дверь постучали ещё 300 раз.
# - Ага, тут надо подсчитать! - подумал Штирлиц.
# - Да открывай уже! - заорал Миллер.
# Вопрос - как расчитать кол-во осьминогов?
# Код на Python:
x = 300 # Кол-во ударов по двери
print(f"В дом Штирлица ломилось {x/8} осьминогов!")
# Ответ: В дом Штирлица ломилось 37.5 осьминогов!
```

---

```python
# 1.0

# Генератор паролей
# Меньше 12 символов пароль слабый, ставьте больше

# Набор символов с похожими друг на друга(i,I,1,l,L):
# abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

# Набор символов без похожих друг на друга букв (по умолчанию):
# abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789

import random
simbols = list('abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789')

def buildpswrd(size):
    return ''.join(random.choice(simbols) for _ in range(size))

print(f'Ваш пароль:\n{buildpswrd(12)}')
input('Нажмите ENTER, чтобы выйти из программы: ')
```

---
