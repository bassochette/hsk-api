import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from './config/config.service';
const config = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config.port, () =>
    console.log(`Server listening on port ${config.port}`),
  );
}
bootstrap();
