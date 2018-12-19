const withCSS = require('@zeit/next-css');

/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  cssModules: false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "./",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});


// const withSass = require('@zeit/next-sass')
// module.exports = withSass();

// const withLess = require('@zeit/next-less')
// module.exports = withLess();




/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withCSS({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
