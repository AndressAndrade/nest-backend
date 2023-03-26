import { UserModule } from '../../domain/user.module';
import { User } from '../../domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user.http.controller';
import { CreateUserService } from './create-user.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User])],
  controllers: [CreateUserController],
  providers: [CreateUserService],
})
export class CreateUserModule {}
