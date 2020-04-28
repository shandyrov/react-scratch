const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/Index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    //publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        loader: "file-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          modules: true,
          name: "[path][name].[ext]",
        },
      },
      {
        type: "javascript/auto",
        test: /\.(json)/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name].[ext]" },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      favicon: "public/favicon.ico",
      template: "src/index.html",
    }),
  ],
};
