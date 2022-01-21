import CountryCatalog from '../../../../models/country-catalog';

const getCountries = async () => {
  const countries = await CountryCatalog.find();
  return countries;
};

export default { getCountries };
