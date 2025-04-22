# Calculator App

## Task
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0


## How to run the app

### 1. **Установка зависимостей**  
Перед запуском необходимо установить все нужные пакеты. Для этого:  
```bash
npm install
```

### 2. **Сборка проекта**  
```bash
npm run build
```
После этого в папке `dist/` появятся файлы `index.html` и `bundle.js`, готовые к использованию.


## Project Structure
- **`src/`** — исходный код приложения
  - **`index.js`** — главный файл, связывающий UI с логикой калькулятора
  - **`calculator.js`** — реализайия математических вычислений
  - **`ui.js`** — взаимодействие с интерфейсом
- **`public/`** — статические файлы
  - **`index.html`** — HTML-код приложения
- **`dist/`** — итоговые файлы после сборки
- **`webpack.config.js`** — конфигурация сборки Webpack.
- **`.eslintrc.js`** — настройки ESLint
- **`package.json`** — список зависимостей и команды для сборки
- **`README.md`** — документация проекта
- **`node_modules/`** — автоматически установленные зависимости
