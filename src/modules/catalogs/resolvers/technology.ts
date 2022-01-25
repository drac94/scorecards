import Technology from '../../../models/technology';

const getTechnologies = async () => {
  return Technology.find({});
};

export default getTechnologies;
