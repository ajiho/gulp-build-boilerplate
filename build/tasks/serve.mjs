import browserSync from 'browser-sync'

const bs = browserSync.create();

const serve = () => {

  //todo 这里应该再监听源码的变化，然后再刷新服务器的

  bs.init({
    notify: false,
    port: 3001,
    open: true,
    files: 'dist/**',
    server: {
      baseDir: ['dist'],
      routes: {
        '/node_modules': '../node_modules'
      }
    }
  })

}

export default serve;
