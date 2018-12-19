const withCSS = require('@zeit/next-css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')





module.exports = {
  webpack: function (config) {
      config.plugins = config.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
      config.plugins.push( 
      new UglifyJsPlugin({
        uglifyOptions: {
        exclude: /react\.js/,
        parallel: true,
        cache: true,
        sourceMap: false,
          compress: {
            arrows: false,
            booleans: false,
            cascade: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            if_return: false,
            inline: false,
            join_vars: false,
            keep_infinity: true,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            sequences: false,
            side_effects: false,
            switches: false,
            top_retain: false,
            toplevel: false,
            typeofs: false,
            unused: false,

            // Switch off all types of compression except those needed to convince
            // react-devtools that we're using a production build
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: true,
        },
      })
      )
    return config
  }
}








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
