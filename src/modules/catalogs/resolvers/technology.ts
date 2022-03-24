import TechnologyModel from '../../../models/technology';

const getTechnologies = async () => {
  return TechnologyModel.find({});
};

export default getTechnologies;
