const path = require('path');

const devConfig = {
    entry: './main.ts',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'main.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          } 
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            esModule: true
          }
        }
      ]
    },
    devtool: 'eval'
}

module.exports = devConfig;