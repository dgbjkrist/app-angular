import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItems = [
    /*{title: 'Do my video 1', dueDate: '23/06/2020', completed: true, favourite: false},
    {title: 'Do my video 2', dueDate: '23/06/2020', completed: true, favourite: true},
    {title: 'Do my video 3', dueDate: '23/06/2020', completed: true, favourite: true},
    {title: 'Do my video 4', dueDate: '23/06/2020', completed: true, favourite: false}*/
  ]

  constructor() { }

  ngOnInit(): void {
  }

  logListItem() {
    console.table([
      this.listItems
    ])
  }
}
