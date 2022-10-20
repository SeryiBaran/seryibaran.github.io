---
title: "Как установить Docker и Docker Compose на Linux"
author: Иванчай
date: 2022-07-30 21:52:21 +0300
categories: [гайды]
tags: [docker, it, программирование]
uploads: "/uploads/2022-07-30-kak-ustanovit-docker-i-compose-na-linux"
image:
  path: /uploads/2022-07-30-kak-ustanovit-docker-i-compose-na-linux/preview.jpg
  width: 800
  height: 500
  alt: Превью
---

> Статья **не была протестирована**. Когда я протестирую команды в статье - я уберу это предупреждение.
{: .prompt-danger }

Эта статья призвана помочь новичкам в установке Docker и Docker Compose на Linux. Без лишних слов, погнали!

## Установка Docker

Для того чтобы установить Docker (а точнее скачать скрипт который его установит) нужно ввести эту команду:

```bash
curl -fsSL https://raw.githubusercontent.com/docker/docker-install/master/install.sh -o get-docker.sh
```

Далее нужно дать скрипту права на выполнение:

```bash
chmod +x get-docker.sh
```

Затем запустим скрипт:

```bash
bash ./get-docker.sh
```

Готово!

Теперь удостоверимся, что Docker установился, выведя его версию:

```bash
sudo docker --version
```

Результат должен быть примерно таким (у вас может отличаться):

```text
Docker version 20.10.17, build 100c701
```

## Установка Docker Compose

В новых версиях Docker Compose **уже внедрен в Docker**. Только команда другая - вместо `docker-compose` теперь нужно писать `docker compose`.

## Настройка запуска Docker без sudo

Для удобства, можно сделать так, чтобы команду `docker` можно было запускать без sudo.

Для начала, создадим группу `docker`:

```bash
sudo groupadd docker
```

Затем добавим текущего пользователя в группу `docker`:

```bash
sudo usermod -aG docker $USER
```

Теперь нужно перезагрузить компьютер.

> Если вы ранее выполняли какие-либо команды Docker кроме `sudo docker --version` , то выполните эти команды:

```bash
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
```

```bash
sudo chmod g+rwx "$HOME/.docker" -R
```

{: .prompt-danger }

Попробуем запустить тестовый контейнер:

```bash
docker run --rm hello-world
```

Результат должен быть примерно таким (у вас может отличаться):

```text
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:53f1bbee2f52c39e41682ee1d388285290c5c8a76cc92b42687eecf38e0af3f0
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Если все работает, значит Docker успешно установился!

## Дополнительные источники

- [Официальная документация Docker](https://docs.docker.com/)
- [Как и для чего использовать Docker - Hexlet](https://guides.hexlet.io/ru/docker/)
- [Использование Docker для чайников - Losst](https://losst.ru/ispolzovanie-docker-dlya-chajnikov)
- [How To Run Nginx in a Docker Container on Ubuntu - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04)
- [How To Build a Node.js Application with Docker - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker)
- [Containerizing a Node.js Application for Development With Docker Compose - Digital Ocean](https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose)
