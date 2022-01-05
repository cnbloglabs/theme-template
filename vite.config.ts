import { defineConfig } from 'vite'
import { injectHtml } from 'vite-plugin-html'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      formats: ['iife'],
      entry: './src/index.js',
      name: 'theme',
      fileName: 'index',
    },
  },
  plugins: [
    {
      ...injectHtml({
        injectData: {
          injectScript: `<script type="module" src="../../src/index.js"></script>`,
        },
      }),
      apply: 'serve',
    },
  ],
})
