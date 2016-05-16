;(function(){
    angular
        .module('message-box')
        .factory('messageBoxService', messageBoxService);

    /* @ngInject */
    function messageBoxService($mdDialog) {
        return {
            showAlert: showAlert
        };

        function showAlert(title, message) {
            $mdDialog
                .show( $mdDialog.alert()
                    .title(title)
                    .textContent(message)
                    .ok('Ok'));
        }

    }
})();