export let paths = [
  {
    form: 'node_modules/bootstrap',
    to: 'dist/lib/bootstrap',
    del: [
      'dist/lib/bootstrap/*',
      '!dist/lib/bootstrap/dist',
    ]
  },
  {
    form: 'node_modules/bootstrap-icons',
    to: 'dist/lib/bootstrap-icons',
    del: [
      'dist/lib/bootstrap-icons/*',
      '!dist/lib/bootstrap-icons/font',
      'dist/lib/bootstrap-icons/font/bootstrap-icons.scss',
    ]
  }
]

