import * as _ from 'lodash';
import { v4 as uuidV4 } from 'uuid';

import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { VocabularyService } from '../vocabulary/vocabulary.service';
import {
  IQuestion,
  ISendableQuestion,
  QuestionType,
} from './question/question.interface';
import { EXAMS } from '../vocabulary/vocabulary.interface';

@Injectable()
export class QuizzService {
  private difficultyModifier: number = 2;

  constructor(
    @InjectModel('Question') private readonly questionModel: Model<IQuestion>,
    private readonly vocabularyService: VocabularyService,
  ) {}

  public async isValidAnswer(
    questionId: string,
    answer: string,
  ): Promise<boolean> {
    const question: IQuestion = await this.questionModel.findOne({
      uuid: questionId,
    });
    if (!question) throw new NotFoundException();
    return question.validAnswer === answer;
  }

  public async getRandomQuestionByExam(
    exam: EXAMS,
    difficulty: number = 1,
  ): Promise<ISendableQuestion> {
    const words = await this.vocabularyService.getRandomWordsByExam(
      exam,
      difficulty * this.difficultyModifier,
    );
    const valid = _.sample(words);

    const question = await this.questionModel.create({
      uuid: uuidV4(),
      statement: valid.simplified,
      tip: valid.numbers,
      answers: _.shuffle(words.map(w => w.en)),
      validAnswer: valid.en,
      type: QuestionType.SIMPLIFIED_TO_EN,
    });

    return {
      uuid: question.uuid,
      statement: question.statement,
      tip: question.tip,
      answers: question.answers,
    };
  }
}
