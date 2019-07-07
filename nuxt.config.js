module.exports = {
  mode: 'universal',
  head: {
    title: 'Ba Sing Se',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ba Sing Se' }
    ]
  },
  srcDir: 'client/',
  render: {
    compressor: false
  }
}
