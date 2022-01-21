import mongoose from 'mongoose';

export type ClientCatalogType = {
  name: string;
} & mongoose.Document;

const clientCatalogSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const ClientCatalog = mongoose.model<ClientCatalogType>('Client', clientCatalogSchema);

export default ClientCatalog;
