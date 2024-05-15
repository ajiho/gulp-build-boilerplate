import {series} from "gulp";
import css from './build/tasks/css.mjs'
import csslint from './build/tasks/csslint.mjs'
import cssmin from './build/tasks/cssmin.mjs'
import cssfix from './build/tasks/cssfix.mjs'
import img from './build/tasks/img.mjs'
import libcopy from './build/tasks/libcopy.mjs'
import serve from './build/tasks/serve.mjs'
import jsbuild from './build/tasks/jsbuild.mjs'
import clean from './build/tasks/clean.mjs'
import {jslint, fix as jsfix} from './build/tasks/jslint.mjs'


//series是按顺序执行
const style = series(css, cssmin);


export {
    style,
    csslint,
    cssfix,
    img,
    libcopy,
    serve,
    jsbuild,
    clean,
    jslint,
    jsfix
}
