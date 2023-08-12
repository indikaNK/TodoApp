import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity, TodoStatus } from '../entity/TodoEntity';
import { Repository } from 'typeorm';
import { CreateTodoDAO } from '../dto/CreateTodoDAO';

@Injectable()
export class TodoService {
  //add a data base repository through Entity class
  constructor(
    @InjectRepository(TodoEntity) private repo: Repository<TodoEntity>,
  ) {}
  async getAllTodos() {
    return await this.repo.find();
  }

  //service method create a new todo using typeorm create
  async createNewTodo(data: CreateTodoDAO) {
    //destructure
    const { title, description } = data;

    //create a new instance
    const todoEntity = new TodoEntity();

    //assigning variables and values

    todoEntity.title = title;
    todoEntity.description = description;
    todoEntity.status = TodoStatus.OPEN;

    //create a new record
    this.repo.create(todoEntity);
    //save to db
    return this.repo.save(todoEntity);
  }
}
