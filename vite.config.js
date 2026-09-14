import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/exports-car-accessories/', // این خط حیاتی‌ترین بخش است
  plugins: [
    tailwindcss(),
  ],
})