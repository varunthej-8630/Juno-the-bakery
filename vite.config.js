import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'menu.html',
        about: 'about.html',
        blog: 'blog.html',
        article: 'article.html'
      }
    }
  }
});
