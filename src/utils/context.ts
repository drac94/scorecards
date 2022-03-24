import { Request } from 'express';

import UserModel, { User } from '../models/user';

import tokenUtil from './token';

const getUser = async (req: Request): Promise<User | null> => {
  if (!req) {
    return null;
  }

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return null;
  }

  try {
    const decodedToken = await tokenUtil.getDecodedToken(
      authorizationHeader.replace('Bearer ', '')
    );
    return await UserModel.findById(decodedToken.userId);
  } catch (error) {
    return null;
  }
};

export default getUser;
