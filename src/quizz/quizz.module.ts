import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuizzController } from './quizz.controller';
import { QuizzService } from './quizz.service';
import { VocabularyModule } from '../vocabulary/vocabulary.module';
import { QuestionSchema } from './question/question.schema';

@Module({
  imports: [
    VocabularyModule,
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
  ],
  controllers: [QuizzController],
  providers: [QuizzService],
})
export class QuizzModule {}
