import mongoose from 'mongoose';

export type CandidateType = {
  firstName: string;
  lastName: string;
} & mongoose.Document;

const candidateSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
});

const Candidate = mongoose.model<CandidateType>('Candidate', candidateSchema);

export default Candidate;
