import { CreateUserService } from './create-user.service';
import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/domain/dto/createUser.dto';

@Controller('/v1/user')
export class CreateUserHttpController {
  public constructor(private createUserService: CreateUserService) {}

  @Post()
  async createUser(
    @Body(new ValidationPipe()) user: CreateUserDto,
    @Res() res: Response,
  ): Promise<void> {
    const newUser = await this.createUserService.createUser(user);
    newUser.created
      ? res.status(HttpStatus.CREATED).send()
      : res.status(HttpStatus.OK).send();
  }
}
