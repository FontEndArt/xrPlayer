import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import clear from 'rollup-plugin-clear';
import { uglify } from 'rollup-plugin-uglify'; // 压缩包
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

const babelConfig = {
    umd: {
        presets: [
            ['@babel/env', {
                modules: false,
                targets: {
                    "chrome": "46",
                    "ie": "10"
                    // browsers: ['last 2 versions', 'not ie <= 8'],
                },
            }],
        ],
        exclude: 'node_modules/**',
        plugins: [
            "array-includes",
            'lodash',
        ],
        externalHelpers: true,
        runtimeHelpers: true,
        babelrc: false,
    }
};

const env = process.env.NODE_ENV.trim();

const isdev = (env == "development");


const config = [
    {
        input: 'src/index.js',
        // external: ['lodash'],
        output: {
            name: "xrPlayer",
            file: isdev ? pkg.browser : `./dist/xrplayer.min.js`,
            format: 'umd',
            sourcemap: isdev ? true : false
        },
        watch: {
            exclude: 'node_modules/**'
        },
        plugins: [
            babel(babelConfig['umd']),
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
    }
];


if (env === 'production') {
    config.map(
        item => item.plugins.unshift(
            copy({
                targets: [
                    // { src: 'public/*', dest: 'dist/' },
                    { src: ['public/player.css', 'public/fonts/*'], dest: 'dist/' },
                    // { src: 'assets/images/**/*', dest: 'dist/public/images' }
                ]
            }),
            clear({
                // required, point out which directories should be clear.
                targets: ['dist'],
                // optional, whether clear the directores when rollup recompile on --watch mode.
                // watch: true, // default: false
            }),
            uglify({
                compress: {
                    // pure_getters: true,
                    // unsafe: true,
                    // unsafe_comps: true,
                },
                output: {
                    // comments: "all",
                }
            })
        )
    )
} else {
    config.push({
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
        watch: {
            exclude: 'node_modules/**'
        },
        plugins: [
        ]
    })
}

export default config;