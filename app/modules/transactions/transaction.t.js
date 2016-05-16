describe('Transaction model', function () {
    var typeIncome = 'income',
        typeExpense = 'expenses',
        filterDate = {
            year: 2016,
            month: 3
        },
    id = 3;

    beforeEach(function () {
        module('app');
    });

    it('Check buildIdUrl', inject(function (Transaction) {
        expect(Transaction).toBeDefined();

        expect(Transaction.buildIdUrl(3, typeIncome)).toEqual('transactions/' + id + '?type=' + typeIncome);
        expect(Transaction.buildIdUrl(3, typeExpense)).toEqual('transactions/' + id + '?type=' + typeExpense);
    }));

    it('Check buildUrl', inject(function (Transaction) {
        expect(Transaction).toBeDefined();
        expect(Transaction.buildUrl(typeExpense, filterDate)).toEqual('transactions?type=' + typeExpense + '&year=' + filterDate.year + '&month=' + filterDate.month);
        expect(Transaction.buildUrl(typeIncome, filterDate)).toEqual('transactions?type=' + typeIncome + '&year=' + filterDate.year + '&month=' + filterDate.month);
    }));
});