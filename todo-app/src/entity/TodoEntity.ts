// Contains todo entity class
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('todo-table')
export class TodoEntity {
  // columns are id(pk) title , description ,status-enum

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column()
  description: String;

  @Column()
  status: TodoStatus;
}

export enum TodoStatus {
  OPEN = 'OPEN',
  WIP = 'WIP', // work in progress
  COMPLETED = 'COMPLETED',
}
