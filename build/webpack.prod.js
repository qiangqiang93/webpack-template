const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new UglifyJSPlugin()
    ]
});