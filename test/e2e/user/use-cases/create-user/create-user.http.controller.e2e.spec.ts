/**
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import { AppModule } from '../../../../../src/app.module';
import { CreateUserController } from '../../../../../src/user/use-cases/create-user/create-user.http.controller';
import { mock } from 'ts-mockito';
import { CreateUserService } from '../../../../../src/user/use-cases/create-user/create-user.service';
import request from 'supertest';

describe('e2e > CreateUserController', () => {
  let app: TestingModule;
  let response: request.Response;

  afterEach(async () => {
    await app.close();
    nock.cleanAll();
  });

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).build();
    await app.start();
  });

  it('should be defined', () => {
    expect(controller).to.not.be.undefined;
    expect(service).to.not.be.undefined;
  });
});
*/
