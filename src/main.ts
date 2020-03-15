import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import * as helmet from 'helmet';

import { AppModule } from './app.module';

import { ConfigService } from './config/config.service';
const config = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  await app.listen(config.port, () => {
    Logger.log(`Server listening on port ${config.port}`);
  });
}

bootstrap();
