import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IVocabulary, EXAMS } from './vocabulary.interface';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectModel('Vocabulary')
    private readonly vocabularyModel: Model<IVocabulary>,
  ) {}

  async getWordByTraditional(traditional: string): Promise<IVocabulary> {
    return this.vocabularyModel.findOne({ traditional });
  }

  async getWordByNumber(pinyinNumber: string): Promise<IVocabulary> {
    const word = await this.vocabularyModel
      .findOne({ numbers: pinyinNumber })
      .exec();
    const related = await this.vocabularyModel
      .find({ components: word.simplified })
      .exec();
    return {
      ...word,
      related,
    };
  }

  async getWordsByExam(exam: EXAMS): Promise<IVocabulary[]> {
    return this.vocabularyModel.find({ exams: exam });
  }

  async getRandomWordsByExam(
    exam: EXAMS,
    count: number = 1,
  ): Promise<IVocabulary[]> {
    const wordsCount: number = await this.vocabularyModel.count({
      exams: exam,
    });

    return [];
  }
}
