import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {animate, style, transition, trigger} from "@angular/animations";

//define animation
const enterTransition = transition(':enter', [
    style({
        opacity: 0
    }),
    animate('1s ease-in', style({opacity: 1}))
]);
const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    animations: [
        // animation triggers go here
        fadeIn

    ]})
export class TodoComponent {
    title: any;
    description: any;

    constructor(
        public dialogRef: MatDialogRef<TodoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    onCancel() {
        this.dialogRef.close();
    }

    create() {
        this.dialogRef.close(
            {
                title: this.title,
                description: this.description
            }
        )
    }
}
