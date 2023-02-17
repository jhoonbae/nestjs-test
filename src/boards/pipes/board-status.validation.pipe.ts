import {PipeTransform, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import { BoardStatus } from '../board.status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]
    transform(value : any, metadata : ArgumentMetadata) {
        value = value.toUpperCase()
        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value}가 올바른 값이 아님.`)
        }
        return value
    }

    private isStatusValid(status : any) {
        const index = this.StatusOptions.indexOf(status)
        console.log('index :>> ', index);
        return index !== -1
    }
}