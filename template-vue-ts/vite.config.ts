import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    // cssCodeSplit: false // false整个项目中的所有 CSS 将被提取到一个 CSS 文件中
  }
})
