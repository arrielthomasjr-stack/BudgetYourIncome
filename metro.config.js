const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add path alias resolution for @/ -> src/shared/
config.resolver.extraNodeModules = {
  '@': path.resolve(__dirname, 'src/shared'),
};

// Watch the src directory
config.watchFolders = [path.resolve(__dirname, 'src')];

module.exports = config;
