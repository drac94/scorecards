import Country from '../../../models/country';

const getCountries = async () => {
  const countries = await Country.find({});
  return countries;
};

export default getCountries;
