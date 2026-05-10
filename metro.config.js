const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const fs = require('fs');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const projectRoot = __dirname;
const realProjectRoot = fs.realpathSync(projectRoot);
const config = {
  watchFolders: [projectRoot, realProjectRoot, path.resolve(projectRoot, 'node_modules')],
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
