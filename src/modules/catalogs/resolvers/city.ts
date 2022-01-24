import City, { CityType } from '../../../models/city';

type Args = {
  countryId: string;
};

const getCities = async (_parent: any, args: Args): Promise<CityType[]> => {
  const { countryId } = args;
  const cities = await City.find({ country: countryId });
  return cities;
};

export default getCities;
