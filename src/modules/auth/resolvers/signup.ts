import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import User from '../../../models/user';

const SALT_ROUNDS = 12;

type Args = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: [string];
};

const signup = async (_parent: any, args: Args) => {
  const { email, password, firstName, lastName, roles } = args;
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new UserInputError('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await User.create({
    email,
    firstName,
    hashedPassword,
    lastName,
    roles,
  });

  return {
    email: user.email,
    firstName: user.firstName,
    hashedPassword: null,
    id: user.id,
    lastName: user.lastName,
    roles: user.roles,
  };
};

export default signup;
