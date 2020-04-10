// import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify'; // 压缩包

import pkg from './package.json';

// const babelConfig = {
//     umd: {
//         presets: [
//             ['@babel/env', {
//                 modules: false,
//                 targets: {
//                     browsers: ['last 2 versions', 'not ie <= 8'],
//                 },
//             }],
//         ],
//         exclude: 'node_modules/**',
//         plugins: [
//             '@babel/plugin-syntax-dynamic-import',
//             'lodash',
//         ],
//         externalHelpers: true,
//         runtimeHelpers: true,
//         babelrc: false,
//     }
// };

const env = process.env.NODE_ENV;


const config = [
    {
        input: 'src/index.js',
        // external: ['lodash'],
        output: {
            name: "xrPlayer",
            file: pkg.browser,
            format: 'umd',
            sourcemap: true
        },
        plugins: [
            // babel(babelConfig['umd']),
            resolve({
                jsnext: true,
                main: true,
                browser: true,
                // 将自定义选项传递给解析插件
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            }),
            replace({
              'process.env.NODE_ENV': JSON.stringify(env)
            }),
            commonjs(),
        ]
    },
    {
        input: 'src/index.js',
        // external: ['lodash'],
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                // sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                // sourcemap: true
            },
        ],
        plugins: [
        ]
    }
];


if (env === 'production') {
    config.map(
        item => item.plugins.push(
            uglify({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false
                }
            })
        )
    )
}
export default config;