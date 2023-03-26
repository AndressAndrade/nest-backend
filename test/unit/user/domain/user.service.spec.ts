import { expect } from 'chai';
import { Repository } from 'typeorm';
import { instance, mock } from 'ts-mockito';
import { UserService } from '../../../../src/user/domain/user.service';
import { User } from '../../../../src/user/domain/entities/user.entity';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    repository = mock(Repository);
    service = new UserService(instance(repository));
  });

  it('should be defined', () => {
    expect(service).to.not.be.undefined;
  });
});
