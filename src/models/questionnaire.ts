import mongoose, { Schema } from 'mongoose';

import Level from './level';
import Stage from './stage';
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
    ref: Stage,
    required: true,
    type: Schema.Types.ObjectId,
  },
  technology: {
    ref: Technology,
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const Questionnaire = mongoose.model<QuestionnaireType>('Questionnaire', questionnaireSchema);

export default Questionnaire;
