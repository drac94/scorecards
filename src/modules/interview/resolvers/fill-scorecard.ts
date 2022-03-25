import InterviewModel, { Scorecard } from '../../../models/interview';

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

  return interview;
};

export default fillScorecard;
