const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPuglin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const path = require('path')

module.exports = {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? 'source-map' : 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: devMode ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'src'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
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
        new MiniCssExtractPlugin({ filename: 'estilo.css'}),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: 'src/**/*.html', destination: 'build/' },
                        { source: 'src/imgs/**/*', destination: 'build/imgs' }
                    ]
                }
            }
        }),
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