const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const path = require('path');
module.exports = withModuleFederationPlugin({

  name: 'sample',
  exposes: {
    // './Component': './src/app/app.component.ts',
    './SampleModule': './src/app/sample.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  }
});

