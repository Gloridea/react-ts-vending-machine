import {action, observable} from 'mobx';

export class TodoStore {
    @observable
    public todos: Todo[] = [];

    @action createTodo(label: string) {
        this.todos.push(new Todo(label));
    }
}

class Todo {
    @observable public label: string;
    constructor(label: string) {
        this.label = label;
    }
}