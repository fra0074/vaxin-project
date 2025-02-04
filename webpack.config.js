const path = require('path');

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
  
};
