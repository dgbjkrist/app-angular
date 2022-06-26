import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrls: ['./dialog-information.component.css']
})
export class DialogInformationComponent implements OnInit {

  title!: string;
  text!: string;
  dialogOk!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.text = data.text;
    this.dialogOk = data.dialogOk
  }

  ngOnInit(): void {
  }

}
