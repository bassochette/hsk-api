import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { VocabularySchema } from './vocabulary.schema';
import { VocabularyFixturesService } from './vocabulary-fixtures/vocabulary-fixtures.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Vocabulary', schema: VocabularySchema },
    ]),
  ],
  providers: [VocabularyService, VocabularyFixturesService],
  controllers: [VocabularyController],
  exports: [VocabularyService],
})
export class VocabularyModule {}
