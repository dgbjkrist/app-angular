import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-new-list-input',
  templateUrl: './new-list-input.component.html',
  styleUrls: ['./new-list-input.component.css']
})
export class NewListInputComponent implements OnInit {

  newListForm!: FormGroup;
  @Output() itemAdded = new EventEmitter<string>();

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.newListForm = new FormGroup({
      'listName': new FormControl(null, Validators.required)
    })
  }

  addList($event: Event, formDirective: any) {
    if(this.newListForm.valid) {
      const target = $event.target as HTMLInputElement;
      target.blur();
      this.todoService.addList(this.newListForm.value.listName);
      formDirective.reset();
      this.newListForm.reset();
      this.itemAdded.emit();
    }
  }

}
