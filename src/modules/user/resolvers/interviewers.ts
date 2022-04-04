import UserModel from '../../../models/user';

const getInterviewers = async () => {
  return UserModel.find({ roles: { $in: ['interviewer'] } });
};

export default getInterviewers;
