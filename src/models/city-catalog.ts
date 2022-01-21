import mongoose, { Schema } from 'mongoose';

import CountryCatalog from './country-catalog';

export type CityCatalogType = {
  country: string;
  name: string;
} & mongoose.Document;

const cityCatalogSchema = new mongoose.Schema({
  country: {
    ref: CountryCatalog,
    required: true,
    type: Schema.Types.ObjectId,
  },
  name: {
    required: true,
    type: String,
  },
});

const CityCatalog = mongoose.model<CityCatalogType>('City', cityCatalogSchema);

export default CityCatalog;
