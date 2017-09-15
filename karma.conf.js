// Karma configuration
// Generated on Fri Sep 15 2017 10:03:24 GMT-0700 (Pacific Daylight Time)

/module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],

    browserify: {
      debug: true,
      transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
    },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
