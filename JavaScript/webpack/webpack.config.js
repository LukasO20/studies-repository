const dev_mode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPuglin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

module.exports = {
    mode: dev_mode ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 5500,
        hot: true,
        open: true
    },
    optimization: {
        minimizer: [
            new TerserPuglin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    }
                },
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules:[{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona a CSS na DOM injetando <style>
                'css-loader', // interpreter - @import, url()...
                'sass-loader' 
            ]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: ['file-loader']
        }]
    }
}