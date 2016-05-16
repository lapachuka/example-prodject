;(function () {
    'use strict';

    angular.module('register')
        .controller('registerController', registerController);

    /*@ngInject*/
    function registerController($state, userService, messageBoxService) {

        var self = this;
        this.user = {};

        this.signUp = signUp;

        function signUp() {
            var data = {};

            if (validatePasswords()) {
                data = generateData();

                userService.register(data)
                    .then(function () {
                        return $state.go('dashboard');
                    },
                    function (response) {
                        messageBoxService.showAlert('', response.data.message);
                    });
            }else{
                messageBoxService.showAlert('','Passwords should match!');
            }
        }

        function generateData() {
            return {
                email: self.user.email,
                login: self.user.email,
                password: self.user.password
            }
        }

        function validatePasswords() {
            var user = self.user;
            return user.password && (user.password === user.rePassword);
        }
    }
})();