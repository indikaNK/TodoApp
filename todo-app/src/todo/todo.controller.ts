import {
  Body,
  Controller, Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDAO } from '../dto/CreateTodoDAO';
import { TodoStatus } from '../entity/TodoEntity';
import { StatusValidationPipe } from '../pipe/StatusValidationPipe';

//default api is http://localhost:3000/api/[apicallparams]
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
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

  @Post()
  createTodo(@Body(ValidationPipe) data: CreateTodoDAO) {
    return this.todoService.createNewTodo(data);
  }

  //Update status of the Todo using update Services
  //expect an id as a queryparam
  //pass the pipe Status validation pipe
  @Patch(':id')
  updateTodoStatus(
    @Param('id') id: number,

    @Body('status', StatusValidationPipe) status: TodoStatus,
  ) {
    return this.todoService.updateStatus(id, status);
  }

  //delete todo item by an ID
  @Delete(':id')
  deleteTodo(
      @Param('id') id :number
  ){
    return this.todoService.delete(id);
  }
}
