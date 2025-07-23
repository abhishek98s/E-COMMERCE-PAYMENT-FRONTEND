import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eol-last': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'linebreak-style': 0,
      endOfLine: 'auto',
      singleQuote: true,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          endOfLine: 'lf',
        },
      ],
    },
  },
];

export default eslintConfig;
