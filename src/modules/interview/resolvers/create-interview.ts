import CandidateModel, { Candidate } from '../../../models/candidate';
import InterviewModel from '../../../models/interview';

type Args = {
  candidate: Candidate;
  date: string;
  interviewer: string;
  recruiter: string;
  technology: string;
};

const createInterview = async (_parent: any, args: Args) => {
  const { candidate, date, interviewer, recruiter, technology } = args;

  const newCandidate = await CandidateModel.create({
    ...candidate,
  });

  const newInterview = await InterviewModel.create({
    candidate: newCandidate.id,
    date: new Date(date),
    interviewer,
    recruiter,
    technology,
  });

  return newInterview
    .populate('candidate')
    .populate('recruiter')
    .populate('interviewer')
    .populate('technology')
    .execPopulate();
};

export default createInterview;
