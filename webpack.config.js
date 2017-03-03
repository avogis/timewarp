/* eslint-disable */
var path = require('path');

module.exports = {
    entry: './app/root.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
              test: /\.js$/,
              loaders: ['babel-loader'],
              exclude: /node_modules/,
              include: path.join(__dirname, 'app')
        }]
    }
};
