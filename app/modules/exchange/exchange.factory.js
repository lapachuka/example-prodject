(function () {
    'use strict';

    angular
        .module('exchange')
        .factory('exchangeFactory', exchangeFactory);


    /* @ngInject */
    function exchangeFactory($http, $q, Transaction) {
        return {
            change: change
        };
        ////////////////

        function change(exchangeData){
            var deferred = $q.defer(),
                url = 'accounts/exchange';

            $http.post(url, exchangeData)
                .then(function (data) {
                    deferred.resolve(data);
                    Transaction.getList();
                    Transaction.triggerAnotherMethods();
                }, function(data){
                  deferred.reject(data);
                });

            return deferred.promise;
        }

    }

})();

