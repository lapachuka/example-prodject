(function () {
    'use strict';

    angular
        .module('auth')
        .config(authConfig);

    /* @ngInject */
    function authConfig($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                resolve: {
                    userService: 'userService'
                },
                templateUrl: "../public/app/layouts/auth/auth.tpl.html"
            });
    }

})();

