# Проект: Курсы валют для Газпромнефть-ЦР


Привет, вас приветствует frontend developer и будущий senior в мире фронтенда - **_Сергей Сульженко_**
---

## Требования к проекту

Реализовать приложение в соответствие с указанными вами требованиями, а именно

1. Все компоненты согласно предоставленному макету реализовать с помощью библиотеки **consta**
2. График реализовать с помощью библиотеки **echarts**
3. Реализовать получение данных с помощью фейкового сервера

## Конечная цель

Приложение, обрабатывающее предоставленные данные по курсам валют и отрисовывающее визуализацию, которая предоставлена в макете

## Используемые технологии

-   **UI Frameworks** (Consta, Antd)
-   **Styling** (modules)
-   **Charts** (Echarts)
-   **State management** (Redux Toolkit && RTK Query)
-   **Typification** (Typescript)

## Запуск проекта

1. Конечно же сначала нам нужно установить все зависимости `npm i` в помощь
2. Ну и все, что нам остается это просто запустить проект `npm run start`

## FAQ
1. **Почему Antd?** <br>
С помощью данной библиотеки я реализовал только дополнительные, неуказанные вами, пожелания, которые можно и убрать, и тогда ничего не изменится, поэтому в данном моменте я позволил себе реализовать это.
2. **Почему Redux Toolkit && RTK Query?** <br> Я бы мог реализовать все это, как с помощью обычных useState, useContext, useReducer или же Redux, но я решил использовать именно Redux Toolkit, так как это очень удобно, но и всеми другими способами я бы легко реализовал бы данную логику. А что по поводу связи клиента с сервером, так это то, что саму связь можно было осуществить с помощью обычного fetch или axios, react query или даже того же GraphQL совместно с Apollo Client, но Redux Toolkit уже из коробки предоставляет данную возможность, собственно, это и стало причиной выбора RTK Query.<br>
***p.s. хотя я больше люблю react query :)***
3. **А как же Perfect Pixel, у тебя тут не прям по нему**<br>
Да, это так, у меня не точь в точь, но все же очень похоже и в макете одно представление с одними данными, а в видео уже отличается, например те же тултипы и данные по осям X и Y. Лично я ориентировался по видео.