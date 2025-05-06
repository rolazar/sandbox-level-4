export default {
  presets: [
    "@babel/preset-env", //Converts the new import/export syntax to the old import/export syntax
    "@babel/preset-react", //Converts JSX to JavaScript
    "@babel/preset-typescript", //Removes TypeScript code and makes the file look like JavaScript
  ],
};
