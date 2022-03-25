import SkillMatrixModel from '../../../models/skill-matrix';

type Args = {
  technology: string;
};

const getSkillMatrix = async (_parent: any, args: Args) => {
  const { technology } = args;
  return SkillMatrixModel.findOne({
    technology,
  });
};

export default getSkillMatrix;
