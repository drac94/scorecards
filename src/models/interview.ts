import { Document, Schema, model } from 'mongoose';

import CandidateModel from './candidate';
import TechnologyModel from './technology';
import UserModel from './user';

export type Scorecard = {
  feedback: string;
  skills: { feedback: string; name: string; rating: number }[];
  status: number;
};

export type Interview = {
  candidate: string;
  date: Date;
  interviewer: string;
  recruiter: string;
  scorecard?: Scorecard;
  technology: string;
} & Document;

const schema = new Schema<Interview>({
  candidate: {
    ref: CandidateModel,
    required: true,
    type: Schema.Types.ObjectId,
  },
  date: {
    required: true,
    type: Date,
  },
  interviewer: {
    ref: UserModel,
    required: true,
    type: Schema.Types.ObjectId,
  },
  recruiter: {
    ref: UserModel,
    required: true,
    type: Schema.Types.ObjectId,
  },
  scorecard: {
    required: false,
    type: {
      feedback: {
        required: true,
        type: String,
      },
      skills: {
        required: true,
        type: [
          {
            feedback: {
              required: true,
              type: String,
            },
            name: {
              required: true,
              type: String,
            },
            rating: {
              required: true,
              type: Number,
            },
          },
        ],
      },
      status: {
        required: true,
        type: Number,
      },
    },
  },
  technology: { ref: TechnologyModel, required: true, type: Schema.Types.ObjectId },
});

const InterviewModel = model<Interview>('Interview', schema);

export default InterviewModel;
