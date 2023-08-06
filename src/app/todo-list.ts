import { TodoItem } from './todo-item';
export class TodoList {
    // public user: string
    // private todoItems: TodoItem[] = []
  constructor(public user: string, private todoItems: TodoItem[] = []) { //ประกาศ property type ใน parameter ได้เลย
    // no statements required
  }
  get items(): readonly TodoItem[] { //getter define เป็น method แต่ข้างนอกเรียกใช้เหมือนเป็นตัวแปร(property) เช่น list.items;
    return this.todoItems; //เป็น feture ของ Java script ES6
  }
  
  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}

// let list = new TodoList =  [];
// list.items; //การเรียกใช้ getter
