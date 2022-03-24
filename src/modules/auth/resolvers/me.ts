import { User } from '../../../models/user';

type Context = {
  user: User;
};

const me = async (_parent: any, _args: any, context: Context) => {
  const { user } = context;
  return {
    email: user.email,
    firstName: user.firstName,
    id: user.id,
    lastName: user.lastName,
    roles: user.roles,
  };
};

export default me;
