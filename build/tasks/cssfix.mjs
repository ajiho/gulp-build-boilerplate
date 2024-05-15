import {dest, src} from "gulp";
import gulpStylelint from "@ronilaukkarinen/gulp-stylelint";


const cssfix = () => {
    return src([
        'src/scss/**/*.scss',
        //除了plugins-override不需要修复
        '!src/scss/plugins-override/*.scss',
    ])
        .pipe(gulpStylelint({
            fix: true,
        }))
        //修复后写入到那个目录
        .pipe(dest('src/scss'));


}

export default cssfix;
