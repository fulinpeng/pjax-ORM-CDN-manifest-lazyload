/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:44:44 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-13 12:24:06
 */

const webpack = require("webpack");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Manifest = require('webpack-manifest');
const pkg = require('./package.json');

const domain = "http://localhost:3000/";
const ISDEV = process.env.NODE_ENV == "prod" ? false : true;
const path = src => require("path").join(__dirname, src);

const config = {
    entry: {
        main: [path("./src/public/script/main.js")],
        tag: [
            path("./src/public/script/thumb.js"),
            path("./src/public/script/star.js"),
        ],
    },
    output: {
        filename: "public/script/[name]-[hash:5].js",
        path: path("./build/"),
        publicPath: domain,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //   "process.env": {
        //     NODE_ENV: "prod"
        //   }
        // }),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons", // chunk的名字
            filename: "public/script/commons.js" // 文件名
                // minChunks: 3,
        }),
        new HtmlWebpackPlugin({
            filename: "./views/layout.html",
            template: "src/widget/layout.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "./views/index.html",
            template: "src/views/index.js",
            chunks: ["commons", "main", "tag"],
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "./widget/index.html",
            template: "src/widget/index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "./views/star.html",
            template: "src/views/star.js",
            chunks: ["commons", "main", "tag"], // 我觉得这里不应该是 tag 了，应该是 star
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: "./widget/star.html",
            template: "src/widget/star.html", // 这里再次转一次，是因为star.js生成的star.html中依赖了widget/star.html
            inject: false
        }),
        new Manifest({
            // 这里不识别 [name]
            cache: [
                "./public/css/tag-[hash:5].css",
                "./public/css/main-[hash:5].css",
                "./public/script/commons.js",
                "./public/script/main-[hash:5].js",
                "./public/script/tag-[hash:5].js",
            ],
            //Add time in comments.
            timestamp: true,
            // 生成的文件名字，选填
            filename: 'cache.manifest',
            // 设置白名单，即不缓存的文件列表， 注意*星号前面用空格隔开
            network: [
                // 'https://cdn.bootcss.com/ *',
                // 'http://localhost:35729/livereload.js'
                " *"
            ],
            // 注意中间用空格隔开
            // fallback: ['/ /404.html'],
            // manifest 文件中添加注释
            headcomment: pkg.name + " v" + pkg.version,
            // 给 <html> 标签添加manifest 属性，路径是相对于生成的 cache.manifest 文件的
            master: ['./views/layout.html']
        }),
    ]
};

if (!ISDEV) {
    //   config.rules = concat(config.rules, []);
    config.plugins = config.plugins.concat(
        // new UglifyjsWebpackPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    );
    console.log(config.plugins.length);
}
module.exports = config;