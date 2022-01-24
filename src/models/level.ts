import mongoose from 'mongoose';

export type LevelType = {
  name: string;
} & mongoose.Document;

const levelSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Level = mongoose.model<LevelType>('Level', levelSchema);

export default Level;
