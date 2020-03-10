import { promises as fs } from 'fs';

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IVocabulary, EXAMS } from '../vocabulary.interface';

const { HSK1, HSK2, HSK3, HSK4, HSK5, HSK6 } = EXAMS;

@Injectable()
export class VocabularyFixturesService {
  constructor(
    @InjectModel('Vocabulary')
    private readonly vocabularyModel: Model<IVocabulary>,
  ) {}

  async loadHSK(): Promise<void> {
    await this.loadHSK1();
    await this.loadHSK2();
    await this.loadHSK3();
    await this.loadHSK4();
    await this.loadHSK5();
    await this.loadHSK6();
  }

  async loadHSK1(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L1 freqorder.txt`;
    this.loadFile(filePath, [HSK1, HSK2, HSK3, HSK4, HSK5, HSK6]);
  }

  async loadHSK2(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L2 freqorder.txt`;
    this.loadFile(filePath, [HSK2, HSK3, HSK4, HSK5, HSK6]);
  }

  async loadHSK3(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L3 freqorder.txt`;
    this.loadFile(filePath, [HSK3, HSK4, HSK5, HSK6]);
  }

  async loadHSK4(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L4 freqorder.txt`;
    this.loadFile(filePath, [HSK4, HSK5, HSK6]);
  }

  async loadHSK5(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L5 freqorder.txt`;
    this.loadFile(filePath, [HSK5, HSK6]);
  }

  async loadHSK6(): Promise<void> {
    const filePath = `${__dirname}/../../../tsv2012/HSK Official With Definitions 2012 L6 freqorder.txt`;
    this.loadFile(filePath, [HSK6]);
  }

  private async loadFile(filePath: string, exams: EXAMS[]): Promise<void> {
    const content = await fs.readFile(filePath, { encoding: 'utf-8' });
    const lines = content.split('\r\n');
    for (const line of lines) {
      const [simplified, traditional, numbers, accent, en] = line.split('\t');
      const components = [...simplified.split('')];

      await this.vocabularyModel.findOneAndUpdate(
        { traditional },
        {
          simplified,
          traditional,
          numbers,
          accent,
          en,
          exams,
          components,
        },
        {
          new: true,
          upsert: true,
        },
      );
    }
  }
}
