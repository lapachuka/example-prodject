angular
    .module('app', [
        'angular.filter',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'user',
        'login',
        'register',
        'forgotPassword',
        'logined',
        'auth',
        'exchange',
        'templates-main',
        'categoryModule',
        'transaction',
        'accounts',
        'dashboard',
        'shared',
        'chart',
        'plan'
        //'ngMock'/* just for tests,*//
    ]);


Array.prototype.getIndexBy = function (name, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][name] == value) {
            return i;
        }
    }
    return -1;
};;angular
    .module('auth',[]);
;angular
    .module('logined', []);
;angular
    .module('chart', ['line-chart', 'chart.js']);
;angular
    .module('line-chart', []);
;angular
    .module('dashboard', []);;angular
    .module('exchange', []);
;angular
    .module('forgotPassword', []);

;angular
    .module('login', []);;angular
    .module('accounts', ['currency']);;angular
    .module('categoryModule', ['ui.router']);;angular
    .module('currency',[]);
;angular
    .module('plan', []);
;angular
    .module('register', []);;angular
    .module('transaction', []);;angular
    .module('user', []);
;angular
    .module('message-box', []);;angular
    .module('shared', ['message-box']);;(function () {
    'use strict';

    appRoutes.$inject = ['$urlRouterProvider', '$httpProvider'];
    angular.module('app')
        .config(appRoutes);

    /* @ngInject */
    function appRoutes($urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise('/');

        $httpProvider.interceptors.push('appInterceptor');
    }
})();
;(function () {
    'use strict';

    appInterceptor.$inject = ['$location', '$q', '$rootScope'];
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



;(function () {
    'use strict';

    runApp.$inject = ['$rootScope', '$mdToast'];
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

})();;(function () {
    'use strict';

    config.$inject = ['$sceDelegateProvider', '$mdThemingProvider', '$mdDateLocaleProvider'];
    angular.module('app')
        .config(config);

    function config($sceDelegateProvider, $mdThemingProvider, $mdDateLocaleProvider) {

        // Can change week display to start on Monday.
        $mdDateLocaleProvider.firstDayOfWeek = 1;
        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('DD/MM/YYYY');
        };

        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://localhost:8742/**']);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '500'
            })
            .accentPalette('light-green', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            });
    }

})();;(function () {
    'use strict';

    authConfig.$inject = ['$stateProvider'];
    angular
        .module('auth')
        .config(authConfig);

    /* @ngInject */
    function authConfig($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                resolve: {
                    userService: 'userService'
                },
                templateUrl: "../public/app/layouts/auth/auth.tpl.html"
            });
    }

})();

