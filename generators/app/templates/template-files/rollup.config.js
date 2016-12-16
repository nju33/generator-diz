const nodeResolver = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const json = require('rollup-plugin-json');

const nodeEnv = process.env.NODE_ENV || 'development';

export default function (moduleName = 'module') {
  return {
    moduleName,
    format: 'iife',
    plugins: [
      nodeResolver({jsnext: true}),
      babel({include: 'lib/**/*.js'}),
      replace({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv)
      }),
      json({include: 'lib/**/*.json'}),
    ]
  };
}
