(function () {
    'use strict';

    angular
        .module('accounts')
        .config(accountsRoute);

    /* @ngInject */
    function accountsRoute($stateProvider) {
        $stateProvider
            .state('accounts', {
                parent: 'page',
                url: '/accounts',
                templateUrl: '../public/app/modules/options/accounts/list.tpl.html',
                controller: 'accountsController as aCtrl'
            });
    }
})();
