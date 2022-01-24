import mongoose, { Schema } from 'mongoose';

import Country from './country';

export type CityType = {
  country: string;
  name: string;
} & mongoose.Document;

const citySchema = new mongoose.Schema({
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

const City = mongoose.model<CityType>('City', citySchema);

export default City;
