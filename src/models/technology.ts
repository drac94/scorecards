import mongoose from 'mongoose';

export type Technology = {
  name: string;
} & mongoose.Document;

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const TechnologyModel = mongoose.model<Technology>('Technology', schema);

export default TechnologyModel;
