(function () {
    'use strict';

    angular.module('dashboard')
        .config(dashboardConfig)

    /* @ngInject */
    function dashboardConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                parent: 'page',
                url: "/",
                templateUrl: "../public/app/modules/dashboard/dashboard.html",
                controller: "dashboardController as dashboardCtrl"
            });
    }
})();