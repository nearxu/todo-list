const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {app: path.join(__dirname,'./src/index.js')},
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.css$/,
                use:["vue-style-loader","css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: {
                      attrs: ["img:src"]
                    }
                  }
                ]
            },
            {
                test: /\.less$/,
                use: [ 
                 'style-loader',
                  'css-loader', 
                  'less-loader' 
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  { 
                    loader: 'file-loader', 
                    options: {
                      name: '[path][name]-[hash:8].[ext]',
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./index.html",
        //   chunks: ["app"], // entry中的app入口才会被打包
        }),
        new VueLoaderPlugin()
    ],
}