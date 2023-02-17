import {Repository} from 'typeorm';
import { CustomRepository } from './typeorm.decorator';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board.status.enum';

@CustomRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
    async createBoard(createBoardDto : CreateBoardDto) : Promise<BoardEntity> {
        const {title, description} = createBoardDto

        const board = this.create({
            title,
            description,
            status : BoardStatus.PUBLIC
        })
        await this.save(board)
        return board
    }
}