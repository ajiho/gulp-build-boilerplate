import {dest, src} from "gulp";
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cmq from "node-css-mqpacker";
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

//sass
const sass = gulpSass(dartSass);
const postcssPlugins = [
    autoprefixer(), cmq({
        sort: function (a, b) {
            const aMax = a.match(/\d+/)[0];
            const bMax = b.match(/\d+/)[0];
            return bMax - aMax;
        }
    })
];


const css = () => {

    return src('src/scss/**/*.scss')
        .pipe(sourcemaps.init({debug: true}))
        .pipe(sass.sync({
            outputStyle: "expanded"
        }).on('error', sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'))

}

export default css;
