import TechnologyModel from '../../../models/technology';

type Args = {
  name: string;
};

const createTechnology = async (_parent: any, args: Args) => {
  const { name } = args;
  const existingTechnology = await TechnologyModel.findOne({
    name,
  });

  if (existingTechnology) {
    throw new Error('Technology already exists');
  }

  const tech = await TechnologyModel.create({
    name,
  });

  return tech;
};

export default createTechnology;
