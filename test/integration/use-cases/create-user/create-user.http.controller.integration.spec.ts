import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { CreateUserHttpController } from '../../../../src/user/use-cases/create-user/create-user.http.controller';

describe('CreateUserController', () => {
  let controller: CreateUserHttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserHttpController],
    }).compile();

    controller = module.get<CreateUserHttpController>(CreateUserHttpController);
  });

  it('should be defined', () => {
    expect(controller).to.not.be.undefined;
  });
});