;(function () {
    'use strict';
    headerController.$inject = ['$scope', '$mdMedia', '$mdDialog', '$state', 'userService'];
    angular
        .module('logined')
        .controller('headerController', headerController);

    /* @ngInject */
    /*jshint validthis:true */
    function headerController($scope, $mdMedia, $mdDialog, $state, userService) {
        var self = this;

        this.showAddIncomeDialog = showAddIncomeDialog;
        this.showAddExpenseDialog = showAddExpenseDialog;
        this.showExchangeDialog = showExchangeDialog;
        this.logout = logout;

        $scope.$watch(function() { return $mdMedia('xs'); }, function(respone) {
            self.smallScreen = respone;
        });

        function showAddIncomeDialog(ev) {
            $mdDialog.show({
                controller: 'addTransactionController as addTCtrl',
                templateUrl: '../public/app/modules/transactions/views/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'income'
                },
                fullscreen: self.smallScreen
            });
        }

        function showAddExpenseDialog(ev) {
            $mdDialog.show({
                controller: 'addTransactionController as addTCtrl',
                templateUrl: '../public/app/modules/transactions/views/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'expenses'
                },
                fullscreen: self.smallScreen
            });
        }

        function showExchangeDialog(ev) {
            $mdDialog.show({
                controller: 'exchangeController as exCtrl',
                templateUrl: "/public/app/modules/exchange/exchange.tpl.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    type: 'expenses'
                },
                fullscreen: self.smallScreen
            });
        }

        function logout(){
            var confirm = $mdDialog.confirm()
                .textContent('Would you like to logout?')
                .ariaLabel('Logout')
                .ok('Yes')
                .cancel('Cancel');

            $mdDialog.show(confirm).then( function(){
                userService.logout().then(function(){
                    $state.go('login');
                });
            });
        }

    }
})();;(function () {
    'use strict';

    loginedConfig.$inject = ['$stateProvider'];
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
                templateUrl: "../public/app/layouts/logined/page.html"
            });
    }
})();
;(function () {
    'use strict';

    menuController.$inject = ['$state', '$rootScope'];
    angular
        .module('logined')
        .directive('mainMenu', directiveName);

    /* @ngInject */
    function directiveName() {
        var directive = {
            bindToController: true,
            controller: menuController,
            controllerAs: 'menuCtrl',
            templateUrl: '/public/app/layouts/logined/menu/menu.directive.html',
            link: link,
            restrict: 'AE',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function menuController($state, $rootScope) {
        var self = this;

        this.$state = $state;
        this.getRouteSref = getRouteSref;
        this.isOpen = false;
        this.getClass = getClass;
        this.isActive = isActive;
        this.toggleMenu = toggleMenu;
        this.menuList = [
            {
                name: 'Головна',
                state: 'dashboard'
            },
            {
                name: 'Транзакції',
                state: 'transactions'
            },
            {
                name: 'Статистика',
                state: 'line-chart'
            },
            {
                name: 'Бюджет',
                state: 'plan'
            },
            {
                name: 'Опції',
                state: 'accounts'
            }
        ];
        $rootScope.$on('$stateChangeStart', hideMenu);

        function hideMenu() {
            self.isOpen = false;
        }

        function getRouteSref(menuItem) {
            return $state.href(menuItem.state);
        }

        function toggleMenu() {
            self.isOpen = !self.isOpen;
        }

        function getClass(state) {
            return (
                state === $state.current.name ||
                (
                    $state.current.name === 'categories' && state === 'accounts'//хак
                )
            ) ? 'site-nav__item_state_active' : '';
        }

        function isActive(state) {
            return (
                state === $state.current.name ||
                (
                    $state.current.name === 'categories' && state === 'accounts'//хак
                )
            );
        }


    }

})();

;(function () {
    'use strict';

    subMenuController.$inject = ['$location'];
    angular
        .module('logined')
        .directive('subMenu', subMenuDirective);

    /* @ngInject */
    function subMenuDirective() {
        var directive = {
            scope: {
                subMenuType: '@type'
            },
            bindToController: true,
            controller: subMenuController,
            controllerAs: 'smCtrl',
            templateUrl: '/public/app/layouts/logined/subMenu/sub-menu.directive.html',
            // link: link,
            restrict: 'E'

        };
        return directive;

    }

    /* @ngInject */
    function subMenuController($location) {
        var self = this;

        this.getSubMenuConfigByType = getSubMenuConfigByType;
        this.getClass = getClass;

        this.config = {
            plan: {
                list: [
                    {
                        name: ' Витрати',
                        url: '/plan/expenses'
                    },
                    {
                        name: 'Приходи',
                        url: '/plan/income'
                    }
                ],
                state: 'plan'
            },
            options: {
                list: [
                    {
                        name: 'Рахунки',
                        url: '/accounts'
                    },
                    {
                        name: 'Категорії Приходів',
                        url: '/categories/income'
                    },
                    {
                        name: 'Категорії Витрат',
                        url: '/categories/expenses'
                    }
                ],
                state: 'options'
            },
            transactions: {
                list: [
                    {
                        name: 'Усі транзакції',
                        url: '/transactions/',
                        type: ''
                    },
                    {
                        name: 'Приходи',
                        url: '/transactions/income',
                        type: 'income'
                    },
                    {
                        name: 'Витрати',
                        url: '/transactions/expenses',
                        type: 'expenses'
                    }
                ],
                state: 'transactions'
            }

        };

        function getClass(path) {
            return ($location.path() === path) ? 'subnav__link_state_active' : '';
        }

        function getSubMenuConfigByType(type) {
            if (!type) {
                type = self.subMenuType
            }

            return self.config[type];
        }

    }
})();

;;(function() {
    'use strict';

    config.$inject = ['$stateProvider'];
    angular
        .module('line-chart')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('line-chart', {
                url: "/line-chart",
                parent: "page",
                templateUrl: "/public/app/modules/chart/line/line-chart.tpl.html",
                controller: "lineChartController as lineCtrl"
            });
    }
})();;(function () {
    'use strict';

    lineChartController.$inject = ['LineChart', 'Currency', 'CONSTANT', '$scope'];
    angular
        .module('line-chart')
        .controller('lineChartController', lineChartController);


    /* @ngInject */
    function lineChartController(LineChart, Currency, CONSTANT, $scope) {
        var self = this,
            now = new Date();

        self.title = 'Лінійний графік залежностей';
        self.getData = getData;
        self.years = CONSTANT.years;

        activate();

        ////////////////

        $scope.$on('transactionChanged', function() {
            getData();
        });

        function activate() {

            self.chartData = {};
            self.currentYear = now.getFullYear();

            setFullCurrencyList();
        }

        function setFullCurrencyList() {
            Currency.getMyList()
                .then(function (currencyList) {
                    if(currencyList.length){
                        self.currencyCategory = currencyList;
                        self.currentCurrency = self.currencyCategory[self.currencyCategory.length - 1].id;
                        getData();
                    }
                });
        }

        function getData() {
            var params = {
                'year': self.currentYear,
                'currency': self.currentCurrency
            };

            self.chartData = LineChart.getChartData(params);
        }
    }

})();

;(function () {
    'use strict';

    LineChart.$inject = ['$http'];
    angular
        .module('line-chart')
        .factory('LineChart', LineChart);

    /* @ngInject */
    function LineChart($http) {
        var chartData = {
                data: [[0], [0]],
                series: [],
                labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                colours: [
                    {
                        strokeColor: ["#64DD17"],
                        fillColor: 'rgba(220,220,220,0.2)',
                        pointColor: ["#64DD17"]
                    },
                    {
                        strokeColor: ["#F74133"],
                        fillColor: 'rgba(220,220,220,0.2)',
                        pointColor: ["#F74133"]
                    }
                ]
            },
            currentCurrency,
            currentYear;

        return {
            getChartData: getChartData
        };

        function getChartData(data) {

            setDefaultValues();

            getData(data, 'income');
            getData(data, 'expenses');

            return chartData;
        }

        function setDefaultValues() {
            deleteAllElement(chartData.series);
            deleteAllElement(chartData.data[0]);
            deleteAllElement(chartData.data[1]);
            fillDataElement();
        }

        function fillDataElement() {
            var monthNumber = 12;

            for (var i = 0; i < monthNumber; i++) {
                chartData.data[0].push(0);
                chartData.data[1].push(0);
            }
        }

        function getData(data, type) {
            var now = new Date();

            currentYear = data && data.year || now.getFullYear();
            currentCurrency = data && data.currency ||  currentCurrency;

            $http.get('/statistics/by-year?year=' + currentYear + '&type=' + type + "&currency=" + currentCurrency)
                .then(function (chartDataResult) {
                    setChartDataResult(type, chartDataResult);
                });

        }

        function setChartDataResult(type, resultList) {
            var index = type === 'income' ? 0 : 1,
                series = type === 'income' ? 'Приходи' : 'Витрати';

            chartData.series.push(series);
            angular.forEach(resultList.data, function (dataItem) {
                chartData.data[index][dataItem.month - 1] = Math.abs(dataItem.monthly_sum);
            });

        }

        function deleteAllElement(currentArray) {
            currentArray && currentArray.splice(0, currentArray.length);
        }

    }

})();

;(function () {
    'use strict';

    dashboardConfig.$inject = ['$stateProvider'];
    angular.module('dashboard')
        .config(dashboardConfig)

    /* @ngInject */
    function dashboardConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                parent: 'page',
                url: "/",
                templateUrl: "../public/app/modules/dashboard/dashboard.html",
                controller: "dashboardController as dashboardCtrl"
            });
    }
})();;(function () {
    'use strict';

    dashboardController.$inject = ['Dashboard', '$scope'];
    angular
        .module('dashboard')
        .controller('dashboardController', dashboardController);

    /* @ngInject */
    function dashboardController(Dashboard, $scope) {
        var self = this;

        self.charts = [];
        self.currencyColor = {
            'UAH': 'b-yellow',
            'USD': 'b-green',
            'HUF': 'b-blue',
            'RUB': 'b-grey',
            'EUR': 'b-orange'
        };

        getAccounts();

        $scope.$on('transactionChanged', function() {
            getAccounts();
        });
        
        function getAccounts() {
            Dashboard.getCharts()
                .then(function (accounts) {
                    self.accounts = accounts;
                });
        }


    }

})();


