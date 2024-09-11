const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer/"),
    process: require.resolve("process/browser"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
