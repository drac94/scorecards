import mongoose from 'mongoose';

export type TechnologyCatalogType = {
  name: string;
} & mongoose.Document;

const technologyCatalogSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const TechnologyCatalog = mongoose.model<TechnologyCatalogType>(
  'TechnologyCatalog',
  technologyCatalogSchema
);

export default TechnologyCatalog;