;(function () {
    'use strict';

    Dashboard.$inject = ['$http', '$q'];
    angular
        .module('dashboard')
        .factory('Dashboard', Dashboard);

    /* @ngInject */
    function Dashboard($http, $q) {
        var self = this;

        self.list = [];
        self.accounts = [];

        return {
            getCharts: getCharts
        };

        function getCharts() {
            var deferred = $q.defer();

            $http.get('/accounts/full')
                .then(
                function (response) {
                    addToAccounts(response.data.data);
                    deferred.resolve(self.accounts);
                }, function (errData) {
                    deferred.reject(errData);
                });

            return deferred.promise;
        }

        function addToAccounts(accounts){
            clearArray(self.accounts);
            angular.forEach(accounts, function(account){
                self.accounts.push(account);
            })
        }

        function prepareBarChartsdata(accounts, charts) {
            var i = accounts ? accounts.length : 0,
                chart = {},
                chartData = [];

            clearCharts(charts);

            while (i--) {
                chart = {};
                chart.name = accounts[i].name;
                chart.data = [];
                chart.labels = [];
                angular.forEach(accounts[i].sub_accounts, function (account) {
                    chart.data.push(account.amount);
                    chart.labels.push(account.currency_name);
                });
                chart.series = ['main'];
                charts.push(chart);
            }
        }

        function clearArray(customArray){
            customArray.splice(0, customArray.length);
        }
    }
})();



;;(function() {
    'use strict';

    config.$inject = ['$stateProvider'];
    angular
        .module('exchange')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('exchange', {
                url: "/exchange",
                parent: "page",
                templateUrl: "/public/app/modules/exchange/exchange.tpl.html",
                controller: "exchangeController as exCtrl"
            });
    }
})();;(function () {
    'use strict';

    exchangeController.$inject = ['Account', 'exchangeFactory', '$mdDialog'];
    angular
        .module('exchange')
        .controller('exchangeController', exchangeController);


    /* @ngInject */
    function exchangeController(Account, exchangeFactory, $mdDialog) {
        var self = this,
            defaultData = {};


        self.title = 'Рахунковий переказ';
        self.from = {};
        self.to = {};
        self.change = change;
        self.closeWindow = closeWindow;

        activate();

        ////////////////

        function activate() {
            Account.getList()
                .then(function (accountList) {
                    self.accountCategory = accountList;
                    defaultData.account_id = self.accountCategory[0] && self.accountCategory[0].id;
                    setDefaultAccount();
                });

            setDefaultAmount();
        }

        function closeWindow() {
            $mdDialog.hide();
        }

        function change() {
            var data = {
                from: self.from,
                to: self.to
            };

            exchangeFactory.change(data)
                .then(function () {
                    setDefaultCurrency();
                    setDefaultAccount();
                    setDefaultAmount();
                    $mdDialog.hide();
                });
        }

        function setDefaultCurrency() {
            self.from.currency_id = defaultData.currency_id;
            self.to.currency_id = defaultData.currency_id;
        }

        function setDefaultAccount() {
            self.from.account_id = defaultData.account_id;
            self.to.account_id = defaultData.account_id;
        }

        function setDefaultAmount() {
            self.from.amount = 0;
            self.to.amount = 0;
        }
    }

})();

