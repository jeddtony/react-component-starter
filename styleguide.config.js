const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  title: "React Sample Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "sample-component-library": path.resolve(__dirname, "src")
  }
};
