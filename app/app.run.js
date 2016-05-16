(function () {
    'use strict';

    angular
        .module('app')
        .run(runApp);

    /* @ngInject */
    function runApp($rootScope, $mdToast) {
        $rootScope.$on( 'httpMessage', function( event, eventData ) {
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent(eventData.message)
                    .action('CLOSE')
            );
        });
    }

})();