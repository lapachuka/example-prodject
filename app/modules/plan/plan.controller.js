(function () {
    'use strict';

    angular
        .module('plan')
        .controller('planController', planController);

    /* @ngInject */
    function planController(Currency, Plan, $stateParams, $scope, CONSTANT) {
        var self = this,
            type = $stateParams.type,
            curDate = new Date();

        self.filterDate = {};
        self.months = CONSTANT.months;
        self.years = CONSTANT.years;
        self.filterDate.year = curDate.getFullYear();
        self.filterDate.month = curDate.getMonth() + 1;
        self.getList = getList;


        Currency.getMyList('currency')
            .then(function (currencyList) {
                if(currencyList.length){
                    self.currencyList = currencyList;
                    self.currentCurrency = self.currencyList[0].id;
                    getList();
                }
            });


        $scope.$on('transactionChanged', function() {
            getList();
        });

        this.switchPlanCurrency = getList;
        this.calculateProgressBar = calculateProgressBar;
        this.update = update;
        this.enableEditMode = enableEditMode;
        this.disableEditMode = disableEditMode;

        function getList() {
            self.planList = Plan.getCompareList(self.currentCurrency, type, self.filterDate);
        }

        function enableEditMode() {
            self.isEditMode = true;
            self.planList.forEach(function (item) {
                item.editAmount = angular.copy(item.amount);
            })
        }

        function disableEditMode() {
            self.isEditMode = false;
        }

        function update() {
            Plan.update(self.planList,  self.currentCurrency)
                .then(function () {
                    self.planList.forEach(function (item) {
                        item.amount = angular.copy(item.editAmount);
                        getList();
                        disableEditMode();
                    })
                });
        }

        function calculateProgressBar(categoryPlanItem) {
            return categoryPlanItem.real_amount / categoryPlanItem.amount * 100;

        }
    }
})();


