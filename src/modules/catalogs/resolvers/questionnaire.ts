import Questionnaire from '../../../models/questionnaire';

type Args = {
  levelId: string;
  stageId: string;
  technologyId: string;
};

const getQuestionnaire = async (_parent: any, args: Args) => {
  const { levelId, stageId, technologyId } = args;
  return Questionnaire.findOne({
    level: levelId,
    stage: stageId,
    technology: technologyId,
  });
};

export default getQuestionnaire;
