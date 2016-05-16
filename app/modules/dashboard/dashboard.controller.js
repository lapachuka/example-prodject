(function () {
    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', dashboardController);

    /* @ngInject */
    function dashboardController(Dashboard, $scope) {
        var self = this;

        self.charts = [];
        self.currencyColor = {
            'UAH': 'b-yellow',
            'USD': 'b-green',
            'HUF': 'b-blue',
            'RUB': 'b-grey',
            'EUR': 'b-orange'
        };

        getAccounts();

        $scope.$on('transactionChanged', function() {
            getAccounts();
        });
        
        function getAccounts() {
            Dashboard.getCharts()
                .then(function (accounts) {
                    self.accounts = accounts;
                });
        }


    }

})();


