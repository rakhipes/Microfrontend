const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const path = require('path');
module.exports = withModuleFederationPlugin({

  name: 'login',
  exposes: {
    './LoginModule': './src/app/login.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  }
});

