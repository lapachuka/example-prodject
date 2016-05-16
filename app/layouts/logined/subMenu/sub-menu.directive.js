(function () {
    'use strict';

    angular
        .module('logined')
        .directive('subMenu', subMenuDirective);

    /* @ngInject */
    function subMenuDirective() {
        var directive = {
            scope: {
                subMenuType: '@type'
            },
            bindToController: true,
            controller: subMenuController,
            controllerAs: 'smCtrl',
            templateUrl: '/public/app/layouts/logined/subMenu/sub-menu.directive.html',
            // link: link,
            restrict: 'E'

        };
        return directive;

    }

    /* @ngInject */
    function subMenuController($location) {
        var self = this;

        this.getSubMenuConfigByType = getSubMenuConfigByType;
        this.getClass = getClass;

        this.config = {
            plan: {
                list: [
                    {
                        name: ' Витрати',
                        url: '/plan/expenses'
                    },
                    {
                        name: 'Приходи',
                        url: '/plan/income'
                    }
                ],
                state: 'plan'
            },
            options: {
                list: [
                    {
                        name: 'Рахунки',
                        url: '/accounts'
                    },
                    {
                        name: 'Категорії Приходів',
                        url: '/categories/income'
                    },
                    {
                        name: 'Категорії Витрат',
                        url: '/categories/expenses'
                    }
                ],
                state: 'options'
            },
            transactions: {
                list: [
                    {
                        name: 'Усі транзакції',
                        url: '/transactions/',
                        type: ''
                    },
                    {
                        name: 'Приходи',
                        url: '/transactions/income',
                        type: 'income'
                    },
                    {
                        name: 'Витрати',
                        url: '/transactions/expenses',
                        type: 'expenses'
                    }
                ],
                state: 'transactions'
            }

        };

        function getClass(path) {
            return ($location.path() === path) ? 'subnav__link_state_active' : '';
        }

        function getSubMenuConfigByType(type) {
            if (!type) {
                type = self.subMenuType
            }

            return self.config[type];
        }

    }
})();

