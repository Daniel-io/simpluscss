/* ==========================================================================
   #GULPFILE
   ========================================================================== */









   
/**
 *  1. Process & Concatenate stylesheets into one
 *  2. Require postcss to use autoprefixer
 *  3. Minify CSS
 *  4. Live Server
 * 
 */


const { src, dest, parallel, watch } = require('gulp');

const sass = require('gulp-sass');                          /* 1 */
const postcss = require('gulp-postcss');                    /* 2 */
const autoprefixer = require('autoprefixer');               /* 2 */
const cleanCSS = require('gulp-clean-css');                 /* 3 */
const browserSync = require('browser-sync').create()        /* 4 */
const concat = require('gulp-concat');

sass.compiler = require('node-sass');





// Live Server
function server(cb) {
  browserSync.init({
    server: {
      baseDir: 'docs'
    }
  })
  cb();
}






/**
 *  1. Compile sass stylesheets
 *  2. Include needed prefixes 
 *  3. Minify CSS
 *  4. Set destination folder
 * 
 */


// Manage CSS
function css() {
  return src(['src/scss/**/*.scss'])
  .pipe(sass().on('error', sass.logError))                  /* 1 */
  .pipe(postcss([ autoprefixer() ]))                        /* 2 */
  .pipe(cleanCSS({compatibility: 'ie8'}))                   /* 3 */
  .pipe(dest('docs/css'))                                   /* 4 */
  .pipe(browserSync.stream())
}





/**
 *  1. Reference all js files
 *  2. Concat all js files
 *  3. Set destination folder
 * 
 */


// Manage JS
function js() {
  return src(['src/js/**/*.js'])                            /* 1 */
  .pipe(concat('main.js'))                                  /* 2 */
  .pipe(dest('docs/js'))                                    /* 3 */           
  .pipe(browserSync.stream())
}





watch('src/scss/**/*.scss', css ).on('change', browserSync.reload);
watch('docs/*.html').on('change', browserSync.reload)
watch('src/js/**/*.js', js ).on('change', browserSync.reload);





exports.js = js;
exports.css = css;
exports.default = parallel(server, css, js);
