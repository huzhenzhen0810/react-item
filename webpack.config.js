const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口
    // 出口
    // 加载器
    // 插件
    module:{
        rules:[
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : {
                    loader: "babel-loader"
                }
            },
            {
              test   : /\.(png|jpg|gif|svg)$/,
              loader : 'file-loader',
              options: {
                name: '[name].[ext]?[hash]'
              }
            },
            {
                test: /\.html$/,
                use : [{
                  loader : 'html-loader',
                  options: {
                    minimize: true
                  }
                }]
            },
            {
                test: /\.css$/,
                use : [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename     : "[name].css",
            chunkFilename: "[id].css"
          })
      ]
}