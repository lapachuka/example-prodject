(function () {
    'use strict';

    angular
        .module('plan')
        .factory('Plan', Plan);

    /* @ngInject */
    function Plan($http, $q) {
        var self = this,
            planList = [],
            compareList = [];

        self.currencyId = '';
        self.list = [];

        return {
            getList: getList,
            getCompareList: getCompareList,
            update: update
        };

        function getCompareList(currencyId, type, filterDate) {
            if (valid(currencyId, type)) {
                $http.get('plan/compare?currency=' + currencyId + '&type=' + type + '&year=' + filterDate.year + '&month=' + filterDate.month)
                    .then(function (response) {
                        fillPlanList(response.data, compareList)
                    });
            }

            return compareList;
        }


        function getList(currencyId, type) {
            if (valid(currencyId, type)) {

                $http.get('plan?currency=' + currencyId + '&type=' + type)
                    .then(function (response) {
                        fillPlanList(response.data, planList)
                    });
            }

            return planList;
        }

        function fillPlanList(response, list) {
            clearPlanList(list);
            response.forEach(function (item) {
                item.real = item.amount - item.real_amount;
                list.push(item);
            });

        }

        function clearPlanList(list) {
            list.splice(0, list.length);
        }

        function valid() {
            return arguments[0] && arguments[1];
        }

        function prepareDataForUpdate(planList) {
            var dataForUpdate = [];
            planList.forEach(function (item) {
                item.editAmount = angular.copy(item.editAmount);
                dataForUpdate.push({
                    id: item.id,
                    amount: item.editAmount
                });
            });

            return dataForUpdate;
        }

        function update(planList, currencyId) {
            var planDataForUpdate = prepareDataForUpdate(planList),
                deferred = $q.defer(),
                url = 'plan?currency=' + currencyId;

            $http.put(url, planDataForUpdate)
                .success(function (response) {

                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }
})();