import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? '/mik-myp.github.io/' // 替换为你的仓库名
      : '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          antd: ['antd'],
          'antd-icons': ['@ant-design/icons'],
          markdown: ['react-markdown', 'remark-gfm'],
          'syntax-highlighter': ['react-syntax-highlighter'],
          vendor: ['@ant-design/x', 'lodash', 'dayjs']
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
