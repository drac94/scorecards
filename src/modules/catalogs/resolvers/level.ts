import Level from '../../../models/level';

const getLevels = async () => {
  const levels = await Level.find({});
  return levels;
};

export default getLevels;
