import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // GitHub Pages용 base 설정 추가
  base: '/prototype/', // 저장소 이름으로 설정
});
