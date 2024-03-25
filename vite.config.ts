import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const dirName = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin']
            }
        })
    ],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(dirName, './src') },
        ],
    },
})
