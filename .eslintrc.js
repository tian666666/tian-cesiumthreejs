/*
 * @Author: TYW
 * @Date: 2022-04-10 16:28:42
 * @LastEditTime: 2022-04-10 17:51:37
 * @LastEditors: TYW
 * @Description: 
 */

const production = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': production ? 'warn' : 'off',
    'no-debugger': production ? 'warn' : 'off',
    "no-unused-vars": production ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-undef': 0,
    'no-trailing-spaces': 0
  }
}
