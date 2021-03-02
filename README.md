# [Reactive Battle](https://reactive-battle.herokuapp.com/) [![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
Проект на стадии разработки...

Релиз: https://reactive-battle.herokuapp.com/

## Описание
Попытка создать легендарную игру Battle City в браузере

## Управление
В разработке ...

## Технологии
React, TypeScript, Canvas

## Сертификат для разработки
Для запуска локального сервера нужен сертификат. Сертификат можно создать так:

`openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365`

`openssl rsa -in keytmp.pem -out key.pem`

Подробнее тут:
https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28

Файлы key.pem и cert.pem нужно положить в папку ssl в корне проекта.

## Сборка
* `npm i` — установка стабильной версии,
* `npm start` — запуск версии для разработки.
* `npm dev:ssr:start` — запуск версии c SSR для разработки.
* `npm build` — сборка проекта.
* `npm test` — запуск тестов.

## Полезные ссылки для разработки
https://ru.wikipedia.org/wiki/Battle_City

https://habr.com/ru/post/142126/

https://github.com/newagebegins/BattleCity

https://strategywiki.org/wiki/Battle_City/Walkthrough

https://yarnthen.github.io/yarnthencohosking/tutorials/2018/03/10/battle-city-unity-7.html
