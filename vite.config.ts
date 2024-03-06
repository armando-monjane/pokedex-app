import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@components': resolve(root, 'components'),
      '@hooks': resolve(root, 'hooks'),
      '@services': resolve(root, 'services'),
      '@redux': resolve(root, 'redux'),
      '@theme': resolve(root, 'theme'),
      '@utils': resolve(root, 'utils'),
    }
  }
})
