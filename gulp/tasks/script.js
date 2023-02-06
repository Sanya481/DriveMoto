/* Плагин для подключения модулей в js - (import, export). Для этого устанавливаем помимо этого плагина и САМ WEBPACK */
import webpack from "webpack-stream";

export const script = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(webpack({
      // development - не сжатый файл на выходе
      // production - сжатый файл на выходе
      mode: "development",
      devtool: 'source-map',
      output: {
        filename: "script.min.js",
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}

