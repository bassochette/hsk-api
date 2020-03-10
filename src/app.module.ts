import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { QuizzModule } from './quizz/quizz.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

const config = new ConfigService();
console.log('CONFIG', config);
@Module({
  imports: [
    VocabularyModule,
    QuizzModule,
    MongooseModule.forRoot(config.mongoUri),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
