module.exports = {
  linters: {
    '**/*.+(js|jsx)': ['eslint --fix', 'prettier --write', 'git add'],
  },
};