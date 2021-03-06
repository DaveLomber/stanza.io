import resolve from 'rollup-plugin-node-resolve';

import baseconfig from './rollup.config';

export default {
    ...baseconfig,
    output: {
        file: 'dist/es/index-browser.module.js',
        format: 'es'
    },
    plugins: [
        resolve({
            browser: true
        })
    ]
};
