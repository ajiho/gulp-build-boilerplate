import {dest, src} from "gulp";
import cleanCss from '@aptuitiv/gulp-clean-css'
import rename from "gulp-rename";
import sourcemaps from 'gulp-sourcemaps'


const cssmin = () => {

  return src('dist/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))

}

export default cssmin;
