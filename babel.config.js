module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.svg'],
        alias: {
          '~assets': './src/assets',
          '~components': './src/components',
          '~config': './src/config',
          '~containers': './src/containers',
          '~helpers': './src/helpers',
          '~hooks': './src/hooks',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~services': './src/services',
          '~store': './src/store',
          '~types': './src/types',
          '~utils': './src/utils',
        },
      },
    ],
    ['react-native-reanimated/plugin'], // Reanimated plugin has to be listed last.
  ],
};
