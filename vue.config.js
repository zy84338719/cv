const WebpackAliyunOssPlugin = require('./oss');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
    outputDir: 'docs',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                enable: false
            })
        ]
    },

    publicPath: '/',
    configureWebpack: config => {
        config.plugins.push(new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        }))
    }
};
