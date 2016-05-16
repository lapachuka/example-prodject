(function () {
    'use strict';

    angular.module('app')
        .config(config);

    function config($mdThemingProvider, $mdDateLocaleProvider) {

        // Can change week display to start on Monday.
        $mdDateLocaleProvider.firstDayOfWeek = 1;
        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('DD/MM/YYYY');
        };

        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '500'
            })
            .accentPalette('light-green', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            });
    }

})();