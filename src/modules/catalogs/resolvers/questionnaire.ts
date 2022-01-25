import Questionnaire from '../../../models/questionnaire';

type Args = {
  levelId: string;
  stageId: string;
  technologyId: string;
};

const getQuestionnaire = async (_parent: any, args: Args) => {
  const { levelId, stageId, technologyId } = args;
  const questionnaire = await Questionnaire.findOne({
    level: levelId,
    stage: stageId,
    technology: technologyId,
  });
  return questionnaire;
};

export default getQuestionnaire;