;(function () {
    'use strict';

    exchangeFactory.$inject = ['$http', '$q', 'Dashboard', 'Transaction'];
    angular
        .module('exchange')
        .factory('exchangeFactory', exchangeFactory);


    /* @ngInject */
    function exchangeFactory($http, $q, Dashboard, Transaction) {
        return {
            change: change
        };
        ////////////////

        function change(exchangeData){
            var deferred = $q.defer(),
                url = 'accounts/exchange';

            $http.post(url, exchangeData)
                .then(function (data) {
                    deferred.resolve(data);
                    Transaction.getList();
                    Transaction.triggerAnotherMethods();
                }, function(data){
                  deferred.reject(data);
                });

            return deferred.promise;
        }

        function updateChartsOnDashboardPage(){
            Dashboard.getCharts();
        }

    }

})();

;;(function() {
    'use strict';

    config.$inject = ['$stateProvider'];
   angular
        .module('forgotPassword')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('forgot', {
                url: "/forgot-password",
                parent: 'auth',
                templateUrl: "../public/app/modules/forgotPassword/forgot-password.tpl.html",
                controller: "ForgotController as forgotCtrl"
        });
    }
})();;;(function() {
    'use strict';

    forgotController.$inject = ['$scope', '$state', 'userService', 'messageBoxService'];
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
;;(function() {
    'use strict';

    loginConfig.$inject = ['$stateProvider'];
    angular
        .module('login')
        .config(loginConfig);

    /*@ngInject*/
    function loginConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                parent: 'auth',
                templateUrl: "../public/app/modules/login/login.tpl.html",
                controller: "LoginController as loginCtrl"
            });
    }
})();;;(function () {
    'use strict';

    login.$inject = ['$state', 'userService', 'messageBoxService'];
    angular.module('login')
        .controller('LoginController', login);

    /*@ngInject*/

    function login($state, userService, messageBoxService) {
        var self = this;

        this.user = {};

        this.signIn = signIn;

        function signIn(event) {
            var data = buildData();

            userService
                .login(data)
                .then(successHandler, errorHandler);
        }

        function successHandler(userData) {
            $state.go('dashboard');
        }

        function errorHandler(response) {
            messageBoxService.showAlert('Login Error',response.data.message);
        }

        function buildData() {
            return {
                login: self.user.email,
                email: self.user.email,
                password: self.user.password
            };
        }
    }
})();

