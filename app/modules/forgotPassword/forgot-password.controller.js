;(function() {
    'use strict';

    angular
        .module('forgotPassword')
        .controller('ForgotController', forgotController);

    /*@ngInject*/
    function forgotController($scope, $state, userService, messageBoxService) {
        var self = this;

        this.formData = {};
        this.sendPassword = sendPassword;

        function sendPassword() {
            if($scope.forgotPasswordForm.$valid) {
                userService.forgotPassword(self.formData)
                    .then(function(response){
                        messageBoxService.showAlert('',response.data.success);
                        $state.go('login');
                    }, function(response){
                        messageBoxService.showAlert('',response.data.message);
                    });
            }
        }
    }

})();
