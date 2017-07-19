import {TodoStore} from '../TodoStore';

describe('TodoStore', () => {
    it('creates new todos', () => {
        const store = new TodoStore();

        store.createTodo('Todo1');

        expect(store.todos.length).toBe(1);
    });
});