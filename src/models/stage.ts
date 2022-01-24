import mongoose from 'mongoose';

export type StageType = {
  name: string;
  order: number;
} & mongoose.Document;

const stageSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  order: {
    required: true,
    type: Number,
  },
});

const Stage = mongoose.model<StageType>('Stage', stageSchema);

export default Stage;
