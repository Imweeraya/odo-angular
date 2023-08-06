import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Bob', [  //create obj froom TodoList
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);

  showComplete = false;
  
  
  get username(): string { //ใช้ดึงค่าชื่อของ user
    return this.list.user;
  }
    
  get itemCount(): number { //ใช้ดึงค่าจำนวน todo
    return this.list.items.filter((item) => !item.complete).length; //filter todo ที่ยังไม่ complete
  }

  get items(): readonly TodoItem[]{ //return เป็น Todoitem
    // return this.list.items;
    //return this.list.items.filter((item) => !item.complete); //filter todo ที่ยังไม่ complete
    return this.list.items.filter(item => this.showComplete || !item.complete); //false || false  // true || false ขึ้นกับ showComplete
  }

  addmoreItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem); //เรียก method addItem ใน list
    }
  }

}
