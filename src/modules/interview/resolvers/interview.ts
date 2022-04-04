import InterviewModel from '../../../models/interview';

type Args = {
  id: string;
};

const getInterview = async (_parent: any, args: Args) => {
  const { id } = args;
  return InterviewModel.findById(id)
    .populate('candidate')
    .populate('recruiter')
    .populate('interviewer')
    .populate('technology');
};

export default getInterview;
