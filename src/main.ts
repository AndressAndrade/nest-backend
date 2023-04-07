import 'module-alias/register';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
  const swaggerConfig = {
    endpoint: 'swagger',
    title: 'Open Doc',
    description: 'Nest API',
    version: '1.0',
  };
*/

  await app.listen(3000);
}
bootstrap();
