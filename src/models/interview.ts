import mongoose, { Schema } from 'mongoose';

import User from './user';

export type InterviewType = {
  name: string;
} & mongoose.Document;

const interviewSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  interviewer: {
    ref: User,
    required: true,
    type: Schema.Types.ObjectId,
  },
  scorecard: {
    feedback: String,
    questions: {
      required: true,
      type: [
        {
          rating: {
            type: Number,
          },
          text: {
            required: true,
            type: String,
          },
        },
      ],
    },
  },
});

const Interview = mongoose.model<InterviewType>('Interview', interviewSchema);

export default Interview;
