const default_options = {
  html: {
    add_css_reset_as: 'inline',
  },
  image: {
    embed_size: 1500,
    srcset_min_width: 640,
    external: {
      process: 'off',
      src_include: /^.*$/,
      src_exclude: null,
    },
    compress: true,
    jpeg: {
      options: {
        quality: 80,
        mozjpeg: true,
      },
    },
    png: {
      options: {
        compressionLevel: 9,
        quality: 80,
      },
    },
    webp: {
      options_lossless: {
        effort: 4,
        quality: 77,
        mode: 'lossless',
      },
      options_lossly: {
        effort: 4,
        quality: 77,
        mode: 'lossly',
      },
    },
  },
}

export default default_options
