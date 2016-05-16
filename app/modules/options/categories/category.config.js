(function () {
    'use strict';

    angular
        .module('categoryModule')
        .config(categoryRoute);

    /* @ngInject */
    function categoryRoute($stateProvider) {
        $stateProvider
            .state('categories', {
                parent: 'page',
                url: '/categories/{type}',
                params: {
                    type: { value: 'income' }
                },
                templateUrl: '../public/app/modules/options/categories/list.tpl.html',
                controller: 'categoryController as categoryCtrl'
            });
    }
})();
