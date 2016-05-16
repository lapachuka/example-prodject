describe('Exchange', function () {
    beforeEach(function () {
        module('app');
    });

    var $controller;

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
    }));

    it('Exchange controller', inject(function () {
        $httpBackend.whenGET("accounts").respond({
            "count": 5,
            "data": [{"id": 2, "name": "test"}, {"id": 3, "name": "Bank"}, {"id": 4, "name": "new Account"}]
        });
        $httpBackend.whenGET("currency").respond(
            {
                "count": 5,
                "data": [{
                    "id": 1,
                    "name": "UAH",
                    "updated_at": "2016-02-24T15:56:05.100Z",
                    "created_at": "2016-02-24T15:56:05.100Z"
                }, {
                    "id": 2,
                    "name": "USD",
                    "updated_at": "2016-02-24T15:56:05.100Z",
                    "created_at": "2016-02-24T15:56:05.100Z"
                }, {
                    "id": 3,
                    "name": "EUR",
                    "updated_at": "2016-02-24T15:56:05.100Z",
                    "created_at": "2016-02-24T15:56:05.100Z"
                }, {
                    "id": 4,
                    "name": "RUB",
                    "updated_at": "2016-02-24T15:56:05.100Z",
                    "created_at": "2016-02-24T15:56:05.100Z"
                }, {
                    "id": 5,
                    "name": "HUF",
                    "updated_at": "2016-02-24T15:56:05.100Z",
                    "created_at": "2016-02-24T15:56:05.100Z"
                }]
            });
        $httpBackend.whenPOST("accounts/exchange").respond({message: 'Transfer was good)'});

        var controller = $controller('exchangeController');

        //expect a get request to "internalapi/quotes"
        $httpBackend.expectGET("accounts");
        $httpBackend.expectGET("currency");
        $httpBackend.expectPOST("accounts/exchange");

        controller.from.amount = 5;
        controller.to.amount = 3;

        controller.change();
        $httpBackend.flush();

        expect(controller.title).toEqual('Exchange');
        expect(controller.from.amount).toEqual(0);
        expect(controller.from.account_id).toEqual(4);
        expect(controller.from.currency_id).toEqual(1);
        expect(controller.to.amount).toEqual(0);
        expect(controller.to.account_id).toEqual(4);
        expect(controller.to.currency_id).toEqual(1);

    }));
});