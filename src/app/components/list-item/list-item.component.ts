import { DialogQuestionComponent } from './../dialog-question/dialog-question.component';
import { DialogInformationComponent } from './../dialog-information/dialog-information.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() listItem:any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  toogleFavourite() {
    this.listItem.favourite = !this.listItem.favourite
  }

  openDialog() {
    const myDialog = this.dialog.open(DialogQuestionComponent, {
      disableClose: true,
      data: {
        title: 'My title',
        text: 'this the firt text',
        dialogNo: 'Non merci!',
        dialogOk: 'continue...'
      }
    });
    myDialog.afterClosed().subscribe(result => console.log(result));
  }

}
