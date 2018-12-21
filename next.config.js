const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  // eslint-disabled-next-line
  require.extensions['.css'] = file => {};
}

module.exports = withCss();
