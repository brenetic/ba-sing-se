module.exports = {
  mode: 'universal',
  head: {
    title: 'Ba Sing Se',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ba Sing Se' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '@/static/favicon.ico' }
    ]
  },
  css: ['normalize.css', '@/assets/css/base.css'],
  srcDir: 'client/',
  render: {
    compressor: false
  }
}
