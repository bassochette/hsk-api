import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  uuid: String,
  statement: String,
  answers: [String],
  validAnswer: String,
});
