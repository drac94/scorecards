import mongoose from 'mongoose';

export type CountryType = {
  name: string;
} & mongoose.Document;

const countrySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Country = mongoose.model<CountryType>('Country', countrySchema);

export default Country;
