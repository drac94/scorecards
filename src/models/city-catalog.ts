import mongoose, { Schema } from 'mongoose';

import Country from './country';

export type CityCatalogType = {
  country: string;
  name: string;
} & mongoose.Document;

const cityCatalogSchema = new mongoose.Schema({
  country: {
    ref: Country,
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
