module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:4111',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Pets Gallery',
    },
  }
}