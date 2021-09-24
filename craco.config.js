const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#4338ca',
              '@collapse-header-bg': '#4338ca',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
