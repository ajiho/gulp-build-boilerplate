import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminGifsicle from 'imagemin-gifsicle';

const img = async () => {
  const files = await imagemin(['src/img/*'], {
    destination: 'dist/img',
    plugins: [
      imageminGifsicle({interlaced: true}),
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminSvgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]
  });
  console.log(files);
}

export default img;
