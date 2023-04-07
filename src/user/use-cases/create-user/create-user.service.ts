import { UserService } from '../../domain/user.service';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/createUser.dto';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class CreateUserService {
  public constructor(private userService: UserService) {}

  async createUser(
    user: CreateUserDto,
  ): Promise<{ created: boolean; user: User }> {
    const oldUser = await this.userService.findUserByPhone(user.phone);
    if (oldUser && oldUser.email !== user.email) {
      throw new ConflictException(
        'An user with the informed phone already exists',
      );
    }
    if (oldUser) {
      return {
        created: false,
        user: oldUser,
      };
    }
    const newUser = await this.userService.createUser(user);
    return {
      created: false,
      user: newUser,
    };
  }
}
