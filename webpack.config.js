/* eslint-disable */
var path = require('path');

module.exports = {
    entry: './app/root.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'app'),
        },{
            test: /\.css?$/,
            loaders: [
                'style-loader','css-loader'
            ],
            include: path.join(__dirname, 'app')
        }
        ]
    },
};
