# frontend-starterpack
Стартовый шаблон для front-end разработчика.

ftp.json служит настройками для gulp-ftp.
Он настраивается отдельно и не должен передоватся на сервер. 
ftp.json должен быть добавлен в .gitignore

```
{
  "host": "sitename.com",
  "user": "user",
  "pass": "password",
  "remotePath": "/domains/sitename.com/folder"
}
```

## Структура папок и файлов
```
├── src/                          # Исходники
│   ├── fonts/                    # Шрифты
│   │   └── OpenSans-Regular.ttf
│   ├── img/                      # Изображения
│   │   └── img.png
│   ├── inc/                      # Подключаемые файлы html
│   │   ├── footer.html
│   │   └── header.html
│   ├── js/                       # JavaScript скрипты
│   │   ├── partials/
│   │   |   └── partials.js
│   │   └── main.js
│   ├── libs/                     # JavaScript библиотеки
│   │   └── jibs.min.js
│   ├── style/                    # Стили
│   │   ├── libs/                 # CSS для библиотек
│   │   |   └── style.css
│   │   ├── templates/
│   │   |   └── templates.scss
│   │   └── main.scss
│   └── index.html                # Страница html
├── .gitignore                    # Список исключённых файлов из Git
├── README.md                     # Документация шаблона
├── ftp.json                      # Настройки для ftp
├── gulpfile.js                   # Gulp.js
└── package.json                  # Список модулей и прочей информации
```
