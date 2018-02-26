# I18n

Example BG to EN
-----------------------------------------------------------------------------------

Made by following the YouTube Tutorial link: https://www.youtube.com/watch?v=eifU5C11WLI

Link to test result in dist folder: https://petyomitkov.github.io/Current-Exercises-2018/Angular%205%20%26%20Firebase/i18n%20-%20translate%20from%20BG%20to%20EN/dist

## Console commands and steps

1. In package.json in scripts add: "extract": "ng xi18n --outputPath=src/locale"  // create message file
2. Add i18n="@@topWelcome"
3. npm run extract
4. Copy file in local folder and rename to massages.en.xlf
5. edit the messages file and added  <target> Hi <id="topWelcome"> </target>
6. Add to package.json: "start:en": "ng serve --aot --i18nFile=src/locale/messages.en.xlf --i18nFormat=xlf --locale=en"

Build with npm run buil:en => "build:en": "ng build --aot --locale en --i18n-format xlf --i18n-file src/locale/messages.en.xlf --missing-translation error"

!!! ERROR: If have "Failed to load resource: net::ERR_FILE_NOT_FOUND" in index.html change <base href="/"> to <base href="./"> for more info view error-solve folder :) 

If you need mor info for serve and build commands: https://github.com/angular/angular-cli/wiki/stories-internationalization

-----------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
