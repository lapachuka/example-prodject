(function () {
    'use strict';

    angular
        .module('categoryModule')
        .controller('categoryController', categoryController);

    /* @ngInject */
    function categoryController($scope, $stateParams, Category, $mdDialog) {
        var self = this;

        this.type = $stateParams.type;
        this.category = {};
        this.categories = [];
        this.showConfirmDeleteWindow = showConfirmDeleteWindow;
        this.enableEditMode = enableEditMode;
        this.cancelEditMode = clearData;
        this.create = create;
        this.update = update;

        $scope.pageTitle = getTitle();

        getCategoryList();

        function getCategoryList(){
            Category.getList(self.type)
                .then(function (categories) {
                    self.categories = categories;
                });
        }

        function create() {
            Category.add(self.category)
                .then(function(){
                    clearData();
                });
        }

        function update() {
            Category.update(self.category)
                .then(function(){
                    clearData();
                })
        }

        function clearData() {
            self.category = getCategoryDefaultData();
            self.editMode = false;
            $scope.category.$setPristine();
            $scope.category.$setValidity();
            $scope.category.$setUntouched();
            Category.deleteAllElement();
            getCategoryList();
        }

        function getCategoryDefaultData() {
            return {
                name: '',
                parent_id: '',
                id: ''
            }
        }

        function getTitle() {
            return self.type === 'income' ? 'Категорії доходів' : 'Категорії витрат';
        }

        function showConfirmDeleteWindow(index, childIndex) {
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити категорію?')
                .ok('Так')
                .cancel('Ні');

            $mdDialog.show(confirm)
                .then(function () {
                    deleteItem(index, childIndex);
                });
        }

        function enableEditMode(index, child_index) {
            self.editMode = true;
            if (typeof child_index !== 'undefined') {
                self.category.name = self.categories[index].sub_categories[child_index].name;
                self.category.id = self.categories[index].sub_categories[child_index].id;
                self.category.parent_id = self.categories[index].id;
            } else {
                self.category.name = self.categories[index].name;
                self.category.id = self.categories[index].id;
                self.category.parent_id = '';
            }

            self.categories = self.categories.filter(function(item){
               return  item.id !== self.category.id;
            });
        }

        function deleteItem(index, childIndex) {
            if (Number.isInteger(index)) {
                Category.remove(index, childIndex);
            }
        }
    }
})();


