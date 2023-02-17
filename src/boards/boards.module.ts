import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TypeOrmCustomModule } from './board.custom.repository.module';
import { BoardEntity } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports : [
    TypeOrmCustomModule.forCustomRepository([BoardRepository]),
    TypeOrmModule.forFeature([BoardEntity])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
