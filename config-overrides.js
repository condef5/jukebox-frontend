const { injectBabelPlugin } = require('react-app-rewired');

/* eslint no-unused-vars: ["error", { "args": "none" }] */
module.exports = function override(config, _any) {
  return injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );
};
