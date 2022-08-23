#!/bin/bash

# Based on https://github.com/kevin-ohara/Jekyll-New-Post-Helper/blob/master/new-post.sh

echo -n "Введите название поста и нажмите [ENTER]: "
read INPUT
if [ -z "$INPUT" ]; then
  echo "Название поста обязательно"
  exit 1
fi

echo -n "Введите транслит название (для url) поста и нажмите [ENTER] (только англ. буквы, цифры и тире): "
read TRANSLIT
if [ -z "$TRANSLIT" ]; then
  echo "Транслит название (для url) поста обязательно"
  exit 1
fi

echo -n "Введите категории поста и нажмите [ENTER] (пример - category, category2, category3): "
read CATEGORY

echo -n "Введите теги поста и нажмите [ENTER] (пример - tag, tag2, tag3): "
read TAG

LOWERCATEGORY=$(echo "$CATEGORY" | tr '[:upper:]' '[:lower:]')
LOWERTAG=$(echo "$TAG" | tr '[:upper:]' '[:lower:]')
DATE=$(date +"%Y-%m-%d")
TIME=$(date +"%T")
STRPTITLE=${TRANSLIT// /-}
LOWER=$(echo "$STRPTITLE" | tr '[:upper:]' '[:lower:]')
FILENAME=$(printf "%s-%s.md" "$DATE" "$LOWER")
UPLOADS=${FILENAME::-3}

mkdir uploads/$UPLOADS

touch "_posts/$FILENAME"
cat >"_posts/$FILENAME" <<EOL
---
title: "$INPUT"
author: Иванчай
date: $DATE $TIME +0300
categories: [$LOWERCATEGORY]
tags: [$LOWERTAG]
uploads: "/uploads/$UPLOADS"
image:
  path: /uploads/$UPLOADS/preview.jpg
  width: 800
  height: 500
  alt: Превью
---
EOL
