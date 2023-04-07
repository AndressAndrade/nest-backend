import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../domain/dto/createUser.dto';
import { User } from '../../domain/entities/user.entity';

@Controller('/v1/user')
export class CreateUserController {
  public constructor(private createUserService: CreateUserService) {}

  @Post()
  async createUser(
    @Body(new ValidationPipe()) user: CreateUserDto,
    @Res() res: Response,
  ): Promise<User> {
    const newUser = await this.createUserService.createUser(user);
    newUser.created
      ? res.status(HttpStatus.CREATED).json(newUser.user)
      : res.status(HttpStatus.OK).json(newUser.user);
    return newUser.user;
  }
}
