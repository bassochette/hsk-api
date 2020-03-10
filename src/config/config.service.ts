import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  public mongoUri: string;
  public port: number;
  constructor() {
    dotenv.config();
    this.mongoUri = process.env.MONGO_URI || 'mongodb://localhost/hskapi';
    this.port = parseInt(process.env.PORT) || 5000;
  }
}
