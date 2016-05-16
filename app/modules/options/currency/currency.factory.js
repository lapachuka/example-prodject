(function () {
    'use strict';

    angular
        .module('currency')
        .factory('Currency', Currency);

    /* @ngInject */
    function Currency($http, $q) {
        var currencyList = [],
            currencyMyList = [];

        return {
            getList: getList,
            getMyList: getMyList
        };

        ////////////////

        function getList() {
            var deffered = $q.defer();

            if (currencyList.length) {
                deffered.resolve(currencyList);
            } else {
                $http.get('currency')
                    .then(function (response) {
                        fillCurrencyList(response.data, currencyList);
                        deffered.resolve(currencyList);
                    }, function(){
                        deffered.reject(response.data);
                    });
            }

            return deffered.promise;
        }

        function getMyList() {
            var deffered = $q.defer();

            if (currencyMyList.length) {
                deffered.resolve(currencyMyList);
            } else {
                $http.get('currency/my')
                    .then(function (response) {
                        fillCurrencyList(response.data, currencyMyList);
                        deffered.resolve(currencyMyList);
                    }, function(){
                        deffered.reject(response.data);
                    });
            }

            return deffered.promise;
        }

        function fillCurrencyList(response, currencyList){
            clearCurrencyList(currencyList);
            response.data.forEach(function(item){
               currencyList.push(item);
            })
        }

        function clearCurrencyList(currencyList){
            currencyList.splice(0, currencyList.length);
        }
    }

})();