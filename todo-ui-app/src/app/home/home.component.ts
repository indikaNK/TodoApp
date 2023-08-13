import {Component} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {ApiService} from "../services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {TodoComponent} from "../todo/todo.component";
import {animate, style, transition, trigger} from "@angular/animations";

//define animation
const enterTransition = transition(':enter',[
    style({
        opacity:0
    }),
    animate('1s ease-in',style({opacity:1}))
]);
const fadeIn = trigger('fadeIn',[enterTransition])

// @ts-ignore

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],

})
export class HomeComponent {

    todos: any = [];
    filteredTodos: any[] = [];

    //constructor will call the api services to load the values from API
    constructor(private apiServices: ApiService, private dialog: MatDialog) {

    }

    ngOnInit() {
        //call get all todos service
        this.apiServices.getAllTodos().subscribe(todos => {
            this.todos = todos;
            this.filteredTodos = this.todos
            console.log(this.todos)

        });


    }

    //get values and match against a list of todo and return the matched objects
    filterChanged(ev: MatSelectChange) {
        const value = ev.value;
        console.log(value)

        //if value presents ,then query the filtered todos to find out the matching values
        if (value) {
            this.filteredTodos = this.filteredTodos.filter(t => t.status === value);
            console.log(this.filteredTodos)
        } else {
            //status = all
            this.filteredTodos = this.todos
        }


    }

    statusChanged(ev: MatSelectChange, todoId:number, index: number) {
        //call the update status API
        const value = ev.value;
        console.log(value);

        this.apiServices.updateStatus(value,todoId).subscribe();
    }

    openDialog() {
        const dialogRef = this.dialog.open(TodoComponent, {
            width: '500px',
            hasBackdrop: true,
            role: 'dialog',
            height: '500px'
        });

        //after dialog closed (submit button clicked) if close method contains values this function gets executed to call the create API
        dialogRef.afterClosed().subscribe(data => {
            this.apiServices.createTodo(data.title, data.description).subscribe((result: any) => {
                console.log(result);
                this.todos.push(result);
                this.filteredTodos = this.todos;
            });
        });
    }

    // @ts-ignore
    delete(id:number) {
        //confirmation
        if(confirm("Do you want to delete the todo ?")){
            return this.apiServices.deleteTodo(id).subscribe((result:any)=>{
                if(result.success){
                    console.log(result);
                    //remove todo from list
                    //filter returns list of matching values in a new array. we pass the condition like if the deleted id not in then return it to us
                    this.todos = this.todos.filter((t:any)=> t.id !== id)
                    this.filteredTodos = this.todos

                }
            });
        }

    }
}

