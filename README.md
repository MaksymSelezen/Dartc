# Dartc

[Посилання на сайт](https://maksymselezen.github.io/Dartc/)

## Repository

[GitHub Repository](https://github.com/MaksymSelezen/Dartc)

## Як запустити проєкт локально

### 1. Клонувати репозиторій

git clone https://github.com/MaksymSelezen/Dartc.git
cd Dartc

### 2. Встановити залежності

npm install

### 3 .Запустити проєкт у режимі розробки

npm run dev

### 4. Зібрати production-версію

npm run build

### 5. Переглянути production-збірку локально

npm run preview

## Що використано у проєкті

### 1. Збирач

Vite — для швидкої розробки, локального dev-сервера та production build.

### 2. Технології

-HTML5
-SCSS (Sass)
-Vanilla JavaScript

### 3. Бібліотеки та інструменти

-modern-normalize — для нормалізації браузерних стилів.
-Swiper — для реалізації слайдера у hero-блоці.
-JustValidate — для валідації форми.
-accordion-js — для списку елементів в burger-menu.

### 4. Підходи

-Mobile First
-Semantic HTML
-BEM naming
-чиста секційна структура SCSS
-адаптивна верстка для різних розмірів екранів

### 5. Що було налаштовано у проєкті

-налаштовано проєкт на Vite
-підключено SCSS
-підключено Google Fonts
-додано modern-normalize

-створено базову структуру папок для:
assets
js
scss/base
scss/components
scss/sections

-налаштовано глобальні стилі:
reset
variables
base
container

-організовано секції сторінки у вигляді окремих SCSS-файлів
-підготовлено структуру для компонентів
-налаштовано production build
-налаштовано деплой на GitHub Pages
