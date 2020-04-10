const execa = require('execa');

const env = 'production';
execa(
    'rollup',
    [
        '-c',
        '--environment',
        [
            `NODE_ENV:${env}`,
        ]
    ],
    {
        stdio: 'inherit'
    }
)