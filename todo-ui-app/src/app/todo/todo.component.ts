import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    title: any;
    description: any;

    constructor(
        public dialogRef:MatDialogRef<TodoComponent>,
        @Inject(MAT_DIALOG_DATA) public  data:any
    ) {
    }

    onCancel() {
        this.dialogRef.close();
    }

    create() {
        this.dialogRef.close(
            {
                title:this.title,
                description:this.description
            }
        )
    }
}
