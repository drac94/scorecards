import CandidateModel, { Candidate } from '../../../models/candidate';
import InterviewModel from '../../../models/interview';

type Args = {
  candidate: Candidate;
  date: string;
  interviewer: string;
  technology: string;
};

const createInterview = async (_parent: any, args: Args) => {
  const { candidate, date, interviewer, technology } = args;

  const newCandidate = await CandidateModel.create({
    ...candidate,
  });

  const newInterview = await InterviewModel.create({
    candidate: newCandidate.id,
    date: new Date(date),
    interviewer,
    technology,
  });

  return newInterview
    .populate('candidate')
    .populate('interviewer')
    .populate('technology')
    .execPopulate();
};

export default createInterview;
