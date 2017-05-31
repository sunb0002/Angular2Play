export interface TodoItem {
    id: number;
    value: string;
    done: boolean;
}

export class TodoItemClass implements TodoItem {
    constructor(public id: number, public value: string, public done: boolean) {
        this.id = id;
        this.value = value;
        this.done = done;
    }
}
