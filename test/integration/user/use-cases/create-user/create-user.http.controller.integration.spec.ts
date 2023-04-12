import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { AppModule } from '../../../../../src/app.module';
import { CreateUserController } from '../../../../../src/user/use-cases/create-user/create-user.http.controller';
import { anything, instance, mock, verify, when } from 'ts-mockito';
import { CreateUserService } from '../../../../../src/user/use-cases/create-user/create-user.service';
import { Response } from 'express';
import { User } from '../../../../../src/user/domain/entities/user.entity';
import { UserFactory } from '../../../../factory/user.factory';

describe('CreateUserController', () => {
  let controller: CreateUserController;
  let service: CreateUserService;
  let user: User;

  // const mockRequest = mock<Request>();
  const mockResponse = mock<Response>();

  beforeEach(async () => {
    user = UserFactory.build();

    when(mockResponse.status(anything())).thenReturn(instance(mockResponse));
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
    service = module.get<CreateUserService>(CreateUserService);
  });

  it('should be defined', () => {
    expect(controller).to.not.be.undefined;
    expect(service).to.not.be.undefined;
  });

  context('try to create a user', () => {
    context('and is a new User', () => {
      it('should create user and return it', async () => {
        const response = await controller.createUser(
          user,
          instance(mockResponse),
        );
        verify(mockResponse.status(201)).once();
        expect(response).to.be.deep.eq(user);
      });
    });
  });
});
