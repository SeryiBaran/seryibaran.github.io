---
title: Лучший аналог OpenServer Для Linux (Devilbox)
author: Иванчай
date: 2022-07-29 17:00:00 +0300
categories: [гайды]
tags: [it, php, сервер, код, backend, docker]
uploads: "/uploads/2022-07-29-analog-openserver-dlya-linux-devilbox"
image:
  path: /uploads/2022-07-29-analog-openserver-dlya-linux-devilbox/preview.jpg
  width: 800
  height: 500
  alt: Скриншот админ-панели (старый, 2017 г.)
---

> В этой публикации нет инструкций. Я просто поделился находкой.
{: .prompt-tip }

Каждому php-разработчику (и не только) нужен сервер.

Конечно же проще взять готовую серверную сборку, чем устанавливать каждый компонент сервера вручную.

Самая популярная сборка - OpenServer. В нем много функций, он удобен. Но он есть **только на Windows**.

Что же делать, если на компьютере установлен Linux?

Можно взять аналог.

Но аналогов немного, и функционал у них как правило скудный.

Но я нашел один, который имеет почти все основные функции OpenServer, и **доступен почти на все платформы**.

Это **Devilbox**.

Описывать установку и настройку я не буду, так как есть [сайт со всеми нужными ссылками и инструкциями](http://devilbox.org/).

Основные фичи Devilbox:

- Открытый исходный код;
- Удобный веб-интерфейс;
- Поддерживаются все основные системы в которых можно установить Docker;
- Управление доменами (по типу test.loc, website.loc);
- Модульный подход (скачивай и запускай лишь то что нужно);
- Поддержка SSL;
- Все работает из коробки.

Список основных модулей можно найти в [Приложении](#приложение).

## Приложение

### 1. Список основных сборок (не стеков):

| Название                                  | Платформы                     | Компоненты [^1]                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Devilbox](http://devilbox.org/)          | Windows, Linux, MacOS, Docker | Apache, Nginx, MySQL, PerconaDB, MariaDB, Memcached, MongoDB, MySQL, PostgreSQL, Redis, PHP, phpMyAdmin, Python Flask, ELK: Kibana, ELK: Logstash, ELK: Elastic Search, HAProxy (SSL разгрузчик для Varnish), Varnish, Solr, RabbitMQ, Ngrok, MailHog, Blackfire |
| [OpenServer](https://ospanel.io/)         | Windows                       | Apache, Nginx, MySQL, MariaDB, Memcached, MongoDB, MySQL, PostgreSQL, Redis, PHP, phpMyAdmin, PHPMemcachedAdmin, PHPPgAdmin, PHPRedisAdmin                                                                                                                       |
| [XAMPP](https://www.apachefriends.org/)   | Windows, Linux, MacOS         | Apache, MariaDB, PHP, Perl, phpMyAdmin                                                                                                                                                                                                                           |
| [WampServer](https://www.wampserver.com/) | Windows                       | Apache, MySQL, MariaDB, PHP, phpMyAdmin                                                                                                                                                                                                                          |
| [AMPPS](https://www.ampps.com/)           | Windows, MacOS                | Apache, MySQL, PHP, Python, MongoDB, Sendmail                                                                                                                                                                                                                    |
| [Bitnami](https://bitnami.com/)           | Windows, Linux, MacOS         | [Каталог (Docker)](https://bitnami.com/stacks/containers), [Каталог (Windows, Linux, MacOS)](https://bitnami.com/stacks/installer)                                                                                                                               |

### 2. Заметка про XAMPP

XAMPP требует root права, но при запуске панели с root невозможно перейти по ссылкам и открыть папки:

```
Executing Dolphin with sudo is not possible due to unfixable security vulnerabilities.
```

## Сноски

[^1]: Перечислены только основные компоненты.
