import mongoose from 'mongoose';

export type ClientType = {
  name: string;
} & mongoose.Document;

const clientSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Client = mongoose.model<ClientType>('Client', clientSchema);

export default Client;
