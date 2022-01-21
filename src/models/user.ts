import mongoose from 'mongoose';

export type UserType = {
  email: string;
  firstName: string;
  hashedPassword: string;
  lastName: string;
} & mongoose.Document;

const userSchema = new mongoose.Schema({
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
});

const User = mongoose.model<UserType>('User', userSchema);

export default User;
