import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css']
})
export class DialogQuestionComponent implements OnInit {

  title!: string;
  text!: string;
  dialogOk!: string;
  dialogNo!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogQuestionComponent>
  ) {
    this.title = data.title;
    this.text = data.text;
    this.dialogOk = data.dialogOk
    this.dialogNo = data.dialogNo
  }

  ngOnInit(): void {
  }

  sendAnswer(answer: boolean) {
    this.dialogRef.close(answer);
  }
}
