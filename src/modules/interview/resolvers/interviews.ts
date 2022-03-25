import InterviewModel from '../../../models/interview';

type Args = {
  interviewer: string;
};

const getInterviews = async (_parent: any, args: Args) => {
  const { interviewer } = args;
  return InterviewModel.find({
    interviewer,
  });
};

export default getInterviews;
