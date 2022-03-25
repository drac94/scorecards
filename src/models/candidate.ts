import mongoose from 'mongoose';

export type Candidate = {
  firstName: string;
  lastName: string;
} & mongoose.Document;

const schema = new mongoose.Schema<Candidate>({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
});

const CandidateModel = mongoose.model<Candidate>('Candidate', schema);

export default CandidateModel;
