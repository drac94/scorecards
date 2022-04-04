import UserModel from '../../../models/user';

const getRecruiters = async () => {
  return UserModel.find({ roles: { $in: ['recruiter'] } });
};

export default getRecruiters;
