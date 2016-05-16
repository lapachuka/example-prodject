(function () {
    'use strict';

    angular
        .module('app')
        .service('appInterceptor', appInterceptor);

    /* @ngInject */
    /*jshint validthis:true */
    function appInterceptor($location, $q, $rootScope) {
        $rootScope.isLoding = 0;

        var self = this;

        self.request = function (config) {
            $rootScope.isLoding++;
            return $q.resolve(config);
        };

        // optional method
        self.requestError = function (rejection) {
            $rootScope.isLoding--;
            return $q.reject(rejection);
        };

        self.response = function (response) {
            $rootScope.isLoding--;
            switch ( response.status ) {
                case 201:
                    $rootScope.$broadcast( 'httpMessage', { message: 'Created', type: 'info' } );
                    break;
            }
            return $q.resolve(response);
        };

        self.responseError = function (response) {
            $rootScope.isLoding--;
            switch ( response.status ) {
                case 401:
                    if (!$rootScope.redirectAfterLogin) {
                        $rootScope.redirectAfterLogin = $location.path();
                    }
                    $location.path('/login');
                    break;

                default:
                    $rootScope.$broadcast( 'httpMessage', { message: response.data.message, type: 'error' } );
                    break;

            }
            return $q.reject(response);
        };
    }

})();



