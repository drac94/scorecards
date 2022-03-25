import CandidateModel from '../../../models/candidate';
import InterviewModel, { Scorecard } from '../../../models/interview';
import TechnologyModel from '../../../models/technology';
import UserModel from '../../../models/user';

type Args = {
  interviewId: string;
  scorecard: Scorecard;
};

const fillScorecard = async (_parent: any, args: Args) => {
  const { interviewId, scorecard } = args;

  const interview = await InterviewModel.findOne({ id: interviewId });

  if (!interview) throw new Error('The interview does not exists');

  interview.scorecard = scorecard;

  await interview.save();

  // TODO use populate instead
  return {
    candidate: await CandidateModel.findOne({ _id: interview.candidate }),
    date: interview.date,
    id: interview.id,
    interviewer: await UserModel.findOne({ _id: interview.interviewer }),
    scorecard: interview.scorecard,
    technology: await TechnologyModel.findOne({ _id: interview.technology }),
  };
};

export default fillScorecard;
