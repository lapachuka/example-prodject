(function () {
    'use strict';

    angular
        .module('logined')
        .directive('mainMenu', directiveName);

    /* @ngInject */
    function directiveName() {
        var directive = {
            bindToController: true,
            controller: menuController,
            controllerAs: 'menuCtrl',
            templateUrl: '/public/app/layouts/logined/menu/menu.directive.html',
            link: link,
            restrict: 'AE',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function menuController($state, $rootScope) {
        var self = this;

        this.$state = $state;
        this.getRouteSref = getRouteSref;
        this.isOpen = false;
        this.getClass = getClass;
        this.isActive = isActive;
        this.toggleMenu = toggleMenu;
        this.menuList = [
            {
                name: 'Головна',
                state: 'dashboard'
            },
            {
                name: 'Транзакції',
                state: 'transactions'
            },
            {
                name: 'Статистика',
                state: 'line-chart'
            },
            {
                name: 'Бюджет',
                state: 'plan'
            },
            {
                name: 'Опції',
                state: 'accounts'
            }
        ];
        $rootScope.$on('$stateChangeStart', hideMenu);

        function hideMenu() {
            self.isOpen = false;
        }

        function getRouteSref(menuItem) {
            return $state.href(menuItem.state);
        }

        function toggleMenu() {
            self.isOpen = !self.isOpen;
        }

        function getClass(state) {
            return (
                state === $state.current.name ||
                (
                    $state.current.name === 'categories' && state === 'accounts'//хак
                )
            ) ? 'site-nav__item_state_active' : '';
        }

        function isActive(state) {
            return (
                state === $state.current.name ||
                (
                    $state.current.name === 'categories' && state === 'accounts'//хак
                )
            );
        }
    }

})();

