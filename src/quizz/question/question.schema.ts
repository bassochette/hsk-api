import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  uuid: String,
  statement: String,
  tip: String,
  answers: [String],
  validAnswer: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '2h',
  },
});
