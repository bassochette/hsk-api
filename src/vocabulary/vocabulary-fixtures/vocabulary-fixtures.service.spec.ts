import { Test, TestingModule } from '@nestjs/testing';
import { VocabularyFixturesService } from './vocabulary-fixtures.service';

describe('VocabularyFixturesService', () => {
  let service: VocabularyFixturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VocabularyFixturesService],
    }).compile();

    service = module.get<VocabularyFixturesService>(VocabularyFixturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
