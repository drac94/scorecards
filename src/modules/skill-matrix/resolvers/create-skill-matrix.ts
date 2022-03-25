import SkillMatrixModel from '../../../models/skill-matrix';

type Args = {
  technology: string;
  skills: string[];
};

const createSkillMatrix = async (_parent: any, args: Args) => {
  const { skills, technology } = args;

  // TODO check if there is a way to enforce this using the schema
  if (skills.length === 0) {
    throw new Error("You can't create a skill matrix without skills");
  }

  const existingSkillMatrix = await SkillMatrixModel.findOne({
    technology,
  });

  if (existingSkillMatrix) {
    throw new Error('Skill Matrix already exists');
  }

  const skillMatrix = await SkillMatrixModel.create({
    skills,
    technology,
  });

  return skillMatrix;
};

export default createSkillMatrix;
