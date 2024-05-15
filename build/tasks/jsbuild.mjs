import {rollup} from "rollup";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {babel} from "@rollup/plugin-babel";
import getBanner from "../banner.mjs";


const jsbuild = async () => {

    const plugins = [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            // 用于指定 Babel 在转换 ES6+ 代码时使用的辅助函数的路径
            babelHelpers: 'bundled'
        })
    ]

    let file = 'dist/js/app.js'

    if (process.env.NODE_ENV === 'production') {
        file = file.replace(/\.js$/, '.min.js')
        plugins.push(terser({
            output: {
                comments() {
                    return false
                }
            }
        }))
    }

    const bundle = await rollup({
        input: 'src/js/app.js',
        plugins,
        external: ['jquery'],
    })


    await bundle.write({
        banner: getBanner(),
        file,
        format: 'umd',
        name: 'BootstrapAdmin',
        globals: {
            jquery: 'jQuery'
        },
        sourcemap: true
    });

}

export default jsbuild;
