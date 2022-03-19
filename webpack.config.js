'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/, // тут ми находимо всі js файли
        exclude: /(node_modules|bower_components)/, // тут ми вказуэмо якы модулі виключаємо
        use: {
          loader: 'babel-loader', // ця технологія зв'язує webpack з babel і щоб він працювава установлюємо цей npm (npm i --save-dev babel-loader)
          options: {
            presets: [['@babel/preset-env', { // найпоширеніший пресет який підходить майже під всі проекти
                debug: true,
                corejs: 3, // core-js це бібліотека для підключення всіх можливих поліфілів (npm i --save-dev core-js)
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
