const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 增强代码压缩
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
// 清除console
module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    css: {
        requireModuleExtension: true
    },
    chainWebpack: config => {
        // 设置别名
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('@assets', path.join(__dirname, 'src/assets'))
            .set('@common', path.join(__dirname, 'src/common'))
            .set('@config', path.join(__dirname, 'src/config'))
            .set('@components', path.join(__dirname, 'src/components'))
            .set('@views', path.join(__dirname, 'src/views'));
    },
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'development' ? 'source-map' : void 0,
        optimization: {
            minimizer: [
                // 清除console
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: false,
                            //移除console
                            pure_funcs: ['console.log']
                        }
                    }
                })
            ]
        },
        plugins: []
    },
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false
    },
    // 第三方插件配置
    pluginOptions: {}
};
