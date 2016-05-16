;(function() {
    'use strict';

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
})();