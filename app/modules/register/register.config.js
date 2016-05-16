;(function() {
    'use strict';

    angular
        .module('register')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('register', {
                url: "/register",
                parent: "auth",
                templateUrl: "/public/app/modules/register/register.tpl.html",
                controller: "registerController as regCtrl"
            });
    }
})();