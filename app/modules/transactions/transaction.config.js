(function () {
    'use strict';

    angular
        .module('transaction')
        .config(transactionRoute);

    /* @ngInject */
    function transactionRoute($stateProvider) {
        $stateProvider
            .state('transactions', {
                parent: 'page',
                url: "/transactions/{type}",
                templateUrl: "../public/app/modules/transactions/views/list.tpl.html",
                controller: "transactionController as tCtrl"
            })
    }
})();


