(function () {
    'use strict';

    angular
        .module('line-chart')
        .controller('lineChartController', lineChartController);


    /* @ngInject */
    function lineChartController(LineChart, Currency, CONSTANT, $scope) {
        var self = this,
            now = new Date();

        self.title = 'Лінійний графік залежностей';
        self.getData = getData;
        self.years = CONSTANT.years;

        activate();

        ////////////////

        $scope.$on('transactionChanged', function() {
            getData();
        });

        function activate() {

            self.chartData = {};
            self.currentYear = now.getFullYear();

            setFullCurrencyList();
        }

        function setFullCurrencyList() {
            Currency.getMyList()
                .then(function (currencyList) {
                    if(currencyList.length){
                        self.currencyCategory = currencyList;
                        self.currentCurrency = self.currencyCategory[self.currencyCategory.length - 1].id;
                        getData();
                    }
                });
        }

        function getData() {
            var params = {
                'year': self.currentYear,
                'currency': self.currentCurrency
            };

            self.chartData = LineChart.getChartData(params);
        }
    }

})();

