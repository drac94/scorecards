import CandidateModel, { Candidate } from '../../../models/candidate';
import InterviewModel from '../../../models/interview';
import TechnologyModel from '../../../models/technology';
import UserModel from '../../../models/user';

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

  const interview = await InterviewModel.create({
    candidate: newCandidate.id,
    date: new Date(date),
    interviewer,
    technology,
  });

  return {
    candidate: newCandidate,
    date: interview.date,
    id: interview.id,
    interviewer: await UserModel.findOne({ _id: interviewer }),
    technology: await TechnologyModel.findOne({ _id: technology }),
  };
};

export default createInterview;
