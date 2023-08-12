import { TodoStatus } from '../entity/TodoEntity';
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class StatusValidationPipe implements PipeTransform {
  //valid status
  readonly validStatus: TodoStatus[] = [
    TodoStatus.OPEN,
    TodoStatus.WIP,
    TodoStatus.COMPLETED,
  ];

  transform(value: any, metadata: ArgumentMetadata): any {
    //set value to upper case
    value = value.toUpperCase();

    //if status is not valid
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is Invalid.`);
    }

    return value;
  }

  private isStatusValid(value) {
    //returns true if status is valid
    const index = this.validStatus.indexOf(value);

    return index !== -1;
  }
}
