import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import {join} from 'path';
import { User } from 'src/auth/user.entity';
import { BoardEntity } from 'src/boards/board.entity';

export const typeORMConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : '1234',
    database : 'board-app',
    entities : [BoardEntity, User], // ,
    // entities : [join(__dirname, '/../**/*.entity.ts')],
    synchronize : true
}