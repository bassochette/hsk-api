export interface IQuestion {
  uuid: string;
  statement: string;
  answers: string[];
  validAnswer: string[];
  type: QuestionType;
}

export interface ISendableQuestion {
  uuid: string;
  statement: string;
  answers: string[];
}

export interface IAnswer {
  uuid: string;
  answer: string;
}

export enum QuestionType {
  SIMPLIFIED_TO_EN = 'simplified_to_en',
  SIMPLIFIED_TO_PINYIN = 'simplified_to_pinyin',
  EN_TO_PINYIN = 'en_to_pintyin',
  EN_TO_SIMPLIFIED = 'en_to_simplified',
}
