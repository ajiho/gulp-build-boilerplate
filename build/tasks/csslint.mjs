import {src} from "gulp";
import gulpStylelint from "@ronilaukkarinen/gulp-stylelint";


const csslint = () => {

  return src('src/scss/**/*.scss')
    .pipe(gulpStylelint({
      //打印错误堆栈跟踪
      debug: false,
      //报错后是否直接终止程序
      failAfterError: true,
      //报错类型和格式处理
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
}

export default csslint;
