/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    target: 'esnext',
  },
  define: {
    global: 'window',
    'process.env': process.env,
  },
  plugins: [solidPlugin(), tsconfigPaths()],
})
