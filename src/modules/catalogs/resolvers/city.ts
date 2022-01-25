import City from '../../../models/city';

type Args = {
  countryId: string;
};

const getCities = async (_parent: any, args: Args) => {
  const { countryId } = args;
  const cities = await City.find({ country: countryId });
  return cities;
};

export default getCities;
