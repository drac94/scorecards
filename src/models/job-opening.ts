import mongoose, { Schema } from 'mongoose';

import City from './city';
import Client from './client';
import JobApplication from './job-application';
import Level from './level';
import Technology from './technology';
import User from './user';

export type JobOpeningType = {
  client: string;
  created: Date;
  createdBy: string;
  jobApplications: [string];
  level: string;
  name: string;
  openings: number;
  place: string;
  technology: string;
} & mongoose.Document;

const jobOpeningSchema = new mongoose.Schema({
  client: {
    ref: Client,
    required: true,
    type: Schema.Types.ObjectId,
  },
  created: {
    default: Date.now,
    type: Date,
  },
  createdBy: {
    ref: User,
    required: true,
    type: Schema.Types.ObjectId,
  },
  jobApplications: [
    {
      ref: JobApplication,
      type: Schema.Types.ObjectId,
    },
  ],
  level: {
    ref: Level,
    required: true,
    type: Schema.Types.ObjectId,
  },
  name: {
    required: true,
    type: String,
  },
  openings: {
    required: true,
    type: Number,
  },
  place: {
    ref: City,
    required: true,
    type: Schema.Types.ObjectId,
  },
  technology: {
    ref: Technology,
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const JobOpening = mongoose.model<JobOpeningType>('JobOpening', jobOpeningSchema);

export default JobOpening;
