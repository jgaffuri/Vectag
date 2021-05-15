// dev
const path = require("path");

const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "vectag.js",
    publicPath: "build/",
    library: "vectag",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "build")
  },
  node: {
    fs: "empty"
  },
  plugins: [new LiveReloadPlugin()],
  watch: true,
  devtool: "inline-source-map"
};
