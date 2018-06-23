const autoprefixer = require('autoprefixer');


module.exports = {
  plugins: [
    // require('postcss-icss-values')(),
    autoprefixer({ browsers: ['last 2 versions', 'ios >= 7', 'android >= 4'] }),
    require('postcss-modules-values')(),
    // require('postcss-px2rem')({ remUnit: 75 }),
  ]
};