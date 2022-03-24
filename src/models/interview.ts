import { Document, Schema, model } from 'mongoose';

import UserModel, { User } from './user';

export type Interview = {
  date: Date;
  interviewer: User;
  scorecard: {
    feedback: string;
    skills: { feedback: string; name: string; rating: number }[];
  };
} & Document;

const schema = new Schema<Interview>({
  date: {
    required: true,
    type: Date,
  },
  interviewer: {
    ref: UserModel,
    required: true,
    type: Schema.Types.ObjectId,
  },
  scorecard: {
    feedback: String,
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
  },
});

const InterviewModel = model<Interview>('Interview', schema);

export default InterviewModel;
