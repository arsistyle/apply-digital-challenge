import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@hooks': path.resolve(__dirname, './hooks')
    }
  },
  plugins: [react()]
});
