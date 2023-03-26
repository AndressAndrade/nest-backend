import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { CreateUserService } from '../../../../../src/user/use-cases/create-user/create-user.service';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserService],
    }).compile();

    service = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(service).to.not.be.undefined;
  });
});
