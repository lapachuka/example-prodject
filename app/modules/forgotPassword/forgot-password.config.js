;(function() {
    'use strict';

   angular
        .module('forgotPassword')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('forgot', {
                url: "/forgot-password",
                parent: 'auth',
                templateUrl: "../public/app/modules/forgotPassword/forgot-password.tpl.html",
                controller: "ForgotController as forgotCtrl"
        });
    }
})();