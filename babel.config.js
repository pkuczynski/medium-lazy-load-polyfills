module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: true,
        modules: false,
        useBuiltIns: 'usage',
        shippedProposals: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
}
