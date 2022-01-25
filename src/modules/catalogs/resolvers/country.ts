import Country from '../../../models/country';

const getCountries = async () => {
  return Country.find({});
};

export default getCountries;
