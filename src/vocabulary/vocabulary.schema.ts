import * as mongoose from 'mongoose';

export const VocabularySchema = new mongoose.Schema({
  en: String,
  numbers: String,
  accent: String,
  simplified: String,
  traditional: String,
  exams: [String],
  components: [String],
});
