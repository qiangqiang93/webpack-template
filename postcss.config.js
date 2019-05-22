module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {},
        'autoprefixer': {
            browsers: ['last 7 iOS versions', 'last 3 versions', '> 1%']
        }
    }
}