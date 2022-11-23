module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['.js', '.jsx'],
      rules: {
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
};
