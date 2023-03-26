import { expect } from 'chai';
import { CreateUserService } from '../../../../../src/user/use-cases/create-user/create-user.service';
import { UserService } from "../../../../../src/user/domain/user.service";
import { instance, mock } from "ts-mockito";

describe('CreateUserService', () => {
  let service: CreateUserService;
  let userService: UserService;

  beforeEach(async () => {
    userService = mock(UserService);
    service = new CreateUserService(instance(userService));
  });

  it('should be defined', () => {
    expect(service).to.not.be.undefined;
  });
});
