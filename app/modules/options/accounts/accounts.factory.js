(function () {
    'use strict';

    angular
        .module('accounts')
        .factory('Account', Account);

    /* @ngInject */
    function Account($http, $q) {
        var accountList = [],
            url = 'accounts';

        return {
            getList: getList,
            add: add,
            update: update,
            remove: remove,
            clearAll: deleteAllElement
        };

        function getList() {
            var deferred = $q.defer();
            if (!accountList.length) {
                $http.get(url)
                    .then(function (response) {
                        deleteAllElement();
                        fillListData(response.data.data);
                        deferred.resolve(accountList);
                    }, function () {
                        deferred.reject();
                    });
            }else{
                deferred.resolve(accountList);
            }

            return deferred.promise;
        }

        function deleteAllElement() {
            accountList.splice(0, accountList.length);
        }

        function fillListData(data) {
            data && data.forEach(function (item) {
                accountList.push(item);
            });
        }

        function add(account) {
            var newAccount = {
                name: account.name,
                currency_id: account.currency_id
            };

            $http.post(url, newAccount)
                .success(function () {
                    deleteAllElement();
                    getList();
                });
        }

        function remove(index) {
            var id = getIdFromCollection(index);

            $http.delete(url + '/' + id)
                .success(function () {
                    deleteAllElement();
                    getList();
                });
        }

        function getIdFromCollection(index) {
            return accountList[index].id;
        }

        function update(account) {
            var id = account.id,
                deffered = $q.defer();

            $http.put(url + '\\' + id, account)
                .then(function () {
                    deleteAllElement();
                    getList();
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });

            return deffered.promise;
        }
    }
})();