import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@hooks': path.resolve(__dirname, './hooks'),
      '@views': path.resolve(__dirname, './views'),
      '@context': path.resolve(__dirname, './context'),
      '@utils': path.resolve(__dirname, './utils'),
    }
  },
  plugins: [react()]
});
