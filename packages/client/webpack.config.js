const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `[name].js`,
      chunkFilename: `[name].chunks.js`,
      clean: true,
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: "TEST",
        skipFirstNotification: true,
        alwaysNotify: true,
      }),
    ],
  };
};
