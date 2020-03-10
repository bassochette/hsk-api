export enum EXAMS {
  HSK1 = 'hsk1',
  HSK2 = 'hsk2',
  HSK3 = 'hsk3',
  HSK4 = 'hsk4',
  HSK5 = 'hsk5',
  HSK6 = 'hsk6',
}

export interface IVocabulary {
  en: string;
  numbers: string;
  accent: string;
  simplified: string;
  traditional: string;
  components: string[];
  exams: EXAMS[];
  related?: IVocabulary[];
}
