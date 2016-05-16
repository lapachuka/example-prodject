(function () {
    'use strict';

    angular
        .module('line-chart')
        .factory('LineChart', LineChart);

    /* @ngInject */
    function LineChart($http) {
        var chartData = {
                data: [[0], [0]],
                series: [],
                labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                colours: [
                    {
                        strokeColor: ["#64DD17"],
                        fillColor: 'rgba(220,220,220,0.2)',
                        pointColor: ["#64DD17"]
                    },
                    {
                        strokeColor: ["#F74133"],
                        fillColor: 'rgba(220,220,220,0.2)',
                        pointColor: ["#F74133"]
                    }
                ]
            },
            currentCurrency,
            currentYear;

        return {
            getChartData: getChartData
        };

        function getChartData(data) {

            setDefaultValues();

            getData(data, 'income');
            getData(data, 'expenses');

            return chartData;
        }

        function setDefaultValues() {
            deleteAllElement(chartData.series);
            deleteAllElement(chartData.data[0]);
            deleteAllElement(chartData.data[1]);
            fillDataElement();
        }

        function fillDataElement() {
            var monthNumber = 12;

            for (var i = 0; i < monthNumber; i++) {
                chartData.data[0].push(0);
                chartData.data[1].push(0);
            }
        }

        function getData(data, type) {
            var now = new Date();

            currentYear = data && data.year || now.getFullYear();
            currentCurrency = data && data.currency ||  currentCurrency;

            $http.get('/statistics/by-year?year=' + currentYear + '&type=' + type + "&currency=" + currentCurrency)
                .then(function (chartDataResult) {
                    setChartDataResult(type, chartDataResult);
                });

        }

        function setChartDataResult(type, resultList) {
            var index = type === 'income' ? 0 : 1,
                series = type === 'income' ? 'Приходи' : 'Витрати';

            chartData.series.push(series);
            angular.forEach(resultList.data, function (dataItem) {
                chartData.data[index][dataItem.month - 1] = Math.abs(dataItem.monthly_sum);
            });

        }

        function deleteAllElement(currentArray) {
            currentArray && currentArray.splice(0, currentArray.length);
        }

    }

})();

