(function () {
    'use strict';

    angular
        .module('transaction')
        .controller('editTransactionController', editTransaction);

    /* @ngInject */
    function editTransaction($rootScope, $scope, Category, Transaction, transactionId, Account, $mdDialog, type) {
        var self = this;

        $rootScope.pageTitle = 'Add New Transaction';
        self.type = type;

        self.title = getTitle();
        self.showDeleteWindow = showDeleteWindow;
        self.transactionId = transactionId;
        self.cancel = cancel;
        self.isValid = isValid;
        self.ok = ok;

        Transaction.getById(transactionId, self.type)
            .then(function (item) {
                self.transaction = item.data;
                self.transaction.date = new Date(self.transaction.date);
                self.transaction.type = 'transaction';
            });

        Category.getList(self.type)
            .then(function (transactionList) {
                self.categories = transactionList;
                self.categories = Category.getFullList(self.categories);
            });

        Account.getList()
            .then(function (accountList) {
                self.accountCategory = accountList;
            });

        $scope.dateOptions = {
            'startingDay': 1
        };

        function isValid() {
            if(self.transaction){
                return  self.transaction.category_id &&
                    self.transaction.account_id;
            }else{
                return false;
            }
        }

        function getTitle() {
            return self.type === 'income' ? 'Редагування прибутка' : 'Редагуванння витрати';
        }

        function showDeleteWindow() {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити транзакцію?')
                .ok('Так')
                .cancel('Ні');
            $mdDialog.show(confirm).then(function () {
                deleteItem();
            });
        }

        function deleteItem() {
            Transaction.remove(self.transactionId, self.type);
        }

        function cancel() {
            $mdDialog.hide();
        }

        function ok() {
            Transaction.update(self.transaction, self.type)
                .then(function () {
                    $mdDialog.hide();
                });
        }
    }

})();

