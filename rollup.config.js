import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';

const { LERNA_PACKAGE_NAME } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.js');
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, 'dist');
const pkg = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));

const onwarn = (warning, rollupWarn) => {
  const ignoredWarnings = [
    {
      ignoredCode: 'CIRCULAR_DEPENDENCY',
      ignoredPath: 'node_modules/@coreui/react/es/',
    },
  ];

  // only show warning when code and path don't match
  // anything in above list of ignored warnings
  if (
    !ignoredWarnings.some(
      ({ ignoredCode, ignoredPath }) =>
        warning.code === ignoredCode &&
        warning.importer.includes(path.normalize(ignoredPath))
    )
  ) {
    rollupWarn(warning);
  }
};

export default {
  input: INPUT_FILE,
  output: [
    {
      name: LERNA_PACKAGE_NAME,
      file: path.join(PACKAGE_ROOT_PATH, pkg.main),
      format: 'cjs',
    },
    {
      name: LERNA_PACKAGE_NAME,
      file: path.join(PACKAGE_ROOT_PATH, pkg.module),
      format: 'esm',
    },
  ],
  plugins: [
    external(),
    postcss(),
    babel({
      presets: ['@babel/preset-react', '@babel/env'],
      exclude: '../../node_modules/**',
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer(),
  ],
  external: ['react', 'react-dom'],
  inlineDynamicImports: true,
  onwarn,
};
