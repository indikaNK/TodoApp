import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    //url for service call
    private API_URL = 'http://localhost:3000/api';

    constructor(
        private http: HttpClient,
        private toast: ToastrService
    ) {
    }

// call get all todos
    getAllTodos() {
        return this.http.get(`${this.API_URL}/todo`);
    }

// call update status service api
    updateStatus(value: any, todoId: number) {
        return this.http.patch(`${this.API_URL}/todo/${todoId}`, {status: value}).pipe(
            //once updated show success
            tap(res => {
                console.log(res)
                if (res) {
                    this.toast.success(
                        "Status updated successfully"
                    )
                } else {
                    this.toast.error(`${res}`)
                }
            })
        )
    }

    //call create to do api service
    createTodo(title: string, description: string) {
        return this.http.post(`${this.API_URL}/todo`, {title, description}).pipe(
            tap(res => {
                if (res) {
                    console.log(res)
                    this.toast.success(
                        "New Todo Item Created successfully"
                    )
                } else {
                    this.toast.error(
                        "Todo Creation failed"
                    )
                }
            })
        )
    }

    deleteTodo(id: number) {
        return this.http.delete(`${this.API_URL}/todo/${id}`).pipe(
            tap(res => {
                if (res) {
                    console.log(res)
                    this.toast.success(
                        "Deleted successfully"
                    )
                } else {
                    this.toast.error(
                        "Todo Deletion failed"
                    )
                }
            })
        )
    }
}
