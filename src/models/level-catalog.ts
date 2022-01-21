import mongoose from 'mongoose';

export type LevelCatalogType = {
  name: string;
} & mongoose.Document;

const levelCatalogSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const LevelCatalog = mongoose.model<LevelCatalogType>('LevelCatalog', levelCatalogSchema);

export default LevelCatalog;
