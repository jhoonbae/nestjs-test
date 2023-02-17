import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe, Put, ParseIntPipe } from '@nestjs/common';
import { BoardEntity } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status.validation.pipe';

@Controller('boards') // 주소
export class BoardsController {
    constructor(private boardService : BoardsService){} // 생성자 및 접근제한자
    
    // @Get('/') // 라우팅 주소
    // getAllBoard() : Board[] {
    //     return this.boardService.getAllBoards()
    // }

    // @Post('/')
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto : CreateBoardDto 
    // ) {
    //     return this.boardService.createBoard(createBoardDto)
    // }

    @Post('/')
    CreateBoard(@Body() CreateBoardDto : CreateBoardDto) : Promise<BoardEntity> {
        return this.boardService.createBoard(CreateBoardDto)
    }

    @Get('/:id')
    getBoardById(@Param('id') id : number) :Promise<BoardEntity>{
        return this.boardService.getBoardById(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id : number) : Promise<void> {
        return this.boardService.deleteBoard(id)
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id : number,
        @Body('status', BoardStatusValidationPipe) status : BoardStatus
    ) : Promise<BoardEntity> {
        return this.boardService.updateBoardStauts(id, status)
    }

    @Get('/')
    getAllBoards() : Promise<BoardEntity[]> {
        return this.boardService.getAllBoards()
    }
    // @Get('/:id')
    // getBoardById(@Param('id') id : string) : Board{
    //     return this.boardService.getBoardById(id)
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id : string) : void {
    //     return this.boardService.deleteBoard(id)
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id : string, 
    //     @Body('status', BoardStatusValidationPipe) status : BoardStatus
    // ) : Board {
    //     return this.boardService.updateBoard(id, status)
    // }
}
