import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item..model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getFavouriteTasks(isFavourite:boolean) {
    return this.todoList.filter(item => item.favourite == isFavourite)
  }
}
