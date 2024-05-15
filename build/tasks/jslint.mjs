import {src} from 'gulp'
import gulpESLintNew from 'gulp-eslint-new'
import header from 'gulp-header'

//eslint公共的配置
const eslintConfig = {
    //如果要使用eslint.config.mjs生效，必须设置成flat
    configType: 'flat',
    //配置文件
    overrideConfigFile: './eslint.config.mjs',
    //当 ESLint 忽略文件时添加结果警告
    warnIgnored: true,
};


const path = 'src/js/*.js';

const jslint = () => {
    return src(path)
        .pipe(gulpESLintNew({
            ...eslintConfig,
            //禁止自动修复
            fix: false
        }))
        .pipe(gulpESLintNew.format())
        //检测到错误后立马退出
        .pipe(gulpESLintNew.failAfterError())
}


const fix = ()=>{
    return src(path)
        .pipe(gulpESLintNew({
            ...eslintConfig,
            //自动修复可修复的lint错误
            fix: true
        }))
        .pipe(gulpESLintNew.fix());
}

export {
    jslint,
    fix
}


