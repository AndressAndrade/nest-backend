import { UserService } from '../../domain/user.service';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/createUser.dto';

@Injectable()
export class CreateUserService {
  public constructor(private userService: UserService) {}

  async createUser(user: CreateUserDto): Promise<{ created: boolean }> {
    const oldUser = await this.userService.findUser(user.phone);
    if (oldUser && oldUser.email !== user.email) {
      throw new ConflictException(
        'An user with the informed phone already exists',
      );
    }
    if (oldUser) {
      return { created: false };
    }
    await this.userService.createUser(user);
    return { created: true };
  }
}
