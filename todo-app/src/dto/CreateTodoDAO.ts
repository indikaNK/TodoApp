import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTodoDAO {
  //Data transfer object with simple validations
  @IsNotEmpty()
  @MaxLength(10,{message:'title cannot be longer than 10 characters'})
  title: string;

  @IsNotEmpty()
  description: string;
}