;(function () {
    'use strict';

    accountsRoute.$inject = ['$stateProvider'];
    angular
        .module('accounts')
        .config(accountsRoute);

    /* @ngInject */
    function accountsRoute($stateProvider) {
        $stateProvider
            .state('accounts', {
                parent: 'page',
                url: '/accounts',
                templateUrl: '../public/app/modules/options/accounts/list.html',
                controller: 'accountsController as aCtrl'
            });
    }
})();
;(function () {
    'use strict';

    Account.$inject = ['$http', '$q'];
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
                        fillListData(response.data.data)
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
})();;(function () {
    'use strict';

    accountsController.$inject = ['$scope', 'Account', 'Currency', '$mdDialog'];
    angular
        .module('accounts')
        .controller('accountsController', accountsController);

    /* @ngInject */
    function accountsController($scope, Account, Currency, $mdDialog) {
        var self = this;

        this.create = create;
        this.update = update;
        this.remove = remove;
        this.isValid = isValid;
        this.enableEditMode = enableEditMode;
        this.cancelEditMode = clearData;

        this.accounts = [];
        this.editMode = false;
        this.account = setCategoryDefaultData();

        $scope.pageTitle = 'Рахунки';

        getList();

        Currency.getList()
            .then(function (response) {
                self.currencyList = response;
            });


        function getList() {
            Account.getList()
                .then(function (data) {
                    self.accounts = data;
                });
        }


        function create() {
            if (isValid()) {
                Account.add(self.account);
                clearData();
            }
        }

        function isValid() {
            return self.account.name && self.account.currency_id;
        }

        function remove(index) {
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити рахунок?')
                .ok('Так')
                .cancel('Ні');

            $mdDialog.show(confirm)
                .then(function () {
                    deleteItem(index);
                });
        }

        function deleteItem(index) {
            if (Number.isInteger(index)) {
                Account.remove(index);
            }
        }

        function enableEditMode(index) {
            self.editMode = true;
            self.account.name = self.accounts[index].name;
            self.account.currency_id = self.accounts[index].currency_id;
            self.account.id = self.accounts[index].id;
        }

        function update() {
            if (validSaveData()) {
                Account.update(self.account)
                    .then(function () {
                        clearData();
                        getList();
                    });
            }
        }

        function validSaveData() {
            return self.account.name && self.account.id;
        }

        function clearData() {
            self.account = setCategoryDefaultData();
            self.editMode = false;
            $scope.account.$setPristine();
            $scope.account.$setValidity();
            $scope.account.$setUntouched();
        }

        function setCategoryDefaultData() {
            return {
                name: '',
                id: ''
            }
        }
    }

})();
;(function () {
    'use strict';

    categoryRoute.$inject = ['$stateProvider'];
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
                templateUrl: '../public/app/modules/options/categories/list.html',
                controller: 'categoryController as categoryCtrl'
            });
    }
})();
;(function () {
    'use strict';

    categoryController.$inject = ['$scope', '$stateParams', 'Category', '$mdDialog'];
    angular
        .module('categoryModule')
        .controller('categoryController', categoryController);

    /* @ngInject */
    function categoryController($scope, $stateParams, Category, $mdDialog) {
        var self = this;

        self.type = $stateParams.type;
        self.category = {};

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


;(function () {
    'use strict';

    CategoryModel.$inject = ['$http', '$q'];
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
})();;(function () {
    'use strict';

    Currency.$inject = ['$http', '$q'];
    angular
        .module('currency')
        .factory('Currency', Currency);

    /* @ngInject */
    function Currency($http, $q) {
        var currencyList = [],
            currencyMyList = [];

        return {
            getList: getList,
            getMyList: getMyList
        };

        ////////////////

        function getList() {
            var deffered = $q.defer();

            if (currencyList.length) {
                deffered.resolve(currencyList);
            } else {
                $http.get('currency')
                    .then(function (response) {
                        fillCurrencyList(response.data, currencyList);
                        deffered.resolve(currencyList);
                    }, function(){
                        deffered.reject(response.data);
                    });
            }

            return deffered.promise;
        }

        function getMyList() {
            var deffered = $q.defer();

            if (currencyMyList.length) {
                deffered.resolve(currencyMyList);
            } else {
                $http.get('currency/my')
                    .then(function (response) {
                        fillCurrencyList(response.data, currencyMyList);
                        deffered.resolve(currencyMyList);
                    }, function(){
                        deffered.reject(response.data);
                    });
            }

            return deffered.promise;
        }

        function fillCurrencyList(response, currencyList){
            clearCurrencyList(currencyList);
            response.data.forEach(function(item){
               currencyList.push(item);
            })
        }

        function clearCurrencyList(currencyList){
            currencyList.splice(0, currencyList.length);
        }
    }

})();;(function () {
    'use strict';

    planRoute.$inject = ['$stateProvider'];
    angular
        .module('plan')
        .config(planRoute);

    /* @ngInject */
    function planRoute($stateProvider) {
        $stateProvider
            .state('plan', {
                parent: 'page',
                url: '/plan/{type}',
                params: {
                    type: { value: 'expenses' }
                },
                templateUrl: '../public/app/modules/plan/plan.html',
                controller: 'planController as pCtrl'
            });
    }
})();;(function () {
    'use strict';

    planController.$inject = ['Currency', 'Plan', '$stateParams', '$scope', 'CONSTANT'];
    angular
        .module('plan')
        .controller('planController', planController);

    /* @ngInject */
    function planController(Currency, Plan, $stateParams, $scope, CONSTANT) {
        var self = this,
            type = $stateParams.type,
            curDate = new Date();

        self.filterDate = {};
        self.months = CONSTANT.months;
        self.years = CONSTANT.years;
        self.filterDate.year = curDate.getFullYear();
        self.filterDate.month = curDate.getMonth() + 1;
        self.getList = getList;


        Currency.getMyList('currency')
            .then(function (currencyList) {
                if(currencyList.length){
                    self.currencyList = currencyList;
                    self.currentCurrency = self.currencyList[0].id;
                    getList();
                }
            });


        $scope.$on('transactionChanged', function() {
            getList();
        });

        this.switchPlanCurrency = getList;
        this.calculateProgressBar = calculateProgressBar;
        this.update = update;
        this.enableEditMode = enableEditMode;
        this.disableEditMode = disableEditMode;

        function getList() {
            self.planList = Plan.getCompareList(self.currentCurrency, type, self.filterDate);
        }

        function enableEditMode() {
            self.isEditMode = true;
            self.planList.forEach(function (item) {
                item.editAmount = angular.copy(item.amount);
            })
        }

        function disableEditMode() {
            self.isEditMode = false;
        }

        function update() {
            Plan.update(self.planList,  self.currentCurrency)
                .then(function () {
                    self.planList.forEach(function (item) {
                        item.amount = angular.copy(item.editAmount);
                        getList();
                        disableEditMode();
                    })
                });
        }

        function calculateProgressBar(categoryPlanItem) {
            return categoryPlanItem.real_amount / categoryPlanItem.amount * 100;

        }
    }
})();


;(function () {
    'use strict';

    Plan.$inject = ['$http', '$q'];
    angular
        .module('plan')
        .factory('Plan', Plan);

    /* @ngInject */
    function Plan($http, $q) {
        var self = this,
            planList = [],
            compareList = [];

        self.currencyId = '';
        self.list = [];

        return {
            getList: getList,
            getCompareList: getCompareList,
            update: update
        };

        function getCompareList(currencyId, type, filterDate) {
            if (valid(currencyId, type)) {

                $http.get('plan/compare?currency=' + currencyId + '&type=' + type + '&year=' + filterDate.year + '&month=' + filterDate.month)
                    .then(function (response) {
                        fillPlanList(response.data, compareList)
                    });
            }

            return compareList;
        }


        function getList(currencyId, type) {
            if (valid(currencyId, type)) {

                $http.get('plan?currency=' + currencyId + '&type=' + type)
                    .then(function (response) {
                        fillPlanList(response.data, planList)
                    });
            }

            return planList;
        }

        function fillPlanList(response, list) {
            clearPlanList(list);
            response.forEach(function (item) {
                item.real = item.amount - item.real_amount;
                list.push(item);
            });

        }

        function clearPlanList(list) {
            list.splice(0, list.length);
        }

        function valid() {
            return arguments[0] && arguments[1];
        }

        function prepareDataForUpdate(planList) {
            var dataForUpdate = [];
            planList.forEach(function (item) {
                item.editAmount = angular.copy(item.editAmount);
                dataForUpdate.push({
                    id: item.id,
                    amount: item.editAmount
                });
            });

            return dataForUpdate;
        }

        function update(planList, currencyId) {
            var planDataForUpdate = prepareDataForUpdate(planList),
                deferred = $q.defer(),
                url = 'plan?currency=' + currencyId;

            $http.put(url, planDataForUpdate)
                .success(function (response) {

                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }
})();;;(function() {
    'use strict';

    config.$inject = ['$stateProvider'];
    angular
        .module('register')
        .config(config);

    /*@ngInject*/
    function config($stateProvider) {
        $stateProvider
            .state('register', {
                url: "/register",
                parent: "auth",
                templateUrl: "/public/app/modules/register/register.tpl.html",
                controller: "registerController as regCtrl"
            });
    }
})();;;(function () {
    'use strict';

    registerController.$inject = ['$state', 'userService', 'messageBoxService'];
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
})();;(function () {
    'use strict';

    addTransaction.$inject = ['$rootScope', '$scope', 'Category', '$mdDialog', 'Transaction', 'Account', 'type'];
    angular
        .module('transaction')
        .controller('addTransactionController', addTransaction);

    /* @ngInject */
    function addTransaction($rootScope, $scope, Category, $mdDialog, Transaction, Account, type) {
        var self = this;

        $rootScope.pageTitle = 'Add New Transaction';
        self.type = type;
        self.title = getTitle();
        self.pageTitle = 'Add New Transaction';

        self.transaction = {
            account_id: '',
            currency_id: '',
            amount: '',
            category_id: '',
            date: new Date()
        };
        self.transaction.date.setHours(0, 0, 0, 0);
        self.transaction.date.setHours(0, 0, 0, 0);
        self.isValid = isValid;

        Category.getList(self.type)
            .then(function (transactionList) {
                self.categories = transactionList;
                self.categories = Category.getFullList(self.categories);
                self.transaction.category_id = self.categories[0] && self.categories[0].id;
            });

        Account.getList()
            .then(function (accountList) {
                self.accountCategory = accountList;
                self.transaction.account_id = self.accountCategory[0] && self.accountCategory[0].id;
            });

        $scope.dateOptions = {
            'startingDay': 1
        };

        function getFullList(list){
            var fullList = [],
                fullSubItem;

            list.forEach(function(item){
                fullList.push(item);
                if(item.sub_categories && item.sub_categories.length){
                    item.sub_categories.forEach(function(subItem){
                        fullSubItem = subItem;
                        fullSubItem.child = true;
                        fullList.push(fullSubItem);
                    });
                }
            });

            return fullList;
        }

        function getTitle(){
            return self.type === 'income' ? 'Додати прибуток' : 'Додати витрату';
        }

        function isValid() {
            return  self.transaction.category_id &&
                self.transaction.account_id;
        }

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.ok = function () {
            Transaction.add(self.transaction, self.type)
                .then(function () {
                    $mdDialog.hide();
                });

        };
    }
})();




;(function () {
    'use strict';

    editTransaction.$inject = ['$rootScope', '$scope', 'Category', 'Transaction', 'transactionId', 'Account', '$mdDialog', 'type'];
    angular
        .module('transaction')
        .controller('editTransactionController', editTransaction);

    /* @ngInject */
    function editTransaction($rootScope, $scope, Category, Transaction, transactionId, Account, $mdDialog, type) {
        var self = this;

        $rootScope.pageTitle = 'Add New Transaction';
        self.type = type;

        self.title = getTitle();
        self.showDeleteWindow = showDeleteWindow;
        self.transactionId = transactionId;
        self.cancel = cancel;
        self.isValid = isValid;
        self.ok = ok;

        Transaction.getById(transactionId, self.type)
            .then(function (item) {
                self.transaction = item.data;
                self.transaction.date = new Date(self.transaction.date);
                self.transaction.type = 'transaction';
            });

        Category.getList(self.type)
            .then(function (transactionList) {
                self.categories = transactionList;
                self.categories = Category.getFullList(self.categories);
            });

        Account.getList()
            .then(function (accountList) {
                self.accountCategory = accountList;
            });

        $scope.dateOptions = {
            'startingDay': 1
        };


        function isValid() {
            if(self.transaction){
                return  self.transaction.category_id &&
                    self.transaction.account_id;
            }else{
                return false;
            }

        }

        function getTitle() {
            return self.type === 'income' ? 'Редагування прибутка' : 'Редагуванння витрати';
        }

        function showDeleteWindow() {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити транзакцію?')
                .ok('Так')
                .cancel('Ні');
            $mdDialog.show(confirm).then(function () {
                deleteItem();
            });
        }

        function deleteItem() {
            Transaction.remove(self.transactionId, self.type);
        }

        function cancel() {
            $mdDialog.hide();
        }

        function ok() {
            Transaction.update(self.transaction, self.type)
                .then(function () {
                    $mdDialog.hide();
                });

        }
    }

})();

;(function () {
    'use strict';

    transaction.$inject = ['Transaction', '$mdDialog', '$mdMedia', '$stateParams', 'CONSTANT'];
    angular
        .module('transaction')
        .controller('transactionController', transaction);

    /* @ngInject */
    function transaction(Transaction, $mdDialog, $mdMedia, $stateParams, CONSTANT) {
        var self = this,
            curDate = new Date(),
            type = $stateParams.type;

        self.searchName = '';
        self.filteredList = [];
        self.showEditWindow = showEditWindow;
        self.showMore = showMore;
        self.filterDate = {};
        self.filterDate.year = curDate.getFullYear();
        self.filterDate.month = curDate.getMonth() + 1;
        self.months = CONSTANT.months;
        self.years = CONSTANT.years;
        self.getList = getList;
        self.filterList = filterList;
        self.limitTo = 15;


        //Transaction.setLimitTo(limitTo);

        getList();

        function filterList() {
            Transaction.setSearchName(self.searchName);
        }

        function showMore() {
            self.limitTo += 15;
        }

        function getList() {
            Transaction.getList(type, self.filterDate, self.searchName)
                .then(function (transactionList) {
                    self.list = transactionList;
                   // self.displayShowMoreButton = Transaction.getShowMoreButtonVisible();
                });
        }

        function showEditWindow(transaction) {
            var transactionId = transaction.id,
                type = transaction.type,
                isExchange = transaction.is_exchange;


            if(isExchange){
                $mdDialog.show({
                    controller: 'viewTransactionController as viewTCtrl',
                    templateUrl: '../public/app/modules/transactions/views/view.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $mdMedia('xs'),
                    locals: {
                        transactionId: transactionId,
                        type: type
                    }
                });
            }else {
                $mdDialog.show({
                    controller: 'editTransactionController as editTCtrl',
                    templateUrl: '../public/app/modules/transactions/views/edit.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $mdMedia('xs'),
                    locals: {
                        transactionId: transactionId,
                        type: type
                    }
                });
            }
        }
    }
})();;(function () {
    'use strict';

    viewTransaction.$inject = ['$rootScope', '$scope', 'Category', 'Account', 'Transaction', 'transactionId', '$mdDialog', 'type', '$timeout'];
    angular
        .module('transaction')
        .controller('viewTransactionController', viewTransaction);

    /* @ngInject */
    function viewTransaction($rootScope, $scope, Category, Account, Transaction, transactionId, $mdDialog, type, $timeout) {
        var self = this;

        $rootScope.pageTitle = 'Add New Transaction';
        self.type = type;

        self.title = getTitle();
        self.showDeleteWindow = showDeleteWindow;
        self.transactionId = transactionId;
        self.cancel = cancel;
        self.ok = ok;

        Transaction.getById(transactionId, self.type)
            .then(function (item) {
                self.transaction = item.data;
                self.transaction.date = new Date(self.transaction.date);
                self.transaction.type = 'transaction';
            });

        Category.getList(self.type)
            .then(function (transactionList) {
                self.categories = transactionList;
                self.categories = Category.getFullList(self.categories);
            });

        Account.getList()
            .then(function (accountList) {
                self.accountCategory = accountList;
            });

        $scope.dateOptions = {
            'startingDay': 1
        };


        function getTitle() {
            return self.type === 'income' ? 'Редагування прибутка' : 'Редагуванння витрати';
        }

        function showDeleteWindow() {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Видалення')
                .textContent('Ви дійсно бажаєте видалити транзакцію?')
                .ok('Так')
                .cancel('Ні');
            $mdDialog.show(confirm).then(function () {
                deleteItem();
            });
        }

        function deleteItem() {
            Transaction.remove(self.transactionId, self.type);
        }

        function cancel() {
            $mdDialog.hide();
        }

        function ok() {
            $mdDialog.hide();
        }
    }

})();

;(function () {
    'use strict';

    Transaction.$inject = ['$http', '$q', '$rootScope'];
    angular
        .module('transaction')
        .factory('Transaction', Transaction);

    /* @ngInject */
    function Transaction($http, $q, $rootScope) {
        var self = this,
            transactionList = {
                '': [],
                'income': [],
                'expenses': []
            },
            transactionType = '';

        self.filteredList = [];
        self.fiterDate = {};
        self.searchName = '';

        return {
            getList: getList,
            getById: getById,
            add: add,
            update: update,
            remove: remove,
            buildUrl: buildUrl,
            buildIdUrl: buildIdUrl,
            triggerAnotherMethods: triggerAnotherMethods
        };

        function getList(type, filterDate, searchName) {
            var deferred = $q.defer(),
                url;

            transactionType = typeof type !== 'undefined' ? type: transactionType;
            self.filterDate = filterDate ? filterDate : self.filterDate;
            self.searchName = searchName ? searchName : self.searchName;

            url = buildUrl(transactionType, self.filterDate);

            $http.get(url)
                .then(function (response) {
                    fillListData(response.data);
                    deferred.resolve(transactionList[transactionType]);
                }, function(){
                    deferred.reject(transactionList[transactionType]);
                });

            return deferred.promise;
        }

        function fillListData(response) {
           clearTransactionList();
            response.data.forEach(function (item) {
                transactionList[transactionType].unshift(item);
            });
        }

        function clearTransactionList() {
            transactionList[transactionType].splice(0, transactionList[transactionType].length);
        }

        function add(item, type) {
            var deferred = $q.defer(),
                url = buildUrl(type);

            if (valid(item)) {
                $http.post(url, item)
                    .success(function () {
                        triggerAnotherMethods();
                        getList();
                        deferred.resolve();
                    });
            } else {
                deferred.reject();
            }

            return deferred.promise;
        }

        function triggerAnotherMethods(){
            $rootScope.$broadcast('transactionChanged');
        }

        function remove(id, type) {
            var url = buildIdUrl(id, type);

            $http.delete(url)
                .success(function () {
                    getList();
                });
        }

        function update(item, type) {
            var deferred = $q.defer(),
                url = buildIdUrl(item.id, type);

            if (valid(item)) {
                $http.put(url, item)
                    .success(function () {
                        getList();
                        deferred.resolve();
                    });
            } else {
                deferred.reject();
            }
            return deferred.promise;
        }

        function getById(id, type) {
            var url = buildIdUrl(id, type);

            return $http.get(url);
        }

        function valid() {
            return true;
        }

        function buildIdUrl(id, type) {
            return type ? 'transactions/' + id + '?type=' + type : 'transactions/' + id;
        }


        function buildUrl(type, filterDate) {
            var url = 'transactions';

            if (type) {
                url += '?type=' + type + '&';
            } else {
                url += '?'
            }

            if (filterDate) {
                url += 'year=' + filterDate.year;
                url += '&month=' + filterDate.month;
            }

            return url;
        }
    }
})();

;(function () {
    'use strict';

    transactionRoute.$inject = ['$stateProvider'];
    angular
        .module('transaction')
        .config(transactionRoute);

    /* @ngInject */
    function transactionRoute($stateProvider) {
        $stateProvider
            .state('transactions', {
                parent: 'page',
                url: "/transactions/{type}",
                templateUrl: "../public/app/modules/transactions/views/list.html",
                controller: "transactionController as tCtrl"
            })
    }
})();


;(function () {
    'use strict';

    angular
        .module('transaction')
        .constant("CONSTANT", {
            "months": [{
                id: 1,
                "name": "Jan"
            }, {
                id: 2,
                "name": "Feb"
            }, {
                id: 3,
                "name": "Mar"
            }, {
                id: 4,
                "name": "Apr"
            }, {
                id: 5,
                "name": "May"
            }, {
                id: 6,
                "name": "Jun"
            }, {
                id: 7,
                "name": "Jul"
            }, {
                id: 8,
                "name": "Aug"
            }, {
                id: 9,
                "name": "Sep"
            }, {
                id: 10,
                "name": "Oct"
            }, {
                id: 11,
                "name": "Nov"
            }, {
                id: 12,
                "name": "Dec"
            }],
            "years": getYearArray()

        });

    function getYearArray() {
        var i,
            years = [],
            curDate = new Date(),
            yearStep = 5,
            max = curDate.getFullYear() + yearStep,
            min = curDate.getFullYear() - yearStep;

        for (i = min; i <= max; i++) {
            years.push({id: i, name: i});
        }

        return years;
    }

})();

;(function () {
    'use strict';

    userService.$inject = ['$http', '$q', 'Category', 'Account'];
    angular.module('user')
        .factory('userService', userService);

    /*@ngInject*/
    function userService($http, $q, Category, Account) {
        "use strict";

        var userInfo = {};

        return {
            isAuthorized: isAuthorized,
            logout: logout,
            login: login,
            getInfo: getInfo,
            register: register,
            updateInfo: updateInfo,
            forgotPassword: forgotPassword
        };

        function register(userData) {
            return $http.post('/user', userData);
        }

        function isAuthorized() {
            return $http.get('/isAuthorized');
        }

        function logout() {
            var deferred = $q.defer();
            $http.get('/user/logout')
                .then(function (response) {
                    clearAllData();
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }

        function clearAllData() {
            Category.clearAll();
            Account.clearAll();
            userInfo = 'undefined';
        }

        function login(userData) {
            var deferred = $q.defer();
            $http.post('/user/login', userData)
                .then(function (response) {
                    updateInfo(response);
                    deferred.resolve(response);
                }, function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }

        function getInfo() {
            return userInfo;
        }

        function updateInfo(data) {
            userInfo = data;
        }

        function forgotPassword(data) {
            return $http.post('/user/forgot', data);
        }
    }
})();
;;(function(){
    angular
        .module('message-box')
        .factory('messageBoxService', messageBoxService);

    messageBoxService.$inject = ['$mdDialog', '$q'];

    function messageBoxService($mdDialog, $q) {
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