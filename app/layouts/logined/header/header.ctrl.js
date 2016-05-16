(function () {
    'use strict';
    angular
        .module('logined')
        .controller('headerController', headerController);

    /* @ngInject */
    /*jshint validthis:true */
    function headerController($scope, $mdMedia, $mdDialog, $state, userService) {
        var self = this;

        this.showAddIncomeDialog = showAddIncomeDialog;
        this.showAddExpenseDialog = showAddExpenseDialog;
        this.showExchangeDialog = showExchangeDialog;
        this.logout = logout;

        $scope.$watch(function() { return $mdMedia('xs'); }, function(respone) {
            self.smallScreen = respone;
        });

        function showAddIncomeDialog(ev) {
            $mdDialog.show({
                controller: 'addTransactionController as addTCtrl',
                templateUrl: '../public/app/modules/transactions/views/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'income'
                },
                fullscreen: self.smallScreen
            });
        }

        function showAddExpenseDialog(ev) {
            $mdDialog.show({
                controller: 'addTransactionController as addTCtrl',
                templateUrl: '../public/app/modules/transactions/views/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'expenses'
                },
                fullscreen: self.smallScreen
            });
        }

        function showExchangeDialog(ev) {
            $mdDialog.show({
                controller: 'exchangeController as exCtrl',
                templateUrl: "/public/app/modules/exchange/exchange.tpl.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'expenses'
                },
                fullscreen: self.smallScreen
            });
        }

        function logout(){
            var confirm = $mdDialog.confirm()
                .textContent('Would you like to logout?')
                .ariaLabel('Logout')
                .ok('Yes')
                .cancel('Cancel');

            $mdDialog.show(confirm).then( function(){
                userService.logout().then(function(){
                    $state.go('login');
                });
            });
        }

    }
})();