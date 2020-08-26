const webpack = require('webpack')
const library = '[name]_dll'
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        react: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: "[name]_dll.js",
        publicPath: './',
        library: "[name]_dll"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist/[name]-manifest.json'),
            name: library
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: 8899
        })
    ]
};