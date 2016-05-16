(function () {
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

