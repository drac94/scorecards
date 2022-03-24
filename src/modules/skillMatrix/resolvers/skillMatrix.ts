import SkillMatrixModel from '../../../models/skillMatrix';

type Args = {
  levelId: string;
  stageId: string;
  technologyId: string;
};

const getSkillMatrix = async (_parent: any, args: Args) => {
  const { technologyId } = args;
  return SkillMatrixModel.findOne({
    technology: technologyId,
  });
};

export default getSkillMatrix;
