var webpack = require('webpack');
module.exports = {
    devtool: "#inline-source-map",
    entry: {
        myblog: "./public/javascripts/myblog/entry.js",
        webapp: "./public/javascripts/webapp/entry.js"
    },
    output: {
        path: __dirname,
        filename: "./public/javascripts/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};