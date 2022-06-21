import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item..model';
import { TodoList } from 'src/app/models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  L_KEY_TODO_LIST = 'todo-list';
  todoListArray: TodoList[] =[];

  constructor() {
    const todoListZero = new TodoList('Default');
    todoListZero.todos.push(new TodoItem('Something to do un'))
    todoListZero.todos.push(new TodoItem('Something to do deux'))

    const personalList = new TodoList('personnal');

    const workList = new TodoList('work');
    workList.todos.push(new TodoItem('work to do un'))
    workList.todos.push(new TodoItem('work to do deux'))

    this.todoListArray.push(todoListZero)
    this.todoListArray.push(personalList)
    this.todoListArray.push(workList)
  }

  getTodoList() {
    const todoListString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if (todoListString) {
      this.todoListArray = JSON.parse(todoListString);
    } else {
      this.todoListArray = [];
    }
    return this.todoListArray;
  }

  addList(listName: string) {
    this.todoListArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray))
  }

  addListItem(listId: number, itemName: string) {
    const listObject = this.todoListArray.filter(listItem => listItem.id == listId)[0]
    listObject.todos.push(new TodoItem(itemName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray));
  }
}
