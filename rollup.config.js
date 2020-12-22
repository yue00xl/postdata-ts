
import path from 'path'
import babel from 'rollup-plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from "rollup-plugin-uglify"

const extensions = ['.js','.ts']

const resolve = function(...args){
    return path.resolve(__dirname,...args)
}

module.exports = {
    input: resolve('./src/main.ts'),
    output:{
        file:resolve('./',pkg.main),
        format:'umd',
        name:'postdata'
    },
    plugins:[
        nodeResolve({
            extensions,
            modulesOnly:true
        }),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            extensions
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        uglify()
    ]

}