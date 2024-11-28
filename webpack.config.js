const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-latest',

  exposes: {
    './routes': './src/app/app.routes.ts',
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: false },
    '@angular/common': { singleton: true, strictVersion: false },
    '@angular/router': { singleton: true, strictVersion: false },
    '@angular/forms': { singleton: false, strictVersion: false },
    autoprefixer: { singleton: true, strictVersion: false },
    postcss: { singleton: true, strictVersion: false },
    tailwindcss: { singleton: true, strictVersion: false },
    'shared': { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    '@angular/common/http': { singleton: true, strictVersion: false },
  } 

});
