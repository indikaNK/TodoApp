import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "../entity/TodoEntity";

@Module({
  imports:[
      TypeOrmModule.forFeature([TodoEntity])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
