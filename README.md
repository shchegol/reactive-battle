# [Reactive Battle](https://reactive-battle.herokuapp.com/) [![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

:eyes: Где смотреть:    
https://reactive-battle.herokuapp.com/

Поддержи проект :pray::point_up::star::relieved:

## Описание
Попытка создать легендарную игру Battle City в браузере

## Технологии
TypeScript, React.js, Redux, Canvas, Express.js, PostgreSQL, MongoDB, Docker, Webpack, ESLint, Jest и многое другое...

## Управление
:boom: (кнопка пробел) - стрельба

__передвижение__   
:arrow_up: (кнопка вверх) - вверх    
:arrow_right: (кнопка вправо) - вправо    
:arrow_down: (кнопка вниз) - вниз    
:arrow_left: (кнопка влево) - влево

## Сертификат для разработки
Для запуска локального сервера нужен сертификат. Сертификат можно создать так:

`openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365`

`openssl rsa -in keytmp.pem -out key.pem`

Подробнее тут:
https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28

Файлы key.pem и cert.pem нужно положить в папку ssl в корне проекта.

## Сборка
`npm i` — установка стабильной версии    
`npm start` — запуск версии для разработки    
`build:prod` — сборка продуктовой версии    

__SSR__    
`ssr:start:dev` — запуск версии c SSR для разработки    
`ssr:start:prod` — сборка продуктовой версии c SSR    

__Остальное__    
`npm test` — запуск тестов    
`npm eslint` — запуск eslint

## Environment
Для корректного запуска проекта необходимо скопировать файлы `.env.example` и `.env.local.example`, убрав расширение `.example` у них

## Полезные ссылки для разработки
https://ru.wikipedia.org/wiki/Battle_City    
https://habr.com/ru/post/142126/    
https://github.com/newagebegins/BattleCity    
https://strategywiki.org/wiki/Battle_City/Walkthrough    
https://yarnthen.github.io/yarnthencohosking/tutorials/2018/03/10/battle-city-unity-7.html
