(function () {
    'use strict';

    angular
        .module('exchange')
        .controller('exchangeController', exchangeController);


    /* @ngInject */
    function exchangeController(Account, exchangeFactory, $mdDialog) {
        var self = this,
            defaultData = {};

        self.title = 'Рахунковий переказ';
        self.from = {};
        self.to = {};
        self.change = change;
        self.closeWindow = closeWindow;

        activate();

        ////////////////

        function activate() {
            Account.getList()
                .then(function (accountList) {
                    self.accountCategory = accountList;
                    defaultData.account_id = self.accountCategory[0] && self.accountCategory[0].id;
                    setDefaultAccount();
                });

            setDefaultAmount();
        }

        function closeWindow() {
            $mdDialog.hide();
        }

        function change() {
            var data = {
                from: self.from,
                to: self.to
            };

            exchangeFactory.change(data)
                .then(function () {
                    setDefaultCurrency();
                    setDefaultAccount();
                    setDefaultAmount();
                    $mdDialog.hide();
                });
        }

        function setDefaultCurrency() {
            self.from.currency_id = defaultData.currency_id;
            self.to.currency_id = defaultData.currency_id;
        }

        function setDefaultAccount() {
            self.from.account_id = defaultData.account_id;
            self.to.account_id = defaultData.account_id;
        }

        function setDefaultAmount() {
            self.from.amount = 0;
            self.to.amount = 0;
        }
    }

})();

