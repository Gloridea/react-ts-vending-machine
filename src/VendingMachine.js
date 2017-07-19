"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
mobx_1.useStrict(true);
var Product = (function () {
    function Product(name) {
        this.name = name;
    }
    return Product;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        this.takeOutPort = [];
    }
    // private products: Product[] = [];
    VendingMachine.prototype.buyProduct = function (productName) {
        this.takeOutPort.push(new Product(productName));
    };
    __decorate([
        mobx_1.observable
    ], VendingMachine.prototype, "takeOutPort");
    __decorate([
        mobx_1.action
    ], VendingMachine.prototype, "buyProduct");
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
