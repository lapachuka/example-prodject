module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.6/angular-animate.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js',
            //!!!'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular-mocks.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.8/angular-filter.min.js',
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-aria.min.js',
            'http://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.min.js',
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-messages.min.jss',
            'assets/bower_components/angular-mocks/angular-mocks.js',
            'dist/**/*.js',
            'app/**/*.t.js'
        ],

        autoWatch: false,

        frameworks: ['jasmine'],


        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};