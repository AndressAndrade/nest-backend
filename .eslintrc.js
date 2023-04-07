module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.test.ts', '*.spec.ts', '*.factory.ts', 'test/**'], // Your TypeScript files extension
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.js'],
};
