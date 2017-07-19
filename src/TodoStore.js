"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var TodoStore = (function () {
    function TodoStore() {
        var _this = this;
        this.todos = [];
        this.createTodo = function (label) {
            _this.todos.push(new Todo(label));
        };
    }
    __decorate([
        mobx_1.observable
    ], TodoStore.prototype, "todos");
    __decorate([
        mobx_1.action
    ], TodoStore.prototype, "createTodo");
    return TodoStore;
}());
exports.TodoStore = TodoStore;
var Todo = (function () {
    function Todo(label) {
        this.label = label;
    }
    __decorate([
        mobx_1.observable
    ], Todo.prototype, "label");
    return Todo;
}());
