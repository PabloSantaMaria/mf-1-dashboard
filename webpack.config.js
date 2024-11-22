const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-latest',

  // remotes: {
  //   cppArandano: "http://localhost:4200/remoteEntry.js", // Update URL as necessary
  // },

  exposes: {
    './routes': './src/app/app.routes.ts',
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: {
    '@angular/core': { singleton: false, strictVersion: false },
    '@angular/common': { singleton: false, strictVersion: false },
    '@angular/router': { singleton: false, strictVersion: false },
    '@angular/platform-browser': { singleton: false, strictVersion: false },
    '@angular/animations': { singleton: false, strictVersion: false },
    'ng-apexcharts': { singleton: false, strictVersion: false },
    apexcharts: { singleton: false, strictVersion: false },
    rxjs: { singleton: false, strictVersion: false },

    // '@angular/core': { singleton: false, strictVersion: false, requiredVersion: '^14.3.0' },
    // '@angular/common': { singleton: false, strictVersion: false, requiredVersion: '^14.3.0' },
    // '@angular/router': { singleton: false, strictVersion: false, requiredVersion: '^14.3.0' },
    // '@angular/http': { singleton: false, strictVersion: false },
    // 'ng-apexcharts': { singleton: false, strictVersion: false },
    // apexcharts: { singleton: false, strictVersion: false },
    // rxjs: { singleton: false, strictVersion: false }
  }

});
