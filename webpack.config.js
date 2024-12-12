const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: './src',
        watchFiles: ['./src/home.html', './src/menu.html'],
        open: true,
        hot: true,
        port: 8080
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/home.html',
        
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: './src/menu.html',
        })
    ],

    module: {
        rules: [
           {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
           },

           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
           },
        ],
    },
};