// TypeScript declaration file
// Declaration files inform TypeScript of data types that were not defined in the source code
// Filename must end with .d.ts
// Inform TypeScript that .jpg files and other assets can be imported

// Add asset extension here:
declare module "*.jpg";
declare module "*.png";
declare module "*.mp4";

// Add functions and objects from external scripts here:
declare const bootstrap: any;
declare const imageMapResize: any;
