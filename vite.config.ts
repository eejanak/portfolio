import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, 'index.html'),
        project1: resolve(__dirname, root, 'project1/index.html'),
        project2: resolve(__dirname, root, 'project2/index.html'),
        project3: resolve(__dirname, root, 'project3/index.html'),
        projects: resolve(__dirname, root, 'projects/index.html'),
        contact: resolve(__dirname, root, 'contact/index.html')
      }
    }
  }
})
