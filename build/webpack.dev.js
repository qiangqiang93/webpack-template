const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 8080,
        open: true
    }
})