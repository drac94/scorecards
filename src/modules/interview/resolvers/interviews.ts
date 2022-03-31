import InterviewModel from '../../../models/interview';
import { User } from '../../../models/user';

type Context = {
  user: User;
};

const getInterviews = async (_parent: any, _args: any, context: Context) => {
  const { user } = context;
  return InterviewModel.find({
    interviewer: user.id,
  })
    .populate('interviewer')
    .populate('candidate')
    .populate('technology');
};

export default getInterviews;
