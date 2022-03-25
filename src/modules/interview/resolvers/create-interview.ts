import CandidateModel, { Candidate } from '../../../models/candidate';
import InterviewModel from '../../../models/interview';

type Args = {
  candidate: Candidate;
  date: Date;
  interviewer: string;
  technology: string;
};

const createInterview = async (_parent: any, args: Args) => {
  const { candidate, date, interviewer, technology } = args;

  const newCandidate = await CandidateModel.create({
    ...candidate,
  });

  const interview = await InterviewModel.create({
    candidate: newCandidate.id,
    date,
    interviewer,
    technology,
  });

  return interview;
};

export default createInterview;
