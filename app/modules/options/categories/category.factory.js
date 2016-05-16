(function () {
    'use strict';

    angular
        .module('categoryModule')
        .factory('Category', CategoryModel);

    /* @ngInject */
    function CategoryModel($http, $q) {
        var categoryList = {
                income: [],
                expenses: []
            },
            categoryType = '',
            categoryUrl = '';

        return {
            getList: getList,
            add: add,
            update: update,
            remove: remove,
            getFullList: getFullList,
            clearAll: clearAll,
            deleteAllElement: deleteAllElement
        };

        function getList(listType) {
            var deferred = $q.defer();

            categoryType = listType ? listType : categoryType;

            setCategoryUrl();
            if (!categoryList[categoryType].length) {
                deleteAllElement();
                $http.get(categoryUrl)
                    .then(function (response) {
                        fillListData(response.data.data);
                        deferred.resolve(categoryList[categoryType])
                    }, function () {
                        deferred.reject();
                    });
            } else {
                deferred.resolve(categoryList[categoryType])
            }

            return deferred.promise;
        }

        function setCategoryUrl() {
            categoryUrl = 'categories?type=' + categoryType;
        }

        function clearAll() {
            deleteAllElement('income');
            deleteAllElement('expenses');
        }

        function deleteAllElement(type) {
            var curType = type ? type : categoryType;
            categoryList[curType] && categoryList[curType].splice(0, categoryList[curType].length);
        }

        function fillListData(data) {
            data && data.forEach(function (item) {
                categoryList[categoryType].push(item);
            });
        }

        function add(category) {
            var newCategory = {
                    name: category.name
                },
                deffered = $q.defer();

            if (category.parent_id) {
                newCategory.parent_id = category.parent_id;
            }

            $http.post(categoryUrl, newCategory)
                .success(function (data) {
                    newCategory.id = data.id;
                    addItemToList(newCategory);
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });

            return deffered.promise;
        }

        function addItemToList(category) {
            var list,
                el;

            if (category.parent_id) {
                list = categoryList[categoryType];
                el = list[list.getIndexBy('id', category.parent_id)];

                if (typeof el.sub_categories === 'undefined' || !el.sub_categories) {
                    el.sub_categories = [];
                }

                el.sub_categories.push(category);
            } else {
                categoryList[categoryType].push(category);
            }
        }

        function remove(index, childIndex) {
            var id = getIdFromCollection(index, childIndex);

            $http.delete('categories' + '\\' + id + '?type=' + categoryType)
                .success(function () {
                    removeItemFromList(index, childIndex);
                });
        }

        function getIdFromCollection(index, childIndex) {
            var id,
                list = categoryList[categoryType];

            if (typeof childIndex !== "undefined") {
                id = list[index].sub_categories[childIndex].id;
            } else {
                id = list[index].id
            }

            return id;
        }

        function removeItemFromList(index, childIndex) {
            var list = categoryList[categoryType];

            if (typeof childIndex !== "undefined") {
                list[index].sub_categories.splice(childIndex, 1);
            } else {
                list.splice(index, 1);
            }
        }

        function update(category) {
            var id = category.id,
                deffered = $q.defer();

            $http.put('categories' + '\\' + id + '?type=' + categoryType, category)
                .then(function () {
                    deffered.resolve();
                }, function () {
                    deffered.reject();
                });

            return deffered.promise;
        }


        function getFullList(list) {
            var fullList = [],
                fullSubItem;

            list.forEach(function (item) {
                fullList.push(item);
                if (item.sub_categories && item.sub_categories.length) {
                    item.sub_categories.forEach(function (subItem) {
                        fullSubItem = subItem;
                        fullSubItem.child = true;
                        fullList.push(fullSubItem);
                    });
                }
            });

            return fullList;
        }

    }
})();