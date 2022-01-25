import Level from '../../../models/level';

const getLevels = async () => {
  return Level.find({});
};

export default getLevels;
