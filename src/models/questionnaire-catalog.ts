import mongoose from 'mongoose';

export type QuestionnaireCatalogType = {
  level: string;
  questions: [string];
  stage: string;
  technology: string;
} & mongoose.Document;

const questionnaireCatalogSchema = new mongoose.Schema({
  level: {
    required: true,
    type: String,
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
    required: true,
    type: String,
  },
});

const QuestionnaireCatalog = mongoose.model<QuestionnaireCatalogType>(
  'QuestionnaireCatalog',
  questionnaireCatalogSchema
);

export default QuestionnaireCatalog;
