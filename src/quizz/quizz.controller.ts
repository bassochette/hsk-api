import { Controller, Get, Param } from '@nestjs/common';
import { ISendableQuestion } from './question/question.interface';
import { QuizzService } from './quizz.service';
import { EXAMS } from '../vocabulary/vocabulary.interface';

@Controller('quizz')
export class QuizzController {
  constructor(private readonly quizzService: QuizzService) {}

  @Get(['question/:exam/:difficulty', 'question/:exam'])
  getQuestionByExam(
    @Param('exam') exam: EXAMS,
    @Param('difficulty') difficulty: number = 2,
  ): Promise<ISendableQuestion> {
    return this.quizzService.getRandomQuestionByExam(exam, difficulty);
  }
}
