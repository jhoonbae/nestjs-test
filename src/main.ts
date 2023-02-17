import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log(`★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ `)
  // console.log("=================== Current Server >> "+('KLC_Express_CS'))
  // console.log(`=================== NODE_ENV >> ${(process.env.NODE_ENV)}`)
  // console.log(`=================== SCHEMA >> ${(process.env.MariaDB_DATABASE)}`)
  // console.log(`=================== DATABASE >> ${(process.env.MariaDB_HOST)}`)
  // console.log(`=================== USER >> ${(process.env.MariaDB_USER)}`)
  // console.log(`=================== TIME_ZONE >> ${(Date())}`)
  console.log(`★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ `)
}
bootstrap();
