import mongoose, { Schema } from 'mongoose';

import Level from './level';
import Technology from './technology';

export type QuestionnaireType = {
  level: string;
  questions: [string];
  stage: string;
  technology: string;
} & mongoose.Document;

const questionnaireSchema = new mongoose.Schema({
  level: {
    ref: Level,
    required: true,
    type: Schema.Types.ObjectId,
  },
  questions: {
    required: true,
    type: [String],
  },
  stage: {
    required: true,
    type: String,
  },
  technology: {
    ref: Technology,
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const Questionnaire = mongoose.model<QuestionnaireType>('Questionnaire', questionnaireSchema);

export default Questionnaire;
