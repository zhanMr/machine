var webpack = require('webpack');
module.exports = {
    devtool: "#inline-source-map",
    entry: {
        blog: "./public/blog/entry.js",
        login: "./public/login/entry.js"
    },
    output: {
        path: __dirname,
        filename: "./public/javascripts/[name]_bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};