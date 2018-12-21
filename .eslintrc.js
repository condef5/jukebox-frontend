module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'max-len': ['error', 100],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/prop-types': 0,
    'class-methods-use-this': 0,
    'import/no-named-as-default': 0,
    allowShortCircuit: true,
    allowTernary: true,
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: ['constructor', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
