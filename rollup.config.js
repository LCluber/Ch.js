import babel from "rollup-plugin-babel";

module.exports = {
  input: "build/es6/ch.js",
  output: {
    name: "Ch",
    file: "build/ch.iife.js",
    format: "iife"
  },
  plugins: [
    babel({
      exclude: "node_modules/**" // only transpile our source code
    })
  ]
};
