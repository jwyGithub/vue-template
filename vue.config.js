const path = require('path');
// 清除console
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 引入插件
module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'development',
    chainWebpack: config => {
        // 设置别名
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('@assets', path.join(__dirname, 'src/assets'))
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
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        }
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
