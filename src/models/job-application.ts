import mongoose, { Schema } from 'mongoose';

import Candidate from './candidate';
import Interview from './interview';
import User from './user';

export type JobApplicationType = {
  candidate: string;
  referrer?: string;
  stages: [
    {
      interview?: string;
      name: string;
      order: number;
      status: 'open' | 'failed' | 'successful';
    }
  ];
} & mongoose.Document;

const jobApplicationSchema = new mongoose.Schema({
  candidate: {
    ref: Candidate,
    required: true,
    type: Schema.Types.ObjectId,
  },
  referrer: {
    ref: User,
    type: Schema.Types.ObjectId,
  },
  stages: [
    {
      interview: {
        ref: Interview,
        type: Schema.Types.ObjectId,
      },
      name: {
        required: true,
        type: String,
      },
      order: {
        required: true,
        type: Number,
      },
      status: {
        default: 'open',
        type: String,
      },
    },
  ],
});

const JobApplication = mongoose.model<JobApplicationType>('JobApplication', jobApplicationSchema);

export default JobApplication;
