import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  publicDir:  resolve(__dirname, 'public'),
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, 'index.html'),
        roboticArm: resolve(__dirname, root, 'roboticArm/index.html'),
        legoProstheticHand: resolve(__dirname, root, 'legoProstheticHand/index.html'),
        larvaIdentifier: resolve(__dirname, root, 'larvaIdentifier/index.html'),
        projects: resolve(__dirname, root, 'projects/index.html'),
        contact: resolve(__dirname, root, 'contact/index.html')
      }
    }
  }
})