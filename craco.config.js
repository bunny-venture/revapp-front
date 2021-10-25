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
              '@btn-border-radius-base': '0.5rem',
              '@font-size-base': '14px',
              '@btn-font-weight': 400,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
