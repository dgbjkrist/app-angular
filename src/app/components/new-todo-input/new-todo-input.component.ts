import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-new-todo-input',
  templateUrl: './new-todo-input.component.html',
  styleUrls: ['./new-todo-input.component.css']
})
export class NewTodoInputComponent implements OnInit {

  @Input() list!: TodoList;
  newItemForm!: FormGroup;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.newItemForm = new FormGroup({
      'itemName': new FormControl(null, Validators.required)
    })
  }

  addItem($event: Event, formDirective: any) {
    if(this.newItemForm.valid) {
      const target = $event.target as HTMLInputElement;
      target.blur();
      this.todoService.addListItem(this.list.id, this.newItemForm.value.itemName);
      formDirective.reset();
      this.newItemForm.reset();
    }
  }
}
