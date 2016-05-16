(function () {
    'use strict';

    angular
        .module('transaction')
        .controller('transactionController', transaction);

    /* @ngInject */
    function transaction(Transaction, $mdDialog, $mdMedia, $stateParams, CONSTANT) {
        var self = this,
            curDate = new Date(),
            type = $stateParams.type;

        self.searchName = '';
        self.filteredList = [];
        self.showEditWindow = showEditWindow;
        self.showMore = showMore;
        self.filterDate = {};
        self.filterDate.year = curDate.getFullYear();
        self.filterDate.month = curDate.getMonth() + 1;
        self.months = CONSTANT.months;
        self.years = CONSTANT.years;
        self.getList = getList;
        self.filterList = filterList;
        self.limitTo = 15;


        //Transaction.setLimitTo(limitTo);

        getList();

        function filterList() {
            Transaction.setSearchName(self.searchName);
        }

        function showMore() {
            self.limitTo += 15;
        }

        function getList() {
            Transaction.getList(type, self.filterDate, self.searchName)
                .then(function (transactionList) {
                    self.list = transactionList;
                   // self.displayShowMoreButton = Transaction.getShowMoreButtonVisible();
                });
        }

        function showEditWindow(transaction) {
            var transactionId = transaction.id,
                type = transaction.type,
                isExchange = transaction.is_exchange;


            if(isExchange){
                $mdDialog.show({
                    controller: 'viewTransactionController as viewTCtrl',
                    templateUrl: '../public/app/modules/transactions/views/view.tpl.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $mdMedia('xs'),
                    locals: {
                        transactionId: transactionId,
                        type: type
                    }
                });
            }else {
                $mdDialog.show({
                    controller: 'editTransactionController as editTCtrl',
                    templateUrl: '../public/app/modules/transactions/views/edit.tpl.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $mdMedia('xs'),
                    locals: {
                        transactionId: transactionId,
                        type: type
                    }
                });
            }
        }
    }
})();