"use strict";
exports.__esModule = true;
var VendingMachine_1 = require("../VendingMachine");
describe('VendingMachine', function () {
    describe('buy()', function () {
        it('dispenses product', function () {
            // Given
            var vendingMachine = new VendingMachine_1.VendingMachine();
            // When
            vendingMachine.buyProduct('Coke');
            // Then
            expect(vendingMachine.takeOutPort.length).toBe(1);
            expect(vendingMachine.takeOutPort[0].name).toBe('Coke');
        });
    });
});
