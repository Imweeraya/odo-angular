import { TodoItem } from './todo-item';
export class TodoList {
    // public user: string
    // private todoItems: TodoItem[] = []
  constructor(public user: string, private todoItems: TodoItem[] = []) { //ประกาศ type ใน parameter ได้เลย
    // no statements required
  }
  get items(): readonly TodoItem[] { //getter
    return this.todoItems;
  }
  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}

// let list = new TodoList =  [];
// list.items; //การเรียกใช้ getter
