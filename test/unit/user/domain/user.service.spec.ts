import { expect } from 'chai';
import { Repository } from 'typeorm';
import { anything, instance, mock, when } from 'ts-mockito';
import { UserService } from '../../../../src/user/domain/user.service';
import { User } from '../../../../src/user/domain/entities/user.entity';
import { UserFactory } from '../../../factory/user.factory';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;
  let user: User;

  beforeEach(async () => {
    user = UserFactory.build();
    repository = mock(Repository);
    service = new UserService(instance(repository));
  });

  it('should be defined', () => {
    expect(service).to.not.be.undefined;
  });

  context('when save a user', () => {
    it('should find user', async () => {
      when(repository.save(anything())).thenResolve(user);
      await service.createUser(user);
      when(repository.findOneBy(anything())).thenResolve(user);
      const findUser = await service.findUserByPhone(user.phone);
      expect(findUser).to.be.deep.eq(user);
    });
  });
});
