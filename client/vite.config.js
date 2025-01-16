import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target:'http://localhost:3000',
        secure: false,
  },
},
  },
  plugins: [react(), tailwindcss, autoprefixer],
  
});
