import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/exports-car-accessories/', // این خط را دقیقاً با نام مخزن خود اضافه کنید
  plugins: [
    tailwindcss(),
  ],
})