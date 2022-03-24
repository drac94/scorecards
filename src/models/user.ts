import mongoose from 'mongoose';

export type User = {
  email: string;
  firstName: string;
  hashedPassword: string;
  lastName: string;
  roles: [string];
} & mongoose.Document;

const schema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  hashedPassword: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  roles: {
    required: true,
    type: [String],
  },
});

const UserModel = mongoose.model<User>('User', schema);

export default UserModel;
