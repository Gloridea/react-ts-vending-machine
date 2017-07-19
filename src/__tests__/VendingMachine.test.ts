import {VendingMachine} from '../VendingMachine';

describe('VendingMachine', () => {
    describe('buy()', () => {
        it('dispenses product', () => {
            // Given
            const vendingMachine = new VendingMachine();
            // When
            vendingMachine.buyProduct('Coke');
            // Then
            expect(vendingMachine.takeOutPort.length).toBe(1);
            expect(vendingMachine.takeOutPort[0].name).toBe('Coke');
        });
    });
});