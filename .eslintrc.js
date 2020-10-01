module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  "extends": [
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
};
