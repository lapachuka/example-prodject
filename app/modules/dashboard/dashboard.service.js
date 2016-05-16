(function () {
    'use strict';

    angular
        .module('dashboard')
        .factory('Dashboard', Dashboard);

    /* @ngInject */
    function Dashboard($http, $q) {
        var self = this;

        self.list = [];
        self.accounts = [];

        return {
            getCharts: getCharts
        };

        function getCharts() {
            var deferred = $q.defer();

            $http.get('/accounts/full')
                .then(
                function (response) {
                    addToAccounts(response.data.data);
                    deferred.resolve(self.accounts);
                }, function (errData) {
                    deferred.reject(errData);
                });

            return deferred.promise;
        }

        function addToAccounts(accounts){
            clearArray(self.accounts);
            angular.forEach(accounts, function(account){
                self.accounts.push(account);
            })
        }

        function prepareBarChartsdata(accounts, charts) {
            var i = accounts ? accounts.length : 0,
                chart = {},
                chartData = [];

            clearCharts(charts);

            while (i--) {
                chart = {};
                chart.name = accounts[i].name;
                chart.data = [];
                chart.labels = [];
                angular.forEach(accounts[i].sub_accounts, function (account) {
                    chart.data.push(account.amount);
                    chart.labels.push(account.currency_name);
                });
                chart.series = ['main'];
                charts.push(chart);
            }
        }

        function clearArray(customArray){
            customArray.splice(0, customArray.length);
        }
    }
})();



