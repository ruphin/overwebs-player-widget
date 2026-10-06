import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/overwebs-player-widget.js',
      formats: ['es'],
      fileName: () => 'overwebs-player-widget.js'
    },
    rollupOptions: {
      // Dependencies are resolved by the consumer
      external: [/^gluonjs(\/.*)?$/, /^overwebs-fonts(\/.*)?$/]
    }
  }
});
