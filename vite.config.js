import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    ,tailwindcss()
  ],
  server: {
    port: 5000, // 👈 پورت دلخواهت
    host: '0.0.0.0', // اختیاری، برای دسترسی از شبکه محلی
  //  proxy: {
  //   '/api': {
  //     target: 'http://localhost:3500',
  //     changeOrigin: true,
  //   },
  // },
  },
  
})
