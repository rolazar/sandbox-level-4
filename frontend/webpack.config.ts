import { Configuration } from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|mp4)/,
        type: "asset/resource",
      },
    ],
  },
  // watch: true, // Not needed for Webpack dev server
  // watchOptions: { aggregateTimeout: 1000 }, // Not needed because Webpack dev server doesn't produce build errors like Live Server
  // mode: "production", // Disables the debugger. Compresses the code so file size is smaller.
  mode: "development", // Enable the debugger
  devtool: "source-map", // Allows the debugger to show us the original code instead of the compressed code
  //Webpack does not process .jsx files by default
  //Let Webpack look for .jsx files when file extensions are not specified in import statements
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    historyApiFallback: true, //Provides support for SPA's by loading index.html on 404 errors.
    // open: true, //Automatically open a browser tab when starting webpack dev server
  },
} as Configuration;
