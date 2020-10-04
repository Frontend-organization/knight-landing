const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const compile = ({ mode }) => {
  return {
    entry: path.join(__dirname, "src", "index.js"),
    module: {
      rules: [
        {
          test: /.css$/,
          loader: [
            MiniCSSExtractPlugin.loader,
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        {
          test: /\.(svg|png|jpg|jpeg|ttf|woff|eot|gif)$/,
          loader: "file-loader",
          options: {
            publicPath: "assets",
            outputPath: "assets",
          },
        },
      ],
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
    mode,
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};

module.exports = compile;
