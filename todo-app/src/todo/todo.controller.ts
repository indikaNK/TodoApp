import {Body, Controller, Get, Post} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {CreateTodoDAO} from "../dto/CreateTodoDAO";

//default api is http://localhost:3000/api/[apicallparams]
@Controller('todo')
export class TodoController {

  constructor(private todoService:TodoService) {
  }
  @Get()
  //http://localhost:3000/api/todos
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  //using DTO Object create a todo

  /*
  * Expecting 2 params as body params
  * default status is open to any created todo
  * */


  // @ts-ignore
  @Post()
  createTodo(
      @Body() data: CreateTodoDAO
  ){
    return this.todoService.createNewTodo(data);
  }
}
