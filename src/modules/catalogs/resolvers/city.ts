import City from '../../../models/city';

type Args = {
  countryId: string;
};

const getCities = async (_parent: any, args: Args) => {
  const { countryId } = args;
  return City.find({ country: countryId });
};

export default getCities;
