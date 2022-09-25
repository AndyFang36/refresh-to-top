import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: "src/main.js",
  output: {
    file: "index.js",
    format: "esm",
  },
  plugins: [resolve(), babel({babelHelpers: "bundled"})],
};
