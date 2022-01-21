import mongoose from 'mongoose';

export type CountryCatalogType = {
  name: string;
} & mongoose.Document;

const countryCatalogSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const CountryCatalog = mongoose.model<CountryCatalogType>('CountryCatalog', countryCatalogSchema);

export default CountryCatalog;
