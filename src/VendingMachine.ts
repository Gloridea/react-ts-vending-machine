import {action, observable, useStrict} from 'mobx';

useStrict(true);


class Product {
    constructor(public name: string) {
    }
}

export class VendingMachine {
    @observable
    public takeOutPort: Product[] = [];

    constructor() {
    }
    // private products: Product[] = [];
    @action
    buyProduct(productName: string) {
        this.takeOutPort.push(new Product(productName));
    }
}