const execa = require('execa')

const env = 'development';
execa(
    'rollup',
    [
        '-wc',
        '--environment',
        [
            `NODE_ENV:${env}`,
        ]
    ],
    {
        stdio: 'inherit'
    }
)