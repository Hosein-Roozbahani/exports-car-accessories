import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
//حسین جان فیکس شد
  base: './',
  plugins: [
    tailwindcss(),
  ],
})