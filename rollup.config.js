import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';

const config = {
  input: 'src/main.js',
  output: [
    {
      file: 'index.js',
      format: 'esm'
    }
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'react-is': Object.keys(ReactIs),
        'react': Object.keys(React),
        'react-dom': Object.keys(ReactDOM),
        '@apollo/client': ['ApolloProvider', 'ApolloClient', 'HttpLink', 'InMemoryCache', 'useQuery', 'gql'],
        'styled-components': [ 'styled', 'css', 'ThemeProvider' ]
      }
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
};

export default config;
