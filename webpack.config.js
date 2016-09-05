var path = require('path');

var config = {
    entry: './js/main.js',

    output: {
        path:'./js',
        filename: 'index.js',
    },

    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};

module.exports = config;
