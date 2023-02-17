import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardEntity } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
    constructor(
        private boardRepository : BoardRepository 
    ) {}

    createBoard(createBoardDto : CreateBoardDto) : Promise<BoardEntity> {
        return this.boardRepository.createBoard(createBoardDto)
    }
    
    async getBoardById(id : any) : Promise<BoardEntity> {
        const found = await this.boardRepository.findOne({
            where : {id : id}
        })
        if(!found) {
            throw new NotFoundException(`Can not find by ${id}`)
        }
        return found
    }

    async deleteBoard(id : number) : Promise<void> {
        const result = await this.boardRepository.delete(id)
        if(result.affected === 0) throw new NotFoundException("삭제하려는 게시물 없음.")
        console.log('result :>> ', result);
    }

    async updateBoardStauts(id : number, status : BoardStatus) : Promise<BoardEntity> {
        const board = await this.getBoardById(id)
        board.status = status
        await this.boardRepository.save(board)
        return board
    }

    async getAllBoards() : Promise<BoardEntity[]> {
        return await this.boardRepository.find()
    }
    // getAllBoards() : Board[] {
    //     return this.boards
    // }

    // createBoard(createBoardDto : CreateBoardDto) : object{
    //     const {title, description} = createBoardDto
    //     const board : Board = {
    //         id : uuid(),
    //         title,
    //         description,
    //         status : BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board)
    //     return ({success : true, board :board})
    // }

    // getBoardById(id : string) : Board {
    //     const found = this.boards.find((board) => board.id === id)
    //     console.log('found :>> ', found);
    //     if(!found){
    //         console.log("404")
    //         throw new NotFoundException(`Can not find board with id ${id}`)}
    //     return found
    // }

    // deleteBoard(id : string) :void {
    //     const found = this.boards.find((board) => board.id === id)
    //     this.boards = this.boards.filter((board) => board.id !== found.id)

    // }

    // updateBoard(id : string, status : BoardStatus) : Board {
    //     const board = this.getBoardById(id)
    //     board.status = status
    //     return board
    // }
}
