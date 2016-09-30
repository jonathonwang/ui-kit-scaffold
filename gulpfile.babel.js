
/**
 * Dependency Imports
 */
import gulp   from 'gulp-tasks-scaffold';
import config from './gulp.config.json';

// Copy Folders / Files
gulp.Copy('copy', [
  // { src: `${config.paths.vendor.fontawesome.fonts}/**/*`, dest: `${config.paths.dist.fonts}` }
  { src: `${config.paths.vendor.normalize}/**/*`, dest: `${config.paths.src.scss}/vendor/normalize` }
]);

// Compile Sass
gulp.Sass('scss', `${config.paths.src.scss}/**/*.scss`, config.paths.dist.css, 'app.css');

// Compile TS
gulp.Browserify('browserify', `${config.paths.src.ts}/app.ts`, config.paths.dist.js, 'app.js', ['babelify'], ['tsify']);

// Lint TypeScript
gulp.Tslint('tslint', `${config.paths.src.js}/**/*.ts`, `${config.paths.src.js}/vendor/**/*`, 'tslint.json');

// Lint Scss
gulp.Scsslint('scsslint', `${config.paths.src.sass}/**/*.scss`, `${config.paths.src.sass}/vendor/**/*.scss`, '.scss-lint.yml');

// Clean Dist Folder
gulp.Clean('clean', [`${config.paths.dist.css}/**/*`, `${config.paths.dist.js}/**/*`, `${config.paths.src.scss}/vendor/*`]);

// Default Task
gulp.Default(['copy', 'scsslint', 'scss', 'tslint', 'browserify']);

// Watch Task
gulp.Watch(['copy'], [
  { path: `${config.paths.src.js}/**/*.{ts,js,vue}`, tasks: ['tslint', 'browserify'] },
  { path: `${config.paths.src.scss}/**/*.scss`, tasks: ['scsslint', 'scss'] },
  { path: `${config.paths.src.html}/**/*.html`, tasks: ['html'] }
]);
