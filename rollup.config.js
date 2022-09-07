// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import fs from 'fs'

export default {
    input: ['lib.js'],
    output: {
        file: 'out/lib.js',
        format: 'es',
        sourcemap: true,
        globals: {}
    },
    plugins: [
        commonjs({}),
        nodePolyfills(),
        resolve({
            browser: true,
            preferBuiltins: false,
            dedupe: ['readable-stream']
        }),
        {
            buildEnd() {
                fs.copyFileSync(new URL('node_modules/music-metadata-browser/lib/index.d.ts', import.meta.url), new URL('index.d.ts', import.meta.url))
            }
        },
    ],
    external: []
}