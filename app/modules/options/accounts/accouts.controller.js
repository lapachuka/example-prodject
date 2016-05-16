(function () {
    'use strict';

    angular
        .module('accounts')
        .controller('accountsController', accountsController);

    /* @ngInject */
    function accountsController($scope, Account, Currency, $mdDialog) {
        var self = this;

        this.create = create;
        this.update = update;
        this.remove = remove;
        this.isValid = isValid;
        this.enableEditMode = enableEditMode;
        this.cancelEditMode = clearData;
        this.accounts = [];
        this.editMode = false;
        this.account = setCategoryDefaultData();

        $scope.pageTitle = 'Рахунки';

        getList();

        Currency.getList()
            .then(function (response) {
                self.currencyList = response;
            });


        function getList() {
            Account.getList()
                .then(function (data) {
                    self.accounts = data;
                });
        }


        function create() {
            if (isValid()) {
                Account.add(self.account);
                clearData();
            }
        }

        function isValid() {
            return self.account.name && self.account.currency_id;
        }

        function remove(index) {
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити рахунок?')
                .ok('Так')
                .cancel('Ні');

            $mdDialog.show(confirm)
                .then(function () {
                    deleteItem(index);
                });
        }

        function deleteItem(index) {
            if (Number.isInteger(index)) {
                Account.remove(index);
            }
        }

        function enableEditMode(index) {
            self.editMode = true;
            self.account.name = self.accounts[index].name;
            self.account.currency_id = self.accounts[index].currency_id;
            self.account.id = self.accounts[index].id;
        }

        function update() {
            if (validSaveData()) {
                Account.update(self.account)
                    .then(function () {
                        clearData();
                        getList();
                    });
            }
        }

        function validSaveData() {
            return self.account.name && self.account.id;
        }

        function clearData() {
            self.account = setCategoryDefaultData();
            self.editMode = false;
            $scope.account.$setPristine();
            $scope.account.$setValidity();
            $scope.account.$setUntouched();
        }

        function setCategoryDefaultData() {
            return {
                name: '',
                id: ''
            }
        }
    }

})();
