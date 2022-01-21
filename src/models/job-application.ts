import mongoose, { Schema } from 'mongoose';

import Candidate from './candidate';
import CityCatalog from './city-catalog';
import ClientCatalog from './client-catalog';
import LevelCatalog from './level-catalog';
import TechnologyCatalog from './technology-catalog';
import User from './user';

export type JobApplicationType = {
  candidates: [
    {
      candidate: string;
      referrer?: string;
      stages: [
        {
          interview?: {
            date: Date;
            interviewer: string;
            scorecard: {
              feedback?: string;
              questions: [
                {
                  text: string;
                  rating?: number;
                }
              ];
            };
            name: string;
            order: number;
            status: 'open' | 'failed' | 'successful';
          };
        }
      ];
    }
  ];
  client: string;
  created: Date;
  createdBy: string;
  level: string;
  name: string;
  openings: number;
  place: {
    country: string;
    city: string;
  };
  technology: string;
} & mongoose.Document;

const jobApplicationSchema = new mongoose.Schema({
  candidates: [
    {
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
    },
  ],
  client: {
    ref: ClientCatalog,
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
  level: {
    ref: LevelCatalog,
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
    ref: CityCatalog,
    required: true,
    type: Schema.Types.ObjectId,
  },
  technology: {
    ref: TechnologyCatalog,
    required: true,
    type: Schema.Types.ObjectId,
  },
});

const JobApplication = mongoose.model<JobApplicationType>('JobApplication', jobApplicationSchema);

export default JobApplication;
