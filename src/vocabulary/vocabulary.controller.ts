import { Controller, Get, Param } from '@nestjs/common';

import { VocabularyFixturesService } from './vocabulary-fixtures/vocabulary-fixtures.service';
import { VocabularyService } from './vocabulary.service';

@Controller('vocabulary')
export class VocabularyController {
  constructor(
    private readonly vocabularyFixturesService: VocabularyFixturesService,
    private readonly vocabularyService: VocabularyService,
  ) {}

  @Get('/pinyin/:pinyinNumber')
  async getWordByNumber(@Param('pinyinNumber') pinyinNumber) {
      return this.vocabularyService.getWordByNumber(pinyinNumber);
  }

  @Get('/list/:exam')
  async getExam(@Param('exam') exam) {
    return this.vocabularyService.getWordsByExam(exam);
  }

  /**
   * utility route
   */
  @Get('load')
  async load() {
    await this.vocabularyFixturesService.loadHSK();
  }
}
