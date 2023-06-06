const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        contact: resolve(__dirname, 'src/contact.html'),
        main: resolve(__dirname, 'src/index.html'),
        topics: resolve(__dirname, 'src/topics.html'),
        topic: resolve(__dirname, 'src/topic.html')
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}