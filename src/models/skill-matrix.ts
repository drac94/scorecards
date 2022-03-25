import mongoose, { Schema } from 'mongoose';

import TechnologyModel from './technology';

export type SkillMatrix = {
  skills: [string];
  technology: string;
} & mongoose.Document;

const schema = new mongoose.Schema<SkillMatrix>({
  skills: {
    required: true,
    type: [String],
  },
  technology: {
    ref: TechnologyModel,
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const SkillMatrixModel = mongoose.model<SkillMatrix>('SkillMatrix', schema);

export default SkillMatrixModel;
