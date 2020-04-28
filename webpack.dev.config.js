const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
});
