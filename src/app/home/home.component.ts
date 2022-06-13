import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItemZero = {title: 'Do my video', dueDate: '23/06/2020', completed: true, favourite: true}
  listItemUn = {title: 'Do my video', dueDate: '23/06/2020', completed: true, favourite: true}
  listItemDeux = {title: 'Do my video', dueDate: '23/06/2020', completed: true, favourite: true}
  listItemTrois = {title: 'Do my video', dueDate: '23/06/2020', completed: true, favourite: true}

  constructor() { }

  ngOnInit(): void {
  }

  logListItem() {
    console.table([
      this.listItemZero,
      this.listItemUn,
      this.listItemDeux,
      this.listItemTrois
    ])
  }
}
