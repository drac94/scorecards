import { AuthenticationError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import UserModel from '../../../models/user';
import tokenUtil from '../../../utils/token';

type Args = {
  email: string;
  password: string;
};

const login = async (_parent: any, args: Args) => {
  const { email, password } = args;
  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    throw new AuthenticationError('The username or password you entered is incorrect');
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    throw new AuthenticationError('The username or password you entered is incorrect');
  }

  const token = tokenUtil.create(user.id);

  return {
    token,
    user: {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      roles: user.roles,
    },
  };
};

export default login;
