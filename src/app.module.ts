import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';


// 이 페이지가 express에서 app.js와 비슷하다.
// 라우터로 경로 등록해놓는것을 모듈안에 저장을한다.
@Module({
  

  imports: [
    BoardsModule, 
    TypeOrmModule.forRoot(typeORMConfig), 
    AuthModule
  ]
})
export class AppModule {}
