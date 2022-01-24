import Technology from '../../../models/technology';

const getTechnologies = async () => {
  const techs = await Technology.find({});
  return techs;
};

export default getTechnologies;
