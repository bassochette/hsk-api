import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  public mongoUri: string;
  constructor() {
    dotenv.config();

    this.mongoUri = process.env.MONGO_URI || 'mongodb://localhost/hskapi';
  }
}
