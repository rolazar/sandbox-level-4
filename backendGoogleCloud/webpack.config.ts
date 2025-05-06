import { Configuration } from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)/, // Compile these files with babel-loader
        exclude: /.(json)/, // Don't combile json files with babel-loader
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"], // Automatically inserts file extensions in import statements
  },
  target: "node",
  externals: ["@xenova/transformers"], // Don't bundle these packages.
  externalsType: "commonjs-module", // Tells Webpack to use the module syntax to import external packages/modules.
} as Configuration;
