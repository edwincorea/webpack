const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"), //has to be an absolute path
        filename: "bundle.js",
        publicPath: "build/"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: "css-loader"                    
                }),
                test: /\.css$/
            },
            {
                use: [
                    {
                        loader: "url-loader",
                        options: {limit: 40000}
                    },
                    "image-webpack-loader"],
                test: /\.(jpe?g|png|gif|svg)$/,
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]    
};

module.exports = config;