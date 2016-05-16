(function () {
    'use strict';

    angular
        .module('logined')
        .config(loginedConfig);

    /* @ngInject */
    function loginedConfig($stateProvider) {
        $stateProvider
            .state('page', {
                abstract: true,
                resolve: {
                    userService: 'userService',
                    authCheck: ['$q', '$state', 'userService', function($q, $state, userService){
                        var deferred = $q.defer();

                        userService.isAuthorized().then(function(){
                            deferred.resolve();
                        },function(){
                            $state.go('login');
                            deferred.reject();
                        });

                        return deferred.promise;
                    }]
                },
                templateUrl: "../public/app/layouts/logined/page.tpl.html"
            });
    }
})();
