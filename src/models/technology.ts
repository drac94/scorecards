import mongoose from 'mongoose';

export type TechnologyType = {
  name: string;
} & mongoose.Document;

const technologySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Technology = mongoose.model<TechnologyType>('Technology', technologySchema);

export default Technology;
