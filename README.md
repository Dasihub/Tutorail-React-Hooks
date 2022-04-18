# Туториал по хуков в React js

## Автор Dosya

---- Это проект был написан на TypeScript

- В этом проекте я собрал все основные хуки для работы в React
- Здесь присутствует все основные хуки самого React, так есть хуки Redux, React-Router-Dom и кастомные хуки
- Проект написано на TypeScript

#### 1. useState
- Этот предназначена для хранения каких-то данных
- хуки содержит само состояние и функцию которое можно менять состояние

#### 2. useEffect
- Этот хук нужен для эффектов, к примеру когда страница отображается, чтобы произошло какое-либо действие
- Этот хук принимает две параметры первый функции, второе массив зависимости
- Массив зависимости можно [ ], можно дать зависимости к примеру стейт [state], если стейт поменяется, то useEffect
срабатывает, но можно и не дать зависимости просто оставить [ ] вот так. Тогда useEffect сработает лишь один раз
- Важно одно всегда дай второй параметр без этого useEffect будет вызывать бесконечный цикл

#### 3. useReducer
- Этот хук является мини Redux, оно может как Redux иметь reducer и диспачит action

#### 4. useContext
- Очень полезный хук. Представьте есть родительский компонент и есть дочерней компонент, но у дочерней
компонента есть еще дочерней компонент и у его дочерней компонент, то есть много вложенности компонентов,
чтобы передать от первого компонента до 4 компонента нужна с помощью props пройти каждый компонент. На самом
в реальных проектах это очень плохо
- Чтобы решить такую проблему есть хук useContext, с помощью этого хука можно от 1 компонента передать данные
или функции на прямую.

#### 5. useMemo
- Главная проблема React js это оптимизация, то есть рендер компонентов. Когда меняется какой-то
компонент в последствие может произойти рендер другого компонента и внутри этого компонента
данные могут снова отрисовать
- Чтобы такого не было для есть этот хук
- Этот хук принимает две параметры как хук useEffect, но возвращает данные в переменную
- Как useEffect, useMemo требует массив зависимости, без этого он будет работать
- Как только вы дали массив зависимости функция будет снова отрисовать только тогда когда массив
зависимости будет меняться

#### 6. useCallback
- Работает по принципу как useMemo, но это возвращает саму функцию
- В основном как я понял этот хук нужен для запросов в API, чтобы не было лишнего рендера

#### 7. useId
- Новый хук появился в React js 18 версии
- Этот нужен для уникальных id

#### 8. UseDeferred
- Этот хук нужен чтобы откладывать  рендер компонентов, то есть отрисовка компонента будет не сразу

#### 9. useTransition
- Этот хук представляет собой тоже само как useDeferred, но как я понял у него есть патчи, то есть loader

#### 10. useRef
- Этот хук нужен для того чтобы взять дом элемент тега jsx



### Кастомные хуки

#### 1. useHttp
- В React js нет единого ответственности по API
- Чтобы это решить есть кастомный хук для запросов в API

#### 2. useMessage
- Хук для уведомления или сообщения

#### 3. useTypeSelector
- В redux есть хук useSelector, но у этого хука отсутствует типизация
- Чтобы решить эту проблему есть кастомный хук useTypeSelector

#### 4. useAction
- Тоже само как useTypeSelector, но для диспата action



### Хуки в React-router-dom

#### useParams
- Этот хук нужен чтобы получить параметр ссылки

#### useNavigate
- Этот хук нужен чтобы менять ссылку 
