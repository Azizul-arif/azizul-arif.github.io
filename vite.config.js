import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative assets work at both username.github.io and username.github.io/repo/.
export default defineConfig({ plugins: [react()], base: './' });
