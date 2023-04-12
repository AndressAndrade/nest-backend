import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './config/typeorm.config';
import { UserModule } from './user/domain/user.module';
import { CreateUserModule } from './user/use-cases/create-user/create-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.example'],
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    CreateUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
