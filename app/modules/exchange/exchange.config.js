;(function() {
    'use strict';

    angular
        .module('exchange')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('exchange', {
                url: "/exchange",
                parent: "page",
                templateUrl: "/public/app/modules/exchange/exchange.tpl.html",
                controller: "exchangeController as exCtrl"
            });
    }
})();