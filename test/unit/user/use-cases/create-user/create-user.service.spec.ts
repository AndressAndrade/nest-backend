import { expect } from 'chai';
import { CreateUserService } from '../../../../../src/user/use-cases/create-user/create-user.service';
import { UserService } from '../../../../../src/user/domain/user.service';
import { anything, instance, mock, when } from 'ts-mockito';
import { User } from '../../../../../src/user/domain/entities/user.entity';
import { UserFactory } from '../../../../factory/user.factory';
import { beforeEach } from 'mocha';
import * as assert from 'assert';
import { ConflictException } from '@nestjs/common';

describe('CreateUserService', () => {
  let service: CreateUserService;
  let userService: UserService;
  let user: User;

  beforeEach(async () => {
    user = UserFactory.build();
    userService = mock(UserService);
    service = new CreateUserService(instance(userService));
  });

  it('should be defined', () => {
    expect(service).to.not.be.undefined;
  });

  describe('when save a new user', () => {
    it('should return that was created', async () => {
      when(userService.findUserByPhone(anything())).thenResolve(null);
      const createUser = await service.createUser(user);
      expect(createUser.created).to.be.true;
    });
  });
  describe('when try to save same user', () => {
    it('should return thas was already created', async () => {
      when(userService.findUserByPhone(anything())).thenResolve(user);
      const createUser = await service.createUser(user);
      expect(createUser.created).to.be.false;
    });
  });
  describe('when try to save same user, but different email', () => {
    it('should throw exception', async () => {
      when(userService.findUserByPhone(anything())).thenResolve({
        ...user,
        email: 'other@email.com',
      });
      await assert.rejects(service.createUser(user), ConflictException);
    });
  });
});
