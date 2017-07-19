"use strict";
exports.__esModule = true;
var TodoStore_1 = require("../TodoStore");
describe('TodoStore', function () {
    it('creates new todos', function () {
        var store = new TodoStore_1.TodoStore();
        store.createTodo('Todo1');
        expect(store.todos.length).toBe(1);
    });
});
