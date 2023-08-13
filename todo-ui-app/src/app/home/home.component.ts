import {Component} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {ApiService} from "../services/api.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    todos: any = [];
    filteredTodos: any[] = [];

    //constructor will call the api services to load the values from API
    constructor(private apiServices: ApiService) {

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

    //dialog


    statusChanged(ev: MatSelectChange, todoId:number, index: number) {
        //call the update status API
        const value = ev.value;
        console.log(value);

        this.apiServices.updateStatus(value,todoId).subscribe();
    }
}
