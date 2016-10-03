
/**
 * Dependency Imports
 */
import gulp   from 'gulp-tasks-scaffold';
import config from './gulp.config.json';

// Copy Folders / Files
gulp.Copy('copy', [
  // { src: `${config.paths.vendor.fontawesome.fonts}/**/*`, dest: `${config.paths.dist.fonts}` },
  // { src: `${config.paths.vendor.fontawesome.fonts}/**/*`, dest: `${config.paths.src.scss}/vendor/font-awesome/fonts` },
  // { src: `${config.paths.vendor.fontawesome.scss}/**/*`, dest: `${config.paths.src.scss}/vendor/font-awesome/scss` },
  { src: `${config.paths.vendor.normalize}/**/*`, dest: `${config.paths.src.scss}/vendor/normalize` }
]);

// Compile Sass
gulp.Sass('scss', `${config.paths.src.scss}/app.scss`, config.paths.dist.css, 'app.css');

// Compile TS
gulp.Browserify('browserify', `${config.paths.src.js}/app.js`, config.paths.dist.js, 'app.js', ['babelify']);

// Lint TypeScript
gulp.Eslint('eslint', `${config.paths.src.js}/**/*.js`, `${config.paths.src.js}/vendor/**/*`, '.eslintrc');

// Lint Scss
gulp.Scsslint('scsslint', `${config.paths.src.sass}/**/*.scss`, `${config.paths.src.sass}/vendor/**/*.scss`, '.scss-lint.yml');

// Clean Dist Folder
gulp.Clean('clean', [`${config.paths.dist.css}/**/*`, `${config.paths.dist.js}/**/*`, `${config.paths.src.scss}/vendor/*`, `${config.paths.dist.fonts}`]);

// Default Task
gulp.Default(['copy', 'scsslint', 'scss', 'browserify']);

// Watch Task
gulp.Watch(['copy'], [
  { path: `${config.paths.src.js}/**/*.js`, tasks: ['eslint', 'browserify'] },
  { path: `${config.paths.src.scss}/**/*.scss`, tasks: ['scsslint', 'scss'] }
]);
