(function () {
    'use strict';

    angular
        .module('transaction')
        .controller('addTransactionController', addTransaction);

    /* @ngInject */
    function addTransaction($rootScope, $scope, Category, $mdDialog, Transaction, Account, type) {
        var self = this;

        $rootScope.pageTitle = 'Add New Transaction';
        self.type = type;
        self.title = getTitle();
        self.pageTitle = 'Add New Transaction';
        self.transaction = {
            account_id: '',
            currency_id: '',
            amount: '',
            category_id: '',
            date: new Date()
        };
        self.transaction.date.setHours(0, 0, 0, 0);
        self.transaction.date.setHours(0, 0, 0, 0);
        self.isValid = isValid;

        Category.getList(self.type)
            .then(function (transactionList) {
                self.categories = transactionList;
                self.categories = Category.getFullList(self.categories);
                self.transaction.category_id = self.categories[0] && self.categories[0].id;
            });

        Account.getList()
            .then(function (accountList) {
                self.accountCategory = accountList;
                self.transaction.account_id = self.accountCategory[0] && self.accountCategory[0].id;
            });

        $scope.dateOptions = {
            'startingDay': 1
        };

        function getFullList(list){
            var fullList = [],
                fullSubItem;

            list.forEach(function(item){
                fullList.push(item);
                if(item.sub_categories && item.sub_categories.length){
                    item.sub_categories.forEach(function(subItem){
                        fullSubItem = subItem;
                        fullSubItem.child = true;
                        fullList.push(fullSubItem);
                    });
                }
            });

            return fullList;
        }

        function getTitle(){
            return self.type === 'income' ? 'Додати прибуток' : 'Додати витрату';
        }

        function isValid() {
            return  self.transaction.category_id &&
                self.transaction.account_id;
        }

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.ok = function () {
            Transaction.add(self.transaction, self.type)
                .then(function () {
                    $mdDialog.hide();
                });
        };
    }
})();




