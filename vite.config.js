import includeHtml from 'vite-include-html-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [includeHtml()],
  root: 'src', // Вказуємо, що кореневою директорією є 'src'
  build: {
    outDir: '../dist', // Вказуємо вихідну папку для збірки (поза 'src')
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  },
  base: '/',
});
